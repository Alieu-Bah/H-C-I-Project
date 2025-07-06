import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import logo from '../assets/logo.png'; // Place a high-resolution logo in src/assets/
import { CartContext } from '../context/CartContext';
export default function Header() {
  const { cartItems } = useContext(CartContext);
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="MyShop Logo"
            className="h-12 w-auto object-contain"
          />
        </NavLink>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-700 hover:text-teal-500 ${isActive ? 'font-semibold text-teal-600' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-700 hover:text-teal-500 ${isActive ? 'font-semibold text-teal-600' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-gray-700 hover:text-teal-500 ${isActive ? 'font-semibold text-teal-600' : ''}`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-gray-700 hover:text-teal-500 ${isActive ? 'font-semibold text-teal-600' : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Cart Icon & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/cart"
            className="relative text-gray-700 hover:text-teal-500"
          >
            <ShoppingCart size={24} />
            {/* Uncomment to show item count badge */}
           {cartItems?.length>0?
            <span className="absolute -top-1 -right-2 inline-flex items-center justify-center 
            px-1 py-1 text-xs font-bold leading-none text-white bg-red-300 rounded-full">
              {cartItems?.length}
            </span>
            :null}
          </NavLink>

          {/* Mobile menu toggle (optional) */}
          <button className="md:hidden focus:outline-none">
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      {
      <nav className="md:hidden bg-white">
        <NavLink to="/" className="block py-2 px-4">Home</NavLink>
        <NavLink to="/about" className="block py-2 px-4">About</NavLink>
        <NavLink to="/products" className="block py-2 px-4">Products</NavLink>
        <NavLink to="/contact" className="block py-2 px-4">Contact</NavLink>
      </nav>
      }
    </header>
  );
}
