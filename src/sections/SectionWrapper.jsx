import React from 'react';

const SectionWrapper = ({ children, className = '' }) => {
  return (
    <section
      className={`py-16 px-4 border-t border-gray-200 dark:border-gray-700 
                  bg-white dark:bg-gray-900 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
