'use client'

import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Play, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger entrance animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleCTAClick = (action: string) => {
    if (action === 'waitlist') {
      // Scroll to waitlist section or open modal
      const element = document.querySelector('#waitlist')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (action === 'demo') {
      // Open demo video or navigate to demo page
      console.log('Demo clicked')
    }
  }

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden hero-bg px-4 sm:px-6">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a] via-[#111827] to-[#1a1f3c]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10 sm:opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem] md:bg-[size:6rem_6rem]" />
      </div>

      {/* Floating gradient orbs - Hidden on mobile for performance */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-full blur-3xl hidden md:block"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-3xl hidden md:block"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
          delay: 5,
        }}
      />

      <div className="container mx-auto px-0 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-0">
            {/* Main Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-white leading-[1.1] mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              The AI that codes{' '}
              <span className="relative inline-block">
                <span className="text-gradient bg-gradient-to-r from-violet-400 via-blue-500 to-teal-400 bg-clip-text text-transparent font-black">
                  while you sleep
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-10 max-w-[700px] mx-auto font-sans"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Revolutionary autonomous software engineer that transforms development workflows, 
              completing complex tasks end-to-end without human intervention.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              {/* Primary CTA */}
              <Button
                onClick={() => handleCTAClick('waitlist')}
                size="lg"
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl font-semibold bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 border-0 rounded-full shadow-glow-violet hover:shadow-glow-blue transition-all duration-300 btn-glow group min-h-[56px] touch-manipulation"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-5 md:w-6 h-5 md:h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              {/* Secondary CTA */}
              <Button
                onClick={() => handleCTAClick('demo')}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl font-semibold border-2 border-gray-500 text-gray-200 hover:bg-white/5 hover:border-gray-400 rounded-full backdrop-blur-sm transition-all duration-300 group min-h-[56px] touch-manipulation"
              >
                <Play className="w-5 md:w-6 h-5 md:h-6 mr-2 group-hover:scale-110 transition-transform duration-200" />
                <span>View Demo</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ borderColor: ['rgba(156, 163, 175, 0.5)', 'rgba(168, 85, 247, 0.8)', 'rgba(156, 163, 175, 0.5)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-violet-400 to-blue-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}