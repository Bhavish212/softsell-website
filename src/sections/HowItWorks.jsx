import React from 'react';
import { motion } from 'framer-motion';
import HowItWorksImage from '../assets/how-it-works.jpg';

export default function HowItWorks() {
  const steps = [
    { title: 'Upload License', icon: '⬆️' },
    { title: 'Get Valuation', icon: '💰' },
    { title: 'Get Paid', icon: '✅' },
  ];

  return (
    <motion.section
      className="py-16 bg-gray-50 text-center"
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
            <div className="font-semibold">{step.title}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
