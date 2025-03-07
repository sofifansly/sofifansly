'use client';

import { useState, useEffect } from 'react';
import ChatHead from './ChatHead';
import Postitial from './Postitial';
import { JERKMATE_CONFIG } from '../../config/monetization';

const MonetizationProvider = () => {
  const [showChatHead, setShowChatHead] = useState(false);
  const [showPostitial, setShowPostitial] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Effet pour afficher le Chat Head après un délai
  useEffect(() => {
    const chatHeadTimer = setTimeout(() => {
      if (!hasInteracted) {
        setShowChatHead(true);
      }
    }, JERKMATE_CONFIG.CHAT_HEAD_DELAY_MS);

    return () => clearTimeout(chatHeadTimer);
  }, [hasInteracted]);

  // Effet pour afficher le Postitial après un délai
  useEffect(() => {
    const postitialTimer = setTimeout(() => {
      if (!hasInteracted) {
        setShowPostitial(true);
      }
    }, JERKMATE_CONFIG.POSTITIAL_DELAY_MS);

    return () => clearTimeout(postitialTimer);
  }, [hasInteracted]);

  // Effet pour détecter l'intention de quitter la page
  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Détecte si la souris quitte la fenêtre par le haut
      if (e.clientY <= 0 && !hasInteracted) {
        setShowPostitial(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasInteracted]);

  // Gestion de la fermeture du Chat Head
  const handleCloseChatHead = () => {
    setShowChatHead(false);
    setHasInteracted(true);
  };

  // Gestion de la fermeture du Postitial
  const handleClosePostitial = () => {
    setShowPostitial(false);
    setHasInteracted(true);
  };

  return (
    <>
      {showChatHead && <ChatHead onClose={handleCloseChatHead} />}
      {showPostitial && <Postitial onClose={handleClosePostitial} />}
    </>
  );
};

export default MonetizationProvider;
