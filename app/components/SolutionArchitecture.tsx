import { motion } from 'motion/react';
import { Brain, Workflow, Globe, Package, Database, Zap } from 'lucide-react';

const architectureCards = [
  {
    icon: Brain,
    title: 'Claude 4',
    description: 'Advanced reasoning for complex development tasks',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Workflow,
    title: 'n8n',
    description: 'Workflow automation and task orchestration',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    icon: Globe,
    title: 'Playwright',
    description: 'Automated browser testing and interaction',
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: Package,
    title: 'Docker',
    description: 'Containerized environments and deployment',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Database,
    title: 'Vector DB',
    description: 'Intelligent code context and retrieval',
    gradient: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Zap,
    title: 'Live Sync',
    description: 'Real-time development environment updates',
    gradient: 'from-yellow-500 to-yellow-600'
  }
];

export function SolutionArchitecture() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-tech-blue)_0%,transparent_70%)] opacity-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Solution Architecture
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our integrated tech stack powers autonomous development workflows 
            with enterprise-grade reliability and performance.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {architectureCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl h-full transition-all duration-300 group-hover:border-slate-600 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                <div className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {card.description}
                </p>
                
                {/* Connecting lines for desktop */}
                {index < architectureCards.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
                )}
              </div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}></div>
            </motion.div>
          ))}
        </div>
        
        {/* Architecture flow visualization */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full">
            <span className="text-gray-400">Input</span>
            <div className="w-4 h-px bg-gradient-to-r from-blue-400 to-green-400"></div>
            <span className="text-blue-400">Process</span>
            <div className="w-4 h-px bg-gradient-to-r from-blue-400 to-green-400"></div>
            <span className="text-green-400">Deploy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}