import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Heart } from 'lucide-react';
import { Github, Linkedin, Substack, Medium } from './Icons';
import sittingAvatar from '../assets/avatars/sitting.png';
import heartAvatar from '../assets/avatars/heart.png';

const Contact = () => {
  const [isHeart, setIsHeart] = React.useState(false);

  const socialLinks = [
    { icon: Mail, label: "EMAIL", href: "mailto:sakshiavinashpatil@gmail.com", color: "hover:bg-pastel-pink" },
    { icon: Linkedin, label: "LINKEDIN", href: "https://www.linkedin.com/in/sakshi-patil-24jan/", color: "hover:bg-pastel-blue" },
    { icon: Github, label: "GITHUB", href: "https://github.com/saakshi2401", color: "hover:bg-pastel-mint" },
    { icon: Substack, label: "SUBSTACK", href: "https://substack.com/@glimpseofsaksh", color: "hover:bg-pastel-purple" },
    { icon: Medium, label: "MEDIUM", href: "https://medium.com/@sakshipatil24january", color: "hover:bg-pastel-yellow" },
    { icon: Phone, label: "PHONE", href: "tel:+910000000000", color: "hover:bg-pastel-orange" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-black text-white overflow-hidden relative">
      {/* Decorative Pixel Stars */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-white animate-pulse delay-75"></div>
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white animate-pulse delay-150"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-2xl md:text-3xl mb-4">FINAL_LEVEL: CONTACT</h2>
          <p className="text-gray-400 font-pixel text-[10px]">SAVE YOUR PROGRESS BY REACHING OUT</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 flex flex-wrap justify-center md:justify-start gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className={`w-12 h-12 flex items-center justify-center border-2 border-white transition-all ${link.color} hover:text-black group relative`}
                title={link.label}
              >
                <link.icon size={20} />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 font-pixel text-[8px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="relative group cursor-pointer" onClick={() => setIsHeart(!isHeart)}>
            <div className="w-48 h-48 pixel-border bg-white p-4">
              <img 
                src={isHeart ? heartAvatar : sittingAvatar} 
                alt="Sakshi" 
                className="w-full h-full object-contain pixelated" 
              />
            </div>
            
            {/* Easter Egg Message */}
            {isHeart && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 bg-white text-black p-3 pixel-border text-[10px] font-pixel text-center"
              >
                YOU FOUND AN EASTER EGG! <br />
                THANKS FOR VISITING! ❤️
              </motion.div>
            )}
            
            <div className="mt-4 flex items-center justify-center gap-2 font-pixel text-[10px] text-pastel-pink animate-bounce">
              <Heart size={14} fill="currentColor" />
              <span>CLICK_FOR_LOVE</span>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center border-t border-white/20 pt-10">
          <p className="font-pixel text-[8px] text-gray-500">
            © 2026 SAKSHI AVINASH PATIL. ALL RIGHTS RESERVED. <br />
            MADE WITH PIXELS AND PASSION.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
