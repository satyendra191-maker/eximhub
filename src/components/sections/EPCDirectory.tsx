'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'
import { epcs } from '@/data/epcs'

const sectorFilters = ['All', 'Export Promotion Council', 'Commodity Board', 'Export Development Authority']

export function EPCDirectory() {
  const [search, setSearch] = useState('')
  const [sectorFilter, setSectorFilter] = useState('All')
  const [expandedEpc, setExpandedEpc] = useState<string | null>(null)

  const filteredEpcs = useMemo(() => {
    return epcs.filter((epc) => {
      const matchesSearch =
        !search ||
        epc.name.toLowerCase().includes(search.toLowerCase()) ||
        (epc.acronym?.toLowerCase().includes(search.toLowerCase()) ?? false) ||
        (epc.sector?.toLowerCase().includes(search.toLowerCase()) ?? false) ||
        epc.productsCovered.some((p) => p.toLowerCase().includes(search.toLowerCase())) ||
        epc.description.toLowerCase().includes(search.toLowerCase())
      const matchesFilter = sectorFilter === 'All' || epc.subcategory === sectorFilter
      return matchesSearch && matchesFilter
    })
  }, [search, sectorFilter])

  const getVerificationBadge = (status: string) => {
    const styles = {
      verified: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      unverified: 'bg-gray-100 text-gray-800',
    }
    return styles[status as keyof typeof styles] || styles.unverified
  }

  return (
    <section id="epc-directory" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            EPC Super Directory
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Search across all Export Promotion Councils, Commodity Boards and Export Development Authorities
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
            {sectorFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSectorFilter(filter)}
                className={cn(
                  'rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
                  sectorFilter === filter
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {(search || sectorFilter !== 'All') && (
          <p className="mb-4 text-sm text-muted-foreground">
            Showing {filteredEpcs.length} of {epcs.length} results
            {sectorFilter !== 'All' && ` in "${sectorFilter}"`}
            {search && ` for "${search}"`}
          </p>
        )}

        <AnimatePresence mode="wait">
          {filteredEpcs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center"
            >
              <p className="text-lg text-muted-foreground">No EPCs found</p>
              <p className="text-sm text-muted-foreground">
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
              {filteredEpcs.map((epc, i) => (
                <motion.div
                  key={epc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="card-lift premium-shadow group h-full overflow-hidden transition-all hover:premium-shadow-hover hover:-translate-y-1">
                    <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg text-white">
                          {epc.name}
                        </CardTitle>
                        <p className="truncate text-sm text-white/80">
                          ({epc.acronym})
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-white/30 bg-white/10 text-white"
                      >
                        {epc.sector}
                      </Badge>
                    </div>

                    <CardContent className="p-4">
                      <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                        {epc.description}
                      </p>

                      <div className="mb-3 flex flex-wrap gap-1.5">
                        {epc.productsCovered.slice(0, 3).map((product, idx) => (
                          <span
                            key={idx}
                            className="inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700"
                          >
                            {product}
                          </span>
                        ))}
                        {epc.productsCovered.length > 3 && (
                          <span className="inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                            +{epc.productsCovered.length - 3} more
                          </span>
                        )}
                      </div>

                      <Collapsible
                        open={expandedEpc === epc.id}
                        onOpenChange={() =>
                          setExpandedEpc(expandedEpc === epc.id ? null : epc.id)
                        }
                      >
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-between text-xs"
                          >
                            <span>View Details</span>
                            {expandedEpc === epc.id ? (
                              <ChevronUp className="h-3 w-3" />
                            ) : (
                              <ChevronDown className="h-3 w-3" />
                            )}
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="space-y-2 pt-2 text-sm">
                          <div>
                            <span className="font-medium">Head Office: </span>
                            <span className="text-muted-foreground">
                              {epc.headOffice}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium">Official Website: </span>
                            {epc.officialUrl && epc.officialUrl !== '#' ? (
                              <a
                                href={epc.officialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                {epc.officialUrl}
                              </a>
                            ) : (
                              <span className="text-muted-foreground">Not available</span>
                            )}
                          </div>
                          {epc.rcmcUrl && epc.rcmcUrl !== '#' && (
                            <div>
                              <span className="font-medium">RCMC URL: </span>
                              <a
                                href={epc.rcmcUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                {epc.rcmcUrl}
                              </a>
                            </div>
                          )}
                          {epc.contactUrl && epc.contactUrl !== '#' && (
                            <div>
                              <span className="font-medium">Contact Page: </span>
                              <a
                                href={epc.contactUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                {epc.contactUrl}
                              </a>
                            </div>
                          )}
                          {epc.generalEmail && (
                            <div>
                              <span className="font-medium">General Email: </span>
                              <span className="text-muted-foreground">
                                {epc.generalEmail}
                              </span>
                            </div>
                          )}
                          {epc.officialPhone && (
                            <div>
                              <span className="font-medium">Official Phone: </span>
                              <span className="text-muted-foreground">
                                {epc.officialPhone}
                              </span>
                            </div>
                          )}
                          <div>
                            <span className="font-medium">Last Verified: </span>
                            <span className="text-muted-foreground">
                              {epc.lastVerified}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium">Verification Status: </span>
                            <span
                              className={cn(
                                'ml-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium',
                                getVerificationBadge(epc.verificationStatus),
                              )}
                            >
                              {epc.verificationStatus}
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>

                      <div className="mt-3 flex items-center justify-end border-t pt-3">
                        {epc.officialUrl && epc.officialUrl !== '#' ? (
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => window.open(epc.officialUrl, '_blank')}
                          >
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Visit Official Site
                          </Button>
                        ) : (
                          <span className="text-sm text-muted-foreground">
                            Official site not yet listed
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}