import React from 'react';
import { motion } from 'framer-motion';
import HowItWorksImage from '../assets/how-it-works.jpg';
import SectionWrapper from '../sections/SectionWrapper';

export default function HowItWorks() {
  const steps = [
    { title: 'Upload License', icon: '⬆️' },
    { title: 'Get Valuation', icon: '💰' },
    { title: 'Get Paid', icon: '✅' },
  ];

  return (
    <SectionWrapper className="bg-gray-50 dark:bg-gray-800 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src={HowItWorksImage} alt="How It Works" className="mx-auto mb-8 w-full max-w-lg rounded-lg shadow" />
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl">{step.icon}</div>
              <div className="font-semibold text-gray-800 dark:text-white">{step.title}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
