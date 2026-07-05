'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { epcs } from '@/data/epcs'
import { epcToServiceResource } from '@/lib/serviceAdapters'
import { cn } from '@/lib/utils'

const sectorFilters = ['All', 'Export Promotion Council', 'Commodity Board', 'Export Development Authority']

const resources = epcs.map(epcToServiceResource)

export function EPCDirectory() {
  const [search, setSearch] = useState('')
  const [sectorFilter, setSectorFilter] = useState('All')

  const filtered = useMemo(() => {
    return resources.filter((s) => {
      const matchesSearch =
        !search ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.acronym?.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase())
      const matchesFilter = sectorFilter === 'All' || s.category === sectorFilter
      return matchesSearch && matchesFilter
    })
  }, [search, sectorFilter])

  return (
    <section id="epc" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Export Promotion Councils
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Search across {resources.length}+ Export Promotion Councils to find the right one for your sector.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search EPCs by name, sector, products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {sectorFilters.map((f) => (
              <button
                key={f}
                onClick={() => setSectorFilter(f)}
                className={cn(
                  'rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
                  sectorFilter === f
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:bg-muted',
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {(search || sectorFilter !== 'All') && (
          <p className="mb-4 text-sm text-muted-foreground">
            Showing {filtered.length} of {resources.length} results
            {sectorFilter !== 'All' && ` in "${sectorFilter}"`}
            {search && ` for "${search}"`}
          </p>
        )}

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center"
            >
              <p className="text-lg text-muted-foreground">No EPCs found</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your search or filter criteria to find what you&apos;re looking for.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
