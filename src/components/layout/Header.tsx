/**
 * Header - Lumea-inspired navigation
 *
 * Clean header with products dropdown, pill-shaped buttons,
 * and smooth transitions.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingCart, Car, Cpu, ArrowRight } from 'lucide-react';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const products = [
    {
      name: 'E-commerce AI',
      description: 'Convert browsers into buyers 24/7',
      path: '/ecommerce-ai-agent',
      icon: ShoppingCart,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      name: 'Dealership AI',
      description: 'Never miss a lead, day or night',
      path: '/dealership-ai',
      icon: Car,
      color: 'bg-green-50 text-green-600'
    },
    {
      name: 'Custom AI',
      description: 'Enterprise-grade solutions',
      path: '/custom-ai-systems',
      icon: Cpu,
      color: 'bg-primary/10 text-primary'
    }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                location.pathname === '/'
                  ? 'bg-neutral-100 text-neutral-900'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              Home
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                  ['/ecommerce-ai-agent', '/dealership-ai', '/custom-ai-systems'].includes(location.pathname)
                    ? 'bg-neutral-100 text-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-float border border-neutral-100 p-2 animate-fade-in">
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-xl ${product.color} flex items-center justify-center flex-shrink-0`}>
                        <product.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900 text-sm">{product.name}</div>
                        <div className="text-xs text-neutral-500">{product.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                location.pathname.startsWith('/blog')
                  ? 'bg-neutral-100 text-neutral-900'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/about"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                location.pathname === '/about'
                  ? 'bg-neutral-100 text-neutral-900'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                location.pathname === '/contact'
                  ? 'bg-neutral-100 text-neutral-900'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://my.hooktxt.com/login"
              className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Log in
            </a>
            <a
              href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-all"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 animate-slide-down">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-1">
              <Link
                to="/"
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/' ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600'
                }`}
              >
                Home
              </Link>

              <div className="px-4 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Products
              </div>

              {products.map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    location.pathname === product.path ? 'bg-neutral-100' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg ${product.color} flex items-center justify-center`}>
                    <product.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-neutral-900">{product.name}</span>
                </Link>
              ))}

              <Link
                to="/blog"
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  location.pathname.startsWith('/blog') ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600'
                }`}
              >
                Blog
              </Link>

              <Link
                to="/about"
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/about' ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600'
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/contact' ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600'
                }`}
              >
                Contact
              </Link>

              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-neutral-100">
                <a
                  href="https://my.hooktxt.com/login"
                  className="px-4 py-3 text-center text-sm font-medium text-neutral-600 border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors"
                >
                  Log in
                </a>
                <a
                  href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-center text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-colors"
                >
                  Book a Demo
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
