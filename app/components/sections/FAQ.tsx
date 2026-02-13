'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const faqs = [
  {
    question: "Do you capture leads?",
    answer: "No. We never capture, store, or sell leads. ChannelPartner.Network is strictly a presentation distribution layer. All customer interactions happen directly between Channel Partners and their clients. Our architecture prevents any lead data from passing through our systems."
  },
  {
    question: "Can developers see CP customer details?",
    answer: "Never. Developer access is limited to project presentation analytics only. They can see aggregate views and engagement metrics, but customer identities and contact information remain exclusively with the Channel Partner. This is a core architectural principle we never compromise on."
  },
  {
    question: "How is access controlled?",
    answer: "Access is by application only. We verify each Channel Partner's credentials, track record, and market presence before granting access. Developers must also verify their projects and company credentials. This ensures quality and professionalism across the network."
  },
  {
    question: "What is ConectR?",
    answer: "ConectR is our interactive presentation platform that enables structured, consistent project storytelling. It creates immersive, guided project presentations that maintain brand standards while engaging buyers. Think of it as a premium, interactive brochure that ensures every presentation is professional and on-brand."
  },
  {
    question: "How does a project qualify to be listed?",
    answer: "Projects must have a complete ConectR presentation created, meet quality standards, and be verified by the developer. We review each listing for completeness, accuracy, and presentation quality. This ensures every project on the network maintains professional standards."
  },
  {
    question: "Can CPs share project links with buyers?",
    answer: "Absolutely. Channel Partners receive unique presentation links they can share directly with their buyers. These links can be shared via email, WhatsApp, or any channel. All buyer interactions remain within the CP's control, and no lead data is ever captured."
  },
  {
    question: "Is this India-only or global?",
    answer: "While we started in India, ChannelPartner.Network is global. We welcome Channel Partners and Developers from any country who meet our verification standards. Our platform supports multiple languages and currencies to serve international markets."
  },
  {
    question: "What prevents bypassing?",
    answer: "Our architecture prevents lead leakage by design. Presentations don't contain developer contact information, and all inquiries must go through the Channel Partner's established channels. We also have algorithmic monitoring to detect and prevent any attempts at bypass."
  },
  {
    question: "What does it cost?",
    answer: "Access is currently by invitation and application only, with tiered membership plans based on volume and market presence. Basic access for verified CPs starts at no cost, with premium features available. Contact us for specific pricing tailored to your needs."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="faq" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-padding mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </div>
          <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          <p className="body-large text-gray-600">
            Everything you need to know about our privacy-first network
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please chat with our team.
            </p>
            <a 
              href="mailto:support@channelpartner.network"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Contact Support
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}