
import React from 'react';
import { FarmIcon, MarketIcon, SortingIcon, PackingIcon, TruckIcon, ChefIcon } from './icons';

const icons = [
  { component: <FarmIcon />, name: 'Farms' },
  { component: <MarketIcon />, name: 'Markets' },
  { component: <SortingIcon />, name: 'Sorting' },
  { component: <PackingIcon />, name: 'Packing' },
  { component: <TruckIcon />, name: 'Delivery' },
  { component: <ChefIcon />, name: 'Chefs' },
];

const Orbiter: React.FC<{ icon: React.ReactNode; index: number; total: number; radius: number, duration: string }> = ({ icon, index, total, radius, duration }) => {
    const angle = (index / total) * 360;
    const animationDuration = parseInt(duration);
    const animationDelay = `-${(animationDuration / total) * index}s`;

    return (
        <div 
            className="absolute w-16 h-16 top-1/2 left-1/2 -m-8"
            style={{
                transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
                animation: `rotate ${duration} linear infinite`,
                animationDelay: animationDelay,
            }}
        >
             <div 
                className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-green-500 transform transition-transform hover:scale-110 p-3"
                style={{ animation: `rotate ${duration} linear infinite reverse`, animationDelay: animationDelay }}
            >
                {icon}
            </div>
        </div>
    )
};


const OurNetwork: React.FC = () => {
    const innerIcons = icons.slice(0, 3);
    const outerIcons = icons.slice(3, 6);

    return (
        <section id="our-network" className="py-24 bg-[#FEFBF6] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px]">
                    
                    {/* Concentric Circles */}
                    <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-dashed border-gray-300 rounded-full"></div>
                    <div className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] border border-dashed border-gray-300 rounded-full"></div>

                    {/* Orbiting Icons */}
                    <div className="w-full h-full absolute flex items-center justify-center">
                        {/* Inner Orbit */}
                        {innerIcons.map((icon, index) => (
                           <Orbiter key={`inner-${index}`} icon={icon.component} index={index} total={innerIcons.length} radius={150} duration="20s" />
                        ))}
                         {/* Outer Orbit */}
                        {outerIcons.map((icon, index) => (
                           <Orbiter key={`outer-${index}`} icon={icon.component} index={index} total={outerIcons.length} radius={225} duration="30s" />
                        ))}
                    </div>

                    {/* Central Text */}
                    <div className="relative z-10 text-center max-w-md">
                        <span className="text-sm font-semibold text-green-600 bg-green-100 py-2 px-4 rounded-full">
                           INTEGRATION
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                            Our Seamless Farm-to-Fork Network
                        </h2>
                        <p className="mt-4 text-gray-600">
                           We manage every step of the supply chain to ensure unparalleled freshness and reliability, connecting the best farms directly to your business.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurNetwork;
