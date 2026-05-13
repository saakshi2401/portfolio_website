import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-2xl mb-12 text-center">ACADEMIC_STATS</h2>
        
        <div className="relative p-1 bg-black shadow-[10px_10px_0px_0px_rgba(150,150,150,0.5)]">
          <div className="border-4 border-[#5d4037] bg-[#2e7d32] p-8 md:p-12 relative overflow-hidden">
            {/* Chalkboard Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white font-pixel"
            >
              <div className="mb-10">
                <span className="text-pastel-yellow text-sm block mb-4 underline">UNIVERSITY.LOG</span>
                <h3 className="text-lg md:text-xl mb-2">Walchand Institute of Technology, Solapur</h3>
                <p className="text-gray-300 text-[12px] italic">ESTD. 1983</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-2 border-dashed border-white/30 p-4">
                  <span className="text-pastel-pink text-[10px] block mb-2 underline">DEGREE</span>
                  <p className="text-[14px]">B.Tech in Computer Science & Engineering</p>
                </div>
                
                <div className="border-2 border-dashed border-white/30 p-4">
                  <span className="text-pastel-mint text-[10px] block mb-2 underline">PERIOD</span>
                  <p className="text-[14px]">2023 – 2027 (IN_PROGRESS)</p>
                </div>
              </div>

              <div className="mt-10 p-6 bg-white/5 border border-white/20">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[12px]">CURRENT_SCORE:</span>
                  <span className="text-2xl text-pastel-yellow">9.2 CGPA</span>
                </div>
                <div className="xp-bar-container bg-transparent border-white/30">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    className="h-full bg-pastel-yellow"
                  />
                </div>
              </div>

            </motion.div>
          </div>
          
          {/* Eraser Asset */}
          <div className="absolute -bottom-6 right-10 w-20 h-6 bg-pastel-pink border-2 border-black hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;
