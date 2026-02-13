'use client'

import { Check, X, Shield, Lock, Eye, Users, Building, FileText, Ban } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function TrustProtection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const doItems = [
    { icon: FileText, text: "Showcase ConectR presentations" },
    { icon: Lock, text: "Protect CP lead privacy" },
    { icon: Eye, text: "Maintain consistent project communication" },
    { icon: Users, text: "Controlled access for serious CPs" },
    { icon: Shield, text: "Verify all projects before listing" },
    { icon: Building, text: "Provide analytics to developers" },
  ]

  const dontItems = [
    { icon: Ban, text: "Capture or sell leads" },
    { icon: Users, text: "Share CP lead data with developers" },
    { icon: Ban, text: "Allow bypassing CPs" },
    { icon: FileText, text: "Allow random brochure dumping" },
    { icon: Eye, text: "Track individual buyer behavior" },
    { icon: Users, text: "Enable direct developer-CP contact" },
  ]

  return (
    <section id="trust" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Non-Negotiable Principles
          </div>
          <h2 className="heading-2 mb-4">Trust & Protection</h2>
          <p className="body-large max-w-2xl mx-auto text-gray-600">
            Our architecture is built on principles that protect everyone in the ecosystem
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* What We DO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">What We DO</h3>
                <p className="text-sm text-gray-500">Built into our core architecture</p>
              </div>
            </div>

            <div className="space-y-4">
              {doItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Trust Badge */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-8 h-8 bg-orange-100 rounded-full border-2 border-white flex items-center justify-center">
                      <Shield className="w-4 h-4 text-orange-600" />
                    </div>
                  ))}
                </div>
                <span className="text-gray-600">Trusted by 200+ partners</span>
              </div>
            </div>
          </motion.div>

          {/* What We DON'T DO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">What We DON'T DO</h3>
                <p className="text-sm text-gray-500">Lines we never cross</p>
              </div>
            </div>

            <div className="space-y-4">
              {dontItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Warning Badge */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                <Ban className="w-4 h-4 flex-shrink-0" />
                <span>Zero tolerance for lead leakage or CP bypass</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-2xl border border-orange-100">
            <h4 className="font-semibold text-gray-900 mb-2">Our Guarantee to You</h4>
            <p className="text-sm text-gray-600">
              We never capture, store, or sell leads. Our architecture prevents lead leakage by design. 
              Every presentation maintains complete separation between project showcase and buyer information.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}