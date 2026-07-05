import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, ExternalLink, ChevronDown, ChevronUp,
  Star, Share2, Link,
  FileText, Ship, BarChart3, Sprout, Globe,
  Building2, MapPin, PieChart, TrendingUp,
  Package, Shield, SearchCheck,
} from 'lucide-react'
import type { ElementType } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { portals, portalCategories, categoryFilterStyles, portalGradients, stageBadgeColors, costBadgeColors } from '@/config/portals'
import { cn } from '@/lib/utils'
import type { PortalCategory, PortalColor } from '@/types'

const iconMap: Record<string, ElementType> = {
  FileText, Ship, Search, BarChart3, Sprout,
  Globe, Building2, MapPin, PieChart, TrendingUp,
  Package, Shield, SearchCheck,
}

export function PortalSection() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<PortalCategory>('All')
  const [expandedPortal, setExpandedPortal] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return portals.filter((p) => {
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      const matchesFilter = filter === 'All' || p.category === filter
      return matchesSearch && matchesFilter
    })
  }, [search, filter])

  return (
    <section id="portals" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Government Portals
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Search across {portals.length} portals or filter by category to find what you need
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search portals, HS codes, schemes, export stages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {portalCategories.map((cat) => {
              const styles = categoryFilterStyles[cat]
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    'rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors min-h-[36px]',
                    filter === cat ? styles.active : styles.idle,
                  )}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {search && (
          <p className="mb-4 text-sm text-muted-foreground" role="status">
            Showing {filtered.length} of {portals.length} results
            {filter !== 'All' && ` in "${filter}"`}
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
              <p className="text-lg text-muted-foreground">No portals found</p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search or filter criteria to find what
                you&apos;re looking for.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((portal, i) => {
                const Icon = iconMap[portal.icon] || Building2
                return (
                  <motion.div
                    key={portal.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card className="group h-full overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-border/50">
                      <div
                        className={cn(
                          'flex items-center gap-3 bg-gradient-to-r p-4 text-white',
                          portalGradients[portal.color as PortalColor],
                        )}
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg text-white">
                            {portal.name}
                          </CardTitle>
                          <p className="truncate text-sm text-white/80">
                            {portal.bestFor}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-white/30 bg-white/10 text-white shrink-0"
                        >
                          OFFICIAL
                        </Badge>
                      </div>

                      <CardContent className="p-4">
                        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                          {portal.description}
                        </p>

                        <div className="mb-3 flex flex-wrap gap-1.5">
                          <span
                            className={cn(
                              'inline-block rounded-full px-2 py-0.5 text-xs font-medium',
                              stageBadgeColors[portal.exportStage] ?? '',
                            )}
                          >
                            {portal.exportStage}
                          </span>
                          <span
                            className={cn(
                              'inline-block rounded-full px-2 py-0.5 text-xs font-medium',
                              costBadgeColors[portal.cost] ?? '',
                            )}
                          >
                            {portal.cost}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            GOVT.
                          </Badge>
                        </div>

                        <Collapsible
                          open={expandedPortal === portal.id}
                          onOpenChange={() =>
                            setExpandedPortal(
                              expandedPortal === portal.id ? null : portal.id,
                            )
                          }
                        >
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-between text-xs"
                            >
                              <span>View Details &amp; Contact</span>
                              {expandedPortal === portal.id ? (
                                <ChevronUp className="h-3 w-3" />
                              ) : (
                                <ChevronDown className="h-3 w-3" />
                              )}
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="space-y-2 pt-2 text-sm">
                            <div>
                              <span className="font-medium">Why Important: </span>
                              <span className="text-muted-foreground">
                                {portal.whyImportant}
                              </span>
                            </div>
                            <div>
                              <span className="font-medium">Best For: </span>
                              <span className="text-muted-foreground">
                                {portal.bestFor}
                              </span>
                            </div>
                            <div>
                              <span className="font-medium">Authority: </span>
                              <span className="text-muted-foreground">
                                {portal.authority}
                              </span>
                            </div>
                            {portal.phone && (
                              <div>
                                <span className="font-medium">Helpline: </span>
                                <span className="text-muted-foreground">
                                  {portal.phone}
                                </span>
                              </div>
                            )}
                            {portal.email && (
                              <div>
                                <span className="font-medium">Email: </span>
                                <span className="text-muted-foreground">
                                  {portal.email}
                                </span>
                              </div>
                            )}
                            {portal.keyFeatures.length > 0 && (
                              <div>
                                <span className="font-medium">
                                  Key Features:
                                </span>
                                <ul className="mt-1 list-disc pl-4 text-muted-foreground">
                                  {portal.keyFeatures.map((f, fi) => (
                                    <li key={fi}>{f}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </CollapsibleContent>
                        </Collapsible>

                        <div className="mt-3 flex items-center justify-between border-t pt-3">
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => window.open(portal.url, '_blank', 'noopener noreferrer')}
                          >
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Launch Website
                          </Button>
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              aria-label="Bookmark this portal"
                            >
                              <Star className="h-3.5 w-3.5" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              aria-label="Share this portal"
                            >
                              <Share2 className="h-3.5 w-3.5" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              aria-label="Copy link"
                            >
                              <Link className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>
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
