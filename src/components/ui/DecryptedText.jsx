import React, { useState, useEffect } from 'react';

const DecryptedText = ({ text, className = "", delay = 0, speed = 40 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(true);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@_';

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(
            text.slice(0, index) +
            text
              .slice(index)
              .split('')
              .map(() => chars[Math.floor(Math.random() * chars.length)])
              .join('')
          );
          if (index === text.length) {
            setDisplayText(text);
            setIsDecrypting(false);
            clearInterval(interval);
          }
          index++;
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <span
      className={`
        font-cyber text-glow transition-all duration-300
        ${isDecrypting ? 'text-electric-cyan' : 'text-cyber-blue-400'}
        ${className}
      `}
    >
      {displayText}
      {isDecrypting && <span className="animate-pulse text-neon-blue">|</span>}
    </span>
  );
};

export default DecryptedText;
