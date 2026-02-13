'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import NetworkDiagram from '../ui/NetworkDiagram'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface HeroProps {
  onApplyClick: () => void
}

export default function Hero({ onApplyClick }: HeroProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-padding mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 md:py-20">
          {/* Left Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-100">
              <Sparkles className="w-4 h-4" />
              Privacy-First Presentation Network
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="heading-1 mb-6 text-balance"
            >
              A Neutral Project Showcase Network for{' '}
              <span className="text-orange-500 relative">
                Channel Partners
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5C50 2 150 2 199 5" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
                </svg>
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="body-large mb-4 max-w-xl"
            >
              Showcase ConectR-powered projects to customers — without sharing lead details, without losing control, without dependency.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-gray-500 mb-8 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Projects gain visibility. Channel Partners retain ownership. Leads stay private.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={onApplyClick}
                className="group bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-medium hover:bg-orange-600 transition-all hover:shadow-xl hover:shadow-orange-500/25 flex items-center gap-2 text-sm md:text-base"
              >
                Request Access 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#how-it-works"
                className="group border-2 border-gray-200 text-gray-700 px-6 py-3 md:px-8 md:py-4 rounded-xl font-medium hover:border-orange-500 hover:text-orange-500 transition-all flex items-center gap-2 text-sm md:text-base bg-white/50 backdrop-blur-sm"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                See How It Works
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm font-bold">✓</span>
                </div>
                <span className="text-sm text-gray-600">No Lead Sharing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm font-bold">✓</span>
                </div>
                <span className="text-sm text-gray-600">Privacy First</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm font-bold">✓</span>
                </div>
                <span className="text-sm text-gray-600">CP Controlled</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Network Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent rounded-3xl" />
            <NetworkDiagram />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a
          href="#how-it-works"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-5 h-9 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-orange-500 rounded-full mt-2 animate-bounce" />
          </div>
        </a>
      </motion.div>
    </section>
  )
}