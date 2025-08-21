
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Services from './components/Services';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [page, setPage] = useState('home');

  const navigateTo = (pageName: string) => {
    setPage(pageName);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <div className="bg-white text-gray-800 antialiased">
      <Header navigateTo={navigateTo} />
      <main>
        {page === 'home' && <HomePage />}
        {page === 'services' && <Services />}
        {page === 'contact' && <ContactPage />}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;