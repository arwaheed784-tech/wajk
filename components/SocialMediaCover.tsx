import React from 'react';
import { Phone, MapPin, Globe, Utensils } from 'lucide-react';

const SocialMediaCover: React.FC = () => {
  return (
    <section className="py-24 bg-earth-100 dark:bg-earth-900 transition-colors duration-300 flex flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <span className="text-italian-green text-xs font-bold uppercase tracking-widest">Brand Assets</span>
        <h2 className="text-earth-900 dark:text-earth-100 font-serif text-3xl mt-2">Facebook Cover Preview</h2>
      </div>

      {/* Container for the Cover Photo */}
      <div className="w-full max-w-[820px] overflow-hidden p-4">
        <div 
            className="relative w-full aspect-[820/360] bg-earth-900 shadow-2xl border-4 border-white dark:border-earth-700 rounded-sm overflow-hidden group"
            style={{ minHeight: '360px' }}
        >
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1920&auto=format&fit=crop")',
                }}
            ></div>

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 border-[1px] border-white/20 m-4">
                
                {/* Logo Area */}
                <div className="flex flex-col items-center mb-4">
                     <div className="w-12 h-12 rounded-full bg-italian-red text-white flex items-center justify-center mb-3 shadow-lg">
                        <Utensils size={24} />
                     </div>
                </div>

                {/* Main Text */}
                <h1 className="text-white font-serif text-5xl md:text-6xl font-bold tracking-tight mb-2 drop-shadow-xl">
                  CUCINA <span className="text-italian-cream italic font-light">RUSTICA</span>
                </h1>
                
                {/* Tagline */}
                <div className="flex items-center gap-4 mb-8">
                     <div className="h-px w-8 bg-italian-green"></div>
                     <p className="text-white font-sans text-xs md:text-sm font-bold tracking-[0.3em] uppercase drop-shadow-md">
                        Authentic Italian Dining
                    </p>
                     <div className="h-px w-8 bg-italian-red"></div>
                </div>

                {/* Bottom Info Bar - Transparent Strip */}
                <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm px-8 py-4 flex justify-between items-center text-white">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mx-auto">
                        <div className="flex items-center gap-2">
                            <MapPin className="text-italian-red" size={16} />
                            <span className="font-sans text-xs font-bold tracking-wider">LITTLE ITALY, NY</span>
                        </div>
                        <div className="hidden md:block h-4 w-px bg-white/30"></div>
                        <div className="flex items-center gap-2">
                             <Phone className="text-italian-green" size={16} />
                            <span className="font-sans text-xs font-bold tracking-wider">(555) 234-5678</span>
                        </div>
                         <div className="hidden md:block h-4 w-px bg-white/30"></div>
                        <div className="flex items-center gap-2">
                            <Globe className="text-italian-cream" size={16} />
                            <span className="font-sans text-xs font-bold tracking-wider">CUCINARUSTICA.COM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-earth-500 dark:text-earth-400 font-mono uppercase tracking-widest">
            <span>820px</span>
            <span>Facebook Cover Optimized</span>
            <span>360px</span>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaCover;