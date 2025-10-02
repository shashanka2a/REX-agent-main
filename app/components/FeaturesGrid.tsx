'use client'

import { motion } from 'motion/react';
import { 
  Zap, 
  TestTube, 
  Code, 
  Rocket, 
  Shield, 
  RefreshCw, 
  GitBranch, 
  Bot 
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Extended Autonomy',
    description: 'AI agents work independently for hours, handling complex multi-step development tasks without human intervention.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20'
  },
  {
    icon: TestTube,
    title: 'Real User Testing',
    description: 'Automated browser testing with real user scenarios, ensuring features work perfectly before deployment.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20'
  },
  {
    icon: Code,
    title: 'Intelligent Code Gen',
    description: 'Context-aware code generation that understands your codebase architecture and coding standards.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  {
    icon: Rocket,
    title: 'Production-Ready',
    description: 'Enterprise-grade deployment pipelines with automated rollbacks and performance monitoring.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Built-in security scanning, vulnerability detection, and compliance checks at every step.',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20'
  },
  {
    icon: RefreshCw,
    title: 'Auto Optimization',
    description: 'Continuous performance optimization and code refactoring based on usage patterns.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20'
  },
  {
    icon: GitBranch,
    title: 'Smart Branching',
    description: 'Intelligent Git workflows with automated merging, conflict resolution, and PR generation.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20'
  },
  {
    icon: Bot,
    title: 'AI Collaboration',
    description: 'Multiple AI agents working together, each specialized for different aspects of development.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20'
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Key Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revolutionary capabilities that transform how software is built, tested, and deployed.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className={`p-6 h-full bg-gradient-to-br from-slate-800 to-slate-900 border ${feature.border} rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-white/5`}>
                <div className={`w-12 h-12 ${feature.bg} ${feature.border} border rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Subtle glow effect */}
              <div className={`absolute inset-0 ${feature.bg} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 blur-xl`}></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-gray-300 text-sm">More features shipping weekly</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}