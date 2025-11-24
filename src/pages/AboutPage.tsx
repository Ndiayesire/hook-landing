import React, { useEffect } from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { Heart, Target, Zap, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About | HookTXT';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-accent2 text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              The Story Behind <span className="text-secondary">HookTXT</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up">
              Our journey to merge automation with human empathy in every customer interaction.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-gray-600 mb-4">
              HookTXT began in 2020 when our founders recognized a fundamental problem in customer service: businesses were forced to choose between efficient automation and genuine human connection.
            </p>
            <p className="text-gray-600 mb-4">
              We believed this was a false choice. With the right technology and approach, businesses could have both – powerful AI efficiency alongside authentic human empathy.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of AI specialists, customer experience experts, and business leaders came together to create a solution that wouldn't just answer customer questions but would genuinely engage them in meaningful conversations.
            </p>
            <p className="text-gray-600">
              Today, HookTXT serves hundreds of businesses across multiple industries, helping them create exceptional customer experiences that drive real business results.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaboration" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </Section>

      {/* Mission & Values */}
      <Section background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Mission & Values</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            What drives us every day and shapes how we work with our clients and each other.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary text-center md:text-left">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700">
              To merge automation with human empathy in every customer interaction, creating conversational experiences that are both efficient and genuinely helpful.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
              <div className="bg-secondary rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-primary">Customer First</h4>
              <p className="text-gray-600">
                We believe in creating experiences that prioritize the customer's needs above all else.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
              <div className="bg-secondary rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-primary">Continuous Innovation</h4>
              <p className="text-gray-600">
                We're committed to constantly improving our technology and approaches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
              <div className="bg-secondary rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-primary">Human Connection</h4>
              <p className="text-gray-600">
                We believe technology should enhance rather than replace human connection.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Leadership Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet the experts behind HookTXT who are passionate about revolutionizing customer interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="h-64 bg-gray-200">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sarah Johnson" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary">Sarah Johnson</h3>
              <p className="text-accent2 mb-4">Co-Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                Former Head of Customer Experience at TechVision with 15+ years in customer service innovation.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-primary hover:text-accent2 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary hover:text-accent2 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="h-64 bg-gray-200">
              <img 
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Michael Rodriguez" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary">Michael Rodriguez</h3>
              <p className="text-accent2 mb-4">Co-Founder & CTO</p>
              <p className="text-gray-600 mb-4">
                AI expert with previous experience at leading tech companies, specializing in conversational AI.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-primary hover:text-accent2 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary hover:text-accent2 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="h-64 bg-gray-200">
              <img 
                src="https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Jennifer Lee" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary">Jennifer Lee</h3>
              <p className="text-accent2 mb-4">Chief Product Officer</p>
              <p className="text-gray-600 mb-4">
                Product strategy expert focused on creating intuitive, powerful solutions for customer engagement.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-primary hover:text-accent2 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary hover:text-accent2 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Journey</h2>
          <p className="text-primary-dark max-w-3xl mx-auto">
            Key milestones in our mission to transform customer interactions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary bg-opacity-30"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {/* 2020 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-2xl font-bold text-primary mb-2">2020</h3>
                  <h4 className="text-xl font-semibold text-accent2 mb-3">Company Founded</h4>
                  <p className="text-gray-700">HookTXT is founded with a mission to transform customer interactions through conversational AI.</p>
                </div>
                <div className="md:pl-12">
                  <div className="bg-white p-4 rounded-lg shadow-soft">
                    <img 
                      src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Company founding" 
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2021 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:pr-12 md:order-2">
                  <h3 className="text-2xl font-bold text-primary mb-2">2021</h3>
                  <h4 className="text-xl font-semibold text-accent2 mb-3">First Platform Release</h4>
                  <p className="text-gray-700">Launch of our first conversational AI platform, serving clients in real estate and automotive industries.</p>
                </div>
                <div className="md:pl-12 md:order-1 md:text-right">
                  <div className="bg-white p-4 rounded-lg shadow-soft">
                    <img 
                      src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Platform launch" 
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2022 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-2xl font-bold text-primary mb-2">2022</h3>
                  <h4 className="text-xl font-semibold text-accent2 mb-3">Custom AI Systems Launch</h4>
                  <p className="text-gray-700">Introduction of our multi-agent AI systems and dual dashboard platform, helping businesses generate revenue 24/7 with complete transparency.</p>
                </div>
                <div className="md:pl-12">
                  <div className="bg-white p-4 rounded-lg shadow-soft">
                    <img
                      src="https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Custom AI Systems launch" 
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:pr-12 md:order-2">
                  <h3 className="text-2xl font-bold text-primary mb-2">2023</h3>
                  <h4 className="text-xl font-semibold text-accent2 mb-3">Series A Funding</h4>
                  <p className="text-gray-700">Secured $15M in Series A funding to accelerate growth and product development.</p>
                </div>
                <div className="md:pl-12 md:order-1 md:text-right">
                  <div className="bg-white p-4 rounded-lg shadow-soft">
                    <img 
                      src="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Funding round" 
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2024 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-2xl font-bold text-primary mb-2">2024</h3>
                  <h4 className="text-xl font-semibold text-accent2 mb-3">Global Expansion</h4>
                  <p className="text-gray-700">Expanded into European and Asian markets, now serving clients in over 15 countries.</p>
                </div>
                <div className="md:pl-12">
                  <div className="bg-white p-4 rounded-lg shadow-soft">
                    <img 
                      src="https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Global expansion" 
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Want to Be Part of Our Story?
            </h2>
            <p className="text-gray-100 text-lg mb-8">
              Join us in our mission to transform customer interactions through conversational AI.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/demo" variant="secondary" size="lg">
                Book a Demo
              </Button>
              <Button to="/careers" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                View Careers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;