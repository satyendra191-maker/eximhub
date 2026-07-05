'use client'

import { motion } from 'framer-motion'
import {
  Rocket,
  FileText,
  Ship,
  Building2,
  BarChart3,
  MapPin,
  Landmark,
  Users,
  Container,
  Search,
  Truck,
  Package,
  Shield,
  CheckCircle2,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const quickAccessItems = [
  { id: 'start-exporting', title: 'Start Exporting', description: 'Begin your export journey with IEC and setup guidance', icon: 'Rocket', href: '#journey', color: 'blue' },
  { id: 'get-iec', title: 'Get IEC Code', description: 'Apply for Importer Exporter Code on DGFT portal', icon: 'FileText', href: 'https://dgft.gov.in', color: 'indigo' },
  { id: 'customs-icegate', title: 'Customs & ICEGATE', description: 'File shipping bills and track customs clearance', icon: 'Ship', href: 'https://icegate.gov.in', color: 'teal' },
  { id: 'find-epc', title: 'Find EPC', description: 'Search Export Promotion Councils by sector', icon: 'Building2', href: '#epc-directory', color: 'purple' },
  { id: 'check-trade-data', title: 'Check Trade Data', description: 'View export-import statistics and analytics', icon: 'BarChart3', href: '#trade-intelligence', color: 'emerald' },
  { id: 'explore-odop', title: 'Explore ODOP', description: 'Discover district-level export products', icon: 'MapPin', href: '#odop-gateway', color: 'orange' },
  { id: 'find-export-finance', title: 'Find Export Finance', description: 'Compare banks offering export credit and trade finance', icon: 'Landmark', href: '#banking-hub', color: 'amber' },
  { id: 'find-cha', title: 'Find CHA', description: 'Search licensed Customs House Agents by port', icon: 'Users', href: '#cha-hub', color: 'red' },
  { id: 'find-shipping', title: 'Find Shipping Line', description: 'Compare carriers, schedules, and tracking', icon: 'Container', href: '#shipping-hub', color: 'cyan' },
  { id: 'track-container', title: 'Track Container', description: 'Track shipment via official carrier portals', icon: 'Search', href: '#shipping-hub', color: 'green' },
  { id: 'find-transporter', title: 'Find Transporter', description: 'Compare logistics and transport providers', icon: 'Truck', href: '#transport-hub', color: 'pink' },
  { id: 'find-packaging', title: 'Find Packaging', description: 'Find export packaging and ISPM-15 services', icon: 'Package', href: '#packaging-hub', color: 'violet' },
  { id: 'export-insurance', title: 'Export Insurance', description: 'ECGC and marine cargo insurance options', icon: 'Shield', href: '#insurance', color: 'sky' },
  { id: 'compliance', title: 'Compliance', description: 'BIS, FSSAI, plant quarantine, and certification', icon: 'CheckCircle2', href: '#compliance', color: 'slate' },
]

const colorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-700' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-700' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-700' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-700' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-700' },
  red: { bg: 'bg-red-100', text: 'text-red-700' },
  cyan: { bg: 'bg-cyan-100', text: 'text-cyan-700' },
  green: { bg: 'bg-green-100', text: 'text-green-700' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-700' },
  violet: { bg: 'bg-violet-100', text: 'text-violet-700' },
  sky: { bg: 'bg-sky-100', text: 'text-sky-700' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-700' },
}

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  FileText,
  Ship,
  Building2,
  BarChart3,
  MapPin,
  Landmark,
  Users,
  Container,
  Search,
  Truck,
  Package,
  Shield,
  CheckCircle2,
}

export function QuickAccessToolkit() {
  return (
    <section id="quick-access" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Quick Access Toolkit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            High-frequency exporter tools and resources at your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quickAccessItems.map((item, index) => {
            const Icon = iconMap[item.icon]
            const colors = colorMap[item.color] ?? { bg: 'bg-gray-100', text: 'text-gray-700' }
            const isExternal = item.href.startsWith('http')

            return (
              <motion.a
                key={item.id}
                href={item.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="block"
              >
                <Card className="card-lift premium-shadow h-full overflow-hidden transition-all hover:premium-shadow-hover hover:-translate-y-1">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-full', colors.bg, colors.text)}>
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
