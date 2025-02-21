'use client';

import { useState, useEffect } from 'react';

const SecureEmail = () => {
  const [email, setEmail] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Décoder l'email de manière sécurisée
    const parts = ['detroits', '_alose9m', '@', 'icloud', '.com'];
    setEmail(parts.join(''));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    // Vérification simple anti-bot
    const now = new Date().getTime();
    if (typeof window !== 'undefined' && window.localStorage) {
      const lastClick = parseInt(window.localStorage.getItem('lastEmailClick') || '0');
      if (now - lastClick < 2000) { // Anti spam-click (2 secondes minimum entre les clics)
        return;
      }
      window.localStorage.setItem('lastEmailClick', now.toString());
    }
    window.location.href = `mailto:${email}`;
  };

  if (!isClient) {
    return <span className="text-gray-600">Loading contact information...</span>;
  }

  return (
    <button
      onClick={handleClick}
      className="text-blue-600 hover:text-blue-800 transition-colors"
      aria-label="Contact email"
    >
      Contact us by email
    </button>
  );
};

export default SecureEmail;
