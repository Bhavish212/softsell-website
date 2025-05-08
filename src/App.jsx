import React from 'react';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import ContactForm from './sections/ContactForm';
import ChatWidget from './sections/ChatWidget';
export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </div>
  );
}
