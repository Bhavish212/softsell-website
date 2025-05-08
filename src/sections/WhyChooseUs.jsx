import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../sections/SectionWrapper';
import WhyChooseUsImage from '../assets/why choose us.jpg';
import FastPayoutIcon from '../assets/fast.jpg';
import VerifiedBuyersIcon from '../assets/verified.png';
import NoFeesIcon from '../assets/no fees.jpg';
import SupportIcon from '../assets/support.jpg';

export default function WhyChooseUs() {
  const features = [
    { title: 'Fast Payouts', desc: 'Get money within 48 hours.', icon: FastPayoutIcon },
    { title: 'Verified Buyers', desc: 'Secure transactions every time.', icon: VerifiedBuyersIcon },
    { title: 'No Hidden Fees', desc: 'What you see is what you get.', icon: NoFeesIcon },
    { title: '24/7 Support', desc: "We're here whenever you need.", icon: SupportIcon },
  ];

  return (
    <SectionWrapper className="bg-white dark:bg-gray-900 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src={WhyChooseUsImage} alt="Why Choose Us" className="mx-auto mb-8 w-full max-w-lg rounded-lg shadow" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="p-4 border rounded shadow bg-white dark:bg-gray-800 dark:border-gray-700"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={f.icon} alt={f.title} className="w-14 h-14 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
