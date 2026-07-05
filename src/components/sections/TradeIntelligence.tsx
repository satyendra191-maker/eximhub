'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { cn } from '@/lib/utils'
import { tradeIntelligenceResources } from '@/data/tradeIntelligence'
import { tradeIntelligenceToServiceResource } from '@/lib/serviceAdapters'

const SUBCATEGORIES = [
  'All',
  'Export Statistics',
  'Import Statistics',
  'Commodity Data',
  'Country Data',
  'HS Code',
  'Tariffs',
  'Trade Agreements',
  'Rules of Origin',
  'Market Access',
  'Global Trade Data',
  'Market Opportunity',
]

const resources = tradeIntelligenceResources.map(tradeIntelligenceToServiceResource)

export function TradeIntelligence() {
  const [search, setSearch] = useState('')
  const [subcategory, setSubcategory] = useState('All')

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchesSearch =
        !search ||
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.acronym?.toLowerCase().includes(search.toLowerCase())
      const matchesSubcategory =
        subcategory === 'All' || r.category === subcategory
      return matchesSearch && matchesSubcategory
    })
  }, [search, subcategory])

  return (
    <section id="trade-intelligence" className="scroll-mt-20 py-20 bg-muted/30">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trade Data & Market Intelligence
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Official resources for export statistics, tariffs, HS codes, and market research
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Input
            placeholder="Search trade intelligence resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md"
          />
          <div className="flex flex-wrap gap-2">
            {SUBCATEGORIES.map((cat) => (
              <Badge
                key={cat}
                variant={subcategory === cat ? 'default' : 'outline'}
                className={cn('cursor-pointer', subcategory === cat && 'shadow-sm')}
                onClick={() => setSubcategory(cat)}
              >
                {cat}
              </Badge>
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
              <p className="text-lg text-muted-foreground">No trade intelligence resources found matching your criteria.</p>
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
                  transition={{ delay: i * 0.03 }}
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
