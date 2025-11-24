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
    <footer className="bg-white text-gray-600 border-t border-gray-100">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-500 mt-4 text-sm">
              Merging automation with human empathy in every customer interaction.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/saas" className="text-gray-500 hover:text-primary transition-colors">SaaS Platform</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-500 hover:text-primary transition-colors">Chat Services</Link>
              </li>
              <li>
                <Link to="/custom-ai-systems" className="text-gray-500 hover:text-primary transition-colors">Custom AI Systems</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-500 hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-500">info@hooktxt.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-gray-400" />
                <span className="text-gray-500">41 King West, Sherbrooke<br />Québec, Canada, J1H 1P1</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Stay Updated</h4>
            <p className="text-gray-500 mb-4 text-sm">Subscribe to our newsletter for the latest updates.</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-2 rounded-md border text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm ${
                  error ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {error && (
                <p className="text-sm text-red-600 mt-1">{error}</p>
              )}
              {success && (
                <p className="text-sm text-green-600 mt-1">Successfully subscribed!</p>
              )}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full btn bg-primary text-white hover:bg-primary-dark transition-colors py-2 rounded-md text-sm ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} HookTXT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;