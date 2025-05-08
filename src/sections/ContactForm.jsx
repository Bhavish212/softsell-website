import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GetInTouch from '../assets/get in touch.jpg';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Form submitted!');
    setForm({ name: '', email: '', company: '', license: '', message: '' });
  };

  return (
    <motion.section
      id="contact"
      className="py-16 bg-white text-center"
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
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
        <input name="name" placeholder="Name" value={form.name} required onChange={handleChange} className="border p-2" />
        <input name="email" type="email" placeholder="Email" value={form.email} required onChange={handleChange} className="border p-2" />
        <input name="company" placeholder="Company" value={form.company} required onChange={handleChange} className="border p-2" />
        <select name="license" value={form.license} required onChange={handleChange} className="border p-2">
          <option value="">Select License Type</option>
          <option value="Office">Microsoft Office</option>
          <option value="Adobe">Adobe Suite</option>
        </select>
        <textarea name="message" placeholder="Message" value={form.message} required onChange={handleChange} className="border p-2" />
        <motion.button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-6 rounded"
          whileTap={{ scale: 0.97 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.section>
  );
}
