import React from 'react';
import SectionTitle from './SectionTitle';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-earth-800 relative bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]">
      <div className="absolute inset-0 bg-earth-900/40 dark:bg-black/60 transition-colors duration-300"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <span className="block text-italian-cream font-sans text-xs font-bold tracking-[0.25em] uppercase mb-2">
                Reviews
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white relative inline-block">
                La Famiglia Says
            </h2>
             <div className="flex items-center justify-center gap-2 mt-4">
                <div className="h-[1px] w-12 bg-italian-red"></div>
                <span className="text-italian-red text-xl">❦</span>
                <div className="h-[1px] w-12 bg-italian-red"></div>
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white dark:bg-earth-900 p-8 rounded-sm relative shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-transparent hover:border-italian-red"
            >
              <Quote className="absolute top-6 right-6 text-earth-200 dark:text-earth-700" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-italian-red text-italian-red" />
                ))}
              </div>
              
              <p className="text-earth-600 dark:text-earth-300 italic font-medium font-serif mb-8 leading-relaxed text-lg">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-earth-100 dark:border-earth-800 pt-6">
                <div className="w-12 h-12 rounded-full bg-italian-green flex items-center justify-center text-white font-serif font-bold text-xl shadow-md">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-earth-900 dark:text-earth-100 font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-earth-500 dark:text-earth-400 text-xs uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;