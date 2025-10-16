import { Idea } from './types';

export const REALISM_LEVELS = ["Photorealistic", "Cinematic Render", "Realistic CGI Render", "Toon Style", "Claymation", "Children's Book Illustration", "Vintage Comic Book"];
export const LIGHTING_STYLES = ["Soft Studio Lighting", "Dramatic Rim Lighting", "Golden Hour Sunlight", "Neon Noir", "Misty Morning", "70s Disco Neon", "Bioluminescent Glow", "Rembrandt Lighting"];
export const SETTINGS = ["Minimalist Studio", "Enchanted Forest", "Cyberpunk Cityscape", "Baroque Interior", "Volcanic Plains", "Sunken Treasure Ship", "Retro-Futuristic Diner", "Floating Sky Islands"];
export const FRAMING_STYLES = ["Extreme Close-Up", "Medium Shot", "Full Body Shot", "Dutch Angle", "Macro Shot"];

// Keys for translation. They correspond to the original values but formatted for i18next keys.
export const REALISM_LEVEL_KEYS = ["options.realism_photorealistic", "options.realism_cinematic_render", "options.realism_realistic_cgi", "options.realism_toon_style", "options.realism_claymation", "options.realism_childrens_book", "options.realism_vintage_comic"];
export const LIGHTING_STYLE_KEYS = ["options.lighting_soft_studio", "options.lighting_dramatic_rim", "options.lighting_golden_hour", "options.lighting_neon_noir", "options.lighting_misty_morning", "options.lighting_70s_disco_neon", "options.lighting_bioluminescent_glow", "options.lighting_rembrandt"];
export const SETTING_KEYS = ["options.setting_minimalist_studio", "options.setting_enchanted_forest", "options.setting_cyberpunk_cityscape", "options.setting_baroque_interior", "options.setting_volcanic_plains", "options.setting_sunken_treasure_ship", "options.setting_retro_futuristic_diner", "options.setting_floating_sky_islands"];
export const FRAMING_STYLE_KEYS = ["options.framing_extreme_close_up", "options.framing_medium_shot", "options.framing_full_body_shot", "options.framing_dutch_angle", "options.framing_macro_shot"];

export const TEXTURE_KEYS = [
  "options.texture_smooth_glossy",
  "options.texture_rough_weathered",
  "options.texture_fluffy_soft",
  "options.texture_metallic_cold",
  "options.texture_slimy_wet",
  "options.texture_glowing_ethereal",
  "options.texture_crystalline_sharp",
  "options.texture_leathery_tough",
  "options.texture_mossy_damp",
  "options.texture_polished_wood"
];

export const EMOTION_KEYS = [
  "options.emotion_epic_grand",
  "options.emotion_peaceful_tranquil",
  "options.emotion_ominous_threatening",
  "options.emotion_joyful_vibrant",
  "options.emotion_mysterious_enigmatic",
  "options.emotion_whimsical_playful",
  "options.emotion_melancholic_somber",
  "options.emotion_awe_inspiring_majestic",
  "options.emotion_tense_suspenseful",
  "options.emotion_serene_calm"
];


export const IDEAS: Idea[] = [
  {
    titleKey: "ideas.sushi_dragon.title",
    descriptionKey: "ideas.sushi_dragon.description",
    options: {
      subject1Key: "ideas.sushi_dragon.subject1",
      subject2Key: "ideas.sushi_dragon.subject2",
      mergeSubjects: false,
      realism: "Photorealistic",
      lighting: "Soft Studio Lighting",
      setting: "Minimalist Studio",
      textureKey: "ideas.sushi_dragon.texture",
      emotionKey: "ideas.sushi_dragon.emotion",
      framing: "Medium Shot",
    }
  },
  {
    titleKey: "ideas.clockwork_hummingbird.title",
    descriptionKey: "ideas.clockwork_hummingbird.description",
    options: {
      subject1Key: "ideas.clockwork_hummingbird.subject1",
      subject2Key: "ideas.clockwork_hummingbird.subject2",
      mergeSubjects: true,
      realism: "Photorealistic",
      lighting: "Dramatic Rim Lighting",
      setting: "Baroque Interior",
      textureKey: "ideas.clockwork_hummingbird.texture",
      emotionKey: "ideas.clockwork_hummingbird.emotion",
      framing: "Macro Shot",
    }
  },
  {
    titleKey: "ideas.cactus_cat.title",
    descriptionKey: "ideas.cactus_cat.description",
    options: {
      subject1Key: "ideas.cactus_cat.subject1",
      subject2Key: "ideas.cactus_cat.subject2",
      mergeSubjects: true,
      realism: "Photorealistic",
      lighting: "Misty Morning",
      setting: "Volcanic Plains",
      textureKey: "ideas.cactus_cat.texture",
      emotionKey: "ideas.cactus_cat.emotion",
      framing: "Medium Shot",
    }
  }
];


// Keys for random idea generation
export const RANDOM_SUBJECTS_PRIMARY_KEYS = ["random.subjects.primary.dragon", "random.subjects.primary.robot", "random.subjects.primary.tree", "random.subjects.primary.fox", "random.subjects.primary.castle", "random.subjects.primary.wizard", "random.subjects.primary.phoenix", "random.subjects.primary.library"];
export const RANDOM_SUBJECTS_SECONDARY_KEYS = ["random.subjects.secondary.crystal", "random.subjects.secondary.fire", "random.subjects.secondary.jellyfish", "random.subjects.secondary.gears", "random.subjects.secondary.nebula", "random.subjects.secondary.music", "random.subjects.secondary.dreams", "random.subjects.secondary.time"];
