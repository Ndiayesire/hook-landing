/**
 * FeaturesShowcase - Feature highlights with conversation mockup
 *
 * Displays key features with icons and a chat transcript preview,
 * similar to Lumea's feature showcase section.
 */

import React from 'react';
import { MessageSquare, Search, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesShowcase: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Automatically record & transcribe conversations',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Search,
      title: 'High-performance search keywords',
      color: 'bg-neutral-100 text-neutral-600',
    },
    {
      icon: Globe,
      title: 'Multiple language choices for translation',
      color: 'bg-neutral-100 text-neutral-600',
    },
  ];

  const conversations = [
    { name: 'Jessica Morgan', time: '3:11', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'William Nels', time: '5:15', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Kate Morgan', time: '3:12', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-4">
            Unlock full customer potential with
            <br />
            <span className="text-primary">wide range of features</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Elevate productivity and teamwork with tools that turn conversations into actionable results.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-5 py-3 rounded-full border ${
                index === 0 ? 'bg-white border-primary/20 shadow-sm' : 'bg-white border-neutral-200'
              } transition-all hover:shadow-md cursor-pointer`}
            >
              <div className={`w-8 h-8 rounded-lg ${feature.color} flex items-center justify-center`}>
                <feature.icon className="w-4 h-4" />
              </div>
              <span className={`text-sm font-medium ${index === 0 ? 'text-neutral-900' : 'text-neutral-600'}`}>
                {feature.title}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-3xl shadow-lumea-lg p-6 border border-neutral-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="text-sm text-neutral-400 ml-2">Live Conversations</span>
            </div>

            <div className="space-y-4">
              {conversations.map((conv, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <img
                    src={conv.avatar}
                    alt={conv.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-neutral-900">{conv.name}</h4>
                    <p className="text-xs text-neutral-500">Active conversation</p>
                  </div>
                  <span className="text-sm text-primary font-medium">{conv.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-100">
              <div className="flex items-center gap-3 text-sm text-neutral-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>AI processing 3 active conversations</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Automatically record & transcribe conversations
            </h3>
            <p className="text-lg text-neutral-600 mb-6">
              With HookTXT's automatic recording and accurate transcriptions, you can focus on the conversation, not the notes. Every interaction is captured and analyzed for insights.
            </p>
            <Link
              to="/custom-ai-systems"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
