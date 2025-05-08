import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">SoftSell</h3>
          <p className="text-sm">
            SoftSell helps you turn unused software licenses into cash. Safe, fast, and simple — start selling today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#contact" className="hover:underline">Sell License</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="text-sm space-y-2">
            <li>Email: support@softsell.io</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Location: Remote • Worldwide</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t pt-6 text-center text-xs text-gray-500 dark:border-gray-700">
        &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
      </div>
    </footer>
  );
}
