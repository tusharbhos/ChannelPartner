'use client'

import { Users, Building, Shield, Check, ArrowRight, Star, Globe, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AudienceCards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const audiences = [
    {
      icon: Users,
      title: "Channel Partners",
      tagline: "Sell with confidence. Keep ownership.",
      color: "orange",
      features: [
        "Lead privacy guaranteed",
        "Access multiple projects",
        "Direct sharing links",
        "No data leakage",
        "Professional presentations",
        "Analytics dashboard"
      ],
      stats: [
        { value: "100%", label: "Lead Privacy" },
        { value: "24/7", label: "Access" }
      ]
    },
    {
      icon: Building,
      title: "Developers",
      tagline: "Earn visibility across a CP network.",
      color: "blue",
      features: [
        "Nationwide CP reach",
        "Consistent messaging",
        "Quality enquiries",
        "Brand protection",
        "Performance analytics",
        "Verified presentations"
      ],
      stats: [
        { value: "200+", label: "Active CPs" },
        { value: "15+", label: "Cities" }
      ]
    },
    {
      icon: Shield,
      title: "Platform Admin",
      tagline: "Controlled access + verified inventory governance.",
      color: "green",
      features: [
        "Access control",
        "Quality assurance",
        "Analytics dashboard",
        "Partner verification",
        "Project validation",
        "Compliance monitoring"
      ],
      stats: [
        { value: "100%", label: "Verified" },
        { value: "24/7", label: "Monitoring" }
      ]
    }
  ]

  const getColorClasses = (color: string, type: string) => {
    const colors = {
      orange: {
        bg: 'bg-orange-50',
        light: 'bg-orange-100',
        text: 'text-orange-600',
        border: 'border-orange-200',
        hover: 'hover:border-orange-300',
        gradient: 'from-orange-500 to-orange-600'
      },
      blue: {
        bg: 'bg-blue-50',
        light: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:border-blue-300',
        gradient: 'from-blue-500 to-blue-600'
      },
      green: {
        bg: 'bg-green-50',
        light: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-200',
        hover: 'hover:border-green-300',
        gradient: 'from-green-500 to-green-600'
      }
    }
    return colors[color as keyof typeof colors][type]
  }

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
            Designed for <span className="text-orange-500">Every Role</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto text-gray-600">
            Tailored experiences that protect and empower each participant
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative"
              >
                <div className={`absolute inset-0 ${getColorClasses(audience.color, 'bg')} rounded-2xl transform rotate-1 scale-105 opacity-50 group-hover:rotate-2 transition-transform`} />
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${getColorClasses(audience.color, 'light')} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${getColorClasses(audience.color, 'text')}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{audience.title}</h3>
                  <p className="text-gray-600 mb-4">{audience.tagline}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {audience.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className={`w-4 h-4 ${getColorClasses(audience.color, 'text')} flex-shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                    {audience.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-xl font-bold ${getColorClasses(audience.color, 'text')}`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Arrow */}
                  <div className={`absolute bottom-8 right-8 w-8 h-8 ${getColorClasses(audience.color, 'light')} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <ArrowRight className={`w-4 h-4 ${getColorClasses(audience.color, 'text')}`} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-600">Privacy First</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-600">Global Network</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-600">Secure by Design</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-orange-500" />
            <span className="text-sm text-gray-600">Verified Only</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}