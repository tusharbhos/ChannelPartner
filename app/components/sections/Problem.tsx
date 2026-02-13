'use client'

import { Users, Building, AlertTriangle, Shield, XCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Problem() {
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
      },
    },
  }

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-padding mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            The Trust Gap
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="heading-2 mb-4">
            The Real Problem Isn't Reach. <span className="text-orange-500">It's Trust.</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="body-large max-w-2xl mx-auto text-gray-500">
            The industry doesn't need more connections. It needs a neutral presentation layer.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For CPs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-0 group-hover:bg-orange-100 transition-colors" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-orange-600" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">For Channel Partners</h3>
              
              <ul className="space-y-4">
                {[
                  { text: 'Fear of lead exposure', icon: XCircle },
                  { text: 'Bypass risk', icon: XCircle },
                  { text: 'Losing customer control', icon: XCircle },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <item.icon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Shield className="w-4 h-4 text-orange-500" />
                  <span>Loss of competitive advantage</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* For Developers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-0 group-hover:bg-orange-100 transition-colors" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Building className="w-7 h-7 text-orange-600" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">For Developers</h3>
              
              <ul className="space-y-4">
                {[
                  { text: 'Inconsistent messaging', icon: XCircle },
                  { text: 'Misaligned expectations', icon: XCircle },
                  { text: 'Scattered CP dependency', icon: XCircle },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <item.icon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Shield className="w-4 h-4 text-orange-500" />
                  <span>Brand dilution risk</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
        >
          {[
            { value: '78%', label: 'CPs fear lead leakage' },
            { value: '3.2x', label: 'Higher bypass risk' },
            { value: '64%', label: 'Inconsistent messaging' },
            { value: '24h', label: 'Avg. response delay' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}