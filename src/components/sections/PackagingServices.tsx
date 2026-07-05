import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Package } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { packagingResources } from '@/data/packagingProviders'
import { packagingToServiceResource } from '@/lib/serviceAdapters'

const resources = packagingResources.map(packagingToServiceResource)

const serviceCategories = [
  'Wooden Crates', 'Pallets', 'VCI Protection', 'Vacuum Packaging',
  'Container Lashing', 'Heavy Machinery', 'Food Export Packaging',
  'Pharma Packaging', 'Corrugated Cartons', 'Flexible Packaging',
]

export function PackagingServices() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search) return resources
    const q = search.toLowerCase()
    return resources.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.services?.some((cat) => cat.toLowerCase().includes(q)),
    )
  }, [search])

  return (
    <section id="packaging" className="scroll-mt-20 py-20 bg-muted/30">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Export Packaging & Industrial Packaging Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized packaging providers for export-grade packaging, crating, palletization, and protective packaging solutions
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-center">Select Your Packaging Need</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {serviceCategories.map((category, i) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
              >
                <Package className="h-4 w-4 text-muted-foreground" />
                <span>{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search packaging providers..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center"
            >
              <p className="text-lg text-muted-foreground">No packaging providers found matching your search.</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filtered.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <ServiceCard
                    service={service}
                    showTrustBadge={true}
                    showMetadata={true}
                    showActions={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
