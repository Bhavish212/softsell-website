import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      className="text-center py-20 bg-indigo-600 text-white dark:bg-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      <motion.h1
        className="text-4xl font-bold mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        Turn Unused Software Into Profit
      </motion.h1>

      <p className="text-lg mb-6">
        Easily sell your unused software licenses and get paid in days.
      </p>

      <motion.a
        href="#contact"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 80 }}
        className="inline-block bg-white text-indigo-600 px-6 py-2 font-semibold rounded shadow hover:bg-gray-100 dark:bg-gray-100 dark:text-indigo-600 dark:hover:bg-gray-200 transition-colors"
      >
        Sell My Licenses
      </motion.a>
    </motion.section>
  );
}
