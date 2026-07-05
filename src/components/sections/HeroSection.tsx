'use client'

import { motion } from 'framer-motion'
import { Search, Sparkles } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 bg-[radial-gradient(ellipse_at_center,rgba(15,82,186,0.05)_0%,rgba(255,255,255,0)_60%),radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.05)_0%,rgba(255,255,255,0)_50%),radial-gradient(ellipse_at_bottom_right,rgba(255,140,0,0.05)_0%,rgba(255,255,255,0)_60%)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-exim-government/5 blur-[100px]" />
        <div className="absolute top-40 right-0 h-[300px] w-[300px] rounded-full bg-exim-epc/5 blur-[80px]" />
        <div className="absolute bottom-0 left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-exim-odop/5 blur-[60px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="exim-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-exim-government/20 bg-exim-government/5 px-4 py-1.5 text-sm text-exim-government font-medium"
          >
            <Sparkles className="h-4 w-4" />
            <span>Trusted by 1000+ Exporters</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-exim-text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Everything You Need to Export
            <span className="block mt-2 text-exim-government">from India</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base text-exim-text-secondary md:text-lg"
          >
            Find official portals, EPCs, trade data, banks, customs resources,
            shipping lines, transporters and packaging partners in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 max-w-xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 exim-text-muted" />
              <Input
                type="search"
                placeholder="Search for EPCs, ports, banks, trade data..."
                className="h-12 pl-10 pr-4 text-base border-exim-border/50 rounded-full focus:border-exim-government"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {[
              { label: 'Customs', color: 'exim-customs' },
              { label: 'Export Finance', color: 'exim-bank' },
              { label: 'ODOP', color: 'exim-odop' },
              { label: 'Trade Data', color: 'exim-trade' },
              { label: 'Shipping', color: 'exim-shipping' },
              { label: 'Compliance', color: 'exim-compliance' },
              { label: 'HS Code', color: 'exim-customs' },
              { label: 'ECGC Insurance', color: 'exim-insurance' },
              { label: 'Buyer Credibility', color: 'exim-bank' }
            ].map((chip, i) => (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
              >
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border bg-exim-customs-light text-exim-customs-dark border-exim-customs-border cursor-pointer hover:shadow-sm transition-all">
                  {chip.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: '🚀', title: 'Start Exporting', desc: 'Step-by-step guide', color: 'exim-government' },
              { icon: '📄', title: 'Get IEC', desc: 'Apply online at DGFT', color: 'exim-customs' },
              { icon: '🌍', title: 'Find EPC', desc: 'Export Promotion Councils', color: 'exim-epc' },
              { icon: '📊', title: 'Check Trade Data', desc: 'Market research tools', color: 'exim-trade' },
              { icon: '🗺️', title: 'Explore ODOP', desc: 'One District products', color: 'exim-odop' },
              { icon: '🏦', title: 'Export Finance', desc: 'Banking services', color: 'exim-bank' },
              { icon: '🚢', title: 'Find CHA', desc: 'Customs brokers', color: 'exim-shipping' },
              { icon: '🚚', title: 'Transporters', desc: 'Logistics providers', color: 'exim-logistics' },
              { icon: '📦', title: 'Packaging', desc: 'Export solutions', color: 'exim-packaging' },
              { icon: '🛡️', title: 'Export Insurance', desc: 'ECGC coverage', color: 'exim-insurance' },
              { icon: '🔎', title: 'Buyer Credibility', desc: 'Check buyer credit', color: 'exim-bank' },
              { icon: '✅', title: 'Compliance', desc: 'Certification', color: 'exim-compliance' },
              { icon: '🔢', title: 'HS Code Search', desc: 'Find HSN classification', color: 'exim-customs' },
              { icon: 'ℹ️', title: 'Export FAQ', desc: 'Answers to questions', color: 'exim-learning' }
            ].map((action, i) => (
              <motion.a
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.03 }}
                href={action.title === 'HS Code Search' ? '#hs-code-search' : '#tools'}
                className="group flex flex-col items-center p-4 rounded-xl border bg-exim-government-light border-exim-government-border hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-2xl mb-2">{action.icon}</div>
                <div className="text-sm font-medium text-exim-text-primary">{action.title}</div>
                <div className="text-xs text-exim-text-secondary mt-1">{action.desc}</div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-12 text-center"
          >
            <p className="text-xs text-exim-text-muted mb-2">India's Trusted Export Ecosystem</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {['DGFT Official', 'RBI Bank', 'Ministry of Commerce', 'Customs Compliant'].map((partner) => (
                <span key={partner} className="text-xs text-exim-text-muted">
                  • {partner}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
