'use client'

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Play, Code, Zap, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  
  const codeLines = [
    "rex build user feature",
    "AI tests passing ✓",
    "Deploying to production",
    "Monitoring performance",
    "Optimizing codebase"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeLine((prev) => (prev + 1) % codeLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      
      {/* Animated orbital rings */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-blue-500/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-green-500/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Network nodes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-400/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div 
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                The AI that codes{' '}
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent relative">
                  while you sleep
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 opacity-20 blur-sm"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Revolutionary autonomous software engineer that transforms development workflows, 
                completing complex tasks end-to-end without human intervention.
              </motion.p>

              <motion.blockquote
                className="text-lg text-gray-400 italic max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                &quot;From concept to deployment, REX handles the entire development lifecycle while you focus on strategy and innovation.&quot;
              </motion.blockquote>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 border-0 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 group"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start with REX
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-2 border-gray-500 text-gray-200 hover:bg-gray-800/50 hover:border-gray-400 rounded-full flex items-center gap-2 backdrop-blur-sm transition-all duration-300"
              >
                <Play size={20} />
                View Demo
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side - Interactive Illustration Container */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Dark glass card container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-8">
              {/* Gradient border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-green-500/20 to-blue-500/20 p-[1px]">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80"></div>
              </div>
              
              {/* Interactive Illustration */}
              <div className="relative w-full h-96 flex items-center justify-center">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 800 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Enhanced gradients and effects */}
                  <defs>
                    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#0f172a" />
                      <stop offset="50%" stop-color="#1e293b" />
                      <stop offset="100%" stop-color="#0f172a" />
                    </linearGradient>
                    <linearGradient id="rexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#3B82F6" />
                      <stop offset="50%" stop-color="#22C55E" />
                      <stop offset="100%" stop-color="#1D4ED8" />
                    </linearGradient>
                    <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#0f172a" />
                      <stop offset="100%" stop-color="#1e293b" />
                    </linearGradient>
                    <radialGradient id="glowEffect" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.4" />
                      <stop offset="100%" stop-color="#3B82F6" stop-opacity="0" />
                    </radialGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Layered grid background */}
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="0.5" opacity="0.4"/>
                  </pattern>
                  <rect width="800" height="400" fill="url(#grid)" />
                  <rect width="800" height="400" fill="url(#bgGradient)" />
                  
                  {/* Floating particles */}
                  {[...Array(12)].map((_, i) => (
                    <circle
                      key={i}
                      cx={100 + (i * 50)}
                      cy={50 + (i * 20)}
                      r="2"
                      fill="#3B82F6"
                      opacity="0.6"
                    />
                  ))}
                  
                  {/* Minimal sleeping silhouette with enhanced glow */}
                  <g transform="translate(80, 180)">
                    <path d="M-15,20 Q-15,0 0,0 Q15,0 15,20 L15,40 Q15,50 0,50 Q-15,50 -15,40 Z" fill="#64748b" opacity="0.8"/>
                    <ellipse cx="0" cy="35" rx="50" ry="25" fill="url(#glowEffect)" opacity="0.8"/>
                    {/* Floating Z's */}
                    <text x="25" y="-5" fontSize="18" fill="#22C55E" fontFamily="monospace" filter="url(#glow)" opacity="0.8">
                      Z
                    </text>
                    <text x="35" y="10" fontSize="14" fill="#3B82F6" fontFamily="monospace" filter="url(#glow)" opacity="0.6">
                      Z
                    </text>
                    <text x="45" y="20" fontSize="10" fill="#22C55E" fontFamily="monospace" filter="url(#glow)" opacity="0.4">
                      Z
                    </text>
                  </g>
                  
                  {/* Enhanced AI Assistant Rex with pulsing glow */}
                  <g transform="translate(400, 120)">
                    <ellipse cx="0" cy="20" rx="35" ry="50" fill="url(#rexGradient)" filter="url(#glow)"/>
                    <ellipse cx="0" cy="-20" rx="25" ry="30" fill="url(#rexGradient)" filter="url(#glow)"/>
                    {/* Pulsing eyes */}
                    <circle cx="-12" cy="-25" r="6" fill="#22C55E" filter="url(#glow)"/>
                    <circle cx="12" cy="-25" r="6" fill="#22C55E" filter="url(#glow)"/>
                    <circle cx="-12" cy="-25" r="3" fill="#ffffff"/>
                    <circle cx="12" cy="-25" r="3" fill="#ffffff"/>
                    {/* Pulsing antenna */}
                    <line x1="0" y1="-50" x2="0" y2="-80" stroke="#3B82F6" stroke-width="4" filter="url(#glow)"/>
                    <circle cx="0" cy="-80" r="5" fill="#22C55E" filter="url(#glow)"/>
                    <ellipse cx="-45" cy="0" rx="15" ry="8" fill="url(#rexGradient)" filter="url(#glow)"/>
                    <ellipse cx="45" cy="0" rx="15" ry="8" fill="url(#rexGradient)" filter="url(#glow)"/>
                    {/* Status indicators */}
                    <rect x="-5" y="10" width="10" height="3" rx="1.5" fill="#22C55E" filter="url(#glow)"/>
                    <rect x="-5" y="15" width="10" height="3" rx="1.5" fill="#3B82F6" filter="url(#glow)"/>
                    <rect x="-5" y="20" width="10" height="3" rx="1.5" fill="#22C55E" filter="url(#glow)"/>
                  </g>
                  
                  {/* Enhanced terminal screens */}
                  <g transform="translate(200, 280)">
                    <rect x="0" y="0" width="140" height="90" rx="12" fill="url(#screenGradient)" stroke="#3B82F6" stroke-width="3" filter="url(#glow)"/>
                    <rect x="8" y="8" width="124" height="74" fill="#0f172a" rx="6"/>
                    <text x="15" y="25" fontSize="10" fill="#22C55E" fontFamily="monospace">$ rex build user-auth</text>
                    <text x="15" y="40" fontSize="9" fill="#3B82F6" fontFamily="monospace">→ Running tests...</text>
                    <text x="15" y="55" fontSize="9" fill="#22C55E" fontFamily="monospace">✓ 47 tests passing</text>
                    <text x="15" y="70" fontSize="9" fill="#3B82F6" fontFamily="monospace">→ Deploying to production</text>
                  </g>
                  
                  <g transform="translate(460, 280)">
                    <rect x="0" y="0" width="140" height="90" rx="12" fill="url(#screenGradient)" stroke="#3B82F6" stroke-width="3" filter="url(#glow)"/>
                    <rect x="8" y="8" width="124" height="74" fill="#0f172a" rx="6"/>
                    <text x="15" y="25" fontSize="10" fill="#22C55E" fontFamily="monospace">$ rex debug payment</text>
                    <text x="15" y="40" fontSize="9" fill="#3B82F6" fontFamily="monospace">→ Analyzing code...</text>
                    <text x="15" y="55" fontSize="9" fill="#22C55E" fontFamily="monospace">✓ Bug found and fixed</text>
                    <text x="15" y="70" fontSize="9" fill="#3B82F6" fontFamily="monospace">→ Committing changes</text>
                  </g>
                  
                  {/* Animated neon connectors */}
                  <path
                    d="M400,170 Q300,200 200,320"
                    stroke="#3B82F6"
                    stroke-width="3"
                    fill="none"
                    stroke-dasharray="8,4"
                    filter="url(#glow)"
                    opacity="0.8"
                  />
                  
                  <path
                    d="M400,170 Q500,200 600,320"
                    stroke="#22C55E"
                    stroke-width="3"
                    fill="none"
                    stroke-dasharray="8,4"
                    filter="url(#glow)"
                    opacity="0.8"
                  />
                </svg>
              </div>
              
              {/* Animated code terminal overlay */}
              <div className="absolute top-4 left-4 right-4 bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">rex-terminal</span>
                </div>
                <div className="text-green-400 text-sm font-mono">
                  <motion.span
                    key={currentCodeLine}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.5 }}
                    className="block"
                  >
                    $ {codeLines[currentCodeLine]}
                  </motion.span>
                </div>
              </div>
              
              {/* Floating status indicators */}
              <motion.div 
                className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm border border-green-500/30 rounded-lg p-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-green-400 text-sm font-mono flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  rex working autonomously
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="text-blue-400 text-sm font-mono flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Human sleeping peacefully
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}