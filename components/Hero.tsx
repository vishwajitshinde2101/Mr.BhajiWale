
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative container mx-auto px-6 py-16 md:py-24 overflow-hidden">
      <img 
          src="https://pngimg.com/d/potato_png2392.png" 
          alt=""
          aria-hidden="true"
          className="absolute top-0 -left-24 w-64 h-auto opacity-10 transform -rotate-12"
      />
      <img 
          src="https://static.vecteezy.com/system/resources/previews/029/721/531/original/red-onion-transparent-background-png.png" 
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 -right-24 w-72 h-auto opacity-10 transform rotate-12"
      />
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">
            FRESH VEGETABLES FOR YOUR BUSINESS
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-green-600 leading-tight mb-4">
            Fresh As<br />You Want
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            We deliver the freshest, highest-quality vegetables directly to your business, ensuring your customers get the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-md"
            >
              Get a Quote
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
            <img 
                src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=1740&auto=format&fit=crop" 
                alt="A large wooden crate filled with various fresh vegetables" 
                className="w-full max-w-lg h-auto object-cover rounded-2xl shadow-lg"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
