import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import Logo from '../common/Logo';

const WEBHOOK_URL = 'https://hooktxt.app.n8n.cloud/webhook-test/64952ad7-48f4-4c93-b0d2-6df6d1a3daa7';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      // Log submission attempt for debugging
      console.log('Submitting newsletter form with email:', email);
      
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'Newsletter Subscription',
          date: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      console.log('Newsletter submission completed');
      setSuccess(true);
      setEmail('');
    } catch (err) {
      console.error('Error submitting newsletter form:', err);
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Merging automation with human empathy in every customer interaction.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-teal-light transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-light transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-light transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-light transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-light transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/custom-ai-systems" className="text-gray-400 hover:text-teal-light transition-colors duration-200">Custom AI Systems</Link>
              </li>
              <li>
                <Link to="/dealership-ai" className="text-gray-400 hover:text-teal-light transition-colors duration-200">Dealership AI</Link>
              </li>
              <li>
                <Link to="/ecommerce-ai-agent" className="text-gray-400 hover:text-teal-light transition-colors duration-200">Ecommerce AI</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-teal-light transition-colors duration-200">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-light transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-teal-light transition-colors duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-teal-light transition-colors duration-200">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-400">info@hooktxt.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-gray-400" />
                <span className="text-gray-400">41 King West, Sherbrooke<br />Québec, Canada, J1H 1P1</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Stay Updated</h4>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">Subscribe to our newsletter for the latest updates.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-full bg-gray-800 border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-light focus:border-teal-light text-sm transition-all duration-200 ${
                  error ? 'border-red-500' : 'border-gray-700'
                }`}
              />
              {error && (
                <p className="text-sm text-red-400 mt-1">{error}</p>
              )}
              {success && (
                <p className="text-sm text-emerald mt-1">Successfully subscribed!</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl text-sm font-semibold ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} HookTXT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;