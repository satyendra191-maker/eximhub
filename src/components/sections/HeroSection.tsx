'use client'

import { motion } from 'framer-motion'
import {
  Search, Sparkles, ShieldCheck, Building2, Landmark, ScrollText,
  Rocket, FileText, Globe, BarChart3, Map,
  Ship, Truck, Package, Shield, SearchCheck, BadgeCheck,
  FileQuestion, MessageCircle, ChevronRight,
} from 'lucide-react'

const actionCards = [
  { icon: Rocket, title: 'Start Exporting', desc: 'Step-by-step guide', href: '#tools', color: 'government' },
  { icon: FileText, title: 'Get IEC', desc: 'Apply online at DGFT', href: '#tools', color: 'customs' },
  { icon: Globe, title: 'Find EPC', desc: 'Export Promotion Councils', href: '#epc', color: 'epc' },
  { icon: BarChart3, title: 'Check Trade Data', desc: 'Market research tools', href: '#trade-intelligence', color: 'trade' },
  { icon: Map, title: 'Explore ODOP', desc: 'One District products', href: '#tools', color: 'odop' },
  { icon: Landmark, title: 'Export Finance', desc: 'Banking services', href: '#banking', color: 'bank' },
  { icon: Ship, title: 'Find CHA', desc: 'Customs brokers', href: '#shipping', color: 'shipping' },
  { icon: Truck, title: 'Transporters', desc: 'Logistics providers', href: '#shipping', color: 'logistics' },
  { icon: Package, title: 'Packaging', desc: 'Export solutions', href: '#tools', color: 'packaging' },
  { icon: Shield, title: 'Export Insurance', desc: 'ECGC coverage', href: '#portals', color: 'insurance' },
  { icon: SearchCheck, title: 'Buyer Credibility', desc: 'Check buyer credit', href: '#portals', color: 'bank' },
  { icon: BadgeCheck, title: 'Compliance', desc: 'Certification', href: '#tools', color: 'compliance' },
  { icon: FileQuestion, title: 'HS Code Search', desc: 'Find HSN classification', href: '#hs-code-search', color: 'customs' },
  { icon: MessageCircle, title: 'Export FAQ', desc: 'Answers to questions', href: '#faq', color: 'learning' },
]

const colorMap: Record<string, { light: string; text: string }> = {
  government: { light: 'bg-exim-government-light', text: 'text-exim-government' },
  customs: { light: 'bg-exim-customs-light', text: 'text-exim-customs' },
  epc: { light: 'bg-exim-epc-light', text: 'text-exim-epc' },
  trade: { light: 'bg-exim-trade-light', text: 'text-exim-trade' },
  odop: { light: 'bg-exim-odop-light', text: 'text-exim-odop' },
  bank: { light: 'bg-exim-bank-light', text: 'text-exim-bank' },
  shipping: { light: 'bg-exim-shipping-light', text: 'text-exim-shipping' },
  logistics: { light: 'bg-exim-logistics-light', text: 'text-exim-logistics' },
  packaging: { light: 'bg-exim-packaging-light', text: 'text-exim-packaging' },
  insurance: { light: 'bg-exim-insurance-light', text: 'text-exim-insurance' },
  compliance: { light: 'bg-exim-compliance-light', text: 'text-exim-compliance' },
  learning: { light: 'bg-exim-learning-light', text: 'text-exim-learning' },
}

const chips = [
  { label: 'Customs', color: 'customs' },
  { label: 'Export Finance', color: 'bank' },
  { label: 'ODOP', color: 'odop' },
  { label: 'Trade Data', color: 'trade' },
  { label: 'Shipping', color: 'shipping' },
  { label: 'Compliance', color: 'compliance' },
  { label: 'HS Code', color: 'customs' },
  { label: 'ECGC Insurance', color: 'insurance' },
  { label: 'Buyer Credibility', color: 'bank' },
]

const trustBadges = [
  { icon: ShieldCheck, label: 'DGFT Official' },
  { icon: Landmark, label: 'RBI Bank' },
  { icon: Building2, label: 'Ministry of Commerce' },
  { icon: ScrollText, label: 'Customs Compliant' },
]

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,82,186,0.08)_0%,rgba(255,255,255,0)_60%),radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.06)_0%,rgba(255,255,255,0)_50%),radial-gradient(ellipse_at_bottom_right,rgba(255,140,0,0.06)_0%,rgba(255,255,255,0)_60%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZjUyYmEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-exim-government/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-60 right-20 w-96 h-96 rounded-full bg-exim-epc/5 blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/3 w-64 h-64 rounded-full bg-exim-odop/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: '4s' }} />

      <div className="exim-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-exim-government/20 bg-exim-government-light/80 px-4 py-1.5 text-sm text-exim-government font-medium shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>Trusted by 1000+ Exporters</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Everything You Need to Export{' '}
            <span className="block mt-2 bg-gradient-to-r from-exim-government via-exim-epc to-exim-odop gradient-text">
              from India
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Access verified government portals, EPCs, trade data, banking, customs, 
            shipping lines, and logistics partners — all from one export gateway.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 max-w-xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-exim-government/20 via-exim-epc/20 to-exim-odop/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search for EPCs, ports, banks, trade data..."
                  className="w-full h-13 pl-11 pr-4 text-base rounded-full border border-border bg-card text-foreground shadow-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-exim-government/40 focus:ring-2 focus:ring-exim-government/10 transition-all"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {chips.map((chip, i) => {
              const c = colorMap[chip.color]!
              return (
                <motion.span
                  key={chip.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
                  className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium border ${c.light} ${chip.color === 'customs' ? 'border-exim-customs-border text-exim-customs' : chip.color === 'bank' ? 'border-exim-bank-border text-exim-bank' : chip.color === 'odop' ? 'border-exim-odop-border text-exim-odop' : chip.color === 'trade' ? 'border-exim-trade-border text-exim-trade' : chip.color === 'shipping' ? 'border-exim-shipping-border text-exim-shipping' : chip.color === 'compliance' ? 'border-exim-compliance-border text-exim-compliance' : chip.color === 'insurance' ? 'border-exim-insurance-border text-exim-insurance' : 'border-exim-government-border text-exim-government'} cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm`}
                >
                  {chip.label}
                </motion.span>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:gap-4"
          >
            {actionCards.map((action, i) => {
              const c = colorMap[action.color]!
              return (
                <motion.a
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.03 }}
                  href={action.href}
                  className="group relative flex flex-col items-center p-4 sm:p-5 rounded-xl border bg-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${c.light} ${c.text} transition-transform duration-300 group-hover:scale-110`}>
                    <action.icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-semibold text-foreground">{action.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{action.desc}</div>
                  <ChevronRight className="absolute right-3 top-3 h-3.5 w-3.5 text-muted-foreground/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-exim-government/50" />
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="mt-14 pt-8 border-t border-border/50"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-4">
              India's Trusted Export Ecosystem
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <badge.icon className="h-4 w-4 text-exim-government/60" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
