
import React from 'react';
import { PriceIcon, DeliveryIcon, FreshnessIcon, SupportIcon } from './icons';

const features = [
  {
    icon: <PriceIcon />,
    title: 'Wholesale Rates',
    description: 'Competitive market yard prices for key produce like onions and potatoes.',
  },
  {
    icon: <DeliveryIcon />,
    title: 'On-Time Delivery',
    description: 'Our reliable logistics ensure your orders arrive exactly when you need them.',
  },
  {
    icon: <FreshnessIcon />,
    title: 'Fresh Quality Guaranteed',
    description: 'We source directly to guarantee the freshest quality for your business.',
  },
  {
    icon: <SupportIcon />,
    title: 'Supportive Staff',
    description: 'Our dedicated team is always ready to assist you with your orders and needs.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Us?</h2>
          <p className="text-gray-600 mt-3 text-lg">
            We provide more than just vegetables; we provide reliability and quality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md text-center transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex justify-center items-center mb-5 text-green-500 bg-green-50 rounded-full w-16 h-16 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;