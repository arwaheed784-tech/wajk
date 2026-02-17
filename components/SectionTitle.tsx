import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <span className="block text-italian-green font-sans text-xs font-bold tracking-[0.25em] uppercase mb-2">
        {subtitle}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-earth-900 dark:text-earth-100 relative inline-block transition-colors duration-300">
        {title}
      </h2>
      <div className={`flex items-center gap-2 mt-4 ${centered ? 'justify-center' : 'justify-start'}`}>
         <div className="h-[1px] w-12 bg-italian-red"></div>
         <span className="text-italian-red text-xl">❦</span>
         <div className="h-[1px] w-12 bg-italian-red"></div>
      </div>
    </div>
  );
};

export default SectionTitle;