import React from 'react';
import { motion } from 'framer-motion';

const PixelTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="w-full h-full"
  >
    <motion.div
      initial={{
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      }}
      animate={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  </motion.div>
);

export default PixelTransition;
