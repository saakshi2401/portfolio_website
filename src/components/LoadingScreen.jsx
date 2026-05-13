import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-pastel-lavender flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="retro-window w-full max-w-md bg-white p-8"
      >
        <div className="retro-window-header">
          <div className="dot bg-pastel-pink"></div>
          <div className="dot bg-pastel-mint"></div>
          <div className="dot bg-pastel-blue"></div>
          <span className="text-white font-pixel text-[10px] ml-auto">Sakshi.exe</span>
        </div>

        <div className="text-center mt-4">
          <h1 className="font-pixel text-lg mb-8 animate-pulse text-black">
            Booting Sakshi.exe...
          </h1>
          
          <div className="xp-bar-container mb-4">
            <motion.div 
              className="xp-bar-fill"
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex justify-between font-pixel text-[10px]">
            <span>LOADING...</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="mt-8 text-[12px] font-pixel text-gray-500">
            [ RUNNING SYSTEM_CHECK ]
            <br />
            [ ASSETS LOADED: {progress > 30 ? 'OK' : '...'} ]
            <br />
            [ COFFEE LEVEL: {progress > 60 ? 'OPTIMAL' : '...'} ]
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
