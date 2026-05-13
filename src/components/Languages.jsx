import React from 'react';
import { motion } from 'framer-motion';
import { Book, Edit3, Palette, Globe } from 'lucide-react';

const ItemCard = ({ icon: Icon, title, items, color }) => (
  <div className={`pixel-card ${color} flex-1`}>
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-white pixel-border">
        <Icon size={24} />
      </div>
      <h3 className="font-pixel text-[14px]">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-3 font-medium">
          <span className="w-2 h-2 bg-black"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Languages = () => {
  return (
    <section id="hobbies" className="py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        <ItemCard 
          icon={Globe}
          title="LANGUAGES"
          items={["English (Fluent)", "Hindi (Native)", "Marathi (Native)"]}
          color="bg-pastel-lavender"
        />
        
        <ItemCard 
          icon={Edit3}
          title="HOBBIES"
          items={["Technical Writing", "Sci-Fi Reading", "UI/UX Designing"]}
          color="bg-pastel-mint"
        />
        
      </div>
    </section>
  );
};

export default Languages;
