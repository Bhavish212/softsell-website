import React from 'react';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import ContactForm from './sections/ContactForm';
import ChatWidget from './sections/ChatWidget';
import ThemeToggle from './sections/ThemeToggle';
import SectionWrapper from './sections/SectionWrapper';
import Footer from './sections/Footer';
export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <ThemeToggle />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
      <SectionWrapper />
      <Footer />
    </div>
  );
}
