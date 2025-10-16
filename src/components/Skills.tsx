import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Title from "./Title";

const Skills = () => {
    const { t } = useTranslation();
    const [selectedDomain, setSelectedDomain] = useState("all");
    const [visibleCount, setVisibleCount] = useState(6);
    const [showCollapseButton, setShowCollapseButton] = useState(false);

    // Récupérer les compétences depuis le fichier de traduction
    const skillsData = t("skills", { returnObjects: true }) as Array<{
        titre: string;
        domaine: string;
        niveau: number;
    }>;

    // Filtrer les compétences selon le domaine sélectionné
    const domains = ["all", ...new Set(skillsData.map(skill => skill.domaine))];
    const filteredSkills = selectedDomain === "all"
        ? skillsData
        : skillsData.filter(skill => skill.domaine === selectedDomain);

    // Afficher le bouton replier dès qu'on a plus de 6 cartes visibles
    useEffect(() => {
        setShowCollapseButton(visibleCount > 6);
    }, [visibleCount]);

    // Réinitialiser à 6 quand on change de filtre
    useEffect(() => {
        setVisibleCount(6);
    }, [selectedDomain]);

    const handleDomainChange = (domain: string) => {
        setSelectedDomain(domain);
    };

    const handleCollapse = () => {
        setVisibleCount(6);
        // Scroll vers la section skills
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleViewAll = () => {
        setVisibleCount(filteredSkills.length);
    };

    // Compétences visibles selon le nombre actuel
    const visibleSkills = filteredSkills.slice(0, visibleCount);
    const hasMore = visibleCount < filteredSkills.length;

    // Fonction pour obtenir la couleur de la jauge selon le niveau avec les couleurs DaisyUI
    const getProgressColor = (niveau: number) => {
        if (niveau >= 90) return "bg-secondary";
        if (niveau >= 80) return "bg-success";
        if (niveau >= 70) return "bg-primary";
        if (niveau >= 60) return "bg-info";
        if (niveau >= 50) return "bg-accent";
        if (niveau >= 40) return "bg-warning";
        return "bg-error";
    };

    return (
        <div id="skills" className="bg-base-300 pb-10">
            <Title title={t("skill")} />

            <div className="flex flex-col justify-center items-center px-4">
                {/* Barre de filtres */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {domains.map((domain) => (
                        <button
                            key={domain}
                            onClick={() => handleDomainChange(domain)}
                            className={`btn btn-sm md:btn-md ${selectedDomain === domain
                                ? "btn-primary"
                                : "btn-outline btn-primary"
                                }`}
                        >
                            {domain === "all" ? t("allDomains") : domain}
                        </button>
                    ))}
                </div>

                {/* Grille des compétences - responsive avec auto-fit */}
                <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                    {visibleSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-base-100 p-6 rounded-lg shadow-lg flex flex-col"
                        >
                            <div className="flex justify-between items-start gap-4 mb-4">
                                <h3 className="text-lg font-semibold flex-1">{skill.titre}</h3>
                                <span className="badge badge-primary badge-outline whitespace-nowrap flex-shrink-0">
                                    {skill.domaine}
                                </span>
                            </div>

                            {/* Jauge de progression */}
                            <div className="flex items-center gap-3">
                                <div className="flex-1">
                                    <div className="w-full bg-base-300 rounded-full h-4 overflow-hidden">
                                        <div
                                            className={`h-full ${getProgressColor(skill.niveau)} transition-all duration-500 rounded-full`}
                                            style={{ width: `${skill.niveau}%` }}
                                        />
                                    </div>
                                </div>
                                <span className="text-sm font-medium min-w-[3rem] text-right">
                                    {skill.niveau}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bouton "Voir tout" - affiché si plus de compétences disponibles */}
                {hasMore && (
                    <button
                        onClick={handleViewAll}
                        className="btn btn-primary mt-8"
                    >
                        {t("viewAll")} ({filteredSkills.length})
                    </button>
                )}
                
                {/* Message si aucune compétence */}
                {filteredSkills.length === 0 && (
                    <p className="text-center text-base-content/70 mt-8">
                        {t("noSkillsFound")}
                    </p>
                )}
            </div>

            {/* Bouton flottant "Replier" - apparaît dès qu'on a plus de 6 cartes */}
            {showCollapseButton && (
                <button
                    onClick={handleCollapse}
                    className="fixed bottom-8 right-8 btn btn-circle btn-primary shadow-lg z-50"
                    aria-label={t("collapse")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Skills;