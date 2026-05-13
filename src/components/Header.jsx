import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import wavingAvatar from '../assets/avatars/waving.png';
import { Github } from './Icons';
import ContactCard from './ContactCard';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
  const [showContact, setShowContact] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const RESUME_LINK = "https://drive.google.com/file/d/17TPSaTXJmGkn5CXG9lpkdW1WyJPNb7yM/view?usp=sharing";

  return (
    <header className="relative pt-20 pb-10 px-4">
      {/* Progress Tracker */}
      <div className="fixed top-0 left-0 right-0 h-4 bg-white border-b-4 border-black z-40">
        <motion.div 
          className="h-full bg-pastel-pink" 
          style={{ scaleX, transformOrigin: "0%" }}
        />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="pixel-border p-2 bg-pastel-mint">
            <img 
              src={wavingAvatar} 
              alt="Waving Avatar" 
              className="w-32 h-32 md:w-48 md:h-48 object-contain pixelated animate-wave" 
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-black text-white font-pixel text-[10px] px-2 py-1">
            LVL 3
          </div>
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-pixel text-2xl md:text-4xl mb-4 leading-tight"
          >
            SAKSHI AVINASH PATIL
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl font-medium text-gray-700"
          >
            Full-Stack Developer · Data Analyst <br className="hidden md:block" />
            Aspiring AI Applications Engineer
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a 
              href={RESUME_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pixel-button bg-pastel-lavender inline-block"
            >
              RESUME.PDF
            </a>
            <button 
              onClick={() => setShowContact(true)}
              className="pixel-button bg-pastel-blue"
            >
              CONTACT_ME
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showContact && <ContactCard onClose={() => setShowContact(false)} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
