import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { complianceResources } from '@/data/complianceResources'
import { complianceToServiceResource } from '@/lib/serviceAdapters'

const complianceTypes = ['All', ...new Set(complianceResources.map((c) => c.subcategory!))]
const resources = complianceResources.map(complianceToServiceResource)

export function ComplianceSection() {
  const [search, setSearch] = useState('')
  const [activeType, setActiveType] = useState('All')

  const filtered = useMemo(() => {
    return resources.filter((s) => {
      const matchSearch =
        !search ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase()) ||
        s.services?.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      const matchType = activeType === 'All' || s.category === activeType
      return matchSearch && matchType
    })
  }, [search, activeType])

  return (
    <section id="compliance" className="scroll-mt-20 py-20 bg-muted/30">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Standards, Certification & Compliance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality standards bodies, certification agencies, inspection services, and regulatory compliance resources for exports
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search compliance resources..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {complianceTypes.map((type) => (
              <Button
                key={type}
                variant={activeType === type ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveType(type)}
              >
                {type}
              </Button>
            ))}
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
              <p className="text-lg text-muted-foreground">No compliance resources found matching your search.</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
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
