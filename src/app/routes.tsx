import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { QuickAccessToolkit } from '@/components/sections/QuickAccessToolkit'
import { SuggestResource } from '@/components/sections/SuggestResource'
import { PortalSection } from '@/components/sections/PortalSection'
import { EPCDirectory } from '@/components/sections/EPCDirectory'
import { CommodityBoardsSection } from '@/components/sections/CommodityBoardsSection'
import { ODOPGateway } from '@/components/sections/ODOPGateway'
import { TradeIntelligence } from '@/components/sections/TradeIntelligence'
import { PortalComparison } from '@/components/sections/PortalComparison'
import { ExportBanking } from '@/components/sections/ExportBanking'
import { CHADirectory } from '@/components/sections/CHADirectory'
import { ShippingLinesHub } from '@/components/sections/ShippingLinesHub'
import { TransportersDirectory } from '@/components/sections/TransportersDirectory'
import { PackagingServices } from '@/components/sections/PackagingServices'
import { ExportJourney } from '@/components/sections/ExportJourney'
import { ChecklistSection } from '@/components/sections/ChecklistSection'
import { DocumentSection } from '@/components/sections/DocumentSection'
import { ComplianceSection } from '@/components/sections/ComplianceSection'
import { HSNCodeSearch } from '@/components/sections/HSNCodeSearch'
import { FAQSection } from '@/components/sections/FAQSection'
import { StatsSection } from '@/components/sections/StatsSection'
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
      <main id="main-content" className="flex-1">
        <HeroSection />
        <QuickAccessToolkit />
        <SuggestResource />
        <PortalSection />
        <EPCDirectory />
        <CommodityBoardsSection />
        <ODOPGateway />
        <HSNCodeSearch />
        <TradeIntelligence />
        <PortalComparison />
        <ExportBanking />
        <CHADirectory />
        <ShippingLinesHub />
        <TransportersDirectory />
        <PackagingServices />
        <ExportJourney />
        <ChecklistSection />
        <DocumentSection />
        <ComplianceSection />
        <StatsSection />
        <FAQSection />
      </main>
      <Footer />
      <Chatbot />
      <BackToTop />
    </div>
  )
}
