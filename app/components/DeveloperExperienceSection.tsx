'use client'

import { motion } from 'motion/react';
import { Terminal, Play, Check, Clock } from 'lucide-react';

export function DeveloperExperienceSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-green-900/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Developer Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
            Simple commands, powerful results. Experience the future of development workflow.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Terminal Demo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="bg-slate-800 border-b border-slate-700 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 ml-2 sm:ml-4">
                  <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                  <span className="text-gray-400 text-xs sm:text-sm">REX Terminal</span>
                </div>
              </div>
              
              {/* Terminal content */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <motion.span 
                    className="text-white"
                    initial={{ width: 0 }}
                    whileInView={{ width: 'auto' }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    rex fix checkout bug
                  </motion.span>
                  <motion.span 
                    className="text-white"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ▊
                  </motion.span>
                </div>
                
                <motion.div 
                  className="text-blue-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                >
                  🔍 Analyzing checkout flow...
                </motion.div>
                
                <motion.div 
                  className="text-yellow-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  🐛 Found issue in payment validation
                </motion.div>
                
                <motion.div 
                  className="text-purple-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  viewport={{ once: true }}
                >
                  🔧 Generating fix...
                </motion.div>
                
                <motion.div 
                  className="text-orange-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                  viewport={{ once: true }}
                >
                  🧪 Running tests...
                </motion.div>
                
                <motion.div 
                  className="text-green-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3 }}
                  viewport={{ once: true }}
                >
                  ✅ Fix deployed successfully
                </motion.div>
                
                <motion.div 
                  className="text-gray-400 text-xs"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3.5 }}
                  viewport={{ once: true }}
                >
                  Completed in 14 minutes, 23 seconds
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Process Steps */}
          <motion.div
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: Terminal,
                  title: 'Simple Command',
                  description: 'Natural language commands that REX understands and executes',
                  delay: 0.2
                },
                {
                  icon: Play,
                  title: 'Autonomous Execution',
                  description: 'REX analyzes, plans, and implements solutions without supervision',
                  delay: 0.4
                },
                {
                  icon: Check,
                  title: 'Validated Results',
                  description: 'Automated testing ensures quality before deployment',
                  delay: 0.6
                },
                {
                  icon: Clock,
                  title: 'Real-time Updates',
                  description: 'Live progress tracking with detailed execution logs',
                  delay: 0.8
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  className="flex gap-3 sm:gap-4 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                Try it yourself
              </h4>
              <p className="text-gray-400 text-sm mb-3 sm:mb-4">
                Experience the power of autonomous development with a simple command.
              </p>
              <div className="flex items-center gap-2 text-green-400 text-xs sm:text-sm font-mono break-all">
                <Terminal className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>rex build &ldquo;user authentication system&rdquo;</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}