'use client'

import { motion } from 'framer-motion'
import { Users, Building, Lock, Shield, Eye, ArrowRight } from 'lucide-react'

export default function NetworkDiagram() {
  return (
    <div className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
            <Shield className="w-4 h-4 text-orange-600" />
          </div>
          <span className="text-sm font-medium text-gray-700">Privacy Layer Active</span>
        </div>
        <div className="flex items-center gap-1 px-3 py-1 bg-green-50 rounded-full">
          <Lock className="w-3 h-3 text-green-600" />
          <span className="text-xs font-medium text-green-600">No Lead Leakage</span>
        </div>
      </div>

      {/* Diagram */}
      <div className="relative h-[300px] md:h-[350px]">
        {/* Channel Partners Column */}
        <motion.div 
          className="absolute left-0 top-1/2 -translate-y-1/2 space-y-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-xs font-medium text-gray-400 mb-2 pl-3">Channel Partners</div>
          {[1, 2, 3].map((i) => (
            <motion.div
              key={`cp-${i}`}
              className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:border-orange-200 transition-colors group"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-orange-600" />
              </div>
              <span className="text-sm font-medium">CP {i}</span>
              <Eye className="w-3 h-3 text-gray-300 group-hover:text-orange-400 transition-colors" />
            </motion.div>
          ))}
        </motion.div>

        {/* Center - Presentation Layer */}
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
        >
          <div className="bg-orange-500 text-white px-6 py-4 rounded-xl shadow-xl shadow-orange-500/25 relative">
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
            <span className="text-sm font-medium block">Presentation Layer</span>
            <div className="flex items-center gap-1 mt-2">
              <Lock className="w-3 h-3" />
              <span className="text-xs opacity-90">End-to-End Encrypted</span>
            </div>
          </div>
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-xl animate-ping bg-orange-500/20 -z-10" />
        </motion.div>

        {/* Projects Column */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-xs font-medium text-gray-400 mb-2 pl-3 text-right">Projects</div>
          {[1, 2, 3].map((i) => (
            <motion.div
              key={`project-${i}`}
              className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:border-orange-200 transition-colors group"
              whileHover={{ scale: 1.05, x: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Building className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium">Project {i}</span>
              <div className="w-2 h-2 bg-green-400 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="#F97316" />
            </marker>
          </defs>
          
          {/* Animated connection lines */}
          {[
            { x1: '20%', y1: '30%', x2: '45%', y2: '45%' },
            { x1: '20%', y1: '50%', x2: '45%', y2: '50%' },
            { x1: '20%', y1: '70%', x2: '45%', y2: '55%' },
            { x1: '55%', y1: '45%', x2: '80%', y2: '30%' },
            { x1: '55%', y1: '50%', x2: '80%', y2: '50%' },
            { x1: '55%', y1: '55%', x2: '80%', y2: '70%' },
          ].map((line, i) => (
            <motion.line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#E5E7EB"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 1 }}
            />
          ))}
        </svg>
      </div>

      {/* Footer Stats */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-gray-500">Live Network</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-gray-900">128</span>
            <span className="text-xs text-gray-500">CPs</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-gray-900">45</span>
            <span className="text-xs text-gray-500">Projects</span>
          </div>
        </div>
      </div>
    </div>
  )
}