import React from 'react';
import { useTranslation } from 'react-i18next';
import { PromptOptions } from '../types';
import { 
  REALISM_LEVEL_KEYS, 
  LIGHTING_STYLE_KEYS, 
  SETTING_KEYS, 
  FRAMING_STYLE_KEYS,
  TEXTURE_KEYS,
  EMOTION_KEYS
} from '../constants';
import TextInput from './TextInput';
import ComboboxInput from './ComboboxInput';
import Button from './Button';
import Card from './Card';
import SparklesIcon from './icons/SparklesIcon';
import ToggleSwitch from './ToggleSwitch';

interface PromptFormProps {
  options: PromptOptions;
  setOptions: React.Dispatch<React.SetStateAction<PromptOptions>>;
  onSubmit: () => void;
  isLoading: boolean;
}

const PromptForm: React.FC<PromptFormProps> = ({ options, setOptions, onSubmit, isLoading }) => {
  const { t } = useTranslation();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        setOptions(prev => ({ ...prev, [name]: checked }));
    } else {
        setOptions(prev => ({ ...prev, [name]: value }));
    }
  };

  const translatedRealismOptions = REALISM_LEVEL_KEYS.map(key => t(key));
  const translatedLightingOptions = LIGHTING_STYLE_KEYS.map(key => t(key));
  const translatedSettingOptions = SETTING_KEYS.map(key => t(key));
  const translatedFramingOptions = FRAMING_STYLE_KEYS.map(key => t(key));
  const translatedTextureOptions = TEXTURE_KEYS.map(key => t(key));
  const translatedEmotionOptions = EMOTION_KEYS.map(key => t(key));

  return (
    <Card>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
          <TextInput label={t('form.subject1')} name="subject1" value={options.subject1} onChange={handleChange} placeholder={t('form.subject1_placeholder')} />
          
          <div className="flex flex-col items-center justify-center pt-6">
            <ToggleSwitch
              id="mergeSubjects"
              name="mergeSubjects"
              checked={options.mergeSubjects}
              onChange={handleChange}
              label={t('form.mergeSubjects')}
            />
          </div>

          <TextInput label={t('form.subject2')} name="subject2" value={options.subject2} onChange={handleChange} placeholder={t('form.subject2_placeholder')} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ComboboxInput label={t('form.realism')} name="realism" options={translatedRealismOptions} value={options.realism} onChange={handleChange} placeholder={t('form.realism_placeholder')} />
            <ComboboxInput label={t('form.lighting')} name="lighting" options={translatedLightingOptions} value={options.lighting} onChange={handleChange} placeholder={t('form.lighting_placeholder')} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ComboboxInput label={t('form.setting')} name="setting" options={translatedSettingOptions} value={options.setting} onChange={handleChange} placeholder={t('form.setting_placeholder')} />
            <ComboboxInput label={t('form.framing')} name="framing" options={translatedFramingOptions} value={options.framing} onChange={handleChange} placeholder={t('form.framing_placeholder')} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ComboboxInput label={t('form.texture')} name="texture" options={translatedTextureOptions} value={options.texture} onChange={handleChange} placeholder={t('form.texture_placeholder')} />
            <ComboboxInput label={t('form.emotion')} name="emotion" options={translatedEmotionOptions} value={options.emotion} onChange={handleChange} placeholder={t('form.emotion_placeholder')} />
        </div>

        <div className="pt-4 text-center">
          <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
            <SparklesIcon />
            {isLoading ? t('form.button_generating') : t('form.button_generate')}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default PromptForm;