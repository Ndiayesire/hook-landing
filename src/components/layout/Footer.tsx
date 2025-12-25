/**
 * Footer - Lumea-inspired dark footer
 *
 * Multi-column layout with newsletter signup
 * and social links using teal accent colors.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, Linkedin, Twitter } from 'lucide-react';
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
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          source: 'Newsletter Subscription',
          date: new Date().toISOString()
        })
      });

      if (!response.ok) throw new Error('Request failed');
      setSuccess(true);
      setEmail('');
    } catch {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const products = [
    { name: 'E-commerce AI', path: '/ecommerce-ai-agent' },
    { name: 'Dealership AI', path: '/dealership-ai' },
    { name: 'Custom AI', path: '/custom-ai-systems' },
  ];

  const company = [
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered customer engagement that actually closes deals. Stop losing leads to generic chatbots.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/hooktxt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Twitter className="w-4 h-4 text-white/70" />
              </a>
              <a
                href="https://linkedin.com/company/hooktxt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">
              Get the latest AI insights delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {error && <p className="text-red-400 text-xs">{error}</p>}
              {success && <p className="text-green-400 text-xs">Successfully subscribed!</p>}
            </form>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@hooktxt.com</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Sherbrooke, Quebec, Canada</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/40">
            {legal.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-white/30">
          &copy; {currentYear} HookTXT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
