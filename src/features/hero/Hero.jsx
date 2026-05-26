import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ setActiveSection }) => {
  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center pt-20 px-6">
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-8 transition-colors duration-300"
        >
          <span className="w-2 h-2 rounded-full bg-swaash-cyan animate-pulse"></span>
          <span className="text-xs font-medium tracking-wide text-gray-700 dark:text-gray-300 uppercase transition-colors duration-300">Available for freelance work</span>
        </motion.div>

        {/* UPGRADED: Main Brand Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors duration-300">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-swaash-cyan to-swaash-purple">Swaash Technologies.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed transition-colors duration-300"
        >
          Building scalable web & mobile solutions. Specializing in the MERN stack and high-performance mobile applications.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* View Our Work Button */}
          <button 
            onClick={() => setActiveSection('work')}
            className="px-8 py-3.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-swaash-dark font-bold hover:opacity-80 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Our Work
          </button>
          
          {/* Contact Us Button */}
          <button 
            onClick={() => setActiveSection('contact')}
            className="px-8 py-3.5 rounded-full bg-black/5 dark:bg-white/5 text-gray-900 dark:text-white border border-black/10 dark:border-white/10 font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
          >
            Partner With Us
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;