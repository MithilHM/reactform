import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SparkButton = ({ children, onClick, className = "" }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [sparks, setSparks] = useState([]);

  const handleClick = (e) => {
    setIsClicked(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newSparks = [...Array(8)].map((_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: (i * 45) * (Math.PI / 180)
    }));
    setSparks(newSparks);
    setTimeout(() => {
      setIsClicked(false);
      setSparks([]);
    }, 600);
    if (onClick) onClick(e);
  };

  return (
    <motion.div className={`relative ${className}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
      <div onClick={handleClick} className="relative overflow-hidden cursor-pointer w-full">
        {children}
        {/* Spark particles */}
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            className="absolute w-1 h-1 bg-electric-cyan rounded-full pointer-events-none"
            initial={{
              x: spark.x,
              y: spark.y,
              scale: 0,
            }}
            animate={{
              x: spark.x + Math.cos(spark.angle) * 28,
              y: spark.y + Math.sin(spark.angle) * 28,
              scale: [0, 1, 0],
              opacity: [1, 1, 0],
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
        {/* Glow effect on click */}
        {isClicked && (
          <motion.div
            className="absolute inset-0 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.6 }}
            style={{ background: 'radial-gradient(circle, rgba(0,217,255,0.18) 0%, transparent 70%)' }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default SparkButton;
