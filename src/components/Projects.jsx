import React from 'react';
import { ShoppingCart, Trophy, ExternalLink, Laptop, X, Settings } from 'lucide-react';
import { Github } from './Icons';
import typingAvatar from '../assets/avatars/typing.png';
import { motion, AnimatePresence } from 'framer-motion';
import { initialProjects } from '../data/projects';
import AdminModal from './AdminModal';

const iconMap = {
  ShoppingCart,
  Trophy,
  Laptop
};

const ProjectModal = ({ project, onClose }) => {
  const Icon = iconMap[project.iconName] || Laptop;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="retro-window max-w-2xl w-full bg-white overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="retro-window-header flex items-center justify-between px-4 py-2 bg-black text-white">
          <span className="font-pixel text-[10px]">PROJECT_DETAILS.EXE</span>
          <button onClick={onClose} className="hover:text-pastel-pink transition-colors">
            <X size={16} />
          </button>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-pastel-mint pixel-border">
              <Icon size={32} strokeWidth={3} />
            </div>
            <div>
              <h3 className="font-pixel text-xl uppercase leading-none mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-pixel px-2 py-1 bg-pastel-lavender/20 border border-black/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pixel-card bg-gray-50 mb-8 p-4 border-dashed border-2">
            <p className="text-sm leading-relaxed text-gray-700">
              {project.longDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-black text-white font-pixel text-[12px] hover:bg-gray-800 transition-colors pixel-border"
            >
              <Github size={16} />
              SOURCE_CODE
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ title, description, iconName, tags, onClick }) => {
  const Icon = iconMap[iconName] || Laptop;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="pixel-card bg-white hover:bg-pastel-lavender/10 transition-colors cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-pastel-mint pixel-border group-hover:bg-pastel-lavender transition-colors">
          <Icon size={24} strokeWidth={3} />
        </div>
        <div className="p-2 border-2 border-black opacity-30 group-hover:opacity-100 transition-opacity">
          <ExternalLink size={16} />
        </div>
      </div>
      <h3 className="font-pixel text-[14px] mb-3 leading-tight uppercase">{title}</h3>
      <p className="text-sm mb-4 line-clamp-3 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-pixel px-2 py-1 bg-gray-100 border border-black">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [showAdmin, setShowAdmin] = React.useState(false);
  const [projects, setProjects] = React.useState(() => {
    const saved = localStorage.getItem('sakshi_portfolio_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const saveProjects = (newProjects) => {
    setProjects(newProjects);
    localStorage.setItem('sakshi_portfolio_projects', JSON.stringify(newProjects));
  };

  const handleAddProject = (project) => {
    saveProjects([...projects, project]);
  };

  const handleDeleteProject = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    saveProjects(updated);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-pastel-blue/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-pixel text-2xl md:text-3xl mb-4">QUEST_LOG</h2>
            <p className="font-medium text-gray-600">Major projects and side quests completed.</p>
          </div>
          <div 
            className="flex items-center gap-4 bg-white p-3 pixel-border cursor-pointer hover:bg-pastel-pink/10 transition-colors"
            onDoubleClick={() => setShowAdmin(true)} // Hidden Admin access: Double click the typing status
          >
            <img src={typingAvatar} alt="Typing" className="w-12 h-12 pixelated" />
            <div className="font-pixel text-[10px]">
              CURRENTLY_CODING...
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} onClick={() => setSelectedProject(project)} />
          ))}
          
          {/* Inventory Placeholder */}
          <div 
            onClick={() => setShowAdmin(true)}
            className="pixel-card border-dashed border-gray-300 flex items-center justify-center bg-gray-50/50 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <div className="text-center">
              <div className="w-12 h-12 mx-auto border-4 border-dashed border-gray-300 mb-4 flex items-center justify-center text-gray-300 group-hover:text-black transition-colors">
                +
              </div>
              <span className="font-pixel text-[10px] text-gray-400">ADD_NEW_QUEST</span>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
        {showAdmin && (
          <AdminModal 
            projects={projects}
            onClose={() => setShowAdmin(false)} 
            onSave={handleAddProject}
            onDelete={handleDeleteProject}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
