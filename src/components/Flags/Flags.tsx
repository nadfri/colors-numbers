import './Flags.scss';
import { useContext, useEffect } from 'react';
import { LangContext } from '../../Context/LangContext';

export default function Flags() {
  const { lang, setLang } = useContext(LangContext);

  useEffect(() => {
    const imgs = document.querySelectorAll('img');

    imgs.forEach((img) => {
      if (img.alt !== lang) img.classList.add('opacity');
      else img.classList.remove('opacity');
    });
  }, [lang]);

  const handleLang = (lang: string) => {
    setLang(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <div className='Flags'>
      <img src='/img/fr.svg' alt='fr' onClick={() => handleLang('fr')} />
      <img src='/img/en.svg' alt='en' onClick={() => handleLang('en')} />
      <img src='/img/ar.svg' alt='ar' onClick={() => handleLang('ar')} />
      <img src='/img/it.svg' alt='it' onClick={() => handleLang('it')} />
      <img src='/img/jp.svg' alt='jp' onClick={() => handleLang('jp')} />
    </div>
  );
}
