import heroImg from '../assets/images/hero_cinematic_1791531801191.jpg';
import profileImg from '../assets/images/profile_piyush_1791531814099.jpg';
import weddingImg from '../assets/images/gallery_weddings_1791531826346.jpg';
import preweddingImg from '../assets/images/gallery_prewedding_1791531838884.jpg';
import portraitsImg from '../assets/images/gallery_portraits_1791531849969.jpg';
import fashionImg from '../assets/images/gallery_fashion_1791531860881.jpg';
import eventsImg from '../assets/images/gallery_events_1791531870475.jpg';
import travelImg from '../assets/images/gallery_travel_1791531882362.jpg';
import commercialImg from '../assets/images/gallery_commercial_1791531926622.jpg';

export interface CategoryConfig {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
}

export interface PackageConfig {
  id: string;
  name: string;
  tagline: string;
  price: string;
  currency: string;
  isPopular?: boolean;
  features: string[];
  deliverables: string[];
}

export interface ServiceConfig {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface SiteConfig {
  photographer: {
    name: string;
    brand: string;
    title: string;
    location: string;
    tagline: string;
    profileImage: string;
    bio: string;
    philosophy: string;
    isDemo: boolean;
  };
  hero: {
    headline: string;
    headlineEmphasis: string;
    secondaryHeadline: string;
    primaryCta: string;
    secondaryCta: string;
    bgImage: string;
  };
  announcement: {
    enabled: boolean;
    text: string;
    linkText?: string;
    linkUrl?: string;
  };
  contact: {
    demoNote: string;
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
    workingHours: string;
  };
  socialLinks: {
    name: string;
    url: string;
  }[];
  seo: {
    siteName: string;
    title: string;
    description: string;
    siteUrl: string;
    noindex: boolean;
  };
  categories: CategoryConfig[];
  services: ServiceConfig[];
  packages: PackageConfig[];
  processSteps: {
    number: string;
    title: string;
    description: string;
  }[];
  features: {
    show3DCamera: boolean;
    showFilmGrain: boolean;
    showTestimonials: boolean;
    showStats: boolean;
  };
}

export const siteConfig: SiteConfig = {
  photographer: {
    name: 'Piyush Bhendarkar',
    brand: 'Piyush Bhendarkar Photography',
    title: 'Photographer & Visual Storyteller',
    location: 'Nagpur, Maharashtra, India',
    tagline: 'Turning Moments Into Timeless Stories.',
    profileImage: profileImg,
    bio: 'Dedicated to capturing the quiet romance of weddings, the raw nuance of human expressions, and evocative editorial imagery. Every frame is treated as a bespoke work of fine art composed with natural light, rich shadows, and authentic emotion.',
    philosophy: 'Photography is not merely documentation; it is the deliberate preservation of fleeting intimacy and timeless grace.',
    isDemo: true,
  },
  hero: {
    headline: 'Every Frame Tells A',
    headlineEmphasis: 'Story.',
    secondaryHeadline: 'Life Happens Once. Memories Last Forever.',
    primaryCta: 'Explore My Work',
    secondaryCta: 'Book a Photoshoot',
    bgImage: heroImg,
  },
  announcement: {
    enabled: true,
    text: 'Demonstration portfolio for Piyush Bhendarkar Photography — Content is editable via site.config.ts',
    linkText: 'Learn More',
    linkUrl: '#about',
  },
  contact: {
    demoNote: 'Demo contact — replace in site.config.ts before public launch',
    email: 'hello@example.com',
    phone: '+91 00000 00000',
    whatsapp: 'https://wa.me/910000000000',
    address: 'Nagpur, Maharashtra, India',
    workingHours: 'Mon – Sat: 10:00 AM – 7:00 PM IST',
  },
  socialLinks: [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Behance', url: 'https://behance.net' },
    { name: 'Unsplash', url: 'https://unsplash.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
  ],
  seo: {
    siteName: 'Piyush Bhendarkar Photography',
    title: 'Piyush Bhendarkar — Premium Photography Portfolio',
    description: 'Luxury, cinematic photography portfolio for Piyush Bhendarkar, Photographer & Visual Storyteller based in Nagpur, India.',
    siteUrl: 'https://piyushbhendarkar.example.com',
    noindex: true, // Safeguard: Keep ON while using demo content
  },
  categories: [
    {
      id: 'weddings',
      slug: 'weddings',
      title: 'Weddings',
      subtitle: 'Sacred Rituals & Grand Celebrations',
      description: 'Documenting the sacred grandeur, heartfelt tears, and majestic celebrations of Indian weddings with cinematic intimacy.',
      coverImage: weddingImg,
    },
    {
      id: 'pre-wedding',
      slug: 'pre-wedding',
      title: 'Pre-Wedding',
      subtitle: 'Romantic Twilight Dialogues',
      description: 'Dreamlike, unhurried visual poetry celebrating love before vows in poetic natural landscapes and heritage architecture.',
      coverImage: preweddingImg,
    },
    {
      id: 'portraits',
      slug: 'portraits',
      title: 'Portraits',
      subtitle: 'Chiaroscuro & Human Nuance',
      description: 'Deep, soulful character portraits illuminated with natural chiaroscuro window lighting and intimate depth.',
      coverImage: portraitsImg,
    },
    {
      id: 'fashion',
      slug: 'fashion',
      title: 'Fashion',
      subtitle: 'Haute Couture & Sculptural Silhouettes',
      description: 'Avant-garde styling, architectural silhouettes, and editorial studio precision tailored for magazines and designer campaigns.',
      coverImage: fashionImg,
    },
    {
      id: 'events',
      slug: 'events',
      title: 'Events',
      subtitle: 'Joyful Sparks & Candid Moments',
      description: 'High-energy cultural soirees, galas, and festive moments captured candidly in their authentic radiance.',
      coverImage: eventsImg,
    },
    {
      id: 'travel',
      slug: 'travel',
      title: 'Travel',
      subtitle: 'Ancient Horizons & Golden Solitude',
      description: 'Atmospheric landscapes, morning temple mists, and quiet journeys across historic subcontinent landscapes.',
      coverImage: travelImg,
    },
    {
      id: 'commercial',
      slug: 'commercial',
      title: 'Commercial',
      subtitle: 'Refined Artisanship & Brand Still Lifes',
      description: 'Artisan product stills, fine horology, and architectural spaces lit with immaculate commercial precision.',
      coverImage: commercialImg,
    },
  ],
  services: [
    {
      id: 'luxury-wedding-coverage',
      title: 'Luxury Wedding Cinematics',
      description: 'Comprehensive multi-day wedding coverage documenting traditional ceremonies, family blessings, and evening receptions.',
      highlights: ['Full Ceremony Coverage', 'Custom Lighting Rig', 'Curated Signature Edit'],
    },
    {
      id: 'intimate-prewedding',
      title: 'Pre-Wedding Storytelling',
      description: 'Bespoke location sessions designed around your journey, with curated styling and gentle direction.',
      highlights: ['Location Scouting', 'Sunset/Dawn Sessions', 'Fine-Art Teaser Album'],
    },
    {
      id: 'editorial-portraits',
      title: 'Fine-Art Portraits',
      description: 'Character-driven portrait sessions for artists, executives, couples, and creative individuals.',
      highlights: ['Studio & Environmental', 'Medium Format Precision', 'Master Retouching'],
    },
    {
      id: 'fashion-editorial',
      title: 'Fashion & Lookbooks',
      description: 'High-concept creative direction, studio editorial lighting, and publication-ready imagery for luxury labels.',
      highlights: ['Creative Direction', 'Model Direction', 'Color Master Delivery'],
    },
    {
      id: 'bespoke-add-ons',
      title: 'Bespoke Add-Ons',
      description: 'Optional artisanal enhancements to elevate your photographic collection.',
      highlights: ['Handmade Leather Albums', 'Fine-Art Museum Prints', 'Drone Aerial Perspectives'],
    },
  ],
  packages: [
    {
      id: 'essential',
      name: 'Essential Collection',
      tagline: 'Focused, intentional coverage for intimate milestones.',
      price: '₹75,000',
      currency: 'INR',
      features: [
        'Single day milestone coverage (up to 6 hours)',
        'Principal photographer coverage',
        '250+ master-graded high resolution photographs',
        'Private online viewing & download gallery',
      ],
      deliverables: ['Digital master gallery delivered in 3 weeks', 'High-res archival files'],
    },
    {
      id: 'signature',
      name: 'Signature Collection',
      tagline: 'Our most sought-after luxury experience for multi-day weddings.',
      price: '₹1,50,000',
      currency: 'INR',
      isPopular: true,
      features: [
        '2 days comprehensive coverage (up to 16 hours)',
        'Principal photographer + Associate artist',
        '600+ signature-graded high resolution photographs',
        'Complementary golden hour couple mini-session',
        'Handcrafted 12x12 luxury linen photo album (40 pages)',
      ],
      deliverables: ['Online gallery with 1-year archival hosting', 'Fine-art keepsake box'],
    },
    {
      id: 'royal-heritage',
      name: 'Heritage Grand Collection',
      tagline: 'Uncompromising grand coverage across all rituals and receptions.',
      price: '₹2,75,000',
      currency: 'INR',
      features: [
        '3–4 days complete coverage (Mehendi, Sangeet, Wedding & Reception)',
        'Team of 3 photographers including Piyush Bhendarkar',
        '1000+ curated and art-directed photographs',
        'Pre-wedding editorial shoot at heritage location',
        'Two custom Italian leather heirloom albums + 2 parent albums',
        'Aerial drone cinematography & still captures',
      ],
      deliverables: ['Luxury wooden keepsake box with velvet USB', 'Full print release'],
    },
  ],
  processSteps: [
    {
      number: '01',
      title: 'Enquire & Connect',
      description: 'Share your vision, dates, and preferred celebration style through our seamless enquiry form.',
    },
    {
      number: '02',
      title: 'Creative Consultation',
      description: 'We meet virtually or in person to craft your moodboard, itinerary, and lighting schedule.',
    },
    {
      number: '03',
      title: 'The Photoshoot',
      description: 'On your special day, we work unobtrusively, capturing raw authentic emotion as it naturally unfolds.',
    },
    {
      number: '04',
      title: 'Heirloom Delivery',
      description: 'Each image is meticulously color-graded and delivered in a private gallery and handcrafted album.',
    },
  ],
  features: {
    show3DCamera: true,
    showFilmGrain: true,
    showTestimonials: false, // Omitted by default per guidelines
    showStats: false, // Omitted by default per guidelines
  },
};
