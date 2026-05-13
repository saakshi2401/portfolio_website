import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Trash2, Download } from 'lucide-react';

const AdminModal = ({ onClose, onSave, projects, onDelete }) => {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    longDescription: '',
    iconName: 'Laptop',
    tags: '',
    github: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectToAdd = {
      ...newProject,
      tags: newProject.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      id: Date.now()
    };
    onSave(projectToAdd);
    setNewProject({
      title: '',
      description: '',
      longDescription: '',
      iconName: 'Laptop',
      tags: '',
      github: ''
    });
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projects, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "projects.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="retro-window max-w-4xl w-full max-h-[90vh] bg-white overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="retro-window-header flex justify-between items-center px-4 py-2 bg-pastel-pink text-black">
          <span className="font-pixel text-[10px]">PROJECT_MANAGER_V1.0</span>
          <button onClick={onClose} className="hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Add Project Form */}
          <section>
            <h3 className="font-pixel text-sm mb-6 border-b-2 border-black pb-2 flex items-center gap-2">
              <Plus size={16} /> ADD_NEW_PROJECT
            </h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block font-pixel text-[10px] mb-1 uppercase">Project Title</label>
                  <input 
                    required
                    className="w-full p-2 border-2 border-black font-medium text-sm focus:bg-pastel-blue/10 outline-none"
                    value={newProject.title}
                    onChange={e => setNewProject({...newProject, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block font-pixel text-[10px] mb-1 uppercase">Short Description</label>
                  <textarea 
                    required
                    className="w-full p-2 border-2 border-black font-medium text-sm focus:bg-pastel-blue/10 outline-none h-20"
                    value={newProject.description}
                    onChange={e => setNewProject({...newProject, description: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block font-pixel text-[10px] mb-1 uppercase">Tags (comma separated)</label>
                  <input 
                    placeholder="React, Node, Tailwind..."
                    className="w-full p-2 border-2 border-black font-medium text-sm focus:bg-pastel-blue/10 outline-none"
                    value={newProject.tags}
                    onChange={e => setNewProject({...newProject, tags: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-pixel text-[10px] mb-1 uppercase">Long Description (Details)</label>
                  <textarea 
                    required
                    className="w-full p-2 border-2 border-black font-medium text-sm focus:bg-pastel-blue/10 outline-none h-32"
                    value={newProject.longDescription}
                    onChange={e => setNewProject({...newProject, longDescription: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block font-pixel text-[10px] mb-1 uppercase">GitHub Repo Link</label>
                  <input 
                    required
                    type="url"
                    className="w-full p-2 border-2 border-black font-medium text-sm focus:bg-pastel-blue/10 outline-none"
                    value={newProject.github}
                    onChange={e => setNewProject({...newProject, github: e.target.value})}
                  />
                </div>
                <button type="submit" className="w-full py-3 bg-black text-white font-pixel text-[12px] hover:bg-pastel-mint hover:text-black transition-all pixel-border">
                  SAVE_TO_INVENTORY
                </button>
              </div>
            </form>
          </section>

          {/* Current Inventory */}
          <section>
            <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-2">
              <h3 className="font-pixel text-sm flex items-center gap-2 uppercase">
                CURRENT_INVENTORY ({projects.length})
              </h3>
              <button 
                onClick={handleExport}
                className="flex items-center gap-2 px-3 py-1 bg-pastel-blue border-2 border-black font-pixel text-[8px] hover:bg-white transition-colors"
              >
                <Download size={12} /> EXPORT_JSON
              </button>
            </div>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 border-2 border-black border-dashed">
                  <div>
                    <h4 className="font-pixel text-[12px] mb-1 uppercase">{project.title}</h4>
                    <p className="text-[10px] text-gray-500">{project.github}</p>
                  </div>
                  <button 
                    onClick={() => onDelete(index)}
                    className="p-2 text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdminModal;
