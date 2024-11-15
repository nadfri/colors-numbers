import './PwaBtn.scss';
import { useEffect, useRef, useState } from 'react';
import { traduction } from '../../utils/traduction';
import { useLang } from '../../Context/LangContext';

const DURATION = 5000;

export default function PwaBtn() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  const promptRef = useRef<BeforeInstallPromptEvent | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | undefined>();

  const { lang } = useLang();

  const text: string = traduction[lang as keyof object];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      const beforeInstallPromptEvent = event as BeforeInstallPromptEvent;
      beforeInstallPromptEvent.preventDefault();
      promptRef.current = beforeInstallPromptEvent;

      setIsVisible(true);
      timeoutId.current = setTimeout(() => setIsVisible(false), DURATION);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const handleInstall = () => {
    promptRef.current?.prompt();
  };

  if (isIOS) return null;

  return (
    <button className={isVisible ? 'PwaBtn slide' : 'PwaBtn'} onClick={handleInstall}>
      {text}
    </button>
  );
}
