import React from 'react';

const BeamsBackground = ({ className = "" }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
    {/* CSS Beams for animated glass look */}
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyber-blue-400 to-transparent opacity-20 animate-beam-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
    {/* Subtle noise overlay */}
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}
    />
  </div>
);

export default BeamsBackground;
