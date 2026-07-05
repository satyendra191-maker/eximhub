import { motion } from 'framer-motion'
import type { ElementType } from 'react'
import {
  Rocket,
  FileCheck,
  Shield,
  Globe,
  BarChart3,
  MapPin,
  Landmark,
  Building2,
  Ship,
  Truck,
  Package,
  ShieldCheck,
  ClipboardCheck,
  Search
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface QuickAccessItem {
  id: string
  title: string
  description: string
  icon: string
  href: string
  category: string
}

const quickAccessItems: QuickAccessItem[] = [
  { id: 'start-exporting', title: 'Start Exporting', description: 'Step-by-step guide to begin your export journey', icon: 'Rocket', href: '#journey', category: 'government' },
  { id: 'get-iec', title: 'Get IEC', description: 'Apply for Import-Export Code online at DGFT', icon: 'FileCheck', href: '#portals', category: 'customs' },
  { id: 'customs-icegate', title: 'Customs & ICEGATE', description: 'File shipping bills and clear customs', icon: 'Shield', href: '#portals', category: 'customs' },
  { id: 'find-epc', title: 'Find Your EPC', description: 'Locate your Export Promotion Council', icon: 'Globe', href: '#epc', category: 'epc' },
  { id: 'trade-data', title: 'Check Trade Data', description: 'Research export-import statistics and trends', icon: 'BarChart3', href: '#trade-intelligence', category: 'trade' },
  { id: 'explore-odop', title: 'Explore ODOP', description: 'Discover One District One Product opportunities', icon: 'MapPin', href: '#odop', category: 'odop' },
  { id: 'export-finance', title: 'Export Finance', description: 'Find trade finance and banking services', icon: 'Landmark', href: '#banking', category: 'bank' },
  { id: 'find-cha', title: 'Find CHA', description: 'Locate customs house agents for clearance', icon: 'Building2', href: '#cha', category: 'customs' },
  { id: 'shipping-lines', title: 'Shipping Lines', description: 'Book container shipping and track cargo', icon: 'Ship', href: '#shipping', category: 'shipping' },
  { id: 'find-transporter', title: 'Find Transporter', description: 'Hire logistics and transport providers', icon: 'Truck', href: '#transporters', category: 'logistics' },
  { id: 'find-packaging', title: 'Packaging Services', description: 'Get export-grade packaging solutions', icon: 'Package', href: '#packaging', category: 'packaging' },
  { id: 'export-insurance', title: 'Export Insurance', description: 'Insure shipments with ECGC coverage', icon: 'ShieldCheck', href: '#compliance', category: 'insurance' },
  { id: 'compliance', title: 'Certification & Compliance', description: 'Meet quality standards and regulations', icon: 'ClipboardCheck', href: '#compliance', category: 'compliance' },
  { id: 'faq', title: 'Export FAQ', description: 'Answers to common export questions', icon: 'Search', href: '#faq', category: 'learning' },
]

const iconMap: Record<string, ElementType> = {
  Rocket, FileCheck, Shield, Globe, BarChart3, MapPin,
  Landmark, Building2, Ship, Truck, Package, ShieldCheck,
  ClipboardCheck, Search
}

const categoryColors: Record<string, string> = {
  government: 'bg-exim-government-light border-exim-government-border text-exim-government-dark hover:shadow-government',
  epc: 'bg-exim-epc-light border-exim-epc-border text-exim-epc-dark hover:shadow-epc',
  odop: 'bg-exim-odop-light border-exim-odop-border text-exim-odop-dark hover:shadow-odop',
  trade: 'bg-exim-trade-light border-exim-trade-border text-exim-trade-dark hover:shadow-trade',
  bank: 'bg-exim-bank-light border-exim-bank-border text-exim-bank-dark hover:shadow-bank',
  customs: 'bg-exim-customs-light border-exim-customs-border text-exim-customs-dark hover:shadow-customs',
  shipping: 'bg-exim-shipping-light border-exim-shipping-border text-exim-shipping-dark hover:shadow-shipping',
  logistics: 'bg-exim-logistics-light border-exim-logistics-border text-exim-logistics-dark hover:shadow-logistics',
  packaging: 'bg-exim-packaging-light border-exim-packaging-border text-exim-packaging-dark hover:shadow-packaging',
  port: 'bg-exim-port-light border-exim-port-border text-exim-port-dark hover:shadow-port',
  insurance: 'bg-exim-insurance-light border-exim-insurance-border text-exim-insurance-dark hover:shadow-insurance',
  compliance: 'bg-exim-compliance-light border-exim-compliance-border text-exim-compliance-dark hover:shadow-compliance',
  learning: 'bg-exim-learning-light border-exim-learning-border text-exim-learning-dark hover:shadow-learning',
  discovery: 'bg-exim-discovery-light border-exim-discovery-border text-exim-discovery-dark hover:shadow-discovery',
  events: 'bg-exim-events-light border-exim-events-border text-exim-events-dark hover:shadow-events',
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.03 } }
}

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 }
}

export function QuickAccessToolkit() {
  return (
    <section id="tools" className="exim-section bg-gradient-to-b from-white to-exim-bg-secondary/30">
      <div className="exim-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight exim-text-primary sm:text-4xl">
            Start Your Export Journey
          </h2>
          <p className="mt-3 text-lg exim-text-secondary">
            Choose your export ecosystem category to begin
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7"
        >
          {quickAccessItems.map((item_) => (
            <motion.a
              key={item_.id}
              variants={item}
              href={item_.href}
              className={cn(
                'group exim-card flex flex-col items-center rounded-xl p-4 text-center transition-all duration-200',
                'hover:shadow-lg hover:-translate-y-1',
                categoryColors[item_.category] || categoryColors['government']
              )}
            >
              <div className="mb-2 rounded-lg p-2.5 exim-hover-lift">
                {(() => {
                    const Icon: ElementType | undefined = iconMap[item_.icon]
                    return Icon ? <Icon className="h-5 w-5" /> : null
                  })()}
              </div>
              <span className="text-xs font-semibold exim-text-primary leading-tight">{item_.title}</span>
              <span className="text-xs exim-text-secondary mt-1 line-clamp-2">{item_.description}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
