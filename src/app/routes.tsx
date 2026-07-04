import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { PortalSection } from '@/components/sections/PortalSection'
import { PortalComparison } from '@/components/sections/PortalComparison'
import { ExportJourney } from '@/components/sections/ExportJourney'
import { ChecklistSection } from '@/components/sections/ChecklistSection'
import { DocumentSection } from '@/components/sections/DocumentSection'
import { Chatbot } from '@/components/floating/Chatbot'
import { BackToTop } from '@/components/floating/BackToTop'

function ScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [hash])

  return null
}

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PortalSection />
        <PortalComparison />
        <ExportJourney />
        <ChecklistSection />
        <DocumentSection />
      </main>
      <Footer />
      <Chatbot />
      <BackToTop />
    </div>
  )
}
