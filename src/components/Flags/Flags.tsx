import "./Flags.scss";
import { useContext, useEffect } from "react";
import { LangContext } from "../../utils/LangContext";

export default function Flags() {
  const { lang, setLang } = useContext(LangContext);

  useEffect(() => {
    const imgs = document.querySelectorAll("img");

    imgs.forEach((img) => {
      if (img.alt !== lang) img.classList.add("grayscale");
      else img.classList.remove("grayscale");
    });
  }, [lang]);

  return (
    <div className="Flags">
      <img src="/img/fr.svg" alt="fr" onClick={() => setLang("fr")} />
      <img src="/img/en.svg" alt="en" onClick={() => setLang("en")} />
      <img src="/img/ar.svg" alt="ar" onClick={() => setLang("ar")} />
    </div>
  );
}
