import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillIcon = ({ name, color, isSelected, onClick }) => (
  <motion.div 
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`w-20 h-20 md:w-24 md:h-24 pixel-border flex items-center justify-center p-2 text-center cursor-pointer transition-all ${isSelected ? 'ring-4 ring-black ring-offset-2 scale-105' : ''} ${color}`}
  >
    <div className={`font-pixel leading-tight uppercase select-none w-full break-words ${
      name.length > 15 ? 'text-[6px] md:text-[7px]' : 
      name.length > 10 ? 'text-[8px] md:text-[9px]' : 
      'text-[10px] md:text-[11px]'
    }`}>
      {name}
    </div>
  </motion.div>
);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = React.useState(null);

const skillGroups = {
    technical: [
      { name: "Javascript", color: "bg-pastel-yellow", usedIn: "Quick Commerce Web App" },
      { name: "Python", color: "bg-pastel-pink", usedIn: "F1 Strategy Analyzer, SocialBot AI, SkillCraft Internship" },
      { name: "React.js", color: "bg-pastel-blue", usedIn: "Quick Commerce, F1 Analyzer, SocialBot AI" },
      { name: "Node.js", color: "bg-pastel-mint", usedIn: "Quick Commerce Web App (MERN)" },
      { name: "Express.js", color: "bg-pastel-lavender", usedIn: "Quick Commerce Web App (MERN)" },
      { name: "MongoDB", color: "bg-pastel-pink", usedIn: "Quick Commerce Web App (MERN)" },
      { name: "Power BI", color: "bg-pastel-yellow", usedIn: "F1 Race Strategy Analyzer" },
      { name: "Pandas", color: "bg-pastel-mint", usedIn: "F1 Strategy Analyzer, SkillCraft Internship" },
      { name: "FastAPI", color: "bg-pastel-blue", usedIn: "F1 Race Strategy Analyzer" },
      { name: "NLP", color: "bg-pastel-lavender", usedIn: "AI Chatbot for Social Media" },
      { name: "C Language", color: "bg-gray-100", usedIn: "Academic Fundamentals" },
      { name: "SQL", color: "bg-gray-100", usedIn: "Database Management Projects" },
    ],
    soft: [
      { name: "Team Leadership", color: "bg-white", usedIn: "Lead of Quick Commerce Team" },
      { name: "Project Management", color: "bg-white", usedIn: "Quick Commerce / SocialBot AI" },
      { name: "Communication", color: "bg-white", usedIn: "Pehchaan The Street School Outreach" },
      { name: "Critical Thinking", color: "bg-white", usedIn: "Trend Analysis & Telemetry Modeling" },
      { name: "Technical Writing", color: "bg-white", usedIn: "Content Writing Intern @ Pehchaan" },
      { name: "Problem Solving", color: "bg-white", usedIn: "F1 Strategy Logic & AI Prompt Engineering" },
    ]
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="retro-window bg-white overflow-hidden">
          <div className="retro-window-header">
            <div className="dot bg-pastel-pink"></div>
            <div className="dot bg-pastel-mint"></div>
            <div className="dot bg-pastel-blue"></div>
            <span className="text-white font-pixel text-[10px] ml-auto">Skill_Inventory.inv</span>
          </div>

          <div className="p-8">
            <div className="mb-12">
              <h3 className="font-pixel text-lg mb-8 border-b-4 border-black pb-2 inline-block">TECHNICAL_SKILLS</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skillGroups.technical.map((skill, index) => (
                  <SkillIcon 
                    key={index} 
                    {...skill} 
                    isSelected={selectedSkill?.name === skill.name}
                    onClick={() => setSelectedSkill(skill)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-pixel text-lg mb-8 border-b-4 border-black pb-2 inline-block">SOFT_POWER_UPS</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skillGroups.soft.map((skill, index) => (
                  <SkillIcon 
                    key={index} 
                    {...skill} 
                    isSelected={selectedSkill?.name === skill.name}
                    onClick={() => setSelectedSkill(skill)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-black text-white p-6 font-pixel relative min-h-[100px] flex flex-col justify-center border-t-4 border-black">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="text-pastel-mint"
                >
                  <p className="text-[12px] mb-2 uppercase underline">SELECTED: {selectedSkill.name}</p>
                  <p className="text-[10px] leading-relaxed">
                    <span className="text-white">USED_IN:</span> {selectedSkill.usedIn}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-500 text-[10px] text-center"
                >
                  [ SELECT AN ITEM FROM THE INVENTORY TO VIEW ATTRIBUTES ]
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Retro Cursor Decoration */}
            <div className="absolute bottom-2 right-2 w-2 h-4 bg-pastel-mint animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
