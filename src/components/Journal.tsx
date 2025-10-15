import { useState } from 'react';
import { useTranslation } from "react-i18next";
import Title from "./Title";

// Liste des identifiants d'actions avec leur domaine
const actions = [
  { id: "action1", domaine: "recherche" },
  { id: "action2", domaine: "enseignement" },
  { id: "action3", domaine: "recherche" },
  { id: "action4", domaine: "projet" },
  { id: "action5", domaine: "enseignement" },
];

// Liste des domaines uniques
const domaines = Array.from(new Set(actions.map(a => a.domaine)));

export default function Journal() {
  const { t } = useTranslation();
  const [filtreActif, setFiltreActif] = useState<string | null>(null);

  // Filtrer les actions selon le domaine sélectionné
  const actionsFiltrees = filtreActif 
    ? actions.filter(action => action.domaine === filtreActif)
    : actions;

  return (
    <div id="journal">
      <Title title={t("journal")} />
      
      <div className="flex flex-col justify-center items-center">
        {/* Barre de filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFiltreActif(null)}
            className={`btn btn-sm md:btn-md ${
              !filtreActif ? 'btn-primary' : 'bg-base-300 hover:bg-base-300/80'
            }`}
          >
            {t("allDomains")}
          </button>
          {domaines.map((domaine) => (
            <button
              key={domaine}
              onClick={() => setFiltreActif(domaine)}
              className={`btn btn-sm md:btn-md ${
                filtreActif === domaine ? 'btn-primary' : 'bg-base-300 hover:bg-base-300/80'
              }`}
            >
              {t(`domaine.${domaine}`)}
            </button>
          ))}
        </div>

        {/* Grille des actions */}
        <div className="w-full max-w-7xl mx-auto space-y-6">
          {actionsFiltrees.map((action, index) => (
            <div key={index} className="card bg-base-300 shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full">
              <div className="card-body">
                <div className="flex gap-2 mb-2 flex-wrap">
                  <div className="badge badge-secondary badge-outline">
                    {t(`${action.id}Date`)}
                  </div>
                  <div className="badge badge-primary">
                    {t(`domaine.${action.domaine}`)}
                  </div>
                </div>
                <h2 className="card-title text-primary">{t(`${action.id}Titre`)}</h2>
                <p className="text-sm text-base-content opacity-70 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t(`${action.id}Lieu`)}
                </p>
                <p className="mt-4 whitespace-pre-line">{t(`${action.id}Description`)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucune action */}
        {actionsFiltrees.length === 0 && (
          <p className="text-center text-base-content/70 mt-8">
            {t("noActionsFound")}
          </p>
        )}
      </div>
    </div>
  );
}