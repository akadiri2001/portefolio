import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Skills from "./components/Skills";
import Journal from "./components/Journal";


export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  useEffect(() => {
    // Supprime le fragment d'URL (ex: #about) au chargement
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);



  return (
    <div className="pb-10">
      <Navbar />
      <Navbar />
      <div className="pt-20">
        <Home />
      </div>
      <About />
      <Experience />
      <Skills/>
      <Journal/>
    </div >
  );
}