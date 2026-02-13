'use client'

import { Users, Building, Shield, Globe, Zap, TrendingUp, Award, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cpBenefits = [
    {
      icon: Shield,
      title: "Keep lead ownership private",
      description: "Your customer relationships remain yours. No data sharing, no exposure."
    },
    {
      icon: Globe,
      title: "Present multiple projects professionally",
      description: "Access a curated portfolio of quality projects with consistent presentations."
    },
    {
      icon: Zap,
      title: "Reduce wasted effort",
      description: "Better buyer clarity means faster decisions and higher conversion."
    },
    {
      icon: Award,
      title: "Standalone platform",
      description: "Dedicated space to share projects without intermediaries."
    }
  ]

  const developerBenefits = [
    {
      icon: TrendingUp,
      title: "Visibility across CP network",
      description: "Reach qualified Channel Partners across India and globally."
    },
    {
      icon: Shield,
      title: "Consistent project story",
      description: "Every presentation maintains your brand standards via ConectR."
    },
    {
      icon: Zap,
      title: "Less dependency on outreach",
      description: "Stop chasing CPs manually. Let the network work for you."
    },
    {
      icon: Clock,
      title: "Higher quality enquiries",
      description: "Intent-aligned leads from informed, qualified buyers."
    }
  ]

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            <span className="text-orange-500">Dual Advantage</span> Platform
          </h2>
          <p className="body-large max-w-2xl mx-auto text-gray-600">
            Designed to protect Channel Partners while maximizing Developer reach
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For Channel Partners */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Channel Partners</h3>
              </div>

              <div className="space-y-4">
                {cpBenefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                          <Icon className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-xs text-gray-600">Lead Privacy</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">3x</div>
                  <div className="text-xs text-gray-600">Project Access</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* For Developers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Developers</h3>
              </div>

              <div className="space-y-4">
                {developerBenefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                          <Icon className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">200+</div>
                  <div className="text-xs text-gray-600">Active CPs</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">15+</div>
                  <div className="text-xs text-gray-600">Cities</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm">
            <Shield className="w-4 h-4" />
            Both sides win with privacy-first architecture
          </div>
        </motion.div>
      </div>
    </section>
  )
}