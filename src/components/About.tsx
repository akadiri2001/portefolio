import { useTranslation } from "react-i18next";
import img from "../assets/anas2.png";
import Title from "./Title"

const About = () => {
    const { t } = useTranslation();

    return (
        <div id="about" className="bg-base-300 p-10 mb-10 md:mb-32">
            <Title title={t("about")} />
            <div className="flex flex-col md:flex-row justify-center items-center md:my-32 my-10 px-4 md:gap-x-12">
                {/* Bloc texte */}
                <div className="flex flex-col max-w-3xl">

                    <p className="my-4 text-md text-center md:text-left whitespace-pre-line">
                        {t("aboutText")}
                    </p>


                </div>

                {/* Bloc photo */}
                <div className="mb-6 md:mb-0">
                    <img
                        src={img}
                        alt="Portrait"
                        className="w-96 md:w-96 object-cover border-6 border-transparent shadow-xl"
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