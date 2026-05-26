import React from "react";
import { motion } from "framer-motion";

const QuantumGlassBackground = () => {
  const particles = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f8fafc] dark:bg-[#02030a] transition-colors duration-700">

      {/* ========================================= */}
      {/* COSMIC BASE LIGHTING */}
      {/* ========================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_30%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_35%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_40%)]" />

      {/* ========================================= */}
      {/* MASSIVE AURORA BLOBS */}
      {/* ========================================= */}

      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-15%] left-[-10%]
        w-[60vw] h-[60vw]
        min-w-[700px] min-h-[700px]
        bg-cyan-400/40 dark:bg-cyan-500/20
        blur-[180px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 90, -70, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-25%] right-[-15%]
        w-[70vw] h-[70vw]
        min-w-[800px] min-h-[800px]
        bg-fuchsia-400/40 dark:bg-purple-500/20
        blur-[220px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[25%] left-[45%]
        w-[400px] h-[400px]
        bg-amber-300/30 dark:bg-pink-500/10
        blur-[120px] rounded-full"
      />

      {/* ========================================= */}
      {/* ULTRA PREMIUM LIQUID GLASS CORE */}
      {/* ========================================= */}

      <motion.div
        animate={{
          rotate: [0, 180, 360],
          y: [0, -40, 30, 0],
          x: [0, 30, -20, 0],
          borderRadius: [
            "42% 58% 65% 35% / 40% 45% 55% 60%",
            "60% 40% 35% 65% / 55% 30% 70% 45%",
            "45% 55% 60% 40% / 35% 65% 40% 60%",
            "42% 58% 65% 35% / 40% 45% 55% 60%",
          ],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[28%] left-[35%]
        w-[420px] h-[420px]
        bg-white/20 dark:bg-white/[0.03]
        border border-white/40 dark:border-white/10
        backdrop-blur-[100px]
        shadow-[0_0_120px_rgba(255,255,255,0.15)]
        dark:shadow-[0_0_120px_rgba(0,255,255,0.08)]"
      >
        {/* Internal Refraction */}
        <div className="absolute inset-[20px] rounded-[inherit] border border-white/20 dark:border-white/5" />

        {/* Liquid Shine */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 left-12
          w-40 h-40
          bg-white/40 dark:bg-cyan-300/[0.05]
          blur-3xl rounded-full"
        />

        {/* Core Glow */}
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 55%)",
          }}
        />
      </motion.div>

      {/* ========================================= */}
      {/* FLOATING GLASS PANELS */}
      {/* ========================================= */}

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, 20 + i * 10, -20, 0],
            rotate: [0, i % 2 === 0 ? 6 : -6, 0],
          }}
          transition={{
            duration: 10 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute
          bg-white/10 dark:bg-white/[0.03]
          border border-white/20 dark:border-white/10
          backdrop-blur-[50px]
          shadow-2xl"
          style={{
            width: `${180 + i * 60}px`,
            height: `${100 + i * 40}px`,
            borderRadius: "32px",
            top: `${15 + i * 25}%`,
            right: `${8 + i * 10}%`,
          }}
        />
      ))}

      {/* ========================================= */}
      {/* CINEMATIC LIGHT RAYS */}
      {/* ========================================= */}

      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-[-30%] left-[15%]
        w-[600px] h-[1400px]
        rotate-45
        bg-white/10 dark:bg-cyan-400/[0.04]
        blur-[180px]"
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-[-40%] right-[5%]
        w-[700px] h-[1400px]
        -rotate-45
        bg-pink-300/10 dark:bg-fuchsia-500/[0.04]
        blur-[200px]"
      />

      {/* ========================================= */}
      {/* FLOATING ENERGY PARTICLES */}
      {/* ========================================= */}

      {particles.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["110vh", "-10vh"],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 6}px`,
            height: `${2 + Math.random() * 6}px`,
            left: `${Math.random() * 100}%`,
            background:
              i % 2 === 0
                ? "rgba(255,255,255,0.7)"
                : "rgba(34,211,238,0.7)",
            filter: "blur(1px)",
            boxShadow: "0 0 20px rgba(255,255,255,0.5)",
          }}
        />
      ))}

      {/* ========================================= */}
      {/* ANIMATED CYBER GRID */}
      {/* ========================================= */}

      <motion.div
        animate={{
          backgroundPositionY: ["0px", "120px"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(120,120,120,0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(120,120,120,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 85%)",
        }}
      />

      {/* ========================================= */}
      {/* FILM GRAIN */}
      {/* ========================================= */}

      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 300 300%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22300%22 height=%22300%22 filter=%22url(%23noise%22)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* ========================================= */}
      {/* FINAL VIGNETTE */}
      {/* ========================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_35%,rgba(255,255,255,0.85))] dark:bg-[radial-gradient(circle,transparent_35%,rgba(2,3,10,0.96))]" />
    </div>
  );
};

export default QuantumGlassBackground;