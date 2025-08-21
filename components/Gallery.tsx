import React from 'react';

// This component is for the decorative dot pattern in the background
const DotPattern = () => (
    <div className="w-full h-full flex items-center justify-center">
        <svg width="80%" height="80%" >
            <defs>
                <pattern id="dot-pattern-gallery" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="4" cy="4" r="1.5" className="text-green-200" fill="currentColor"></circle>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-pattern-gallery)"></rect>
        </svg>
    </div>
);

// Image component for consistent styling
const GalleryImage: React.FC<{ src: string; alt: string; }> = ({ src, alt }) => (
    <div className="rounded-xl overflow-hidden shadow-lg group w-full h-full">
        <img 
            src={src} 
            alt={alt} 
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" 
        />
    </div>
);


const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">A Glimpse of Our Quality</h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            From the farm to your business, we ensure every vegetable is fresh, vibrant, and ready to impress your customers.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[700px]">
            <div className="grid gap-4">
                <GalleryImage src="https://images.unsplash.com/photo-1540420773420-2366e21710be?q=80&w=600&auto=format&fit=crop" alt="Fresh potatoes on a rustic wooden table" />
                <GalleryImage src="https://images.unsplash.com/photo-1615485925332-6834b58838a2?q=80&w=600&auto=format&fit=crop" alt="A vibrant display of fresh produce at a market stall" />
            </div>
            <div className="grid gap-4 mt-[-5rem] sm:mt-[-8rem]">
                <GalleryImage src="https://images.unsplash.com/photo-1561138723-163e79302b2a?q=80&w=600&auto=format&fit=crop" alt="An assortment of colorful root vegetables" />
                <GalleryImage src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=600&auto=format&fit=crop" alt="A wooden crate overflowing with freshly harvested potatoes" />
            </div>
            <div className="hidden md:grid gap-4">
                 <GalleryImage src="https://images.unsplash.com/photo-1562347321-084b19c83896?q=80&w=600&auto=format&fit=crop" alt="Freshly harvested carrots with soil" />
                 <GalleryImage src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=600&auto=format&fit=crop" alt="Close-up of red onions in a basket" />
            </div>
            <div className="hidden md:grid gap-4 mt-[-5rem] sm:mt-[-8rem]">
                <GalleryImage src="https://images.unsplash.com/photo-1589922582939-2871869e8b7d?q=80&w=600&auto=format&fit=crop" alt="Bags of onions ready for wholesale" />
                <div className="rounded-xl bg-green-50/50 flex items-center justify-center">
                    <DotPattern />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;