import { useTranslation } from "react-i18next";
import Title from "./Title";

// Liste des identifiants d'expériences
const experiences = ["exp1", "exp2", "exp3", "exp4", "exp5", "exp6", "exp7", "exp8", "exp9", "exp10"];

export default function Experience() {
  const { t } = useTranslation();

  // Inverser l'ordre pour afficher du plus récent au plus ancien
  const sortedExperiences = [...experiences].reverse();

  return (
    <div id="experience">
      <Title title={t("experience")} />

      <div className="max-w-6xl mx-auto px-4 p-5 pb-10">
        <div className="relative" style={{ minHeight: '100vh' }}>
          {/* Ligne de la timeline pour desktop avec flèche */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block" style={{ zIndex: 1, top: 0, height: '100%' }}>
            <div className="w-1 h-full bg-secondary"></div>
            {/* Flèche vers le haut */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-secondary"></div>
            </div>
          </div>

          {/* Ligne droite pour mobile avec flèche */}
          <div className="absolute left-8 md:hidden" style={{ zIndex: 1, top: 0, height: '100%' }}>
            <div className="w-1 h-full bg-secondary"></div>
            {/* Flèche vers le haut */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-secondary"></div>
            </div>
          </div>

          <div className="space-y-12 md:space-y-24">
            {sortedExperiences.map((expId, index) => {
              // Extraire le numéro de l'ID (exp1 -> 1)
              const companyNumber = expId.replace('exp', '');
              const logoPath = `companies/${companyNumber}.png`;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row`}
                >
                  {/* Point sur la timeline */}
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-primary rounded-full border-4 border-base-100 z-10 -translate-x-1/2 shadow-lg"></div>

                  {/* Espace pour centrer */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Carte d'expérience */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-16`}>
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <div className="card-body">
                        {/* Logo de l'entreprise */}
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                            <img
                              src={logoPath}
                              alt={`${t(`${expId}Company`)} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="badge badge-primary badge-outline mb-2">{t(`${expId}Date`)}</div>
                            {companyNumber === "6" ? (
                              <h2 className="card-title text-primary flex items-center gap-2">
                                <a href="https://github.com/akadiri2001/Analyse-performances-academiques" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                                  {t(`${expId}Titre`)}
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
                                  </svg>
                                </a>
                              </h2>
                            ) : (
                              <h2 className="card-title text-primary">{t(`${expId}Titre`)}</h2>
                            )}
                            <h3 className="font-semibold text-lg text-justify">{t(`${expId}Company`)}</h3>
                          </div>
                        </div>

                        <p className="text-sm text-base-content opacity-70 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {t(`${expId}Lieu`)}
                        </p>
                        <p className="mt-4 whitespace-pre-line text-justify max-w-prose mx-auto">{t(`${expId}Description`)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}