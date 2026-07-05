import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { shippingLineResources } from '@/data/shippingLines'
import { shippingLineToServiceResource } from '@/lib/serviceAdapters'

const resources = shippingLineResources.map(shippingLineToServiceResource)

export function ShippingLinesHub() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search) return resources
    const q = search.toLowerCase()
    return resources.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.acronym?.toLowerCase().includes(q),
    )
  }, [search])

  return (
    <section id="shipping" className="scroll-mt-20 py-20 bg-muted/30">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Shipping Lines & Container Carrier Hub
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Major global container shipping lines serving Indian ports with schedule search, cargo tracking, and booking services
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search shipping lines..."
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
              <p className="text-lg text-muted-foreground">No shipping lines found matching your search.</p>
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
