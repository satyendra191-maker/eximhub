'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { odopResources } from '@/data/odopResources'

type PotentialLevel = 'High' | 'Medium' | 'Low'

function getPotentialLevel(potential: string): PotentialLevel {
  const lower = potential.toLowerCase()
  if (lower.startsWith('very high') || lower.startsWith('high')) return 'High'
  if (lower.startsWith('medium')) return 'Medium'
  if (lower.startsWith('low')) return 'Low'
  if (lower.includes('high')) return 'High'
  if (lower.includes('medium')) return 'Medium'
  if (lower.includes('low')) return 'Low'
  return 'Medium'
}

const levelBadgeVariant: Record<PotentialLevel, 'success' | 'warning' | 'secondary'> = {
  High: 'success',
  Medium: 'warning',
  Low: 'secondary',
}

export function ODOPGateway() {
  const [search, setSearch] = useState('')
  const [activeState, setActiveState] = useState<string | null>(null)

  const uniqueStates = useMemo<string[]>(() => {
    const unique = Array.from(
      new Set(odopResources.map((r) => r.state).filter((s): s is string => s !== undefined)),
    )
    return unique.sort()
  }, [])

  const filtered = useMemo(() => {
    return odopResources.filter((r) => {
      const matchesSearch =
        !search ||
        r.district.toLowerCase().includes(search.toLowerCase()) ||
        r.product.toLowerCase().includes(search.toLowerCase()) ||
        r.name.toLowerCase().includes(search.toLowerCase())
      const matchesState = !activeState || r.state === activeState
      return matchesSearch && matchesState
    })
  }, [search, activeState])

  return (
    <section id="odop-gateway" className="scroll-mt-20 py-20 bg-muted/30">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ODOP Export Gateway
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover district-level products with export potential
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search districts, products, or states..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveState(null)}
              className={cn(
                'rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
                !activeState
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background hover:bg-muted border-input',
              )}
            >
              All States
            </button>
            {uniqueStates.map((state) => (
              <button
                key={state}
                onClick={() => setActiveState(state === activeState ? null : state)}
                className={cn(
                  'rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
                  activeState === state
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background hover:bg-muted border-input',
                )}
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center"
            >
              <p className="text-lg text-muted-foreground">No ODOP products found</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((resource, i) => {
                const level = getPotentialLevel(resource.exportPotential)
                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card className="h-full overflow-hidden transition-colors hover:shadow-md">
                      <CardContent className="flex h-full flex-col p-5">
                        <div className="mb-3 flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-lg font-semibold leading-tight">
                              {resource.district}
                            </h3>
                            <p className="text-sm text-primary font-medium">
                              {resource.product}
                            </p>
                          </div>
                          <Badge variant={levelBadgeVariant[level]}>
                            {level}
                          </Badge>
                        </div>

                        <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
                          {resource.description}
                        </p>

                        <div className="mb-3 flex flex-wrap gap-2">
                          {resource.relevantEPC && (
                            <Badge variant="outline" className="text-xs">
                              {resource.relevantEPC}
                            </Badge>
                          )}
                        </div>

                        <div className="mt-auto flex items-center justify-between border-t pt-3 text-xs text-muted-foreground">
                          <span>
                            {resource.officialUrl === '#'
                              ? 'Official page not yet listed'
                              : null}
                          </span>
                          {resource.tradeDataUrl && (
                            <a
                              href={resource.tradeDataUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              View Trade Data
                            </a>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Last Verified: {new Date(resource.lastVerified).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
