
import React, { useState } from 'react';
import type { FAQ } from '../types';

const faqs: FAQ[] = [
  {
    question: 'What are your minimum order quantities?',
    answer: 'Our minimum order quantity varies depending on the product and your location. Please get in touch with our sales team through the contact form for specific details regarding your business needs.',
  },
  {
    question: 'How do you ensure the freshness of the vegetables?',
    answer: 'We have a streamlined supply chain where we source directly from market yards, perform rigorous quality checks at our warehouse, and use temperature-controlled vehicles for delivery to maintain peak freshness.',
  },
  {
    question: 'Do you offer credit facilities?',
    answer: 'Yes, we offer credit facilities to our regular clients based on their order history and business relationship with us. Terms and conditions apply.',
  },
  {
    question: 'What areas do you deliver to?',
    answer: 'We currently deliver to a wide range of areas within the city and surrounding suburbs. Contact us with your location to confirm if we service your area.',
  },
  {
    question: 'How can I place an order?',
    answer: 'You can place an order by filling out the contact form on our website with your requirements. Our team will get back to you promptly to confirm the order and delivery details.',
  },
];

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);

const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const FAQItem: React.FC<{ faq: FAQ; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className={`bg-white rounded-xl transition-all duration-300 mb-4 ${isOpen ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}`}>
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left p-6"
                aria-expanded={isOpen}
            >
                <h3 className={`text-lg font-medium ${isOpen ? 'text-gray-900' : 'text-gray-800'}`}>{faq.question}</h3>
                <span>{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
            </button>
            <div
                style={{ maxHeight: isOpen ? '200px' : '0px' }}
                className="transition-max-height duration-700 ease-in-out overflow-hidden"
            >
                <p className="text-gray-600 px-6 pb-6 pr-12">{faq.answer}</p>
            </div>
        </div>
    );
};


const FAQNewsletter: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(1);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Newsletter signup:", email);
        setEmail('');
        alert("Thank you for subscribing!");
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 py-2 px-4 rounded-full">
                        Frequently Asked Questions
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                        Have any thoughts? Look here
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="mt-24 max-w-4xl mx-auto bg-blue-50/70 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
                    <div 
                        className="absolute inset-0 z-0 opacity-20" 
                        style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3e%3cpath d='M0 50 Q 25 25, 50 50 T 100 50' stroke='%2393c5fd' stroke-width='2' fill='none'/%3e%3cpath d='M0 60 Q 25 35, 50 60 T 100 60' stroke='%2393c5fd' stroke-width='2' fill='none'/%3e%3cpath d='M0 70 Q 25 45, 50 70 T 100 70' stroke='%2393c5fd' stroke-width='2' fill='none'/%3e%3cpath d='M0 80 Q 25 55, 50 80 T 100 80' stroke='%2393c5fd' stroke-width='2' fill='none'/%3e%3cpath d='M0 90 Q 25 65, 50 90 T 100 90' stroke='%2393c5fd' stroke-width='2' fill='none'/%3e%3c/svg%3e")`, backgroundRepeat: 'repeat', backgroundSize: '200px auto'}}>
                    </div>
                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Sign up to our newsletter
                        </h2>
                        <p className="mt-3 text-gray-600 text-lg max-w-md mx-auto">
                            Receive latest news, updates and many other news every week.
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="mt-8 max-w-lg mx-auto">
                            <div className="flex items-center bg-white rounded-full shadow-md p-2">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    required
                                    className="w-full bg-transparent px-4 py-2 text-gray-700 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="flex-shrink-0 bg-blue-500 hover:bg-blue-600 rounded-full p-3 transition-colors duration-300"
                                    aria-label="Subscribe to newsletter"
                                >
                                    <ArrowRightIcon />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQNewsletter;
