import React, { useEffect } from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { MessageSquare, Users, Code, Settings, Headset, BarChart2, CheckCircle2, Zap } from 'lucide-react';
import Card from '../components/common/Card';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Chat Services | HookTXT';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-accent2 text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              We Manage Your Chat, <span className="text-secondary">End-to-End</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up">
              Let our team build, train, and monitor your chatbot—with human backup 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button to="/contact" variant="secondary" size="lg">
                Let's Talk
              </Button>
              <Button to="/demo" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Process Overview */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A comprehensive approach to creating effective conversational AI solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Step 1: Build */}
          <div className="text-center">
            <div className="bg-secondary bg-opacity-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Code className="h-10 w-10 text-primary" />
            </div>
            <div className="relative mb-6 h-1 bg-gray-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">1. Build</h3>
            <p className="text-gray-600">
              We design and develop a custom chatbot tailored to your specific business needs and customer base.
            </p>
          </div>

          {/* Step 2: Train */}
          <div className="text-center">
            <div className="bg-secondary bg-opacity-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Settings className="h-10 w-10 text-primary" />
            </div>
            <div className="relative mb-6 h-1 bg-gray-200">
              <div className="absolute top-0 left-0 w-3/4 h-1 bg-primary"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">2. Train</h3>
            <p className="text-gray-600">
              We train your chatbot with industry-specific knowledge and your company's information for accurate responses.
            </p>
          </div>

          {/* Step 3: Optimize */}
          <div className="text-center">
            <div className="bg-secondary bg-opacity-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <BarChart2 className="h-10 w-10 text-primary" />
            </div>
            <div className="relative mb-6 h-1 bg-gray-200">
              <div className="absolute top-0 left-0 w-1/2 h-1 bg-primary"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">3. Optimize</h3>
            <p className="text-gray-600">
              We continuously improve your chatbot's performance through regular analysis and data-driven updates.
            </p>
          </div>

          {/* Step 4: Support */}
          <div className="text-center">
            <div className="bg-secondary bg-opacity-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Headset className="h-10 w-10 text-primary" />
            </div>
            <div className="relative mb-6 h-1 bg-gray-200">
              <div className="absolute top-0 left-0 w-1/4 h-1 bg-primary"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">4. Support</h3>
            <p className="text-gray-600">
              Our human agents provide backup support for complex inquiries, ensuring no customer is left unattended.
            </p>
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Industry Use Cases</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses across different industries enhance their customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Real Estate */}
          <Card hover className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Real Estate</h3>
            <p className="text-gray-600 mb-6">
              Our chatbots help real estate agencies qualify leads, answer property questions, and schedule viewings 24/7.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>45% increase in qualified leads</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>24/7 property information</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Automated viewing scheduling</span>
              </div>
            </div>
            <div className="mt-auto">
              <Button to="/case-studies/real-estate" variant="outline">
                View Case Study
              </Button>
            </div>
          </Card>

          {/* Automotive */}
          <Card hover className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Automotive</h3>
            <p className="text-gray-600 mb-6">
              Automotive dealerships use our chatbots to answer vehicle questions, book test drives, and provide service information.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>35% more test drive bookings</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Instant vehicle specification info</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Service appointment scheduling</span>
              </div>
            </div>
            <div className="mt-auto">
              <Button to="/case-studies/automotive" variant="outline">
                View Case Study
              </Button>
            </div>
          </Card>

          {/* Tourism */}
          <Card hover className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Tourism</h3>
            <p className="text-gray-600 mb-6">
              Tourism companies leverage our chatbots to provide destination information, answer booking questions, and offer travel recommendations.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>52% increase in online bookings</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Personalized travel recommendations</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Multilingual support</span>
              </div>
            </div>
            <div className="mt-auto">
              <Button to="/case-studies/tourism" variant="outline">
                View Case Study
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Human-Backed Support */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Human-Backed Live Chat</h2>
            <p className="text-gray-600 mb-6">
              While AI handles the majority of inquiries, our trained human agents are ready to step in for complex situations that require a personal touch.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Zap className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Seamless Handoffs</h4>
                  <p className="text-gray-600">AI-to-human transitions are smooth and contextual, preserving conversation history.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Expert Agents</h4>
                  <p className="text-gray-600">Our agents are trained in your industry and your specific business processes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageSquare className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">24/7 Availability</h4>
                  <p className="text-gray-600">Round-the-clock support ensures your customers always get the help they need.</p>
                </div>
              </div>
            </div>
            <Button to="/contact" variant="primary">
              Learn More
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://i.ibb.co/r2bBQJ35/dashboard.png" 
              alt="Customer support agent" 
              className="rounded-xl shadow-medium w-full h-auto"
            />
          </div>
        </div>
      </Section>

      {/* Client Logos */}
      <Section background="secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Trusted By</h2>
          <p className="text-primary-dark max-w-3xl mx-auto">
            Join these industry leaders who have transformed their customer experiences with HookTXT.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <div className="bg-white p-4 rounded-lg shadow-soft w-40 h-20 flex items-center justify-center overflow-hidden">
            <img src="https://tourismebrome-missisquoi.ca/app/themes/baserock/assets/img/logo_tourisme-cantons-de-lest-fr-v2.png" alt="Tourisme Cantons de l'Est" className="h-full w-full object-contain" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-soft w-40 h-20 flex items-center justify-center overflow-hidden">
            <img src="https://www.villasport.com/the-woodlands/wp-content/themes/villasport/assets/src/images/logo-athletic.png" alt="VillaSport" className="h-full w-full object-contain" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-soft w-40 h-20 flex items-center justify-center overflow-hidden">
            <img src="https://360.agency/wp-content/uploads/2021/09/logo_dark_360.agency-400x135-1.png" alt="360.agency" className="h-full w-full object-contain" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-soft w-40 h-20 flex items-center justify-center overflow-hidden">
            <img src="https://www.chauffeur-services.com/wp-content/uploads/cs-logo_horizontal.svg" alt="Chauffeur Services" className="h-full w-full object-contain" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-soft w-40 h-20 flex items-center justify-center overflow-hidden">
            <img src="https://www.vivreenresidence.com/img/logo.svg" alt="Vivre en Résidence" className="h-full w-full object-contain" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-soft w-40 h-20 flex items-center justify-center overflow-hidden">
            <img src="https://www.speedyglass.ca/includes/images/SpeedyGlass-2-logo-fr_CA.png" alt="Speedy Glass" className="h-full w-full object-contain" />
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-6 rounded-xl shadow-soft max-w-2xl mx-auto">
            <p className="text-lg italic text-gray-600 mb-4">
              "HookTXT's services have transformed our customer support experience. The combination of AI efficiency with human expertise has increased our conversion rates while reducing our response times."
            </p>
            <div>
              <p className="font-semibold text-primary">Sarah J.</p>
              <p className="text-gray-500">VP of Customer Experience</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Elevate Your Customer Experience?
            </h2>
            <p className="text-gray-100 text-lg mb-8">
              Let our team of experts handle your chat services from setup to ongoing optimization.
            </p>
            
            <Button to="/contact" variant="secondary" size="lg">
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;