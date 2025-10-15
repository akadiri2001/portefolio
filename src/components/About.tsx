import { useTranslation } from "react-i18next";
import img from "../assets/anas2.png";
import Title from "./Title"

const About = () => {
    const { t } = useTranslation();

    return (
        <div id="about" className="bg-base-300 pb-10">
            <Title title={t("about")} />
            <div className="flex flex-col md:flex-row justify-center items-center px-4 md:gap-x-8 lg:gap-x-10 max-w-6xl mx-auto">
                {/* Bloc texte */}
                <div className="flex flex-col max-w-2xl lg:max-w-xl">
                    <p className="my-4 text-base md:text-sm lg:text-base text-center md:text-left whitespace-pre-line leading-relaxed">
                        {t("aboutText")}
                    </p>
                </div>

                {/* Bloc photo */}
                <div className="mb-6 md:mb-0 min-w-[180px] md:min-w-[200px] lg:min-w-[240px]">
                    <img
                        src={img}
                        alt="Portrait"
                        className="w-full max-w-[384px] md:max-w-[280px] lg:max-w-[320px] object-cover border-6 border-transparent shadow-xl"
                        style={{
                            borderRadius: "12px",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;