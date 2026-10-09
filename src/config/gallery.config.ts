import weddingImg from '../assets/images/gallery_weddings_1791531826346.jpg';
import weddingDetailImg from '../assets/images/gallery_wedding_details_1791531970193.jpg';
import preweddingImg from '../assets/images/gallery_prewedding_1791531838884.jpg';
import portraitsImg from '../assets/images/gallery_portraits_1791531849969.jpg';
import portraitBnwImg from '../assets/images/gallery_portrait_bnw_1791531983449.jpg';
import fashionImg from '../assets/images/gallery_fashion_1791531860881.jpg';
import eventsImg from '../assets/images/gallery_events_1791531870475.jpg';
import travelImg from '../assets/images/gallery_travel_1791531882362.jpg';
import travelDesertImg from '../assets/images/gallery_travel_desert_1791531994669.jpg';
import commercialImg from '../assets/images/gallery_commercial_1791531926622.jpg';

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  exif?: {
    camera?: string;
    lens?: string;
    focalLength?: string;
    aperture?: string;
    iso?: string;
  };
  isSample: boolean;
  credit: {
    photographer: string;
    sourceUrl: string;
    license: string;
  };
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'weddings-01',
    category: 'weddings',
    title: 'Imperial Vows & Floral Mandap',
    src: weddingImg,
    width: 1440,
    height: 1080,
    alt: 'Indian bride and groom in gold embroidered attire under floral mandap with chandeliers',
    caption: 'Sacred rituals illuminated by amber candlelight and opulent floral garlands in Udaipur palace.',
    exif: {
      camera: 'Sony Alpha 1',
      lens: 'FE 50mm f/1.2 GM',
      focalLength: '50mm',
      aperture: 'f/1.4',
      iso: '400',
    },
    isSample: true,
    credit: {
      photographer: 'Piyush Bhendarkar (Demo Asset)',
      sourceUrl: 'https://example.com/assets/weddings-01',
      license: 'Demo Portfolio Asset / CC0 Equivalent',
    },
  },
  {
    id: 'weddings-02',
    category: 'weddings',
    title: 'The Heirloom Rose & Mehndi',
    src: weddingDetailImg,
    width: 1440,
    height: 1080,
    alt: 'Close-up macro of bride hands with intricate henna holding champagne rose and gold diamond ring',
    caption: 'Delicate henna motifs framing an heirloom solitaire ring with warm candlelight bokeh.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 90mm f/2.8 Macro G OSS',
      focalLength: '90mm',
      aperture: 'f/2.8',
      iso: '250',
    },
    isSample: true,
    credit: {
      photographer: 'Piyush Bhendarkar (Demo Asset)',
      sourceUrl: 'https://example.com/assets/weddings-02',
      license: 'Demo Portfolio Asset / CC0 Equivalent',
    },
  },
  {
    id: 'pre-wedding-01',
    category: 'pre-wedding',
    title: 'Twilight Lakeside Whispers',
    src: preweddingImg,
    width: 1080,
    height: 1440,
    alt: 'Couple laughing on rustic wooden dock at misty dusk with fairy lights and flowing veil',
    caption: 'Quiet laughter across a serene twilight lake, surrounded by soft bokeh lanterns.',
    exif: {
      camera: 'Leica SL2',
      lens: 'Summilux-SL 50mm f/1.4 ASPH',
      focalLength: '50mm',
      aperture: 'f/1.4',
      iso: '800',
    },
    isSample: true,
    credit: {
      photographer: 'Piyush Bhendarkar (Demo Asset)',
      sourceUrl: 'https://example.com/assets/prewedding-01',
      license: 'Demo Portfolio Asset / CC0 Equivalent',
    },
  },
  {
    id: 'portraits-01',
    category: 'portraits',
    title: 'The Grace of Chiaroscuro',
    src: portraitsImg,
    width: 1080,
    height: 1440,
    alt: 'Portrait of Indian woman in emerald green saree with gold jewelry in dramatic window light',
    caption: 'Soulful human nuance captured with directional morning window shadows and golden temple jewelry.',
    exif: {
      camera: 'Fujifilm GFX 100 II',
      lens: 'GF 110mm f/2 R LM WR',
      focalLength: '110mm',
      aperture: 'f/2.0',
      iso: '160',
    },
    isSample: true,
    credit: {
      photographer: 'Piyush Bhendarkar (Demo Asset)',
      sourceUrl: 'https://example.com/assets/portraits-01',
      license: 'Demo Portfolio Asset / CC0 Equivalent',
    },
  },
  {
    id: 'portraits-02',
    category: 'portraits',
    title: 'The Painter at Ease',
    src: portraitBnwImg,
    width: 1080,
    height: 1440,
    alt: 'Black and white environmental portrait of elderly artist with paint-splattered clothes at his easel',
    caption: 'Fine-art monochrome study of texture, dedication, and creative contemplation.',
    exif: {
      camera: 'Leica M11 Monochrom',
      lens: 'Summicron-M 35mm f/2 ASPH',
      focalLength: '35mm',
      aperture: 'f/2.8',
      iso: '400',
    },
    isSample: true,
    credit: {
      photographer: 'Piyush Bhendarkar (Demo Asset)',
      sourceUrl: 'https://example.com/assets/portraits-02',
      license: 'Demo Portfolio Asset / CC0 Equivalent',
    },
  },
  {
    id: 'fashion-01',
    category: 'fashion',
    title: 'Sculptural Gold Haute Couture',
    src: fashionImg,
    width: 1440,
    height: 1080,
    alt: 'High fashion model in architectural champagne gold and black silk gown in brutalist concrete space',
    caption: 'Architectural drapery and brutalist concrete volumes in a haute couture editorial.',
    exif: {
      camera: 'Hasselblad H6D-100c',
      lens: 'HC 2,2/100mm',
      focalLength: '100mm',
      aperture: 'f/4.0',
      iso: '100',
    },
    isSample: true,
    credit: {
      photographer: 'Piyush Bhendarkar (Demo Asset)',
      sourceUrl: 'https://example.com/assets/fashion-01',
      license: 'Demo Portfolio Asset / CC0 Equivalent',
    },
  },
  {
    id: 'events-01',
    category: 'events',
    title: 'Radiance of the Night Soiree',
    src: eventsImg,
    width: 1440,
    height: 1080,
    alt: 'Celebration guests with glowing sparklers in evening rooftop pavilion',
    caption: 'Unfiltered joy and dynamic light trails during a celebratory Sangeet night.',
    exif: {
      camera: 'Canon EOS R5',
      lens: 'RF 28-70mm f/2L USM',
      focalLength: '28mm',
      aperture: 'f/2.0',
      iso: '1600',
    },
    isSample: true,
    credit: {
      photographer: 'Piyush Bhendarkar (Demo Asset)',
      sourceUrl: 'https://example.com/assets/events-01',
      license: 'Demo Portfolio Asset / CC0 Equivalent',
    },
  },
  {
    id: 'travel-01',
    category: 'travel',
    title: 'Hampi Dawn Awakening',
    src: travelImg,
    width: 1920,
    height: 1080,
    alt: 'Morning sunbeams piercing through mist over ancient granite temple spires in Hampi',
    caption: 'First light breaking over historic ruins and boulder-strewn hills of Karnataka.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 24-70mm f/2.8 GM II',
      focalLength: '35mm',
      aperture: 'f/8.0',
      iso: '100',
    },
    isSample: true,
    credit: {
      photographer: 'Piyush Bhendarkar (Demo Asset)',
      sourceUrl: 'https://example.com/assets/travel-01',
      license: 'Demo Portfolio Asset / CC0 Equivalent',
    },
  },
  {
    id: 'travel-02',
    category: 'travel',
    title: 'Golden Caravans of the Thar',
    src: travelDesertImg,
    width: 1920,
    height: 1080,
    alt: 'Silhouetted camel caravan traversing glowing orange desert sand dunes beneath starry sky',
    caption: 'Solitude and ancient desert rhythms at twilight under the infinite Thar sky.',
    exif: {
      camera: 'Nikon Z8',
      lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
      focalLength: '135mm',
      aperture: 'f/4.0',
      iso: '640',
    },
    isSample: true,
    credit: {
      photographer: 'Piyush Bhendarkar (Demo Asset)',
      sourceUrl: 'https://example.com/assets/travel-02',
      license: 'Demo Portfolio Asset / CC0 Equivalent',
    },
  },
  {
    id: 'commercial-01',
    category: 'commercial',
    title: 'Horology & Artisan Pen Still Life',
    src: commercialImg,
    width: 1440,
    height: 1080,
    alt: 'Luxury dual-tone mechanical chronometer wristwatch and fountain pen on textured slate',
    caption: 'Precision macro lighting detailing brushed steel, champagne gold indices, and polished slate.',
    exif: {
      camera: 'Phase One IQ4 150MP',
      lens: 'Schneider Kreuznach 120mm LS Macro',
      focalLength: '120mm',
      aperture: 'f/11',
      iso: '50',
    },
    isSample: true,
    credit: {
      photographer: 'Piyush Bhendarkar (Demo Asset)',
      sourceUrl: 'https://example.com/assets/commercial-01',
      license: 'Demo Portfolio Asset / CC0 Equivalent',
    },
  },
];
