import React, { useState, useEffect } from 'react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: "Mr.BhajiWale has transformed our restaurant's produce supply. The quality is consistently top-notch, and their delivery is always on time.",
    author: 'Aarav Patel',
    business: 'Owner, The Grand Eatery',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1556742212-5b321f3c261b?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  },
  {
    quote: "The prices are unbeatable for the quality you get. Onions and potatoes at market yard rates are a huge plus for my business.",
    author: 'Priya Sharma',
    business: 'Catering Services CEO',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1623961918330-a035a7827b14?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  },
  {
    quote: "The staff is incredibly helpful and responsive. They make the entire process, from ordering to delivery, completely seamless.",
    author: 'Rohan Mehta',
    business: 'Hotel Purchase Manager',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1600880292210-85938a038938?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  },
  {
    quote: "I rely on their fresh quality guarantee. Our customers can taste the difference, and that's what keeps them coming back.",
    author: 'Sunita Desai',
    business: 'Organic Cafe Founder',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1579310962131-aa21f240d986?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  }
];

const StarIcon: React.FC = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.05 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
);


const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 6000); // Rotate every 6 seconds

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-[#FEFBF6] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center items-center h-96">
            <div className="absolute text-green-100/50 -top-10 -left-10 z-0">
                <svg width="404" height="404" fill="none" viewBox="0 0 404 404" role="img" aria-labelledby="svg-brush-pattern">
                    <title id="svg-brush-pattern">Decorative brush stroke pattern</title>
                    <defs>
                        <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57b989" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
                        </pattern>
                    </defs>
                    <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57b989)"></rect>
                </svg>
            </div>
            <div className="relative z-10 w-80 h-80 md:w-96 md:h-96">
              {testimonialsData.map((testimonial, index) => (
                   <img
                      key={index}
                      src={testimonial.image}
                      alt={`Customer ${testimonial.author}`}
                      className={`absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                   />
              ))}
            </div>
          </div>
          <div className="relative">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left">
                What Our Clients Say
             </h2>
             <div className="relative h-72 md:h-64">
                {testimonialsData.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {index === currentIndex && (
                             <blockquote className="space-y-6">
                                <p className="text-2xl text-gray-700 leading-relaxed italic">
                                    "{testimonial.quote}"
                                </p>
                                <footer className="flex items-center space-x-4">
                                    <img src={testimonial.avatar} alt={testimonial.author} className="w-16 h-16 rounded-full border-4 border-white shadow-md" />
                                    <div>
                                        <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                                        <div className="text-sm text-gray-500">{testimonial.business}</div>
                                        <div className="flex mt-1">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <StarIcon key={i} />
                                            ))}
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        )}
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;