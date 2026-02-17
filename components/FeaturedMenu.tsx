import React from 'react';
import SectionTitle from './SectionTitle';
import { FEATURED_DISHES } from '../constants';

const FeaturedMenu: React.FC = () => {
  return (
    <section className="py-24 bg-earth-100 dark:bg-earth-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Buon Appetito" title="Seasonal Specialties" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {FEATURED_DISHES.map((dish) => (
            <div key={dish.id} className="group bg-white dark:bg-earth-800 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-earth-200 dark:border-earth-700">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 text-center relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-italian-red text-white px-4 py-1 text-sm font-bold shadow-md rounded-sm">
                    {dish.price}
                </div>
                
                <span className="text-[10px] font-bold text-italian-green uppercase tracking-widest block mb-2">{dish.category}</span>
                <h3 className="font-serif text-2xl text-earth-900 dark:text-earth-100 mb-3 group-hover:text-italian-red transition-colors">
                  {dish.name}
                </h3>
                <p className="text-earth-800 dark:text-earth-300 font-light leading-relaxed text-sm">
                  {dish.description}
                </p>
                <button className="mt-4 text-italian-green text-xs font-bold uppercase tracking-wider hover:text-italian-red transition-colors">
                    Order Now &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <button className="px-10 py-3 border-2 border-earth-800 dark:border-earth-200 text-earth-800 dark:text-earth-200 hover:text-white dark:hover:text-earth-900 hover:bg-earth-800 dark:hover:bg-earth-200 transition-all duration-300 tracking-widest text-sm font-bold uppercase rounded-sm">
                View Full Menu
            </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;