
import React, { useState } from 'react';
import { MailIcon, PhoneIcon } from './icons';

interface HeaderProps {
  navigateTo: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { page: 'services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#supply-chain', label: 'Supply Chain' },
    { page: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page?: string, href?: string) => {
    setIsMenuOpen(false);
    if (page) {
      navigateTo(page);
    } else if (href) {
      navigateTo('home');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-green-50 border-b border-green-100 text-sm text-gray-700">
        <div className="container mx-auto px-6 py-2 flex flex-wrap justify-center md:justify-between items-center gap-2 md:gap-4">
          <div className="flex items-center flex-wrap justify-center gap-x-6 gap-y-1">
            <a href="tel:+919876543210" className="flex items-center space-x-2 hover:text-green-600 transition-colors">
              <PhoneIcon className="w-4 h-4 text-green-600" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:contact@mrbhajiwale.com" className="flex items-center space-x-2 hover:text-green-600 transition-colors">
              <MailIcon className="w-4 h-4 text-green-600" />
              <span>contact@mrbhajiwale.com</span>
            </a>
          </div>
          <div className="hidden lg:block text-green-800 font-medium">
            <span>Your Trusted Partner in Freshness</span>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="text-2xl font-bold text-gray-800"
        >
          Mr.BhajiWale
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href || '#'}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.page, link.href);
              }}
              className="text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="bg-green-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-sm cursor-pointer"
          >
            Get a Quote
          </a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href || '#'}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.page, link.href);
                }}
                className="text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="bg-green-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-sm cursor-pointer"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
