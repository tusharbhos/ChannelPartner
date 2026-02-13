'use client'

import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import HowItWorks from './components/sections/HowItWorks'
import Benefits from './components/sections/Benefits'
import TrustProtection from './components/sections/TrustProtection'
import AudienceCards from './components/sections/AudienceCards'
import FAQ from './components/sections/FAQ'
import FinalCTA from './components/sections/FinalCTA'
import ApplyForm from './components/ui/ApplyForm'

export default function Home() {
  const [isApplyFormOpen, setIsApplyFormOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Header onApplyClick={() => setIsApplyFormOpen(true)} />
      
      <main className="min-h-screen">
        <Hero onApplyClick={() => setIsApplyFormOpen(true)} />
        <Problem />
        <HowItWorks />
        <Benefits />
        <TrustProtection />
        <AudienceCards />
        <FAQ />
        <FinalCTA onApplyClick={() => setIsApplyFormOpen(true)} />
      </main>

      <Footer />

      <ApplyForm 
        isOpen={isApplyFormOpen}
        onClose={() => setIsApplyFormOpen(false)}
      />
    </>
  )
}