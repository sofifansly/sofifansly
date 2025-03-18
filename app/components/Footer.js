'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-4">
          <div className="text-center">
            <a
              href="https://www.jade-lavoie-onlyfans.com"
              className="text-blue-200 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jade Lavoie
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/legal-notice" className="hover:text-blue-200 transition-colors">
              Legal Notice
            </Link>
            <Link href="/privacy-policy" className="hover:text-blue-200 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;