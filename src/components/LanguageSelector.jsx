// src/components/LanguageSelector.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lang-icons">
      <button onClick={() => changeLanguage('uz')} className="lang" aria-label="Switch to Uzbek">UZ</button>
      <button onClick={() => changeLanguage('en')} className="lang" aria-label="Switch to English">ENG</button>
      <button onClick={() => changeLanguage('ru')} className="lang" aria-label="Switch to Russian">RU</button>
    </div>
  );
};

export default LanguageSelector;
