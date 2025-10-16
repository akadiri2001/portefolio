import { useTranslation } from "react-i18next";
import Title from "./Title";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="bg-base-300 pb-10">
      <Title title={t("about")} />
      <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-12 w-full">
        <div className="flex flex-col w-full items-center">
          <p className="my-4 text-base md:text-sm lg:text-base text-justify whitespace-pre-line leading-relaxed max-w-4xl">
            {t("aboutText")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;