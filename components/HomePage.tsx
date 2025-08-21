
import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import SupplyChain from './SupplyChain';
import WholesaleHighlight from './WholesaleHighlight';
import FAQNewsletter from './FAQNewsletter';
import OurNetwork from './OurNetwork';
import Gallery from './Gallery';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <WholesaleHighlight />
      <OurNetwork />
      <Gallery />
      <Testimonials />
      <SupplyChain />
      <FAQNewsletter />
    </>
  );
};

export default HomePage;