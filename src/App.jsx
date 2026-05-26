import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/common/Loader'; 
import Navbar from './components/layout/Navbar';
import Background from './components/layout/Background'; 
import Hero from './features/hero/Hero';
import About from './features/about/About';
import Expertise from './features/expertise/Expertise';
import Projects from './features/projects/Projects';
import Contact from './features/contact/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true); // 1. Added loading state

  // 2. Add effect to hide loader after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden text-gray-900 dark:text-white transition-colors duration-300 font-sans flex flex-col relative">
      
      {/* 3. Wrap everything in AnimatePresence so the Loader fades out smoothly */}
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full flex flex-col"
          >
            <Background />
            <Navbar setActiveSection={setActiveSection} />
            
            <main className="flex-1 relative w-full h-full z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full w-full absolute inset-0"
                >
                  {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
                  {activeSection === 'about' && <About />}
                  {activeSection === 'expertise' && <Expertise />}
                  {activeSection === 'work' && <Projects />}
                  {activeSection === 'contact' && <Contact />}
                </motion.div>
              </AnimatePresence>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}

export default App;   