import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div>
          <h4 className="font-semibold mb-2">About MyShop</h4>
          <p className="text-sm">
            MyShop is your one-stop store for premium computer hardware and solar solutions. Quality guaranteed.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><NavLink to="/" className="hover:text-teal-500">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-teal-500">About</NavLink></li>
            <li><NavLink to="/products" className="hover:text-teal-500">Products</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-teal-500">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-6">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
