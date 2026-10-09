# Customizing Piyush Bhendarkar Photography Portfolio

This guide explains how to customize all content, replace demonstration photographs with real client photoshoots, adjust pricing packages, and switch from demo mode to live production.

---

## 1. Central Configuration (`src/config/site.config.ts`)

All personal details, headlines, contact information, packages, and categories are centralized in `src/config/site.config.ts`.

### Replacing Photographer Information
Open `src/config/site.config.ts` and update the `photographer` object:
```ts
photographer: {
  name: 'Piyush Bhendarkar',
  brand: 'Piyush Bhendarkar Photography',
  title: 'Photographer & Visual Storyteller',
  location: 'Nagpur, Maharashtra, India', // Update to your studio city
  tagline: 'Turning Moments Into Timeless Stories.',
  profileImage: profileImg, // Or replace with your real studio headshot
  bio: 'Your personal artistic statement and background...',
  philosophy: 'Your core photographic philosophy...',
  isDemo: false, // Set to false when using verified information
}
```

### Updating Contact Information
```ts
contact: {
  demoNote: '', // Remove demo note
  email: 'hello@yourdomain.com',
  phone: '+91 98765 43210',
  whatsapp: 'https://wa.me/919876543210',
  address: 'Studio Address, Nagpur, Maharashtra, India',
  workingHours: 'Mon – Sat: 10:00 AM – 7:00 PM IST',
}
```

### Updating Packages & Pricing
Update names, features, and pricing in `packages`:
```ts
packages: [
  {
    id: 'signature',
    name: 'Signature Royal Collection',
    price: '₹1,50,000',
    currency: 'INR',
    isPopular: true,
    features: [ ... ],
    deliverables: [ ... ],
  }
]
```

---

## 2. Replacing Demonstration Photos with Real Client Imagery

### Step 1: Add Image Files
Export your photographs as high-resolution WebP or JPEG files:
- Recommended dimensions for horizontal landscape / wedding cards: 1920x1280 or 1440x1080.
- Recommended dimensions for vertical portraits / fashion: 1080x1440.

Place your files in `src/assets/gallery/` or `src/assets/images/`.

### Step 2: Register in `src/config/gallery.config.ts`
Import your image at the top of `src/config/gallery.config.ts` and append or replace entries in `galleryItems`:

```ts
import myWedding01 from '../assets/gallery/weddings/my_wedding_01.jpg';

export const galleryItems: GalleryItem[] = [
  {
    id: 'weddings-01',
    category: 'weddings',
    title: 'The Udaipur Palace Nuptials',
    src: myWedding01,
    width: 1440,
    height: 1080,
    alt: 'Bride and groom walking down palace marble steps at sunset',
    caption: 'Sunset vows at Lake Pichola, Udaipur.',
    exif: {
      camera: 'Sony Alpha 1',
      lens: '50mm f/1.2 GM',
      focalLength: '50mm',
      aperture: 'f/1.4',
      iso: '100',
    },
    isSample: false, // Set to false to remove the "Sample Photography" badge!
    credit: {
      photographer: 'Piyush Bhendarkar',
      sourceUrl: '',
      license: 'All rights reserved by Piyush Bhendarkar Photography',
    },
  },
  // ...
];
```

---

## 3. Disabling Demonstration Notices

1. In `src/config/site.config.ts`:
   - Set `announcement.enabled: false` (or update to a custom booking notice like "Now accepting bookings for 2026/2027 wedding season").
   - Set `seo.noindex: false` to allow search engines (Google, Bing) to index the site.
2. In `public/robots.txt`:
   - Change `Disallow: /` to `Allow: /` when launching publicly.
