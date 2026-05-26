import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../constants';
import founderImage from '../../assets/founder.jpg';

const About = () => {
  return (
    // SECTION UPDATE: Removed fixed dark background, added theme-aware borders
    <section id="about" className="py-24 relative overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      
      {/* Background Accent UPDATE */}
      <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-swaash-cyan/10 dark:bg-swaash-cyan/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none transition-colors duration-500" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: The Visual Profile */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative group"
          >
            {/* Animated Glow Background for the Card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-swaash-cyan to-swaash-purple rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            {/* The Glass Card Container UPDATE: Theme-aware background and borders */}
            <div className="relative rounded-2xl overflow-hidden bg-white/40 dark:bg-[#0a0a0a] min-h-[450px] flex flex-col justify-end border border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/20 transition-all shadow-2xl">
              
              {/* 1. The Full-Cover Image */}
              <img 
                src={founderImage} 
                alt={personalInfo.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />

              {/* 2. Gradient Overlay UPDATE: Fades to white in light mode, black in dark mode */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-[#050505] dark:via-[#050505]/60 to-transparent transition-colors duration-300"></div>

              {/* 3. The Text UPDATE: Text flips from dark gray to white based on mode */}
              <div className="relative z-10 p-8 text-center w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide drop-shadow-md transition-colors duration-300">
                  {personalInfo.name}
                </h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-swaash-cyan to-swaash-purple font-bold tracking-widest uppercase text-sm drop-shadow-sm">
                  Founder & CEO
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Side: The Vision & Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              {/* TAGLINE UPDATE */}
              <h2 className="text-sm font-mono text-gray-500 dark:text-gray-400 tracking-widest uppercase mb-2 flex items-center gap-2 transition-colors duration-300">
                <span className="w-8 h-[1px] bg-swaash-cyan"></span> Behind the Code
              </h2>
              {/* HEADING UPDATE */}
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                Engineering the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-swaash-cyan to-swaash-purple text-glow">Swaash Technologies.</span>
              </h3>
            </div>

            <div className="relative z-10 pl-6 border-l-2 border-swaash-cyan/30 space-y-4">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-300">
              My mission is to bridge the gap between complex backend architecture and cinematic, seamless user experiences. At Swaash Technologies, we don't just write code; we build scalable digital ecosystems from predictive machine learning models to robust usage trackers like AppOrbit.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-300">
              As a Computer Science Engineering student specializing in the MERN stack and native mobile integration, I approach every project with an engineering mindset and a designer's eye. Whether I am architecting a dual-phase authentication system or crafting a fluid, interactive UI, I build software that performs exactly as good as it looks.
            </p>
          </div>

            {/* SOCIAL BUTTONS UPDATE: Inverted backgrounds, borders, and text colors */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="https://linkedin.com/in/www.linkedin.com/in/swayam-prakash-macharla" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-300 group">
                <span className="text-xl opacity-70 group-hover:opacity-100 transition-opacity">💼</span>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white font-medium transition-colors duration-300">LinkedIn</span>
              </a>
              
              <a href="https://github.com/swayamprakashm" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-gray-500 dark:hover:border-white/50 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 group">
                <span className="text-xl opacity-70 group-hover:opacity-100 transition-opacity">💻</span>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white font-medium transition-colors duration-300">GitHub</span>
              </a>

              <a href="https://swayamprakashmacharla.netlify.app/" className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all duration-300 group">
                <span className="text-xl opacity-70 group-hover:opacity-100 transition-opacity">👤</span>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white font-medium transition-colors duration-300">About Swayam</span>
              </a>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;