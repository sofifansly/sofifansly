import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} gabby-epstein-onlyfans.com. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
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
