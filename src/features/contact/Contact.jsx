import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../../constants';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // FormData automatically collects the hidden access_key input from the form
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error(data);
        setIsSubmitting(false);
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert("Error connecting to server.");
    }
  };

  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto h-full overflow-y-auto custom-scrollbar">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 flex flex-col items-center text-center"
      >
        <h2 className="text-xs font-mono text-swaash-purple tracking-widest uppercase mb-2">Next Steps</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-swaash-cyan to-swaash-purple">Extraordinary.</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl transition-colors duration-300">
          Whether you have a specific project in mind or just want to explore possibilities, my inbox is always open. Let's engineer the future.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
        
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div className="bg-white/40 dark:bg-black/20 backdrop-blur-md p-8 rounded-2xl border border-black/10 dark:border-white/5 transition-colors duration-300">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">
              Contact Information
            </h4>
            
            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-swaash-cyan/10 flex items-center justify-center text-swaash-cyan group-hover:bg-swaash-cyan group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium group-hover:text-swaash-cyan transition-colors">{personalInfo.email}</p>
                </div>
              </a>

              <a 
                href={`https://maps.google.com/?q=$Secunderabad,+Telangana`} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-swaash-purple/10 flex items-center justify-center text-swaash-purple group-hover:bg-swaash-purple group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-gray-900 dark:text-white font-medium group-hover:text-swaash-purple transition-colors">
                    {personalInfo.location}
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex flex-grow rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden relative min-h-[250px] shadow-lg group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121808.97193796851!2d78.43126839360408!3d17.44737083692809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a341e3d2319%3A0xc3670db1f47dd8de!2sSecunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1704250000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7"
        >
          <form 
            onSubmit={handleSubmit}
            className="bg-white/40 dark:bg-black/20 backdrop-blur-md p-8 rounded-2xl border border-black/10 dark:border-white/5 flex flex-col gap-6 transition-colors duration-300"
          >
            {/* The Access Key is here once, and nowhere else */}
            <input type="hidden" name="access_key" value="379a9358-dd63-44b4-aeae-ced6d746207d" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider pl-1">Your Name</label>
                <input name="name" type="text" required placeholder="Name" className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-swaash-cyan focus:ring-1 focus:ring-swaash-cyan transition-all duration-300" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider pl-1">Your Email</label>
                <input name="email" type="email" required placeholder="your@example.com" className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-swaash-cyan focus:ring-1 focus:ring-swaash-cyan transition-all duration-300" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider pl-1">Subject</label>
              <input name="subject" type="text" required placeholder="Freelance Project / Full-Time Role" className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-swaash-purple focus:ring-1 focus:ring-swaash-purple transition-all duration-300" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider pl-1">Message</label>
              <textarea name="message" required rows="5" placeholder="Tell me about your project, timeline, and goals..." className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-swaash-cyan focus:ring-1 focus:ring-swaash-cyan transition-all duration-300 resize-none custom-scrollbar"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || isSubmitted}
              className={`mt-2 w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all duration-300 shadow-lg ${
                isSubmitted 
                  ? 'bg-green-500 text-white border border-green-400' 
                  : 'bg-gradient-to-r from-swaash-cyan to-swaash-purple text-white hover:opacity-90'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  Sending... 
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </span>
              ) : isSubmitted ? (
                <span>Message Sent Successfully!</span>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;