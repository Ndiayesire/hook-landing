/**
 * CompetitiveAdvantagesSection Component
 *
 * Showcases 7 key competitive advantages of the dual dashboard system
 * including transparency, proactive communication, operational efficiency,
 * superior client experience, accountability, scalability, and data-driven improvement.
 */

import React from 'react';
import Section from '../common/Section';
import { Shield, MessageCircle, Gauge, Star, Target, TrendingUp, Database } from 'lucide-react';

const CompetitiveAdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: Shield,
      title: 'Total Transparency = Reinforced Trust',
      color: 'primary',
      forYou: [
        'Eliminates the "what\'s going on?" anxiety',
        'Feel involved and in control',
        'Can intervene quickly if something\'s off',
        'Continuous validation vs. one big final review'
      ],
      edge: 'While others keep you guessing, we keep you informed. Trust = longer relationships = referrals.'
    },
    {
      icon: MessageCircle,
      title: 'Proactive vs Reactive Communication',
      color: 'success',
      oldWay: {
        client: '"Hey, what\'s the status?"',
        vendor: '"Let me get back to you..."',
        later: '3 hours later... "We\'re making progress!"'
      },
      ourWay: [
        'Everything\'s already visible',
        'Updates happen automatically',
        'You see progress before you even think to ask',
        'You never feel ignored because you\'re never waiting'
      ],
      edge: 'We eliminate the communication game. No friction = happier clients = better reviews.'
    },
    {
      icon: Gauge,
      title: 'Operational Efficiency = Real Savings',
      color: 'accent2',
      results: [
        '30-50% less time in status meetings',
        'Fewer misunderstandings and communication errors',
        'Faster decision cycles',
        'Reduced revisions and corrections'
      ],
      forYou: 'These savings mean better pricing or better quality for the same budget.',
      edge: 'Our lean operations let us compete with bigger agencies while offering better service.'
    },
    {
      icon: Star,
      title: 'Superior Client Experience',
      color: 'primary',
      differentiators: [
        'Modern, intuitive interface',
        'Feel like a partner, not just a "client"',
        'Autonomy to check info whenever you want',
        'Reduced stress from uncertainty'
      ],
      edge: 'Client experience becomes a major selling point, generating referrals and positive word-of-mouth.'
    },
    {
      icon: Target,
      title: 'Accountability = Quality',
      color: 'success',
      forTeam: [
        'Everyone knows their work is visible',
        'Encourages rigor and quality',
        'Identifies blockers quickly'
      ],
      forYou: [
        'Early intervention if something\'s wrong',
        'Continuous validation',
        'Fewer costly revisions'
      ],
      edge: 'Higher quality + fewer revisions = more profitable projects + happier clients.'
    },
    {
      icon: TrendingUp,
      title: 'Scalability & Professionalism',
      color: 'accent2',
      positioning: [
        'Demonstrates technological maturity',
        'Positions us as modern and innovative',
        'Reassures clients we can handle complex projects'
      ],
      edge: 'Compete with bigger firms by showing the same level of professionalism with better agility.'
    },
    {
      icon: Database,
      title: 'Data-Driven Continuous Improvement',
      color: 'primary',
      insights: [
        'Automatic performance metrics collection',
        'Identify patterns and bottlenecks',
        'Continuously improve processes'
      ],
      forYou: 'You benefit from a team that gets better with every project thanks to data.',
      edge: 'Competitors work blind. We work with data.'
    }
  ];

  return (
    <Section background="secondary">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          The Competitive Advantages You Can't Ignore
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Each advantage directly impacts your bottom line and competitive position.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Advantage 1: Total Transparency */}
        <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className={`h-14 w-14 bg-${advantages[0].color} rounded-full flex items-center justify-center`}>
              <Shield className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary">1. {advantages[0].title}</h3>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">For You (The Client):</h4>
            <ul className="space-y-2">
              {advantages[0].forYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
            <p className="font-bold text-primary mb-1">Competitive Edge:</p>
            <p className="text-gray-700">{advantages[0].edge}</p>
          </div>
        </div>

        {/* Advantage 2: Proactive vs Reactive */}
        <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className={`h-14 w-14 bg-${advantages[1].color} rounded-full flex items-center justify-center`}>
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-success">2. {advantages[1].title}</h3>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-bold text-error mb-2">Old Way (Everyone Else):</h4>
            <div className="bg-gray-50 rounded-lg p-4 space-y-1 text-sm">
              <p className="text-gray-700">Client: <span className="italic">"{advantages[1].oldWay!.client}"</span></p>
              <p className="text-gray-700">Vendor: <span className="italic">"{advantages[1].oldWay!.vendor}"</span></p>
              <p className="text-gray-700">{advantages[1].oldWay!.later}</p>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-bold text-success mb-2">Our Way:</h4>
            <ul className="space-y-2">
              {advantages[1].ourWay!.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-success/10 rounded-lg p-4 border-l-4 border-success">
            <p className="font-bold text-success mb-1">Competitive Edge:</p>
            <p className="text-gray-700">{advantages[1].edge}</p>
          </div>
        </div>

        {/* Advantage 3: Operational Efficiency */}
        <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className={`h-14 w-14 bg-${advantages[2].color} rounded-full flex items-center justify-center`}>
              <Gauge className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-accent2">3. {advantages[2].title}</h3>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Measurable Results:</h4>
            <ul className="space-y-2">
              {advantages[2].results!.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent2 font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 mb-4">
            <span className="font-bold">For You:</span> {advantages[2].forYou}
          </p>
          <div className="bg-accent2/10 rounded-lg p-4 border-l-4 border-accent2">
            <p className="font-bold text-accent2 mb-1">Competitive Edge:</p>
            <p className="text-gray-700">{advantages[2].edge}</p>
          </div>
        </div>

        {/* Advantage 4: Superior Client Experience */}
        <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className={`h-14 w-14 bg-${advantages[3].color} rounded-full flex items-center justify-center`}>
              <Star className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary">4. {advantages[3].title}</h3>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Key Differentiators:</h4>
            <ul className="space-y-2">
              {advantages[3].differentiators!.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
            <p className="font-bold text-primary mb-1">Competitive Edge:</p>
            <p className="text-gray-700">{advantages[3].edge}</p>
          </div>
        </div>

        {/* Advantage 5: Accountability */}
        <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className={`h-14 w-14 bg-${advantages[4].color} rounded-full flex items-center justify-center`}>
              <Target className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-success">5. {advantages[4].title}</h3>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-bold text-gray-800 mb-2">For My Team:</h4>
            <ul className="space-y-2">
              {advantages[4].forTeam!.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-2">For You:</h4>
            <ul className="space-y-2">
              {advantages[4].forYou!.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-success/10 rounded-lg p-4 border-l-4 border-success">
            <p className="font-bold text-success mb-1">Competitive Edge:</p>
            <p className="text-gray-700">{advantages[4].edge}</p>
          </div>
        </div>

        {/* Advantage 6: Scalability */}
        <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className={`h-14 w-14 bg-${advantages[5].color} rounded-full flex items-center justify-center`}>
              <TrendingUp className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-accent2">6. {advantages[5].title}</h3>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Brand Positioning:</h4>
            <ul className="space-y-2">
              {advantages[5].positioning!.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent2 font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-accent2/10 rounded-lg p-4 border-l-4 border-accent2">
            <p className="font-bold text-accent2 mb-1">Competitive Edge:</p>
            <p className="text-gray-700">{advantages[5].edge}</p>
          </div>
        </div>

        {/* Advantage 7: Data-Driven */}
        <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-4 mb-6">
            <div className={`h-14 w-14 bg-${advantages[6].color} rounded-full flex items-center justify-center`}>
              <Database className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary">7. {advantages[6].title}</h3>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Strategic Insights:</h4>
            <ul className="space-y-2">
              {advantages[6].insights!.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 mb-4">
            <span className="font-bold">For You:</span> {advantages[6].forYou}
          </p>
          <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
            <p className="font-bold text-primary mb-1">Competitive Edge:</p>
            <p className="text-gray-700">{advantages[6].edge}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CompetitiveAdvantagesSection;
