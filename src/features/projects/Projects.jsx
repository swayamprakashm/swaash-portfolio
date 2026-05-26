import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, FolderKanban } from 'lucide-react';
import { projects } from '../../constants';

const Projects = () => {
  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto h-full overflow-y-auto custom-scrollbar">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 flex flex-col items-center text-center"
      >
        <h2 className="text-sm font-mono text-swaash-purple tracking-widest uppercase mb-2">Portfolio</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-swaash-cyan to-swaash-purple">Work</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl transition-colors duration-300">
          A selection of my recent engineering projects, focusing on scalable architecture, user experience, and real-world utility.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/40 dark:bg-black/20 backdrop-blur-none md:backdrop-blur-md will-change-transform rounded-2xl border border-black/10 dark:border-white/10 hover:border-swaash-cyan/50 dark:hover:border-swaash-cyan/30 transition-all duration-300 flex flex-col h-full group overflow-hidden"
          >
            {/* Project Image Header */}
            <div className="relative h-48 w-full overflow-hidden border-b border-black/10 dark:border-white/10">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-swaash-cyan/10 rounded-lg text-swaash-cyan">
                  <FolderKanban size={24} />
                </div>
                <div className="flex gap-4">
                  <a href={project.githubUrl} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Code2 size={20} />
                  </a>
                  <a href={project.liveUrl} className="text-gray-500 dark:text-gray-400 hover:text-swaash-cyan dark:hover:text-swaash-cyan transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-swaash-cyan transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-swaash-purple text-sm font-medium mb-4">{project.subtitle}</p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow text-sm leading-relaxed transition-colors duration-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-black/10 dark:border-white/10">
                {project.tech.map((techItem, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs font-mono text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 px-2 py-1 rounded-md transition-colors duration-300"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
