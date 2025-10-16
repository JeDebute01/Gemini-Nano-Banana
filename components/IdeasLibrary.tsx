import React from 'react';
import { useTranslation } from 'react-i18next';
import { IDEAS } from '../constants';
import { Idea } from '../types';
import Card from './Card';
import LightbulbIcon from './icons/LightbulbIcon';
import DiceIcon from './icons/DiceIcon';

interface IdeasLibraryProps {
  onSelectIdea: (idea: Idea) => void;
  onSelectRandom: () => void;
}

const IdeasLibrary: React.FC<IdeasLibraryProps> = ({ onSelectIdea, onSelectRandom }) => {
  const { t } = useTranslation();

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <LightbulbIcon className="text-brand-primary" />
        {t('library.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card key="random" onClick={onSelectRandom}>
            <div className="flex flex-col items-center justify-center h-full text-center">
                <DiceIcon className="w-8 h-8 mb-2 text-brand-primary"/>
                <h3 className="font-semibold text-lg text-brand-primary">{t('library.random.title')}</h3>
                <p className="text-content-200 text-sm mt-1">{t('library.random.description')}</p>
            </div>
        </Card>
        {IDEAS.map((idea) => (
          <Card key={idea.titleKey} onClick={() => onSelectIdea(idea)}>
            <h3 className="font-semibold text-lg text-brand-primary">{t(idea.titleKey)}</h3>
            <p className="text-content-200 text-sm mt-1">{t(idea.descriptionKey)}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default IdeasLibrary;
