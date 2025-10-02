'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from './ui/button'
import { RexLogo } from './RexLogo'
import { Menu, X, ExternalLink } from 'lucide-react'

const navigationLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Docs', href: '/docs', external: true },
  { name: 'About', href: '#about' },
]

export function DynamicNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'navbar-blur shadow-navbar-glow' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'
          }`}>
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RexLogo className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="text-lg sm:text-xl font-bold text-white">REX Agent</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href, link.external)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="flex items-center space-x-1">
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-blue-500"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              )))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => handleLinkClick('#waitlist')}
                className="px-4 lg:px-6 py-2 text-sm lg:text-base bg-button-primary hover:shadow-glow-violet transition-all duration-300 btn-glow"
              >
                Join Waitlist
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-l border-white/10 z-40 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <RexLogo className="w-6 h-6" />
                    <span className="text-lg font-bold text-white">REX Agent</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-8 space-y-2">
                  {navigationLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      onClick={() => handleLinkClick(link.href, link.external)}
                      className="block w-full text-left text-lg text-gray-300 hover:text-white transition-colors duration-200 py-4 px-2 rounded-lg hover:bg-white/5 border-b border-transparent hover:border-violet-500/30 min-h-[48px] touch-manipulation"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center space-x-2">
                        <span>{link.name}</span>
                        {link.external && <ExternalLink className="w-4 h-4" />}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-white/10">
                  <Button
                    onClick={() => handleLinkClick('#waitlist')}
                    className="w-full py-4 text-base bg-button-primary hover:shadow-glow-violet transition-all duration-300 min-h-[48px] touch-manipulation"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}