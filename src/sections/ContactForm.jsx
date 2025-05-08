import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GetInTouch from '../assets/get in touch.jpg';
import SectionWrapper from '../sections/SectionWrapper';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    license: '',
    message: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    setForm({ name: '', email: '', company: '', license: '', message: '' });
  };

  return (
    <div id="contact">
      <SectionWrapper className="bg-white dark:bg-gray-900 text-center pt-16 pb-20" id="contact">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={GetInTouch}
            alt="Get In Touch"
            className="mx-auto mb-8 w-full max-w-lg rounded-lg shadow"
          />
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4 px-4">
            {['name', 'email', 'company'].map((field, i) => (
              <input
                key={i}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field]}
                required
                onChange={handleChange}
                className="border p-2 rounded bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            ))}
            <select
              name="license"
              value={form.license}
              required
              onChange={handleChange}
              className="border p-2 rounded bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            >
              <option value="">Select License Type</option>
              <option value="Office">Microsoft Office</option>
              <option value="Adobe">Adobe Suite</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              required
              onChange={handleChange}
              className="border p-2 rounded bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
