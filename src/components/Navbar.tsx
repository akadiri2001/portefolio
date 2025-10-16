import { BookLock } from "lucide-react";
import ThemeLangToggle from "./ThemeLangToggle.tsx";
import { useTranslation } from "react-i18next";


const Navbar = () => {
    const { t } = useTranslation();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 60; // Hauteur de la navbar + marge
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-base-100 px-4 py-2 flex items-center justify-between">
            {/* Logo à gauche */}
            <div className="flex-none">
                <a href="#" className="flex items-center font-bold text-3xl md:text-2xl" dir="ltr">
                    <BookLock className="mr-2" />
                    <span className="text-primary">A</span>NAS
                </a>
            </div>

            {/* Menu centré */}
            <div className="flex-1 hidden md:flex justify-center">
                <ul className="menu menu-horizontal">
                    <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn btn-sm btn-primary mx-1 my-1">{t("home")}</button></li>
                    <li><button onClick={() => scrollToSection('about')} className="btn btn-sm btn-primary mx-1 my-1">{t("about")}</button></li>
                    <li><button onClick={() => scrollToSection('experience')} className="btn btn-sm btn-primary mx-1 my-1">{t("experience")}</button></li>
                    <li><button onClick={() => scrollToSection('skills')} className="btn btn-sm btn-primary mx-1 my-1">{t("skill")}</button></li>
                    <li><button className="btn btn-sm btn-primary mx-1 my-1">{t("journal_technique")}</button></li>
                </ul>
            </div>

            {/* Bouton thème + langues à droite */}
            <div className="flex-none">
                <ThemeLangToggle />
            </div>
        </div>
    );
};

export default Navbar;