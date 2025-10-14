import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    className={`relative backdrop-blur-xl rounded-2xl p-4 md:p-8 border scan-lines shadow-2xl ${className}`}
    style={{
      background: 'rgba(255,255,255,0.05)',
      borderColor: 'rgba(28,171,242,0.2)',
      boxShadow: '0 8px 32px 0 rgba(28,171,242,0.16)'
    }}
  >
    {children}
  </motion.div>
);

export default GlassCard;
