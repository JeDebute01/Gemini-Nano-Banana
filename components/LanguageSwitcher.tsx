import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../i18n';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguageCode = i18n.language.split('-')[0];
  const currentLanguage = languages[currentLanguageCode as keyof typeof languages] || languages.en;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-base-200 hover:bg-base-300 rounded-md transition-colors"
        aria-label="Change language"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{currentLanguage.nativeName}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-40 bg-base-300 rounded-md shadow-lg z-10 ring-1 ring-black ring-opacity-5"
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="py-1">
            {Object.entries(languages).map(([lng, { nativeName, flag }]) => (
              <li key={lng}>
                <button
                  onClick={() => changeLanguage(lng)}
                  className="w-full text-left px-4 py-2 text-sm text-content-100 hover:bg-brand-primary hover:text-white flex items-center gap-3"
                >
                  <span className="text-xl">{flag}</span>
                  <span>{nativeName}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;