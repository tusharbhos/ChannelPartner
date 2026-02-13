'use client'

import { useState } from 'react'
import { X, Check, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.enum(['cp', 'developer']),
  company: z.string().min(1, 'Company is required'),
  city: z.string().min(1, 'City/Country is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  monthlyClosures: z.string().optional(),
  regions: z.string().optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

interface ApplyFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function ApplyForm({ isOpen, onClose }: ApplyFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form data:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      reset()
      onClose()
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white p-6 border-b border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Apply for Access</h3>
              <p className="text-sm text-gray-500 mt-1">Join the privacy-first presentation network</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role <span className="text-orange-500">*</span>
                  </label>
                  <select
                    {...register('role')}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${
                      errors.role ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select role</option>
                    <option value="cp">Channel Partner</option>
                    <option value="developer">Developer</option>
                  </select>
                  {errors.role && (
                    <p className="mt-1 text-xs text-red-500">{errors.role.message}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company <span className="text-orange-500">*</span>
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${
                      errors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Company name"
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-red-500">{errors.company.message}</p>
                  )}
                </div>

                {/* City/Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City/Country <span className="text-orange-500">*</span>
                  </label>
                  <input
                    {...register('city')}
                    type="text"
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${
                      errors.city ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Mumbai, India"
                  />
                  {errors.city && (
                    <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-orange-500">*</span>
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Monthly Closures */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Closures
                  </label>
                  <select
                    {...register('monthlyClosures')}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  >
                    <option value="">Select range</option>
                    <option value="0-5">0-5</option>
                    <option value="6-15">6-15</option>
                    <option value="16-30">16-30</option>
                    <option value="31+">31+</option>
                  </select>
                </div>

                {/* Regions Served */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Regions Served
                  </label>
                  <input
                    {...register('regions')}
                    type="text"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="e.g., Mumbai, Bangalore"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="Tell us more about your requirements..."
                />
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>{' '}
                and{' '}
                <a href="#" className="text-orange-500 hover:underline">Terms of Service</a>.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white py-3.5 rounded-lg font-medium hover:bg-orange-600 transition-all hover:shadow-lg hover:shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Application Received!
              </h4>
              <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                Thank you for your interest. We'll verify your information and respond within 2-3 business days.
              </p>
              <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}