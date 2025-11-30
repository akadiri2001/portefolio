import { useState } from 'react';
import { useTranslation } from "react-i18next";
import Title from "./Title";

// Liste des identifiants d'actions
const actions = ["action1", "action2", "action3", "action4", "action5","action6","action7","action8","action9","action10", "action11", "action12", "action13", "action14", "action15","action16","action17","action18","action19","action20"
];

export default function Journal() {
  const { t } = useTranslation();
  const [filtreActif, setFiltreActif] = useState<string | null>(null);

  // Extraire les catégories uniques depuis les traductions
  const categories = Array.from(
    new Set(actions.map(actionId => t(`${actionId}Categorie`)))
  );

  // Filtrer les actions selon la catégorie sélectionnée
  const actionsFiltrees = filtreActif
    ? actions.filter(actionId => t(`${actionId}Categorie`) === filtreActif)
    : actions;

  // Inverser l'ordre pour afficher du plus récent au plus ancien
  const sortedActions = [...actionsFiltrees].reverse();

  return (
    <div id="journal">
      <Title title={t("journal_technique")} />

      <div className="flex flex-col justify-center items-center">
        {/* Barre de filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFiltreActif(null)}
            className={`btn btn-sm md:btn-md ${!filtreActif ? 'btn-primary' : 'bg-base-300 hover:bg-base-300/80'}`}
          >
            Tous
          </button>
          {categories.map((categorie) => (
            <button
              key={categorie}
              onClick={() => setFiltreActif(categorie)}
              className={`btn btn-sm md:btn-md ${filtreActif === categorie ? 'btn-primary' : 'bg-base-300 hover:bg-base-300/80'}`}
            >
              {categorie}
            </button>
          ))}
        </div>

        {/* Grille des actions */}
        <div className="w-full max-w-7xl mx-auto space-y-6 px-4">
          {sortedActions.map((actionId, index) => (
            <div key={index} className="card bg-base-300 shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full">
              <div className="card-body p-4 md:p-6">
                <div className="flex gap-2 mb-2 flex-wrap">
                  <div className="badge badge-secondary badge-outline">
                    {t(`${actionId}Date`)}
                  </div>
                  <div className="badge badge-primary">
                    {t(`${actionId}Categorie`)}
                  </div>
                </div>
                <h2 className="card-title text-primary text-lg md:text-xl">{t(`${actionId}Titre`)}</h2>
                <p className="text-sm text-base-content opacity-70 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t(`${actionId}Lieu`)}
                </p>
                <p className="mt-4 whitespace-pre-line text-sm md:text-base">{t(`${actionId}Description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}