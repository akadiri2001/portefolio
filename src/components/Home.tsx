import { Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import img from "../assets/anas.png";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:my-16 my-10 px-4 md:gap-x-12">
            {/* Bloc image */}
            <div className="mb-6 md:mb-0">
                <img
                    src={img}
                    alt="Portrait"
                    className="w-96 md:w-96 object-cover border-8 border-primary shadow-xl"
                    style={{
                        borderRadius: "28% 72% 76% 24% / 24% 41% 59% 76%",
                    }}
                />
            </div>

            {/* Bloc texte */}
            <div className="flex flex-col max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold text-center mt-4 md:mt-0">
                    {t("intro_presentation")} <br/> {t("suis")} <span className="text-3xl md:text-4xl text-primary">{t("prenom_nom")}</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left whitespace-pre-line">
                    {t("presentation")}
                </p>

                <a href="mailto:anaskadiri@live.fr" className="btn btn-active btn-primary md:w-fit self-center">
                    <Send className="w-5 h-5 mr-2" />
                    {t("contacter_moi")}
                </a>
            </div>
        </div>
    );
};

export default Home;