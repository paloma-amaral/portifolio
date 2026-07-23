"use client";

import { useRef, useState, useEffect } from "react";

export function SpotlightWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      style={{
        '--mouse-x': `${position.x}px`,
        '--mouse-y': `${position.y}px`,
        '--spotlight-opacity': opacity,
      } as React.CSSProperties}
    >
      {/* O pseudo-elemento no globals.css fará o brilho, mas podemos adicionar uma div aqui para garantir o efeito no container inteiro */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity: opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--spotlight-bg), transparent 40%)`
        }}
      />
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
