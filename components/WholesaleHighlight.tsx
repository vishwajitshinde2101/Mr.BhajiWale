
import React from 'react';

const stats = [
    {
        value: 'Market Rate',
        label: 'Best Pricing Guaranteed',
    },
    {
        value: 'Grade A',
        label: 'Assured Quality',
    },
    {
        value: '50+ Tonnes',
        label: 'Daily Supply Capacity',
    },
    {
        value: '200+',
        label: 'Happy Businesses Served',
    },
];

const WholesaleHighlight: React.FC = () => {
    return (
        <section id="wholesale" className="py-20 bg-white relative overflow-hidden">
             <img 
                src="https://www.transparentpng.com/thumb/potato/T0q2sL-potato-transparent-image.png"
                alt=""
                aria-hidden="true"
                className="absolute -bottom-20 -left-20 w-80 h-auto opacity-5 transform rotate-45"
            />
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-last lg:order-first">
                         <div className="absolute inset-0 bg-yellow-100/30 rounded-full blur-3xl -z-10 transform -translate-x-10"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1589922582939-2871869e8b7d?q=80&w=1740&auto=format&fit=crop" 
                            alt="Fresh onions and potatoes in crates" 
                            className="rounded-2xl shadow-xl w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                            Wholesale Onion & Potato
                            <span className="inline-block ml-2 text-green-500" aria-hidden="true">
                                <svg width="32" height="21" viewBox="0 0 32 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 10.5C0 10.5 8 0 16 0C24 0 32 10.5 32 10.5C32 10.5 24 21 16 21C8 21 0 10.5 0 10.5Z"/>
                                </svg>
                            </span>
                        </h2>
                        <p className="text-gray-600 mt-4 text-lg max-w-lg">
                           We offer unbeatable wholesale prices on essential produce like onions and potatoes, sourced directly from the market yard to give your business a competitive edge.
                        </p>
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-400 font-semibold text-sm mr-4">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-green-600">{stat.value}</p>
                                        <p className="text-gray-500 mt-1">{stat.label}</p>
                                        <div className="w-12 h-0.5 bg-green-200 mt-2"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WholesaleHighlight;
