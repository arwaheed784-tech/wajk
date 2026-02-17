import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Rustic Italian Table */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s] hover:scale-100"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-16">
        
        <div className="border-t-2 border-b-2 border-white/30 py-2 px-8 mb-6 backdrop-blur-sm bg-white/5 animate-fade-in-up">
            <h2 className="text-italian-cream font-sans text-xs sm:text-sm font-bold tracking-[0.4em] uppercase">
            Est. 1985 • Family Owned
            </h2>
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-bold tracking-tight mb-6 drop-shadow-2xl">
          Cucina <span className="text-italian-red italic font-light">Rustica</span>
        </h1>
        
        <p className="max-w-2xl text-earth-50 text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-10 drop-shadow-lg font-sans">
          Authentic flavors from the heart of Tuscany. <br className="hidden md:block"/>
          Wood-fired ovens, handmade pasta, and warm hospitality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a 
            href="#contact"
            className="px-8 py-4 bg-italian-red text-white text-base font-bold tracking-widest rounded-sm hover:bg-italian-green transition-all duration-300 shadow-lg shadow-black/20"
          >
            BOOK A TABLE
          </a>
          <a 
            href="#menu"
            className="px-8 py-4 bg-white text-earth-900 dark:bg-earth-800 dark:text-earth-100 text-base font-bold tracking-widest rounded-sm hover:bg-italian-cream dark:hover:bg-earth-700 transition-all duration-300 shadow-lg"
          >
            VIEW MENU
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown size={32} />
      </div>
      
      {/* Decorative Italian Flag Strip at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 flex">
        <div className="w-1/3 bg-italian-green"></div>
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-italian-red"></div>
      </div>
    </div>
  );
};

export default Hero;