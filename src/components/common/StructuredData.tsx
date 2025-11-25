/**
 * StructuredData Component
 *
 * Provides JSON-LD structured data for better search engine understanding.
 * Includes Organization schema with contact information and social profiles.
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HookTXT",
    "alternateName": "HookTXT AI Systems",
    "url": "https://hooktxt.com",
    "logo": "https://hooktxt.com/logo.png",
    "description": "Custom multi-agent AI systems that generate revenue 24/7. HookTXT builds specialized AI for dealerships, e-commerce, and any business that wants AI that actually closes deals.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "41 King West",
      "addressLocality": "Sherbrooke",
      "addressRegion": "QC",
      "postalCode": "J1H 1P1",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "info@hooktxt.com",
      "availableLanguage": ["English", "French"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/hooktxt",
      "https://twitter.com/hooktxt"
    ],
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "HookTXT Team"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "HookTXT AI Systems",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Custom pricing based on business needs"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "87",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareApplicationSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
