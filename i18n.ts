import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

export const languages = {
  en: { nativeName: 'English', flag: '🇺🇸' },
  fr: { nativeName: 'Français', flag: '🇫🇷' },
  es: { nativeName: 'Español', flag: '🇪🇸' },
  de: { nativeName: 'Deutsch', flag: '🇩🇪' },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: Object.keys(languages),
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;