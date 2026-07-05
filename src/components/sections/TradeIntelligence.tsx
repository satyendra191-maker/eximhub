'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { tradeIntelligenceResources } from '@/data/tradeIntelligence'

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
] as const

const ACCESS_TYPE_STYLES: Record<string, string> = {
  public: 'border-success/30 bg-success/10 text-success',
  free: 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400',
  freemium: 'border-warning/30 bg-warning/10 text-warning',
  restricted: 'border-destructive/30 bg-destructive/10 text-destructive',
}

export function TradeIntelligence() {
  const [search, setSearch] = useState('')
  const [subcategory, setSubcategory] = useState<string>('All')

  const filtered = useMemo(() => {
    return tradeIntelligenceResources.filter((r) => {
      const matchesSearch =
        !search ||
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.acronym?.toLowerCase().includes(search.toLowerCase())

      const matchesSubcategory =
        subcategory === 'All' || r.subcategory === subcategory

      return matchesSearch && matchesSubcategory
    })
  }, [search, subcategory])

  return (
    <section id="trade-intelligence" className="scroll-mt-20 py-20">
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
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((resource, i) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.03 }}
              >
                <Card className="h-full premium-shadow transition-shadow hover:premium-shadow-hover">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-base">{resource.name}</CardTitle>
                        {resource.acronym && (
                          <span className="text-xs text-muted-foreground">{resource.acronym}</span>
                        )}
                      </div>
                      {resource.subcategory && (
                        <Badge variant="outline" className="shrink-0">
                          {resource.subcategory}
                        </Badge>
                      )}
                    </div>

                    <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                      {resource.description}
                    </p>

                    {resource.dataCoverage && (
                      <div className="mb-3 text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">Data Coverage: </span>
                        {resource.dataCoverage}
                      </div>
                    )}

                    <div className="mb-4 flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className={cn(ACCESS_TYPE_STYLES[resource.accessType] || '')}
                      >
                        {resource.accessType}
                      </Badge>
                      {resource.updateFrequency && (
                        <Badge variant="outline">{resource.updateFrequency}</Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {resource.directLink && resource.directLink !== '#' && (
                        <a
                          href={resource.directLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90"
                        >
                          Direct Link
                        </a>
                      )}
                      {resource.officialUrl && resource.officialUrl !== '#' && (
                        <a
                          href={resource.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-medium hover:bg-muted"
                        >
                          Official Website
                        </a>
                      )}
                    </div>

                    <div className="mt-4 text-xs text-muted-foreground">
                      Last Verified: {resource.lastVerified}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center text-muted-foreground">
            <p>No trade intelligence resources found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
