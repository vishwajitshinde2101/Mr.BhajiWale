import React, { useState } from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon, ClockIcon } from './icons';

const contactDetails = [
  {
    icon: <MailIcon />,
    title: 'Email Us',
    contact: 'contact@mrbhajiwale.com',
    link: 'mailto:contact@mrbhajiwale.com',
    description: 'Get in touch for quotes and queries.',
  },
  {
    icon: <PhoneIcon />,
    title: 'Call Us',
    contact: '+91 98765 43210',
    link: 'tel:+919876543210',
    description: 'Speak with our team directly.',
  },
  {
    icon: <LocationMarkerIcon />,
    title: 'Visit Us',
    contact: 'APMC Market, Pune, MH',
    link: '#',
    description: 'Find us at the heart of the market.',
  },
  {
    icon: <ClockIcon />,
    title: 'Business Hours',
    contact: 'Mon - Sat: 9am - 7pm',
    link: '#',
    description: 'We are open for business.',
  },
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    contact: '',
    location: '',
    requirements: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      businessName: '',
      contact: '',
      location: '',
      requirements: '',
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[#FEFBF6] py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-green-200 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-yellow-200 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
                Let's Connect
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                Have a question or a project in mind? We'd love to hear from you. Fill out the form or use the contact details below to get in touch.
              </p>
            </div>
            <div className="relative flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                alt="Team collaborating in a modern office"
                className="rounded-2xl shadow-2xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How to Reach Us</h2>
            <p className="text-gray-600 mt-3 text-lg">We're available through various channels for your convenience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactDetails.map((item, index) => (
              <div key={index} className="bg-gray-50/80 p-6 rounded-2xl text-center flex flex-col items-center border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                 <div className="flex justify-center items-center mb-5 text-green-500 bg-green-50 rounded-full w-16 h-16 mx-auto">
                    {item.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
                <a href={item.link} className="text-green-600 font-medium break-all">{item.contact}</a>
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-form-section" className="py-20 bg-[#FEFBF6]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mt-4 max-w-md mx-auto lg:mx-0 text-lg">
                Ready to partner with us? Fill out the form, and our team will contact you shortly to discuss your vegetable supply needs.
              </p>
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1740&auto=format&fit=crop" alt="Close-up of a variety of fresh vegetables in boxes" className="rounded-2xl shadow-xl mt-8 mx-auto lg:mx-0" />
            </div>
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl">
              {isSubmitted ? (
                <div className="text-center p-8 bg-green-50 text-green-800 rounded-lg">
                  <h3 className="text-2xl font-semibold">Thank You!</h3>
                  <p className="mt-2">Your quote request has been sent successfully. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
                    <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
                    <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">Requirements</label>
                    <textarea id="requirements" name="requirements" value={formData.requirements} onChange={handleChange} rows={4} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md">
                      Submit Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;