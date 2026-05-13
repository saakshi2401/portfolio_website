import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Howl } from 'howler';

// Components
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Languages from './components/Languages';
import Contact from './components/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Sound effect
  const clickSound = new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'], // Retro click-like sound
    volume: 0.5,
  });

  useEffect(() => {
    const handleContextClick = () => clickSound.play();
    window.addEventListener('click', handleContextClick);
    return () => window.removeEventListener('click', handleContextClick);
  }, [clickSound]);

  return (
    <div className="min-h-screen bg-pastel-lavender/10 selection:bg-black selection:text-white">
      <AnimatePresence>
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Languages />
            <Contact />
            
            {/* Custom Cursor Decoration */}
            <div className="fixed bottom-4 right-4 bg-black text-white px-3 py-1 font-pixel text-[8px] z-50">
              BUILD_V1.0.2
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
