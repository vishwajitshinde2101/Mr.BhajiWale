
import React from 'react';

interface FooterProps {
  navigateTo: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const handleLinkClick = (href: string) => {
    navigateTo('home');
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-gray-800 text-gray-300 pt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Mr.BhajiWale</h3>
            <p className="text-gray-400">Your trusted partner for fresh, wholesale vegetables delivered right to your business.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" onClick={(e) => { e.preventDefault(); handleLinkClick('#features'); }} className="hover:text-green-400 transition-colors cursor-pointer">Features</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); navigateTo('services'); }} className="hover:text-green-400 transition-colors cursor-pointer">Services</a></li>
              <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); handleLinkClick('#testimonials'); }} className="hover:text-green-400 transition-colors cursor-pointer">Testimonials</a></li>
              <li><a href="#supply-chain" onClick={(e) => { e.preventDefault(); handleLinkClick('#supply-chain'); }} className="hover:text-green-400 transition-colors cursor-pointer">Supply Chain</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} className="hover:text-green-400 transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            {/* Replace with actual social links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors">Facebook</a>
              <a href="#" className="hover:text-green-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-green-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-12 py-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Mr.BhajiWale. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;