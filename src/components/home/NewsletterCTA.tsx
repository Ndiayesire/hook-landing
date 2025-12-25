/**
 * NewsletterCTA - Newsletter signup call to action
 *
 * Teal gradient background with email signup form,
 * similar to Lumea's final CTA section.
 */

import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const WEBHOOK_URL = 'https://hooktxt.app.n8n.cloud/webhook-test/64952ad7-48f4-4c93-b0d2-6df6d1a3daa7';

const NewsletterCTA: React.FC = () => {
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
          source: 'Homepage Newsletter CTA',
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

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Never miss an idea or insight
          </h2>
          <p className="text-xl text-white/70 mb-8">
            AI-powered engagement tools do it all
          </p>
          <p className="text-white/50 mb-10 max-w-xl mx-auto">
            Capture, organize and enhance every customer interaction with AI-powered insights at your fingertips.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-4 bg-white text-primary rounded-full font-semibold hover:bg-neutral-100 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                Submit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            {error && <p className="text-red-300 text-sm mt-3">{error}</p>}
            {success && <p className="text-green-300 text-sm mt-3">Successfully subscribed!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
