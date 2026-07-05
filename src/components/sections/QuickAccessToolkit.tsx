'use client'

import {
  Building2, Globe, BarChart3, Landmark,
  Ship, Shield, BadgeCheck, GraduationCap,
  ArrowRight,
} from 'lucide-react'

const categories = [
  {
    id: 'portals',
    title: 'Government Portals',
    description: 'DGFT, ICEGATE, APEDA, FIEO and more',
    icon: Building2,
    href: '#portals',
    color: 'from-primary/10 to-primary/5 text-primary border-primary/20',
  },
  {
    id: 'epc',
    title: 'Export Promotion Councils',
    description: 'Find your sector-specific EPC and register',
    icon: Globe,
    href: '#epc',
    color: 'from-purple-500/10 to-purple-500/5 text-purple-600 border-purple-500/20',
  },
  {
    id: 'trade',
    title: 'Trade Data & Intelligence',
    description: 'Market research, NIRYAT, TradeStat analytics',
    icon: BarChart3,
    href: '#trade-intelligence',
    color: 'from-cyan-500/10 to-cyan-500/5 text-cyan-600 border-cyan-500/20',
  },
  {
    id: 'banking',
    title: 'Export Finance & Banking',
    description: 'EXIM Bank, ECGC insurance, trade finance',
    icon: Landmark,
    href: '#banking',
    color: 'from-emerald-500/10 to-emerald-500/5 text-emerald-600 border-emerald-500/20',
  },
  {
    id: 'shipping',
    title: 'Shipping & Logistics',
    description: 'Shipping lines, transporters, CHA, packaging',
    icon: Ship,
    href: '#shipping',
    color: 'from-indigo-500/10 to-indigo-500/5 text-indigo-600 border-indigo-500/20',
  },
  {
    id: 'customs',
    title: 'Customs & Clearance',
    description: 'ICEGATE, shipping bills, HS code search',
    icon: Shield,
    href: '#hs-code-search',
    color: 'from-amber-500/10 to-amber-500/5 text-amber-600 border-amber-500/20',
  },
  {
    id: 'compliance',
    title: 'Compliance & Certification',
    description: 'FSSAI, BIS, organic, phytosanitary standards',
    icon: BadgeCheck,
    href: '#compliance',
    color: 'from-rose-500/10 to-rose-500/5 text-rose-600 border-rose-500/20',
  },
  {
    id: 'journey',
    title: 'Export Journey Guide',
    description: 'Step-by-step from readiness to shipment',
    icon: GraduationCap,
    href: '#journey',
    color: 'from-orange-500/10 to-orange-500/5 text-orange-600 border-orange-500/20',
  },
]

export function QuickAccessToolkit() {
  return (
    <section id="tools" className="py-16 md:py-20">
      <div className="exim-container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Find what you need — organized for Indian exporters
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group relative flex items-start gap-4 rounded-xl border bg-card p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color}`}>
                <cat.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-foreground">{cat.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-snug">{cat.description}</p>
              </div>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary/60" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
