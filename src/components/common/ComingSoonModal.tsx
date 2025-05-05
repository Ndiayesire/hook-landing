import React, { useState } from 'react';

const WEBHOOK_URL = 'https://hooktxt.app.n8n.cloud/webhook-test/64952ad7-48f4-4c93-b0d2-6df6d1a3daa7';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Basic email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email before submission
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setError('');

    try {
      // Log submission attempt for debugging
      console.log('Submitting waitlist form with email:', email);
      
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'ChatInsight Waitlist',
          date: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      
      console.log('Form submitted successfully');
      setSubmitted(true);
      setEmail('');
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to join waitlist. Please try again later or contact support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-primary bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        {submitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-primary mb-3">Thank You!</h3>
            <p className="text-gray-600 mb-4">
              You've been added to our waitlist. We'll notify you when our trial program launches in June 2025.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-primary mb-3">Join the Waitlist</h3>
            <p className="text-gray-600 mb-4">
              Be the first to know when our trial program launches in June 2025. Get early access and exclusive offers!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                    error ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={isSubmitting}
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                )}
              </div>
              <button
                type="submit"
                className={`w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className={`w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                Maybe Later
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ComingSoonModal;