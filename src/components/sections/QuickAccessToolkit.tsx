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
  color: string
}

const quickAccessItems: QuickAccessItem[] = [
  { id: 'start-exporting', title: 'Start Exporting', description: 'Step-by-step guide to begin your export journey', icon: 'Rocket', href: '#journey', color: 'blue' },
  { id: 'get-iec', title: 'Get IEC', description: 'Apply for Import-Export Code online at DGFT', icon: 'FileCheck', href: '#portals', color: 'indigo' },
  { id: 'customs-icegate', title: 'Customs & ICEGATE', description: 'File shipping bills and clear customs', icon: 'Shield', href: '#portals', color: 'purple' },
  { id: 'find-epc', title: 'Find Your EPC', description: 'Locate your Export Promotion Council', icon: 'Globe', href: '#epc', color: 'emerald' },
  { id: 'trade-data', title: 'Check Trade Data', description: 'Research export-import statistics and trends', icon: 'BarChart3', href: '#trade-intelligence', color: 'orange' },
  { id: 'explore-odop', title: 'Explore ODOP', description: 'Discover One District One Product opportunities', icon: 'MapPin', href: '#odop', color: 'rose' },
  { id: 'export-finance', title: 'Export Finance', description: 'Find trade finance and banking services', icon: 'Landmark', href: '#banking', color: 'green' },
  { id: 'find-cha', title: 'Find CHA', description: 'Locate customs house agents for clearance', icon: 'Building2', href: '#cha', color: 'cyan' },
  { id: 'shipping-lines', title: 'Shipping Lines', description: 'Book container shipping and track cargo', icon: 'Ship', href: '#shipping', color: 'blue' },
  { id: 'find-transporter', title: 'Find Transporter', description: 'Hire logistics and transport providers', icon: 'Truck', href: '#transporters', color: 'amber' },
  { id: 'find-packaging', title: 'Packaging Services', description: 'Get export-grade packaging solutions', icon: 'Package', href: '#packaging', color: 'teal' },
  { id: 'export-insurance', title: 'Export Insurance', description: 'Insure shipments with ECGC coverage', icon: 'ShieldCheck', href: '#compliance', color: 'red' },
  { id: 'compliance', title: 'Certification & Compliance', description: 'Meet quality standards and regulations', icon: 'ClipboardCheck', href: '#compliance', color: 'violet' },
  { id: 'faq', title: 'Export FAQ', description: 'Answers to common export questions', icon: 'Search', href: '#faq', color: 'slate' },
]

const iconMap: Record<string, ElementType> = {
  Rocket, FileCheck, Shield, Globe, BarChart3, MapPin,
  Landmark, Building2, Ship, Truck, Package, ShieldCheck,
  ClipboardCheck, Search
}

const colorMap: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  indigo: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
  purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
  orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
  rose: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
  green: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
  cyan: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400',
  amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  teal: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
  red: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
  violet: 'bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400',
  slate: 'bg-slate-100 text-slate-600 dark:bg-slate-900/30 dark:text-slate-400',
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function QuickAccessToolkit() {
  return (
    <section id="tools" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quick Access Toolkit
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Everything you need to start, manage, and grow your export business
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
                'group flex flex-col items-center rounded-xl p-4 text-center transition-all duration-200',
                'hover:bg-accent hover:shadow-md hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
              )}
            >
              <div className={cn('mb-2 rounded-lg p-2.5 transition-colors', colorMap[item_.color])}>
                {(() => {
                    const Icon: ElementType | undefined = iconMap[item_.icon]
                    return Icon ? <Icon className="h-5 w-5" /> : null
                  })()}
              </div>
              <span className="text-xs font-medium text-foreground leading-tight">{item_.title}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
