import React from 'react';
import { motion } from 'framer-motion';
import peaceAvatar from '../assets/avatars/peace.png';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="retro-window p-8 bg-white">
          <div className="retro-window-header">
            <div className="dot bg-pastel-pink"></div>
            <div className="dot bg-pastel-mint"></div>
            <div className="dot bg-pastel-blue"></div>
            <span className="text-white font-pixel text-[10px] ml-auto">Character_Sheet.txt</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 mt-6">
            <div className="w-32 h-32 md:w-48 md:h-48 pixel-border bg-pastel-pink flex-shrink-0">
              <img src={peaceAvatar} alt="Peace Sign" className="w-full h-full object-contain pixelated" />
            </div>

            <div className="flex-1">
              <h2 className="font-pixel text-xl mb-6 flex items-center gap-2">
                <span className="text-pastel-pink">{'>'}</span> STATUS: ACTIVE
              </h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between font-pixel text-[10px] mb-2">
                    <span>EXPERIENCE (EDUCATION)</span>
                    <span>92% TO NEXT LEVEL</span>
                  </div>
                  <div className="xp-bar-container">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="xp-bar-fill"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium">Level 3 – B.Tech Student @ WIT Solapur (CGPA: 9.2)</p>
                </div>

                <div className="pixel-card bg-pastel-lavender/30 border-dashed border-2">
                  <p className="leading-relaxed">
                    Hello! I'm Sakshi, an <span className="font-bold text-black underline">Aspiring AI Applications Engineer</span> and <span className="font-bold text-black underline">Full-Stack Developer</span>. 
                    I love building creative solutions that combine data analysis with modern web technologies. 
                    My goal is to create AI-driven applications that are both functional and visually engaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
