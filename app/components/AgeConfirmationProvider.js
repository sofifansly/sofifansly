'use client';

import { useState, useEffect } from 'react';
import AgeConfirmationModal from './AgeConfirmationModal';
import { confirmAgeAndRedirect, cancelAgeConfirmation } from '../utils/linkObfuscator';

const AgeConfirmationProvider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState(null);

  useEffect(() => {
    // Gestionnaire pour ouvrir le modal
    const handleOpenModal = (event) => {
      setPendingUrl(event.detail.url);
      setIsModalOpen(true);
    };

    // Gestionnaire pour fermer le modal
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setPendingUrl(null);
    };

    // Ajouter les écouteurs d'événements
    window.addEventListener('openAgeConfirmation', handleOpenModal);
    window.addEventListener('closeAgeConfirmation', handleCloseModal);

    // Nettoyer les écouteurs d'événements
    return () => {
      window.removeEventListener('openAgeConfirmation', handleOpenModal);
      window.removeEventListener('closeAgeConfirmation', handleCloseModal);
    };
  }, []);

  const handleConfirm = () => {
    confirmAgeAndRedirect();
  };

  const handleCancel = () => {
    cancelAgeConfirmation();
  };

  return (
    <AgeConfirmationModal
      isOpen={isModalOpen}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      url={pendingUrl}
    />
  );
};

export default AgeConfirmationProvider;
