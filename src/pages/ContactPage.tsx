import React, { useState, useEffect } from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: 'general',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        interest: 'general',
      });
      setFormSubmitted(false);
    }, 5000);
  };

  useEffect(() => {
    document.title = 'Contact | HookTXT';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-accent2 text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Get In <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up">
              Have questions? Want to learn more? We're here to help.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-6 animate-fade-in">
                <h3 className="font-semibold text-lg mb-2">Thank You!</h3>
                <p>
                  Your message has been received. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-gray-700 font-medium mb-2">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  >
                    <option value="general">General Information</option>
                    <option value="saas">HookTXT SaaS Platform</option>
                    <option value="services">Chat Services</option>
                    <option value="custom-ai">Custom AI Systems</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing Information</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  ></textarea>
                </div>
                
                <div>
                  <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              We're available to answer your questions and provide more information about our services.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-1">Email Us</h3>
                  <p className="text-gray-600 mb-1">General Inquiries</p>
                  <a href="mailto:info@hooktxt.com" className="text-accent2 hover:text-primary transition-colors">
                    info@hooktxt.com
                  </a>
                  <p className="text-gray-600 mt-2 mb-1">Support</p>
                  <a href="mailto:support@hooktxt.com" className="text-accent2 hover:text-primary transition-colors">
                    support@hooktxt.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    41 King West<br />
                    Sherbrooke<br />
                    Quebec, Canada<br />
                    J1H 1P1
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-1">Schedule a Demo</h3>
                  <p className="text-gray-600 mb-3">
                    See our platform in action with a personalized demo.
                  </p>
                  <Button to="/demo" variant="outline">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
          <p className="text-primary-dark max-w-3xl mx-auto">
            Quick answers to common questions about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-soft">
            <h3 className="text-xl font-semibold mb-3 text-primary">What industries do you serve?</h3>
            <p className="text-gray-600">
              We work with clients across various industries including real estate, automotive, tourism, retail, financial services, and healthcare. Our solutions can be customized for any business that values customer interactions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-soft">
            <h3 className="text-xl font-semibold mb-3 text-primary">How long does implementation take?</h3>
            <p className="text-gray-600">
              Basic implementation typically takes 2-4 weeks depending on the complexity of your requirements. This includes setup, integration with your existing systems, and initial training of the AI with your company's information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-soft">
            <h3 className="text-xl font-semibold mb-3 text-primary">Do you offer a free trial?</h3>
            <p className="text-gray-600">
              Yes, we offer a 14-day free trial of our SaaS platform so you can experience the benefits firsthand. During this period, you'll have access to all core features and our team will be available to answer any questions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-soft">
            <h3 className="text-xl font-semibold mb-3 text-primary">How does pricing work?</h3>
            <p className="text-gray-600">
              Our pricing is based on a monthly subscription model with different tiers depending on your needs. Factors that influence pricing include conversation volume, feature requirements, and level of human support needed.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Customer Interactions?
            </h2>
            <p className="text-gray-100 text-lg mb-8">
              Get started with HookTXT today and see the difference conversational AI can make for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/trial" variant="secondary" size="lg" showTrialModal>
                Start Free Trial
              </Button>
              <Button to="/demo" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;