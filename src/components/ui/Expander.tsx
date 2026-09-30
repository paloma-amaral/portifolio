"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpanderProps {
  title?: string;
  buttonText?: string;
  buttonTextExpanded?: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function Expander({ 
  title, 
  buttonText = "Ver mais", 
  buttonTextExpanded = "Ver menos", 
  children,
  defaultExpanded = false
}: ExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="w-full flex flex-col items-center">
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="w-full overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-8 flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] bg-[var(--bg-2)] hover:bg-[var(--bg-3)] text-[var(--text-1)] text-xs font-mono uppercase tracking-wider transition-colors z-10 group"
      >
        <span>{isExpanded ? buttonTextExpanded : buttonText}</span>
        <motion.svg
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-4 h-4 text-[var(--text-3)] group-hover:text-[var(--accent)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
    </div>
  );
}
