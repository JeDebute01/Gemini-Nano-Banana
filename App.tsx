import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import PromptForm from './components/PromptForm';
import PromptDisplay from './components/PromptDisplay';
import IdeasLibrary from './components/IdeasLibrary';
import { PromptOptions, Idea } from './types';
import { generatePromptForNanoBanana } from './services/geminiService';
import { 
  REALISM_LEVELS, REALISM_LEVEL_KEYS, 
  LIGHTING_STYLES, LIGHTING_STYLE_KEYS, 
  SETTINGS, SETTING_KEYS, 
  FRAMING_STYLES, FRAMING_STYLE_KEYS,
  RANDOM_SUBJECTS_PRIMARY_KEYS, RANDOM_SUBJECTS_SECONDARY_KEYS,
  TEXTURE_KEYS,
  EMOTION_KEYS
} from './constants';

const initialOptions: PromptOptions = {
  subject1: '',
  subject2: '',
  mergeSubjects: false,
  realism: '',
  lighting: '',
  setting: '',
  texture: '',
  emotion: '',
  framing: '',
};

const App: React.FC = () => {
  const [options, setOptions] = useState<PromptOptions>(initialOptions);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const handleGeneratePrompt = useCallback(async () => {
    setIsLoading(true);
    setGeneratedPrompt('');
    const prompt = await generatePromptForNanoBanana(options);
    setGeneratedPrompt(prompt);
    setIsLoading(false);
  }, [options]);

  const handleSelectIdea = useCallback((idea: Idea) => {
    const { options: ideaOptions } = idea;
    
    const getKey = (value: string, values: readonly string[], keys: readonly string[]) => {
      const index = values.indexOf(value);
      return index !== -1 ? keys[index] : null;
    }

    const realismKey = getKey(ideaOptions.realism, REALISM_LEVELS, REALISM_LEVEL_KEYS);
    const lightingKey = getKey(ideaOptions.lighting, LIGHTING_STYLES, LIGHTING_STYLE_KEYS);
    const settingKey = getKey(ideaOptions.setting, SETTINGS, SETTING_KEYS);
    const framingKey = getKey(ideaOptions.framing, FRAMING_STYLES, FRAMING_STYLE_KEYS);

    setOptions({
      subject1: t(ideaOptions.subject1Key),
      subject2: t(ideaOptions.subject2Key),
      texture: t(ideaOptions.textureKey),
      emotion: t(ideaOptions.emotionKey),
      realism: realismKey ? t(realismKey) : ideaOptions.realism,
      lighting: lightingKey ? t(lightingKey) : ideaOptions.lighting,
      setting: settingKey ? t(settingKey) : ideaOptions.setting,
      framing: framingKey ? t(framingKey) : ideaOptions.framing,
      mergeSubjects: ideaOptions.mergeSubjects ?? false,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [t]);
  
  const getRandomItem = useCallback(<T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)], []);

  const handleSelectRandomIdea = useCallback(() => {
    const randomOptions: PromptOptions = {
      subject1: t(getRandomItem(RANDOM_SUBJECTS_PRIMARY_KEYS)),
      subject2: t(getRandomItem(RANDOM_SUBJECTS_SECONDARY_KEYS)),
      mergeSubjects: Math.random() < 0.5,
      realism: t(getRandomItem(REALISM_LEVEL_KEYS)),
      lighting: t(getRandomItem(LIGHTING_STYLE_KEYS)),
      setting: t(getRandomItem(SETTING_KEYS)),
      framing: t(getRandomItem(FRAMING_STYLE_KEYS)),
      texture: t(getRandomItem(TEXTURE_KEYS)),
      emotion: t(getRandomItem(EMOTION_KEYS)),
    };
    setOptions(randomOptions);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [t, getRandomItem]);


  return (
    <div className="min-h-screen container mx-auto px-4 py-8 relative">
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-8">
            <PromptForm 
                options={options} 
                setOptions={setOptions} 
                onSubmit={handleGeneratePrompt}
                isLoading={isLoading}
            />
            <IdeasLibrary onSelectIdea={handleSelectIdea} onSelectRandom={handleSelectRandomIdea}/>
        </div>
        <div>
            <PromptDisplay prompt={generatedPrompt} isLoading={isLoading} />
        </div>
      </main>
      <footer className="text-center text-content-200 mt-16 text-sm">
        <p>{t('footer.text')}</p>
      </footer>
    </div>
  );
};

export default App;