/**
 * LogoBar - Trusted by logos section
 *
 * Displays company logos to build social proof,
 * similar to the Lumea design with grayscale hover effect.
 */

import React from 'react';

const LogoBar: React.FC = () => {
  const logos = [
    { name: 'Shopify', text: 'shopify' },
    { name: 'Salesforce', text: 'salesforce' },
    { name: 'HubSpot', text: 'hubspot' },
    { name: 'Zendesk', text: 'zendesk' },
    { name: 'Intercom', text: 'intercom' },
  ];

  return (
    <div className="mt-16 lg:mt-20 pt-10 border-t border-neutral-100">
      <p className="text-sm text-neutral-400 text-center mb-8">
        Trusted by innovative companies worldwide
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="text-2xl font-bold text-neutral-300 hover:text-neutral-600 transition-colors cursor-default"
          >
            {logo.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBar;
