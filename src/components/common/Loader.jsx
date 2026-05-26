import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/load.png';

const LiquidMorphLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#050816]">

      <motion.div
        animate={{
          borderRadius: [
            '42% 58% 60% 40%',
            '58% 42% 38% 62%',
            '42% 58% 60% 40%',
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          relative
          w-52
          h-52
          flex
          items-center
          justify-center
          bg-white/5
          border
          border-cyan-400/20
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(34,211,238,0.15)]
        "
      >

        {/* Soft Glow */}
        <div className="absolute inset-0 rounded-[inherit] bg-cyan-400/10 blur-2xl" />

        {/* Logo */}
        <motion.img
          src={logo}
          alt="Swaash Technologies"
          className="relative w-28 h-28 object-contain"
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

      </motion.div>

    </div>
  );
};

export default LiquidMorphLoader;