import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, X, MapPin, ExternalLink } from 'lucide-react';
import { Github, Linkedin, Substack, Medium } from './Icons';
import headshot from '../assets/avatars/heart.png';

const ContactCard = ({ onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.8, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        exit={{ scale: 0.8, rotateY: -180 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative w-full max-w-sm"
        onClick={e => e.stopPropagation()}
      >
        {/* ID Card Front */}
        <div className="pixel-border bg-white overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,0.3)]">
          <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
            <span className="font-pixel text-[8px]">SAKSHI.EXE // ACCESS_CARD</span>
            <button onClick={onClose} className="hover:text-pastel-pink">
              <X size={16} />
            </button>
          </div>
          
          <div className="p-6">
            <div className="flex gap-6 mb-6">
              <div className="w-24 h-24 pixel-border bg-pastel-blue flex-shrink-0">
                <img src={headshot} alt="Sakshi" className="w-full h-full object-contain pixelated" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-pixel text-lg leading-tight mb-1">SAKSHI PATIL</h2>
                <p className="font-pixel text-[8px] text-pastel-pink uppercase mb-2">LVL 3 ENGINEER</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className={`w-2 h-2 ${i <= 4 ? 'bg-pastel-mint' : 'bg-gray-200'} pixel-border-sm`}></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 border-t-2 border-black pt-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-pastel-pink pixel-border-sm">
                  <Mail size={12} />
                </div>
                <a href="mailto:sakshipatil24january@gmail.com" className="text-[10px] font-pixel hover:underline break-all">
                  sakshipatil24january@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-pastel-mint pixel-border-sm text-black">
                  <Linkedin size={12} />
                </div>
                <a href="https://www.linkedin.com/in/sakshi-patil-24jan/" target="_blank" className="text-[10px] font-pixel hover:underline">
                  linkedin.com/in/sakshi-patil
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-pastel-purple pixel-border-sm text-black">
                  <Substack size={12} />
                </div>
                <a href="https://substack.com/@glimpseofsaksh" target="_blank" className="text-[10px] font-pixel hover:underline">
                  substack.com/@glimpseofsaksh
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-pastel-yellow pixel-border-sm text-black">
                  <Medium size={12} />
                </div>
                <a href="https://medium.com/@sakshipatil24january" target="_blank" className="text-[10px] font-pixel hover:underline">
                  medium.com/@sakshipatil
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-pastel-blue pixel-border-sm text-black">
                  <MapPin size={12} />
                </div>
                <span className="text-[10px] font-pixel uppercase">SOLAPUR, MH, IN</span>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-end">
              <div className="w-12 h-12 bg-black p-1">
                {/* Pixelated "QR Code" */}
                <div className="grid grid-cols-4 grid-rows-4 gap-0.5 h-full">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent'} w-full h-full`}></div>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className="font-pixel text-[6px] text-gray-400 uppercase">ISSUED_BY</p>
                <p className="font-pixel text-[8px]">SAKSHI PATIL</p>
              </div>
            </div>
          </div>
          
          <div className="h-4 bg-pastel-yellow border-t-4 border-black"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactCard;
