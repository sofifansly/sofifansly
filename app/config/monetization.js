'use client';

import { encodeUrl } from '../utils/linkObfuscator';

// Configuration pour OnlyFans Angelika
export const JERKMATE_CONFIG = {
  // URL de base OnlyFans avec lien d'affiliation
  RAW_JERKMATE_URL: 'https://onlyfans.com/u486521727/c2',
  
  // Paramètres d'affichage
  SHOULD_OBFUSCATE_LINKS: true,
  CHAT_HEAD_DELAY_MS: 0, // Apparaît immédiatement
  POSTITIAL_DELAY_MS: 15000, // Délai avant l'apparition du Postitial (15 secondes - divisé par 2)
  
  // Configuration - utilisation de l'image de la dominatrice
  MODEL_AVATAR: '/images/onlyfans-creator.webp', // Image de la dominatrice
  
  // Messages pour le Chat Head (adaptés pour maximiser la conversion avec Angelika)
  CHAT_MESSAGES: [
    "Experience a unique session with Angelika, your personal dominatrix ready to take control... 💋",
    "Tired of vanilla content? Angelika is waiting to show you what real domination feels like 🔥",
    "Ready to submit? Angelika's exclusive OnlyFans offers an experience you won't find elsewhere 😈"
  ],
  
  // Messages pour le Postitial (problème et solution ciblant les désirs de domination)
  POSTITIAL_TITLE: "Craving something more intense? 💔",
  POSTITIAL_MESSAGE: "Discover a unique experience with Angelika, a professional dominatrix who knows exactly how to take control and fulfill your deepest desires 🌟",
  POSTITIAL_BUTTON: "Submit to Angelika Now 💯",
  
  // Textes des boutons
  CHAT_HEAD_BUTTON: "Yes, I want to explore 😏",
  CLOSE_BUTTON: "Not now"
};

// Export l'URL obfusquée si nécessaire
export const JERKMATE_URL = typeof window === 'undefined' 
  ? JERKMATE_CONFIG.RAW_JERKMATE_URL 
  : encodeUrl(JERKMATE_CONFIG.RAW_JERKMATE_URL, JERKMATE_CONFIG.SHOULD_OBFUSCATE_LINKS);
