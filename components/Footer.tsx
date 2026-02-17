import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 pt-20 border-t-4 border-italian-red text-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
                <h3 className="font-serif text-3xl text-white">Cucina Rustica</h3>
                <span className="text-italian-red text-xs font-bold uppercase tracking-widest">Italian Tradition</span>
            </div>
            <p className="text-earth-300 text-sm leading-relaxed">
              Bringing the authentic taste of Italy to your neighborhood. Fresh ingredients, family recipes, and love in every bite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-earth-800 flex items-center justify-center text-earth-300 hover:text-white hover:bg-italian-red transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-earth-800 flex items-center justify-center text-earth-300 hover:text-white hover:bg-italian-red transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-earth-800 flex items-center justify-center text-earth-300 hover:text-white hover:bg-italian-red transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-italian-cream border-b border-earth-800 pb-2 inline-block">Contact Us</h4>
            <div className="space-y-4">
                <div className="flex items-start gap-3 text-earth-300">
                    <MapPin className="text-italian-red mt-1" size={18} />
                    <span className="text-sm">123 Olive Grove Ave,<br/>Little Italy, NY 10013</span>
                </div>
                <div className="flex items-center gap-3 text-earth-300">
                    <Phone className="text-italian-red" size={18} />
                    <span className="text-sm">+1 (555) 234-5678</span>
                </div>
                <div className="flex items-center gap-3 text-earth-300">
                    <Mail className="text-italian-red" size={18} />
                    <span className="text-sm">ciao@cucinarustica.com</span>
                </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-italian-cream border-b border-earth-800 pb-2 inline-block">Opening Hours</h4>
            <div className="space-y-2 text-sm text-earth-300">
                <div className="flex justify-between border-b border-earth-800 pb-2 border-dashed">
                    <span>Tue - Thu</span>
                    <span>5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-earth-800 pb-2 border-dashed">
                    <span>Fri - Sat</span>
                    <span>5:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between pb-2">
                    <span>Sunday</span>
                    <span>12:00 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between pt-2 text-italian-red italic">
                    <span>Monday</span>
                    <span>Closed</span>
                </div>
            </div>
          </div>

          {/* Map Mockup */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-italian-cream border-b border-earth-800 pb-2 inline-block">Visit Us</h4>
            <div className="w-full h-40 bg-earth-800 rounded-sm relative overflow-hidden group cursor-pointer border border-earth-700">
                {/* Simulated Map */}
                <div className="absolute inset-0 bg-earth-800 opacity-60"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="text-italian-red fill-italian-red/20" size={32} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-bold text-white uppercase tracking-widest border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors">Get Directions</span>
                </div>
            </div>
          </div>

        </div>

        <div className="py-8 border-t border-earth-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-earth-500 text-xs">© 2024 Cucina Rustica. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-earth-400">
                <a href="#" className="hover:text-italian-red transition-colors">Privacy</a>
                <a href="#" className="hover:text-italian-red transition-colors">Terms</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;