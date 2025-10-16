import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="py-8">
        <div className="absolute top-4 right-4 z-20">
            <LanguageSwitcher />
        </div>
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-2 tracking-tight">
            {t('header.title')}
            </h1>
            <p className="text-lg text-content-200">
            {t('header.subtitle')}
            </p>
        </div>
    </header>
  );
};

export default Header;