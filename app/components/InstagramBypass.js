'use client';

import { useEffect, useState } from 'react';

export default function InstagramBypass() {
  // État pour suivre si nous avons déjà tenté une redirection
  const [hasAttempted, setHasAttempted] = useState(false);
  
  useEffect(() => {
    // Détection du navigateur Instagram
    const isInstagramBrowser = () => {
      const userAgent = navigator.userAgent || '';
      return userAgent.includes('Instagram');
    };

    // Si c'est le navigateur Instagram et qu'on n'a pas encore essayé de rediriger
    if (isInstagramBrowser() && !hasAttempted) {
      // Marquer que nous avons tenté une redirection
      setHasAttempted(true);
      
      // URL actuelle
      const currentUrl = window.location.href;
      
      // Créer un élément avec attribut download pour forcer l'ouverture dans le navigateur natif
      const link = document.createElement('a');
      link.href = currentUrl;
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      
      // Sur iOS, essayer les schémas d'URL Safari
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        const cleanUrl = currentUrl.replace(/^https?:\/\//, '');
        window.location.href = `x-safari-https://${cleanUrl}`;
      } 
      // Sur Android, utiliser le schéma intent
      else if (/Android/.test(navigator.userAgent)) {
        const intentUrl = `intent://${currentUrl.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`;
        window.location.href = intentUrl;
      }
      // Pour les autres navigateurs, essayer d'ouvrir dans un nouvel onglet
      else {
        window.open(currentUrl, '_blank');
      }
    }
  }, [hasAttempted]); // Dépendance à hasAttempted pour éviter les boucles

  // Ce composant ne rend rien visuellement
  return null;
}
