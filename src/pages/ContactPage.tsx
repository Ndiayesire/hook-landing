/**
 * ContactPage - Lumea-inspired design
 *
 * Contact form with modern styling, contact info cards,
 * and FAQ section.
 */

import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Calendar, ArrowRight, MessageSquare, Send, ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-primary/20 shadow-bento' : 'border-neutral-100 hover:border-neutral-200'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-neutral-900 pr-4">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-500'}`}>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6">
          <p className="text-neutral-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

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
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);

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

  const faqs = [
    {
      question: 'What industries do you serve?',
      answer: 'We work with clients across various industries including real estate, automotive, tourism, retail, financial services, and healthcare. Our solutions can be customized for any business that values customer interactions.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Basic implementation typically takes 2-4 weeks depending on the complexity of your requirements. This includes setup, integration with your existing systems, and initial training of the AI.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes, we offer a 14-day free trial of our SaaS platform so you can experience the benefits firsthand. During this period, you\'ll have access to all core features.'
    },
    {
      question: 'How does pricing work?',
      answer: 'Our pricing is based on a monthly subscription model with different tiers depending on your needs. Factors that influence pricing include conversation volume, feature requirements, and level of support needed.'
    }
  ];

  return (
    <>
      <SEO
        title="Contact HookTXT | Schedule Your ROI Consultation"
        description="Get in touch with HookTXT to discuss custom AI solutions for your business. Free consultation, no pressure."
        canonicalUrl="https://hooktxt.com/contact"
      />

      <section className="relative bg-white pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-50 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              <MessageSquare className="w-4 h-4 mr-1" />
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Have questions? Want to learn more? We're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                <Send className="w-4 h-4 mr-1" />
                Send a Message
              </span>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                How can we help?
              </h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">Your message has been received. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-neutral-700 mb-2">
                      I'm interested in
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      <option value="general">General Information</option>
                      <option value="ecommerce">E-commerce AI</option>
                      <option value="dealership">Dealership AI</option>
                      <option value="custom-ai">Custom AI Systems</option>
                      <option value="demo">Request a Demo</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all w-full md:w-auto"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Contact Info
              </span>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-neutral-100 p-6 hover:shadow-bento transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-2">Email Us</h3>
                      <p className="text-sm text-neutral-500 mb-1">General Inquiries</p>
                      <a href="mailto:info@hooktxt.com" className="text-primary hover:underline">
                        info@hooktxt.com
                      </a>
                      <p className="text-sm text-neutral-500 mt-2 mb-1">Support</p>
                      <a href="mailto:support@hooktxt.com" className="text-primary hover:underline">
                        support@hooktxt.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-100 p-6 hover:shadow-bento transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-2">Visit Us</h3>
                      <p className="text-neutral-600">
                        41 King West<br />
                        Sherbrooke<br />
                        Quebec, Canada<br />
                        J1H 1P1
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-100 p-6 hover:shadow-bento transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-2">Schedule a Demo</h3>
                      <p className="text-neutral-600 mb-4">
                        See our platform in action with a personalized demo.
                      </p>
                      <a
                        href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                      >
                        Book a Demo
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Interactions?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Get started with HookTXT today and see the difference conversational AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ecommerce-ai"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark rounded-full font-semibold hover:bg-neutral-100 transition-all"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/10"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
