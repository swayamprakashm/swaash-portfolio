import React from 'react';
import { motion } from 'framer-motion';

// ==========================================
// 1. IMPORT YOUR PROGRAMMING ICONS HERE
// Verify these filenames match your assets!
// ==========================================
import frontendIcon from '../../assets/icons/frontend.png';
import backendIcon from '../../assets/icons/backend.png';
import mobileIcon from '../../assets/icons/mobile.png';

import reactIcon from '../../assets/icons/react.png';
import viteIcon from '../../assets/icons/vite.png';
import tailwindIcon from '../../assets/icons/tailwind.png';
import framerIcon from '../../assets/icons/framer.png';

import nodeIcon from '../../assets/icons/node.png';
import expressIcon from '../../assets/icons/express.png';
import mongoIcon from '../../assets/icons/mongodb.png';
// Make sure to delete the apiIcon import here if you don't have the file!

import kotlinIcon from '../../assets/icons/kotlin.png';
import androidIcon from '../../assets/icons/android.png';
import pythonIcon from '../../assets/icons/python.png';
import mlIcon from '../../assets/icons/ml.png';

const Expertise = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "Crafting highly responsive, cinematic user interfaces focused on fluid motion and seamless state management.",
      // UPDATED: Now uses your custom frontendIcon image!
      icon: <img src={frontendIcon} alt="Frontend" className="w-8 h-8 object-contain drop-shadow-md" />,
      color: "text-swaash-cyan",
      bgColor: "bg-swaash-cyan/10",
      tech: [
        { name: "React.js", icon: reactIcon },
        { name: "Vite", icon: viteIcon },
        { name: "Tailwind CSS", icon: tailwindIcon },
        { name: "Framer Motion", icon: framerIcon }
      ]
    },
    {
      title: "Backend Architecture",
      description: "Engineering secure RESTful APIs and scalable database structures to power real-time data flows.",
      // UPDATED: Now uses your custom backendIcon image!
      icon: <img src={backendIcon} alt="Backend" className="w-8 h-8 object-contain drop-shadow-md" />,
      color: "text-swaash-purple",
      bgColor: "bg-swaash-purple/10",
      tech: [
        { name: "Node.js", icon: nodeIcon },
        { name: "Express.js", icon: expressIcon },
        { name: "MongoDB", icon: mongoIcon },
        { name: "REST APIs", icon: null } // Set to null if you don't have an icon for this
      ]
    },
    {
      title: "Mobile & Machine Learning",
      description: "Bridging the gap between the web and native hardware, from Android system integrations to predictive data models.",
      // UPDATED: Now uses your custom mobileIcon image!
      icon: <img src={mobileIcon} alt="Mobile" className="w-8 h-8 object-contain drop-shadow-md" />,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      tech: [
        { name: "Kotlin", icon: kotlinIcon },
        { name: "Android SDK", icon: androidIcon },
        { name: "Python", icon: pythonIcon },
        { name: "Machine Learning", icon: mlIcon }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto h-full overflow-y-auto custom-scrollbar">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-xs font-mono text-swaash-cyan tracking-widest uppercase mb-2">My Arsenal</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          Technical <span className="text-gray-500 dark:text-gray-500">Expertise</span>
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/40 dark:bg-black/20 backdrop-blur-md p-8 rounded-2xl border border-black/10 dark:border-white/5 hover:border-swaash-cyan/50 dark:hover:border-white/10 transition-all duration-300 flex flex-col"
          >
            {/* The icon container */}
            <div className={`w-14 h-14 rounded-lg ${skill.bgColor} ${skill.color} flex items-center justify-center mb-6 border border-white/10 shadow-inner`}>
              {skill.icon}
            </div>
            
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
              {skill.title}
            </h4>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors duration-300 flex-grow">
              {skill.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {skill.tech.map((item, i) => (
                <span 
                  key={i} 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-200 text-sm font-medium transition-colors duration-300 hover:border-swaash-cyan/40 hover:bg-swaash-cyan/5 dark:hover:bg-swaash-cyan/10"
                >
                  {item.icon && (
                    <img src={item.icon} alt={item.name} className="w-4 h-4 object-contain drop-shadow-sm" />
                  )}
                  {item.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;