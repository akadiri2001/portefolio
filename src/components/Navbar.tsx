import { BookLock } from "lucide-react";
import ThemeLangToggle from "./ThemeLangToggle.tsx";
import { useTranslation } from "react-i18next";


const Navbar = () => {
    const { t } = useTranslation();

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
                    <li><a href="#" className="btn btn-sm btn-primary mx-1 my-1">{t("home")}</a></li>
                    <li><a href="#about" className="btn btn-sm btn-primary mx-1 my-1">{t("about")}</a></li>
                    <li><a href="#experience" className="btn btn-sm btn-primary mx-1 my-1">{t("experience")}</a></li>
                    <li><a href="#skills" className="btn btn-sm btn-primary mx-1 my-1">{t("skill")}</a></li>
                    <li><a className="btn btn-sm btn-primary mx-1 my-1">{t("journal_technique")}</a></li>
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