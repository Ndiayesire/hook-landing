/**
 * SEO Component
 *
 * Reusable component for managing page-level SEO meta tags including
 * title, description, Open Graph tags, Twitter Cards, and canonical URLs.
 *
 * NOTE: Open Graph images should be created for each page:
 * - Recommended size: 1200x630px (Facebook/LinkedIn standard)
 * - Format: JPG or PNG
 * - Keep text readable and centered
 * - Include HookTXT branding
 *
 * Required OG images:
 * - /og-home.jpg (Homepage)
 * - /og-custom-ai.jpg (Custom AI Systems page)
 * - /og-dealership-ai.jpg (Dealership AI page)
 * - /og-ecommerce-ai.jpg (Ecommerce AI page)
 * - /og-about.jpg (About page)
 * - /og-contact.jpg (Contact page)
 * - /og-blog.jpg (Blog listing page)
 * - Individual blog post images use their cover images
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  keywords?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://hooktxt.com/og-image.jpg',
  twitterCard = 'summary_large_image',
  keywords,
  noindex = false,
}) => {
  const siteUrl = 'https://hooktxt.com';
  const fullCanonicalUrl = canonicalUrl || siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="HookTXT" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="author" content="HookTXT" />
      <meta property="og:locale" content="en_US" />
    </Helmet>
  );
};

export default SEO;
