import React from 'react';
import { ChefHat, Utensils, Wheat } from 'lucide-react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-earth-950 relative overflow-hidden transition-colors duration-300">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 opacity-5 dark:opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#386641" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-8.3C81.5,3.8,70.2,13.7,60.8,22.8C51.4,31.9,43.9,40.2,35.6,48.2C27.3,56.2,18.2,63.9,8.2,65.5C-1.8,67.1,-12.7,62.6,-22.8,56.5C-32.9,50.4,-42.2,42.7,-50.7,33.5C-59.2,24.3,-66.9,13.6,-68.9,2.1C-70.9,-9.4,-67.2,-21.7,-59.9,-31.6C-52.6,-41.5,-41.7,-49,-30.5,-57.8C-19.3,-66.6,-7.8,-76.7,5.1,-85.5L18,-94.3Z" transform="translate(100 100)" />
            </svg>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid - Rustic Collage */}
          <div className="relative">
            <div className="relative z-10">
                <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop" 
                    alt="Making fresh pasta" 
                    className="rounded-sm w-[90%] h-80 object-cover shadow-2xl border-4 border-white dark:border-earth-800"
                />
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-8 translate-y-8 z-20 w-[60%]">
                <img 
                    src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=1000&auto=format&fit=crop" 
                    alt="Rustic bread and wine" 
                    className="rounded-sm w-full h-64 object-cover shadow-2xl border-4 border-white dark:border-earth-800"
                />
            </div>
            {/* Badge */}
            <div className="absolute -top-10 -left-10 z-30 bg-italian-red text-white p-6 rounded-full shadow-xl flex flex-col items-center justify-center w-32 h-32 text-center border-4 border-earth-100 dark:border-earth-700 rotate-12">
                <span className="font-serif text-3xl font-bold">100%</span>
                <span className="text-[10px] uppercase tracking-widest mt-1">Organic<br/>Ingredients</span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-16 lg:mt-0 lg:pl-10">
            <SectionTitle subtitle="La Nostra Storia" title="Tradition & Passion" centered={false} />
            
            <p className="text-earth-800 dark:text-earth-200 text-lg font-light leading-relaxed mb-6">
              At Cucina Rustica, we bring the warmth of an Italian grandmother's kitchen to your table. Every dish begins with a story, rooted in recipes passed down through generations of the Rossi family.
            </p>
            <p className="text-earth-600 dark:text-earth-400 font-light leading-relaxed mb-10">
              We believe in the simplicity of fresh ingredients. Our flour comes from Naples, our tomatoes from San Marzano, and our olive oil is cold-pressed in Tuscany. We don't just cook food; we craft memories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center gap-3 p-4 bg-earth-50 dark:bg-earth-900 rounded-sm border border-earth-100 dark:border-earth-800">
                    <ChefHat className="text-italian-red" size={32} />
                    <h4 className="text-earth-900 dark:text-earth-100 font-bold uppercase tracking-wide text-xs">Handmade Pasta</h4>
                </div>
                <div className="flex flex-col items-center text-center gap-3 p-4 bg-earth-50 dark:bg-earth-900 rounded-sm border border-earth-100 dark:border-earth-800">
                    <Wheat className="text-italian-green" size={32} />
                    <h4 className="text-earth-900 dark:text-earth-100 font-bold uppercase tracking-wide text-xs">Wood Fired</h4>
                </div>
                <div className="flex flex-col items-center text-center gap-3 p-4 bg-earth-50 dark:bg-earth-900 rounded-sm border border-earth-100 dark:border-earth-800">
                    <Utensils className="text-italian-olive" size={32} />
                    <h4 className="text-earth-900 dark:text-earth-100 font-bold uppercase tracking-wide text-xs">Family Style</h4>
                </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Chef Signature" className="h-10 opacity-70 dark:opacity-90 dark:invert" />
                 <div className="h-px bg-earth-300 dark:bg-earth-700 flex-grow"></div>
                 <span className="font-serif text-earth-800 dark:text-earth-300 italic">Chef Antonio Rossi</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;