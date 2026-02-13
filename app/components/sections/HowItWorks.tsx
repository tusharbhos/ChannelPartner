'use client'

import { FileText, Share2, Users, Lock, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: FileText,
      title: "Developer creates ConectR presentation",
      description: "Professional, interactive project storytelling with structured flows",
      details: [
        "Immersive project tours",
        "Consistent brand messaging",
        "Interactive floor plans",
        "Amenity showcases"
      ]
    },
    {
      icon: CheckCircle,
      title: "Project listed as ConectR Verified",
      description: "Quality-assured presentations on the network with verification badge",
      details: [
        "Quality checked",
        "Verified status badge",
        "Searchable listings",
        "Analytics ready"
      ]
    },
    {
      icon: Users,
      title: "CPs showcase to buyers",
      description: "Interest initiated, never intercepted - complete privacy maintained",
      details: [
        "Direct sharing links",
        "No lead capture",
        "CP controls access",
        "Buyer privacy protected"
      ]
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            A Presentation Network —{' '}
            <span className="text-orange-500">Not a Lead Exchange</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto text-gray-600">
            ChannelPartner.Network and cpinventory.com are a shared showcase layer 
            for projects with ConectR presentations.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-200 hidden lg:block transform -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 mt-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-center">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-6 text-center">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow (Desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-orange-400" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Key Benefits Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 justify-center mb-4">
              <Lock className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-semibold">Privacy by Design</h3>
            </div>
            <p className="text-gray-600 text-sm">
              CPs can present projects without uploading or sharing lead data. 
              Developers gain nationwide/global visibility without chasing CPs manually. 
              Each project uses structured ConectR interactive flows ensuring consistent storytelling.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}