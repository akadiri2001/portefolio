import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ThemeLangToggle = () => {
  const [theme, setTheme] = useState("night");
  const { i18n } = useTranslation();

  // Appliquer le thème à chaque changement
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Appliquer la direction RTL si arabe
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "night" ? "winter" : "night"));
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Toggle thème */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="toggle toggle-sm"
          onChange={toggleTheme}
          checked={theme === "winter"}
        />
      </label>

      {/* Sélecteur de langue */}
      <div className="flex gap-2">
        <button
          className={`btn btn-xs ${i18n.language === "fr" ? "btn-primary" : "btn-outline"}`}
          onClick={() => changeLanguage("fr")}
        >
          🇫🇷 FR
        </button>
        <button
          className={`btn btn-xs ${i18n.language === "en" ? "btn-primary" : "btn-outline"}`}
          onClick={() => changeLanguage("en")}
        >
          🇬🇧 EN
        </button>
        <button
          className={`btn btn-xs ${i18n.language === "ar" ? "btn-primary" : "btn-outline"}`}
          onClick={() => changeLanguage("ar")}
        >
          🇸🇦 AR
        </button>
      </div>
    </div>
  );
};

export default ThemeLangToggle;