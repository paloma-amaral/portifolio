"use client";

import { useTheme } from "@/lib/theme-context";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* Partículas que explodem ao clicar */
const NUM_PARTICLES = 8;
const PARTICLE_COLORS = ["#b98ea7", "#8b6b9e", "#d4b0c6", "#f2ede8", "#c4a0c0"];

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [burst, setBurst] = useState(false);

  const handleClick = () => {
    toggleTheme();
    setBurst(true);
    setTimeout(() => setBurst(false), 700);
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Burst particles */}
      {burst &&
        Array.from({ length: NUM_PARTICLES }).map((_, i) => {
          const angle = (360 / NUM_PARTICLES) * i;
          const color =
            PARTICLE_COLORS[i % PARTICLE_COLORS.length];
          return (
            <motion.span
              key={i}
              initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              animate={{
                opacity: 0,
                scale: 0,
                x: Math.cos((angle * Math.PI) / 180) * 28,
                y: Math.sin((angle * Math.PI) / 180) * 28,
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="absolute w-1.5 h-1.5 rounded-full pointer-events-none z-50"
              style={{ background: color }}
            />
          );
        })}

      {/* Button */}
      <motion.button
        id="theme-toggle"
        aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
        onClick={handleClick}
        whileTap={{ scale: 0.88 }}
        className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden cursor-pointer group"
        style={{
          background: isDark
            ? "rgba(185,142,167,0.10)"
            : "rgba(139,107,158,0.07)",
          border: `1.5px solid ${isDark ? "rgba(185,142,167,0.30)" : "rgba(139,107,158,0.18)"}`,
          boxShadow: isDark ? "0 0 14px rgba(185,142,167,0.15)" : "none",
        }}
      >
        {/* Hover glow ring */}
        <span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(185,142,167,0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(139,107,158,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Icon */}
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative z-10"
            >
              <MoonIcon />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative z-10"
            >
              <SunIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

function MoonIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d4b0c6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#8b6b9e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
