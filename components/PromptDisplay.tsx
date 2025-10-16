import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import Card from './Card';
import ClipboardIcon from './icons/ClipboardIcon';

interface PromptDisplayProps {
  prompt: string;
  isLoading: boolean;
}

const PromptDisplay: React.FC<PromptDisplayProps> = ({ prompt, isLoading }) => {
  const { t } = useTranslation();
  const [copyText, setCopyText] = useState(t('display.copy'));

  useEffect(() => {
    // Reset copy text when language changes or prompt is cleared
    setCopyText(t('display.copy'));
  }, [t, prompt]);

  useEffect(() => {
    if (copyText === t('display.copied')) {
      const timer = setTimeout(() => setCopyText(t('display.copy')), 2000);
      return () => clearTimeout(timer);
    }
  }, [copyText, t]);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopyText(t('display.copied'));
  };

  return (
    <Card className="mt-8 sticky top-8">
        <h2 className="text-xl font-bold mb-3">{t('display.title')}</h2>
        <div className="bg-base-100 p-4 rounded-md min-h-[150px] text-content-100 whitespace-pre-wrap font-mono text-sm overflow-y-auto">
        {isLoading ? (
            <div className="flex items-center justify-center h-full">
                <div className="animate-pulse flex flex-col items-center space-y-2">
                    <div className="h-2.5 bg-base-300 rounded-full w-48 mb-4"></div>
                    <div className="h-2 bg-base-300 rounded-full max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-base-300 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-base-300 rounded-full max-w-[330px] mb-2.5"></div>
                </div>
            </div>
        ) : (
            prompt || <span className="text-content-200">{t('display.placeholder')}</span>
        )}
        </div>
      {prompt && !isLoading && (
        <div className="mt-4 text-right">
          <Button onClick={handleCopy} variant="secondary">
            <ClipboardIcon className="w-4 h-4" />
            {copyText}
          </Button>
        </div>
      )}
    </Card>
  );
};

export default PromptDisplay;