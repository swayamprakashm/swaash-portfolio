import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, personalInfo } from '../../constants';
import logoImg from '../../assets/logo.png';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = ({ setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // FIX APPLIED: bg-white/80 handles the light mode background!
    <header className="fixed top-0 w-full z-50 transition-colors duration-300 bg-white/80 dark:bg-swaash-dark/70 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-lg shadow-swaash-cyan/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Button */}
        <button 
          onClick={() => setActiveSection('home')} 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img 
            src={logoImg} 
            alt="Swaash.tech" 
            className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" 
          />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button 
                onClick={() => setActiveSection(link.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-swaash-cyan dark:hover:text-swaash-cyan transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.title}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Right Side: Resume, Theme Toggle & Contact Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-6"
        >
          {/* Resume Download Button */}
          <a 
            href="/resume.pdf" 
            download="Swayam_Prakash_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-swaash-purple dark:hover:text-swaash-purple hover:border-swaash-purple/50 transition-all duration-300 text-sm font-medium"
          >
            <Download size={16} /> Resume
          </a>

          <ThemeToggle />

          <button 
            onClick={() => setActiveSection('contact')}
            className="px-5 py-2.5 rounded-full border border-swaash-cyan text-swaash-cyan hover:bg-swaash-cyan hover:text-white dark:hover:text-swaash-dark transition-all duration-300 font-medium text-sm shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
          >
            Let's Talk
          </button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-black dark:text-white hover:text-swaash-cyan transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-swaash-dark/95 backdrop-blur-xl border-b border-black/10 dark:border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => {
                      setActiveSection(link.id);
                      setIsMobileMenuOpen(false); 
                    }}
                    className="text-gray-800 dark:text-gray-300 hover:text-swaash-cyan transition-colors text-lg font-medium tracking-wide"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
              
              {/* Mobile Resume Button & Theme Toggle */}
              <li className="w-full flex justify-center items-center gap-6 pt-4 border-t border-black/10 dark:border-white/10">
                <a 
                  href="/resume.pdf" 
                  download="Swayam_Prakash_Resume.pdf"
                  className="flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-300 hover:text-swaash-purple transition-colors text-sm font-medium"
                >
                  <Download size={16} /> Resume
                </a>
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;