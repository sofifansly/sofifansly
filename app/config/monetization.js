'use client';

import { encodeUrl } from '../utils/linkObfuscator';

// Configuration pour JerkMate
export const JERKMATE_CONFIG = {
  // URL de base JerkMate avec lien d'affiliation (à remplacer par votre lien CrackRevenue)
  RAW_JERKMATE_URL: 'https://t.mbslr2.com/361210/8780/32489?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN',
  
  // Paramètres d'affichage
  SHOULD_OBFUSCATE_LINKS: true,
  CHAT_HEAD_DELAY_MS: 0, // Apparaît immédiatement
  POSTITIAL_DELAY_MS: 15000, // Délai avant l'apparition du Postitial (15 secondes - divisé par 2)
  
  // Configuration générique - utilisation de l'image JerkMate
  MODEL_AVATAR: '/images/jerkmate.webp', // Image JerkMate du dossier images
  
  // Messages pour le Chat Head (adaptés pour maximiser la conversion avec le logo JerkMate)
  CHAT_MESSAGES: [
    "Click here to chat with REAL models who respond in real-time... 💋",
    "Tired of pre-recorded content? Our live models are waiting to interact with YOU right now 🔥",
    "Feeling invisible? On our live cams, you'll be the center of attention 😘"
  ],
  
  // Messages pour le Postitial (problème et solution ciblant les insécurités)
  POSTITIAL_TITLE: "Tired of watching without connection? 💔",
  POSTITIAL_MESSAGE: "Stop feeling alone with pre-recorded content. Experience real-time interaction where models actually respond to YOU 🌟",
  POSTITIAL_BUTTON: "Feel Truly Seen & Desired 💯",
  
  // Textes des boutons
  CHAT_HEAD_BUTTON: "Yes, I want to take a break 😏",
  CLOSE_BUTTON: "Not now"
};

// Export l'URL obfusquée si nécessaire
export const JERKMATE_URL = typeof window === 'undefined' 
  ? JERKMATE_CONFIG.RAW_JERKMATE_URL 
  : encodeUrl(JERKMATE_CONFIG.RAW_JERKMATE_URL, JERKMATE_CONFIG.SHOULD_OBFUSCATE_LINKS);
