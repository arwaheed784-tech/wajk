import React, { useState } from 'react';
import { Menu, X, Wheat } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-earth-50/95 dark:bg-earth-950/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
             {/* Logo Icon */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${scrolled ? 'bg-italian-red text-white' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
                <Wheat size={22} />
            </div>
            <div className="flex flex-col">
                <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-italian-red' : 'text-white'}`}>
                CUCINA
                </span>
                <span className={`font-sans text-[10px] font-bold uppercase tracking-[0.3em] -mt-1 transition-colors duration-300 ${scrolled ? 'text-italian-green' : 'text-white/80'}`}>
                RUSTICA
                </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative group px-3 py-2 text-sm font-bold tracking-wide transition-colors duration-200 ${
                    scrolled ? 'text-earth-800 dark:text-earth-100 hover:text-italian-red' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left ${scrolled ? 'bg-italian-green' : 'bg-white'}`}></span>
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
                <div className={`${!scrolled && 'text-white'}`}>
                    <ThemeToggle />
                </div>
                
                <a
                    href="#contact"
                    className={`px-6 py-2.5 text-sm font-bold tracking-wide rounded-sm transition-all duration-300 shadow-lg ${
                        scrolled 
                        ? 'bg-italian-red text-white hover:bg-italian-green' 
                        : 'bg-white text-italian-red hover:bg-italian-cream hover:text-italian-green'
                    }`}
                >
                    BOOK A TABLE
                </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden items-center gap-2">
             <div className={`${!scrolled && !isOpen && 'text-white'} ${isOpen ? 'text-earth-900 dark:text-earth-100' : ''}`}>
                 <ThemeToggle />
             </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                  scrolled || isOpen ? 'text-earth-900 dark:text-earth-100 hover:bg-earth-100 dark:hover:bg-earth-800' : 'text-white hover:bg-white/20'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden bg-earth-50 dark:bg-earth-900 shadow-xl ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-earth-200 dark:border-earth-800">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-earth-800 dark:text-earth-100 hover:text-italian-red hover:bg-earth-100 dark:hover:bg-earth-800 text-center"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 pb-2">
            <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-3 bg-italian-red text-white font-bold tracking-wide rounded-sm hover:bg-italian-green"
            >
                BOOK A TABLE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;