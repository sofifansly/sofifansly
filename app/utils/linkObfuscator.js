'use client';

// Fonction pour générer un salt aléatoire
const generateSalt = (length = 8) => {
  if (typeof window === 'undefined') return '';
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const randomValues = new Uint8Array(length);
  
  // Utiliser crypto.getRandomValues si disponible, sinon utiliser Math.random
  if (window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(randomValues);
    for (let i = 0; i < length; i++) {
      result += chars[randomValues[i] % chars.length];
    }
  } else {
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  
  return result;
};

// Fonction pour encoder l'URL
export const encodeUrl = (url, shouldObfuscate = true) => {
  if (!shouldObfuscate) return url;
  if (typeof window === 'undefined') return url;
  
  try {
    const salt = generateSalt();
    const combined = `${salt}|${url}`;
    const encoded = encodeURIComponent(combined);
    const base64 = btoa(encoded);
    const withoutPadding = base64.replace(/=/g, '');
    return withoutPadding.split('').reverse().join('');
  } catch (error) {
    console.error('Error encoding URL:', error);
    return url;
  }
};

// Fonction pour décoder l'URL
export const decodeUrl = (obfuscated, shouldObfuscate = true) => {
  if (!shouldObfuscate) return obfuscated;
  if (typeof window === 'undefined') return '';
  
  try {
    const reversed = obfuscated.split('').reverse().join('');
    const decoded = atob(reversed);
    const urlDecoded = decodeURIComponent(decoded);
    const [, url] = urlDecoded.split('|');
    return url;
  } catch (error) {
    console.error('Error decoding URL:', error);
    return '';
  }
};

// État global pour le modal de confirmation d'âge
let ageConfirmationState = {
  isModalOpen: false,
  pendingUrl: null,
  shouldObfuscate: true,
  modalElement: null
};

// Fonction pour ouvrir le modal de confirmation d'âge
const openAgeConfirmationModal = (url, shouldObfuscate) => {
  if (typeof window === 'undefined') return;
  
  // Créer le modal s'il n'existe pas déjà
  if (!ageConfirmationState.modalElement) {
    const modalContainer = document.createElement('div');
    modalContainer.id = 'age-confirmation-modal-container';
    document.body.appendChild(modalContainer);
    
    ageConfirmationState.modalElement = modalContainer;
  }
  
  // Mettre à jour l'état
  ageConfirmationState.isModalOpen = true;
  ageConfirmationState.pendingUrl = url;
  ageConfirmationState.shouldObfuscate = shouldObfuscate;
  
  // Déclencher un événement personnalisé pour que le modal React puisse réagir
  const event = new CustomEvent('openAgeConfirmation', { 
    detail: { url, shouldObfuscate } 
  });
  window.dispatchEvent(event);
};

// Gestionnaire de clic pour les liens obfusqués
export const handleObfuscatedClick = (e, obfuscatedUrl, shouldObfuscate = true) => {
  if (e) {
    e.preventDefault();
  }
  
  if (typeof window === 'undefined') return;

  try {
    // Ouvrir le modal de confirmation d'âge au lieu de rediriger directement
    openAgeConfirmationModal(obfuscatedUrl, shouldObfuscate);
  } catch (error) {
    console.error('Error handling obfuscated click:', error);
  }
};

// Fonction pour confirmer l'âge et procéder à la redirection
export const confirmAgeAndRedirect = () => {
  if (typeof window === 'undefined' || !ageConfirmationState.pendingUrl) return;
  
  try {
    const { pendingUrl, shouldObfuscate } = ageConfirmationState;
    
    if (!shouldObfuscate) {
      window.open(pendingUrl, '_blank');
    } else {
      const decodedUrl = decodeUrl(pendingUrl, shouldObfuscate);
      if (decodedUrl) {
        window.open(decodedUrl, '_blank');
      }
    }
    
    // Réinitialiser l'état
    ageConfirmationState.isModalOpen = false;
    ageConfirmationState.pendingUrl = null;
    
    // Déclencher un événement pour fermer le modal
    const event = new CustomEvent('closeAgeConfirmation');
    window.dispatchEvent(event);
  } catch (error) {
    console.error('Error confirming age and redirecting:', error);
  }
};

// Fonction pour annuler la redirection
export const cancelAgeConfirmation = () => {
  if (typeof window === 'undefined') return;
  
  // Réinitialiser l'état
  ageConfirmationState.isModalOpen = false;
  ageConfirmationState.pendingUrl = null;
  
  // Déclencher un événement pour fermer le modal
  const event = new CustomEvent('closeAgeConfirmation');
  window.dispatchEvent(event);
};

// URL OnlyFans obfusquée - remplacez par votre vrai lien OnlyFans
export const OBFUSCATED_AFFILIATE_URL = encodeUrl('https://fans.ly/soficute1234/t0');
