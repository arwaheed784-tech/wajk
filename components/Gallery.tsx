import React from 'react';
import SectionTitle from './SectionTitle';
import { Instagram, ZoomIn } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    alt: "Rustic Interior",
    caption: "The Atmosphere"
  },
  {
    url: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=800&auto=format&fit=crop",
    alt: "Chef Cooking",
    caption: "Mastery in Motion"
  },
  {
    url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop",
    alt: "Fine Wine",
    caption: "Sommelier's Choice"
  },
  {
    url: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=800&auto=format&fit=crop",
    alt: "Fresh Ingredients",
    caption: "Farm to Table"
  },
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    alt: "Dining Experience",
    caption: "Family Moments"
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
    alt: "Gourmet Plating",
    caption: "Art on a Plate"
  }
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-earth-50 dark:bg-earth-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Visual Journey" title="Moments & Flavors" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <div key={index} className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer shadow-lg border border-earth-200 dark:border-earth-700">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-italian-green/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <ZoomIn className="text-italian-cream mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" size={24} />
                <h3 className="text-white font-serif text-2xl italic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {img.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center gap-3 px-8 py-3 border border-earth-300 dark:border-earth-600 rounded-sm text-earth-800 dark:text-earth-200 hover:text-white dark:hover:text-earth-900 hover:bg-italian-red hover:border-italian-red dark:hover:bg-earth-200 transition-all duration-300 font-bold tracking-widest text-xs uppercase bg-white dark:bg-earth-800 shadow-sm">
                <Instagram size={18} />
                Follow @CucinaRustica
            </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;