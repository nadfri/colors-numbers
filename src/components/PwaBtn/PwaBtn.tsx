import './PwaBtn.scss';
import { useState, useEffect } from 'react';
import { traduction } from '../../utils/traduction';
import { useLang } from '../../Context/LangContext';

export default function PwaBtn() {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<any | null>(null);

  const { lang } = useLang();

  const text: string = traduction[lang as keyof object];

  useEffect(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      console.log('PWA:Installation Possible...');
      setTimeout(() => {
        setSupportsPWA(true);
        setPromptInstall(event);
      }, 300);

      setTimeout(() => setSupportsPWA(false), 5000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const click = () => promptInstall.prompt();

  return (
    <div className={supportsPWA ? 'PwaBtn slide' : 'PwaBtn'} onClick={click}>
      {text}
    </div>
  );
}
