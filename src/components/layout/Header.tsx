/**
 * Header Component - NuroAI-Inspired Floating Navigation
 *
 * Floating pill-shaped header with centered navigation and
 * elegant hover states. Inspired by modern SaaS designs.
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Product', path: '/custom-ai-systems' },
    { name: 'Pricing', path: '/contact' },
    { name: 'Resources', path: '/dealership-ai' },
    { name: 'Blogs', path: '/blog' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300 pt-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex justify-between items-center h-14 px-6 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-md'
              : 'bg-white/90 backdrop-blur-sm shadow-soft'
          }`}
        >
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-gray-600 hover:text-primary font-medium transition-colors text-sm ${
                  location.pathname === link.path ? 'text-primary' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="http://my.hooktxt.com/login"
              className="px-4 py-2 text-gray-600 hover:text-primary font-medium transition-colors text-sm"
            >
              Sign in
            </Link>
            <a
              href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md"
            >
              Sign up
            </a>
          </div>

          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-2 mx-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-gray-700 hover:text-primary hover:bg-neutral-50 py-3 px-4 rounded-lg font-medium transition-all ${
                      location.pathname === link.path ? 'text-primary bg-primary/5' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-100 space-y-2">
                  <Link
                    to="http://my.hooktxt.com/login"
                    className="block px-4 py-3 text-gray-700 hover:bg-neutral-50 rounded-lg text-center font-medium transition-colors"
                  >
                    Sign in
                  </Link>
                  <a
                    href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 rounded-full bg-primary text-white text-center font-medium hover:bg-primary-dark transition-colors"
                  >
                    Sign up
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
