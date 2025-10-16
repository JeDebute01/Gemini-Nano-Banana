
import { GoogleGenAI } from "@google/genai";
import { PromptOptions } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePromptForNanoBanana = async (options: PromptOptions): Promise<string> => {
  const { subject1, subject2, mergeSubjects, realism, lighting, setting, texture, emotion, framing } = options;

  const combinationInstruction = mergeSubjects
    ? `1. Creatively combine the subjects '${subject1}' and '${subject2}' into a single, cohesive hybrid entity. If they are two creatures, imagine a plausible hybrid. If one is an object, integrate it seamlessly into the primary subject's form.`
    : `1. Depict the primary subject, '${subject1}', interacting with or in the context of the secondary subject/element, '${subject2}'. They should remain as distinct entities within the scene.`;

  const internalPrompt = `
    You are an expert prompt engineer for the 'nano banana' (gemini-2.5-flash-image) advanced text-to-image AI model. 
    Your task is to generate a single, cohesive paragraph that is a highly detailed, descriptive, and visually rich prompt based on user specifications.
    This generated prompt will be used to create a stunning and deceptively realistic image.

    User Specifications:
    - Primary Subject: ${subject1}
    - Secondary Subject/Element: ${subject2}
    - Subjects Relationship: ${mergeSubjects ? 'Merged into a hybrid' : 'Distinct entities'}
    - Desired Style/Realism: ${realism}
    - Lighting Style: ${lighting}
    - Setting/Environment: ${setting}
    - Key Textures: ${texture}
    - Dominant Emotion/Mood: ${emotion}
    - Camera Framing: ${framing}

    Instructions:
    ${combinationInstruction}
    2.  Use vivid adjectives and sensory details to describe the scene.
    3.  Elaborate on the lighting, describing how it interacts with the subjects and the environment (e.g., casting long shadows, highlighting textures).
    4.  Incorporate all specified details seamlessly into a single, well-written paragraph.
    5.  The final output should ONLY be the generated prompt, with no preamble, titles, or explanations.
    6.  IMPORTANT: The entire generated prompt must be written in English. If any of the user specifications above are in another language, translate them and integrate them naturally into the English prompt.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: internalPrompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error generating prompt:", error);
    return "Sorry, I couldn't generate a prompt right now. Please check the console for more details.";
  }
};