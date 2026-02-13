'use client'

import { ArrowRight, Shield, Lock, CheckCircle, Users, Building } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface FinalCTAProps {
  onApplyClick: () => void
}

export default function FinalCTA({ onApplyClick }: FinalCTAProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    { icon: Shield, text: "No lead leakage" },
    { icon: Lock, text: "Privacy guaranteed" },
    { icon: CheckCircle, text: "Verified only" },
    { icon: Users, text: "CP controlled" },
    { icon: Building, text: "Developer reach" },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-padding mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Main Heading */}
          <h2 className="heading-2 mb-4">
            <span className="text-orange-500">Visibility Without Dependency.</span>
            <br />
            Reach Without Leakage.
          </h2>
          
          <p className="body-large text-gray-600 mb-8 max-w-2xl mx-auto">
            Join a network built on trust, where Channel Partners maintain control 
            and Developers gain quality visibility.
          </p>

          {/* Benefits Strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100"
                >
                  <Icon className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-700">{benefit.text}</span>
                </div>
              )
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={onApplyClick}
              className="group bg-orange-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-orange-600 transition-all hover:shadow-xl hover:shadow-orange-500/25 flex items-center gap-2 text-lg"
            >
              Apply for Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="mailto:hello@channelpartner.network"
              className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-orange-500 hover:text-orange-500 transition-all flex items-center gap-2 text-lg bg-white/50 backdrop-blur-sm"
            >
              Talk to Us
              <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-100"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>200+ Active Channel Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>50+ Premium Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>15+ Cities</span>
              </div>
            </div>
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 text-xs text-gray-400"
          >
            Applications are reviewed within 2-3 business days. Access is granted to verified professionals only.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}