'use client'

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-green-900"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From wasted hours{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              to shipped features
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join the autonomous development revolution. Let REX handle the coding while you focus on what matters most – innovation and strategy.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 border-0 rounded-full shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-all duration-300 group min-h-[56px] touch-manipulation"
            >
              Join Waitlist
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl border-2 border-gray-500 text-gray-300 hover:bg-white/10 hover:border-gray-400 rounded-full backdrop-blur-sm flex items-center gap-3 min-h-[56px] touch-manipulation"
            >
              <MessageCircle size={20} />
              Talk to Us
            </Button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
              <div className="text-gray-400 text-sm sm:text-base">Developers on Waitlist</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-400 text-sm sm:text-base">Autonomous Operation</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-white">10x</div>
              <div className="text-gray-400 text-sm sm:text-base">Faster Development</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-gray-300 text-xs sm:text-sm">Early access starting Q2 2024</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}