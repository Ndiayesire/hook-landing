/**
 * AboutPage - Lumea-inspired design
 *
 * Company story, mission, values, team, and timeline
 * with modern clean styling.
 */

import React from 'react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { Heart, Target, Zap, Users, ArrowRight, Building, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We believe in creating experiences that prioritize the customer\'s needs above all else.',
      color: 'primary'
    },
    {
      icon: Zap,
      title: 'Continuous Innovation',
      description: 'We\'re committed to constantly improving our technology and approaches.',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Human Connection',
      description: 'We believe technology should enhance rather than replace human connection.',
      color: 'blue'
    }
  ];

  const colorClasses = {
    primary: { bg: 'bg-primary/10', icon: 'text-primary' },
    green: { bg: 'bg-green-50', icon: 'text-green-600' },
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600' }
  };

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Co-Founder & CEO',
      bio: 'Former Head of Customer Experience at TechVision with 15+ years in customer service innovation.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Co-Founder & CTO',
      bio: 'AI expert with previous experience at leading tech companies, specializing in conversational AI.',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Jennifer Lee',
      role: 'Chief Product Officer',
      bio: 'Product strategy expert focused on creating intuitive, powerful solutions for customer engagement.',
      image: 'https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const timeline = [
    { year: '2020', title: 'Company Founded', description: 'HookTXT is founded with a mission to transform customer interactions through conversational AI.' },
    { year: '2021', title: 'First Platform Release', description: 'Launch of our first conversational AI platform, serving clients in real estate and automotive industries.' },
    { year: '2022', title: 'Custom AI Systems Launch', description: 'Introduction of our multi-agent AI systems and dual dashboard platform.' },
    { year: '2023', title: 'Series A Funding', description: 'Secured $15M in Series A funding to accelerate growth and product development.' },
    { year: '2024', title: 'Global Expansion', description: 'Expanded into European and Asian markets, now serving clients in over 15 countries.' }
  ];

  return (
    <>
      <SEO
        title="About HookTXT | The Story Behind AI That Actually Works"
        description="Learn how HookTXT is revolutionizing business with custom multi-agent AI systems. Our mission: merge automation with results."
        canonicalUrl="https://hooktxt.com/about"
      />

      <section className="relative bg-white pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-50 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              <Building className="w-4 h-4 mr-1" />
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] mb-6">
              The Story Behind <span className="text-primary">HookTXT</span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our journey to merge automation with human empathy in every customer interaction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Building AI That Actually Works
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  HookTXT began in 2020 when our founders recognized a fundamental problem: businesses were forced to choose between efficient automation and genuine human connection.
                </p>
                <p>
                  We believed this was a false choice. With the right technology, businesses could have both--powerful AI efficiency alongside authentic human empathy.
                </p>
                <p>
                  Today, HookTXT serves hundreds of businesses across multiple industries, helping them create exceptional customer experiences that drive real business results.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-float">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-bento border border-neutral-100 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">Since 2020</p>
                    <p className="text-xs text-neutral-500">Building AI solutions</p>
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
              <Target className="w-4 h-4 mr-1" />
              Mission & Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              What Drives Us
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl border border-neutral-100 p-8 lg:p-12 mb-12 shadow-bento">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Our Mission</h3>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed">
                To merge automation with human empathy in every customer interaction, creating conversational experiences that are both efficient and genuinely helpful.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const colors = colorClasses[value.color as keyof typeof colorClasses];
                return (
                  <div key={index} className="bg-white rounded-2xl border border-neutral-100 p-6 hover:shadow-bento transition-all duration-300">
                    <div className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center mb-4`}>
                      <value.icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <h4 className="text-lg font-bold text-neutral-900 mb-2">{value.title}</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              <Users className="w-4 h-4 mr-1" />
              Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Our Leadership Team
            </h2>
            <p className="text-lg text-neutral-600">
              Meet the experts behind HookTXT who are passionate about revolutionizing customer interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:shadow-bento transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Timeline
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Our Journey
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {item.year.slice(2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-primary/20 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-white rounded-2xl border border-neutral-100 p-6 hover:shadow-bento transition-all duration-300">
                      <div className="text-sm text-primary font-medium mb-1">{item.year}</div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                      <p className="text-neutral-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Want to Be Part of Our Story?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Join us in our mission to transform customer interactions through conversational AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark rounded-full font-semibold hover:bg-neutral-100 transition-all"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/10"
              >
                View Careers
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
