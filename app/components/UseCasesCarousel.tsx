'use client'

import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Bug, Plus, TestTube, Rocket, Wrench } from 'lucide-react';

const useCases = [
  {
    icon: Bug,
    title: 'Bug Fixing',
    description: 'Autonomous identification, diagnosis, and resolution of complex bugs across your entire codebase.',
    features: ['Automated root cause analysis', 'Cross-service debugging', 'Test case generation', 'Regression prevention'],
    gradient: 'from-red-500 to-red-600',
    example: 'rex fix "checkout flow breaking on mobile"'
  },
  {
    icon: Plus,
    title: 'Feature Development',
    description: 'End-to-end feature implementation from requirements to deployment with zero human intervention.',
    features: ['Requirements analysis', 'Architecture planning', 'Code implementation', 'Testing & validation'],
    gradient: 'from-blue-500 to-blue-600',
    example: 'rex build "user dashboard with analytics"'
  },
  {
    icon: TestTube,
    title: 'QA Testing',
    description: 'Comprehensive automated testing including edge cases, performance, and user experience validation.',
    features: ['E2E test automation', 'Performance profiling', 'Security scanning', 'Accessibility testing'],
    gradient: 'from-green-500 to-green-600',
    example: 'rex test "payment flow across all browsers"'
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'Intelligent deployment strategies with automated rollbacks and performance monitoring.',
    features: ['Blue-green deployments', 'Canary releases', 'Health monitoring', 'Auto rollback'],
    gradient: 'from-purple-500 to-purple-600',
    example: 'rex deploy "v2.1 with 10% traffic split"'
  },
  {
    icon: Wrench,
    title: 'Legacy Code Maintenance',
    description: 'Modernize and refactor legacy systems while maintaining functionality and improving performance.',
    features: ['Code modernization', 'Dependency updates', 'Performance optimization', 'Documentation generation'],
    gradient: 'from-orange-500 to-orange-600',
    example: 'rex refactor "migrate auth service to v2"'
  }
];

export function UseCasesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-neon-green)_0%,transparent_70%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Use Cases
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
            From bug fixes to feature development, REX handles every aspect of the software development lifecycle.
          </p>
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {useCases.map((useCase, index) => (
                <div key={useCase.title} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-4 sm:p-6 md:p-8 mx-2 sm:mx-4 min-h-[400px] sm:min-h-[450px] md:h-96">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 h-full">
                      {/* Left side - Content */}
                      <div className="space-y-4 sm:space-y-6">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${useCase.gradient} rounded-xl flex items-center justify-center`}>
                            <useCase.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {useCase.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {useCase.description}
                        </p>
                        
                        <ul className="space-y-2">
                          {useCase.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-400 text-sm sm:text-base">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Right side - Example */}
                      <div className="flex items-center justify-center">
                        <div className="w-full bg-black/50 border border-gray-600 rounded-lg p-3 sm:p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="font-mono text-xs sm:text-sm">
                            <div className="text-green-400 mb-2 break-all">$ {useCase.example}</div>
                            <div className="text-gray-500">Processing...</div>
                            <motion.div 
                              className="text-blue-400"
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              ▊
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-colors duration-200 touch-manipulation"
          >
            <ChevronLeft size={18} className="sm:hidden" />
            <ChevronLeft size={20} className="hidden sm:block" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-colors duration-200 touch-manipulation"
          >
            <ChevronRight size={18} className="sm:hidden" />
            <ChevronRight size={20} className="hidden sm:block" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 touch-manipulation ${
                  index === currentIndex ? 'bg-blue-400' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}