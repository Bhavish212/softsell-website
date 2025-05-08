import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleScroll = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      className="text-center py-20 bg-indigo-600 text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1 className="text-4xl font-bold mb-4" whileHover={{ scale: 1.05 }}>
        Turn Unused Software Into Profit
      </motion.h1>
      <p className="text-lg mb-6">
        Easily sell your unused software licenses and get paid in days.
      </p>
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white text-indigo-600 px-6 py-2 font-semibold rounded shadow hover:bg-gray-100"
        onClick={handleScroll}
      >
        Sell My Licenses
      </motion.button>
    </motion.section>
  );
}
