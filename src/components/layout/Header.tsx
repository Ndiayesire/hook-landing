import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
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
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'SaaS', path: '/saas' },
    { name: 'Services', path: '/services' },
    { name: 'ChatInsight', path: '/chatinsight' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-gray-700 hover:text-primary font-medium transition-colors text-sm ${
                  location.pathname === link.path ? 'text-primary font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors flex items-center text-sm"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Book a Demo
            </a>
            <Link
              to="http://my.hooktxt.com/login"
              className="ml-4 px-4 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm"
            >
              Log in
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md animate-slide-down">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-gray-700 hover:text-primary py-2 font-medium transition-colors ${
                    location.pathname === link.path ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
                target="_blank"
                rel="noopener noreferrer" 
                className="px-4 py-2 rounded-md bg-primary text-white text-center mt-4 hover:bg-primary-dark transition-colors"
              >
                Book a Demo
              </a>
              <Link to="http://my.hooktxt.com/login" className="px-4 py-2 rounded-md border border-gray-200 text-gray-700 text-center mt-2 hover:bg-gray-50 transition-colors">
                Log in
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;