'use client'

import { motion, useScroll, useSpring } from 'motion/react'

export function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll()
  
  // Add spring animation to the progress for smoother transitions
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-0.5 origin-left"
      style={{
        background: 'linear-gradient(90deg, #a855f7 0%, #3b82f6 50%, #14b8a6 100%)',
        scaleX,
        boxShadow: '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(59, 130, 246, 0.3), 0 0 30px rgba(20, 184, 166, 0.2)',
      }}
      initial={{ scaleX: 0 }}
    />
  )
}