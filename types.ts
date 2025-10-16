export interface PromptOptions {
  subject1: string;
  subject2: string;
  mergeSubjects: boolean;
  realism: string;
  lighting: string;
  setting: string;
  texture: string;
  emotion: string;
  framing: string;
}

export interface Idea {
  titleKey: string;
  descriptionKey: string;
  options: {
    subject1Key: string;
    subject2Key: string;
    mergeSubjects?: boolean;
    realism: string;
    lighting: string;
    setting: string;
    textureKey: string;
    emotionKey: string;
    framing: string;
  };
}