'use client'

import { motion } from 'motion/react';

interface RexLogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export function RexLogo({ size = 32, className = "", animated = false }: RexLogoProps) {
  const LogoSVG = () => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* T-Rex head outline */}
      <motion.path
        d="M30 25 C40 15, 60 15, 70 25 L75 35 C75 45, 70 50, 65 50 L35 50 C30 50, 25 45, 25 35 L30 25 Z"
        fill="url(#headGradient)"
        stroke="url(#strokeGradient)"
        strokeWidth="2"
        initial={animated ? { pathLength: 0 } : undefined}
        animate={animated ? { pathLength: 1 } : undefined}
        transition={animated ? { duration: 2, ease: "easeInOut" } : undefined}
      />
      
      {/* T-Rex jaw */}
      <motion.path
        d="M35 45 L65 45 L70 55 C70 60, 65 65, 60 65 L40 65 C35 65, 30 60, 30 55 L35 45 Z"
        fill="url(#jawGradient)"
        stroke="url(#strokeGradient)"
        strokeWidth="2"
        initial={animated ? { pathLength: 0 } : undefined}
        animate={animated ? { pathLength: 1 } : undefined}
        transition={animated ? { duration: 2, delay: 0.3, ease: "easeInOut" } : undefined}
      />
      
      {/* Eyes */}
      <motion.circle
        cx="42"
        cy="35"
        r="3"
        fill="#00ff88"
        initial={animated ? { scale: 0 } : undefined}
        animate={animated ? { scale: 1 } : undefined}
        transition={animated ? { duration: 0.5, delay: 1 } : undefined}
      />
      <motion.circle
        cx="58"
        cy="35"
        r="3"
        fill="#00ff88"
        initial={animated ? { scale: 0 } : undefined}
        animate={animated ? { scale: 1 } : undefined}
        transition={animated ? { duration: 0.5, delay: 1.1 } : undefined}
      />
      
      {/* Teeth */}
      <motion.path
        d="M40 55 L42 60 L44 55 M48 55 L50 60 L52 55 M56 55 L58 60 L60 55"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={animated ? { opacity: 0 } : undefined}
        animate={animated ? { opacity: 1 } : undefined}
        transition={animated ? { duration: 0.5, delay: 1.5 } : undefined}
      />
      
      {/* Body (simplified) */}
      <motion.path
        d="M45 65 L55 65 L60 85 L40 85 L45 65 Z"
        fill="url(#bodyGradient)"
        stroke="url(#strokeGradient)"
        strokeWidth="2"
        initial={animated ? { pathLength: 0 } : undefined}
        animate={animated ? { pathLength: 1 } : undefined}
        transition={animated ? { duration: 1.5, delay: 0.5, ease: "easeInOut" } : undefined}
      />
      
      {/* Tiny arms */}
      <motion.path
        d="M40 70 L35 72 M60 70 L65 72"
        stroke="url(#strokeGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={animated ? { pathLength: 0 } : undefined}
        animate={animated ? { pathLength: 1 } : undefined}
        transition={animated ? { duration: 0.5, delay: 1.8 } : undefined}
      />
      
      {/* Code brackets around the rex */}
      <motion.text
        x="15"
        y="50"
        fontSize="20"
        fill="url(#codeGradient)"
        fontFamily="monospace"
        initial={animated ? { opacity: 0 } : undefined}
        animate={animated ? { opacity: 1 } : undefined}
        transition={animated ? { duration: 0.5, delay: 2.2 } : undefined}
      >
        {'<'}
      </motion.text>
      <motion.text
        x="78"
        y="50"
        fontSize="20"
        fill="url(#codeGradient)"
        fontFamily="monospace"
        initial={animated ? { opacity: 0 } : undefined}
        animate={animated ? { opacity: 1 } : undefined}
        transition={animated ? { duration: 0.5, delay: 2.3 } : undefined}
      >
        {'>'}
      </motion.text>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#0066ff" />
        </linearGradient>
        <linearGradient id="jawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066ff" />
          <stop offset="100%" stopColor="#003d99" />
        </linearGradient>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="50%" stopColor="#0066ff" />
          <stop offset="100%" stopColor="#003d99" />
        </linearGradient>
        <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ff88" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ff88" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        <LogoSVG />
      </motion.div>
    );
  }

  return <LogoSVG />;
}