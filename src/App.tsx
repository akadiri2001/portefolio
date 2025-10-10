import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div>
      <Navbar />
      <Navbar />
      <div className="pt-20">
        <Home />
      </div>
      <About/>
      <Experience/>
    </div >
  );
}