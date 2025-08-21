
import React from 'react';
import { WholesaleIcon, SourcingIcon, PackagingIcon, TruckIcon, QualityIcon, InsightsIcon } from './icons';

const services = [
  {
    icon: <WholesaleIcon />,
    title: 'Wholesale Supply',
    description: 'Reliable, large-scale supply of fresh produce for restaurants, hotels, and catering businesses. Access top-quality vegetables at competitive market rates.',
  },
  {
    icon: <SourcingIcon />,
    title: 'Custom Sourcing',
    description: 'Looking for something specific? Our expert team can source specialty and exotic vegetables to help your menu stand out from the competition.',
  },
  {
    icon: <PackagingIcon />,
    title: 'Grading & Packaging',
    description: 'We provide custom sorting, grading, and packaging solutions to meet your specific requirements, ensuring your produce is kitchen-ready.',
  },
  {
    icon: <TruckIcon />,
    title: 'Scheduled Delivery',
    description: 'Our dedicated logistics network ensures your orders are delivered fresh and on time, every time, according to your unique schedule.',
  },
  {
    icon: <QualityIcon />,
    title: 'Quality Assurance',
    description: 'With rigorous quality checks at every stage, we guarantee that you receive only the freshest and highest-quality vegetables for your business.',
  },
  {
    icon: <InsightsIcon />,
    title: 'Market Insights',
    description: 'Leverage our expertise with insights on pricing trends, seasonal availability, and new produce to make informed purchasing decisions.',
  },
];

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#FEFBF6] py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-600">
            Our Comprehensive Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Tailored solutions to meet the unique needs of your business, from sourcing to delivery. We are your dedicated partner in freshness and quality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600 mb-6">
                  {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
