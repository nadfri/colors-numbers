import { useState, useEffect, useContext } from "react";
import "./PwaBtn.scss";
import { installationTXT } from "../../utils/traduction";
import { LangContext } from "../../utils/LangContext";

export default function PwaBtn() {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<any | null>(null);

  const { lang } = useContext(LangContext);

  const text:string = installationTXT[lang as keyof object];

  useEffect(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      console.log("PWA:Installation Possible...");
      setTimeout(() => {
        setSupportsPWA(true);
        setPromptInstall(event);
      }, 300);

      setTimeout(() => setSupportsPWA(false), 7000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const click = () => promptInstall.prompt();

  return (
    <div className={supportsPWA ? "PwaBtn slide" : "PwaBtn"} onClick={click}>
      {text}
    </div>
  );
}
