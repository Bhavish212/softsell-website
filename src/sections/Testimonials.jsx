import React from 'react';
import { motion } from 'framer-motion';
import TestimonialImage from '../assets/customer testimonial.jpg';
import SectionWrapper from '../sections/SectionWrapper';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'IT Manager',
    company: 'TechCorp',
    text: 'SoftSell helped us recover value from old licenses.',
  },
  {
    name: 'John Smith',
    role: 'Founder',
    company: 'CloudEase',
    text: 'A smooth and transparent process.',
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper className="bg-gray-50 dark:bg-gray-800 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src={TestimonialImage} alt="Happy customers" className="mx-auto mb-8 w-full max-w-lg rounded-lg shadow" />
        <div className="flex flex-col md:flex-row justify-center gap-10 px-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="max-w-sm p-4 border rounded bg-white shadow dark:bg-gray-800 dark:border-gray-700"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="italic text-gray-700 dark:text-gray-200">"{t.text}"</p>
              <p className="mt-2 font-semibold text-gray-900 dark:text-white">{t.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t.role}, {t.company}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
