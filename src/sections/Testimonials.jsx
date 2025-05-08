import React from 'react';
import { motion } from 'framer-motion';
import TestimonialImage from '../assets/customer testimonial.jpg';

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
    <motion.section
      className="py-16 bg-gray-50 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img
        src={TestimonialImage}
        alt="Happy customers"
        className="mx-auto mb-8 w-full max-w-lg rounded-lg shadow"
      />
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="max-w-sm p-4 border rounded bg-white shadow"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="italic">"{t.text}"</p>
            <p className="mt-2 font-semibold">{t.name}</p>
            <p className="text-sm text-gray-600">{t.role}, {t.company}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
