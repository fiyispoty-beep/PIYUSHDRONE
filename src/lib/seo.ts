import { siteConfig } from '../config/site.config';

interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  category?: string;
}

export function updatePageSeo({
  title,
  description,
  canonical,
  ogImage,
}: SeoProps) {
  const fullTitle = title 
    ? `${title} | ${siteConfig.photographer.name}`
    : siteConfig.seo.title;
  const metaDesc = description || siteConfig.seo.description;
  const currentUrl = canonical || window.location.href;

  document.title = fullTitle;

  // Meta description
  let descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) {
    descMeta.setAttribute('content', metaDesc);
  }

  // OG Title & Desc
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', fullTitle);
  
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', metaDesc);

  if (ogImage) {
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', ogImage);
  }

  // Canonical tag
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.rel = 'canonical';
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.href = currentUrl;

  // JSON-LD Schema
  let jsonLdEl = document.getElementById('json-ld-schema');
  if (!jsonLdEl) {
    jsonLdEl = document.createElement('script');
    jsonLdEl.id = 'json-ld-schema';
    jsonLdEl.setAttribute('type', 'application/ld+json');
    document.head.appendChild(jsonLdEl);
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.photographer.brand,
    image: siteConfig.photographer.profileImage,
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nagpur',
      addressRegion: 'Maharashtra',
      addressCountry: 'India',
    },
    priceRange: '₹₹₹',
    description: siteConfig.seo.description,
  };

  jsonLdEl.textContent = JSON.stringify(schema);
}
