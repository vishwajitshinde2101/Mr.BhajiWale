import React from 'react';
import { MarketIcon, SortingIcon, TruckIcon } from './icons';

const supplyChainSteps = [
  {
    icon: <MarketIcon />,
    title: 'Sourcing from Market Yard',
    description: 'We source high-quality produce from the market yard through our network of verified traders.',
  },
  {
    icon: <SortingIcon />,
    title: 'Warehouse & Quality Check',
    description: 'Vegetables are sorted, graded, and stored in optimal conditions to maintain freshness.',
  },
  {
    icon: <TruckIcon />,
    title: 'Distribution to Shops',
    description: 'Our efficient logistics network ensures timely delivery to your business doorstep.',
  },
];

const Arrow = () => (
    <div className="text-gray-300 w-16 h-16 transform rotate-90 lg:rotate-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    </div>
);


const SupplyChain: React.FC = () => {
  return (
    <section id="supply-chain" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Supply Chain</h2>
          <p className="text-gray-600 mt-3 text-lg">
            From source to your doorstep, ensuring maximum freshness.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {supplyChainSteps.map((step, index) => (
            <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center max-w-xs p-4">
                    <div className="bg-green-50 p-6 rounded-full text-green-600 mb-5 shadow-inner">
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < supplyChainSteps.length - 1 && <Arrow />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplyChain;