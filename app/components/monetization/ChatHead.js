'use client';

import { useState, useEffect, useRef } from 'react';
import { JERKMATE_URL, JERKMATE_CONFIG } from '../../config/monetization';
import { handleObfuscatedClick } from '../../utils/linkObfuscator';

const ChatHead = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const chatRef = useRef(null);

  // Effet pour gérer le clic en dehors du chat pour le fermer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target) && isExpanded) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  // Effet pour simuler l'écriture du message
  useEffect(() => {
    if (isExpanded && isTyping) {
      const message = JERKMATE_CONFIG.CHAT_MESSAGES[currentMessage];
      let index = 0;
      
      const typingInterval = setInterval(() => {
        if (index <= message.length) {
          setDisplayedText(message.substring(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 50); // Vitesse de frappe
      
      return () => clearInterval(typingInterval);
    }
  }, [isTyping, currentMessage, isExpanded]);

  // Effet pour ouvrir automatiquement le chat au chargement
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
      setIsTyping(true);
    }, 1000); // Petit délai pour laisser la page se charger
    
    return () => clearTimeout(timer);
  }, []);

  // Gestion du clic sur la bulle de chat
  const handleChatHeadClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setIsTyping(true);
    }
  };

  // Gestion du clic sur le bouton de redirection
  const handleRedirectClick = (e) => {
    handleObfuscatedClick(
      e, 
      JERKMATE_URL, 
      JERKMATE_CONFIG.SHOULD_OBFUSCATE_LINKS
    );
  };

  // Gestion de la fermeture du chat (ferme uniquement la fenêtre, pas la bulle)
  const handleCloseChat = () => {
    setIsExpanded(false);
  };

  return (
    <div 
      ref={chatRef}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end"
    >
      {/* Bulle de chat principale - toujours visible */}
      <div 
        onClick={handleChatHeadClick}
        className="rounded-full bg-pink-500 shadow-lg cursor-pointer transition-all duration-300 flex items-center justify-center w-16 h-16 hover:scale-110 monetization-pulse"
        style={{ display: isExpanded ? 'none' : 'flex' }}
      >
        <img 
          src={JERKMATE_CONFIG.MODEL_AVATAR} 
          alt="Chat" 
          className="w-full h-full object-cover rounded-full border-2 border-white"
        />
      </div>

      {/* Fenêtre de chat */}
      {isExpanded && (
        <div className="bg-white rounded-lg shadow-xl mb-2 w-72 overflow-hidden animate-fadeIn monetization-hover-elevate">
          {/* En-tête du chat */}
          <div className="bg-pink-500 p-3 flex items-center justify-between monetization-gradient">
            <div className="flex items-center">
              <img 
                src={JERKMATE_CONFIG.MODEL_AVATAR} 
                alt="Model" 
                className="w-8 h-8 rounded-full mr-2 object-cover border-2 border-white monetization-float"
              />
              <span className="text-white font-semibold">Live Chat</span>
            </div>
            <button 
              onClick={handleCloseChat}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          
          {/* Corps du chat */}
          <div className="p-3 max-h-60 overflow-y-auto bg-gray-50">
            <div className="flex mb-3">
              <div className="bg-pink-100 rounded-lg p-2 max-w-[80%] text-gray-800">
                {isTyping ? (
                  <>
                    {displayedText}
                    <span className="monetization-typing">
                      <span>.</span>
                      <span>.</span>
                      <span>.</span>
                    </span>
                  </>
                ) : (
                  JERKMATE_CONFIG.CHAT_MESSAGES[currentMessage]
                )}
              </div>
            </div>
          </div>
          
          {/* Pied du chat avec bouton d'action */}
          <div className="p-3 border-t flex justify-between">
            <button 
              onClick={handleCloseChat}
              className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
            >
              {JERKMATE_CONFIG.CLOSE_BUTTON}
            </button>
            <button 
              onClick={handleRedirectClick}
              className="px-3 py-1.5 bg-pink-500 text-white rounded hover:bg-pink-600 transition monetization-glow"
            >
              {JERKMATE_CONFIG.CHAT_HEAD_BUTTON}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHead;
