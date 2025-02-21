'use client';

export const encodeUrl = (url, shouldObfuscate = true) => {
  if (!shouldObfuscate) return url;
  
  if (typeof window !== 'undefined') {
    const salt = Math.random().toString(36).substring(7);
    return btoa(encodeURIComponent(salt + '|' + url)).replace(/=/g, '').split('').reverse().join('');
  }
  return url;
};

export const handleObfuscatedClick = (e, encodedUrl, shouldObfuscate = true) => {
  e.preventDefault();
  
  if (!shouldObfuscate) {
    window.open(encodedUrl, '_blank');
    return;
  }

  if (typeof window !== 'undefined') {
    try {
      const decoded = decodeURIComponent(atob(encodedUrl.split('').reverse().join('')));
      const url = decoded.split('|')[1];
      window.open(url, '_blank');
    } catch (error) {
      console.error('Invalid URL format');
    }
  }
};
