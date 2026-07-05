import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink, Truck } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { transportResources } from '@/data/transporters'

const serviceBadges: { key: string; label: string; color: string }[] = [
  { key: 'roadFreight', label: 'Road Freight', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  { key: 'ftl', label: 'FTL', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' },
  { key: 'ptl', label: 'PTL', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
  { key: 'containerTransport', label: 'Container', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400' },
  { key: 'portConnectivity', label: 'Port Access', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400' },
  { key: 'warehousing', label: 'Warehousing', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
  { key: 'multimodalTransport', label: 'Multimodal', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  { key: 'projectCargo', label: 'Project Cargo', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400' },
]

export function TransportersDirectory() {
  const [search, setSearch] = useState('')

  const filtered = transportResources.filter(t => {
    if (!search) return true
    const q = search.toLowerCase()
    return t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.services.some(s => s.toLowerCase().includes(q)) ||
      t.tags.some(tag => tag.includes(q))
  })

  return (
    <section id="transporters" className="relative py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transport & Logistics Directory
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Established transport and logistics companies for road freight, container movement, warehousing, and supply chain solutions
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search transport providers..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-amber-100 p-2 dark:bg-amber-900/30">
                      <Truck className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{t.name}</CardTitle>
                      <CardDescription className="text-xs mt-0.5">{t.acronym}</CardDescription>
                    </div>
                  </div>
                  <CardDescription className="text-sm mt-2">{t.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex flex-wrap gap-1.5">
                    {serviceBadges.filter(b => (t as any)[b.key]).map((b) => (
                      <Badge key={b.key} variant="secondary" className={cn('text-xs font-normal', b.color)}>
                        {b.label}
                      </Badge>
                    ))}
                  </div>
                  {t.services && t.services.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {t.services.map((s) => (
                        <Badge key={s} variant="outline" className="text-xs font-normal">{s}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col gap-2 pt-0">
                  <div className="flex w-full gap-2">
                    <Button size="sm" variant="default" asChild className="flex-1">
                      <a href={t.officialUrl} target="_blank" rel="noopener noreferrer">
                        Website <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                    {t.trackingUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={t.trackingUrl} target="_blank" rel="noopener noreferrer">
                          Track
                        </a>
                      </Button>
                    )}
                    {t.enquiryUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={t.enquiryUrl} target="_blank" rel="noopener noreferrer">
                          Enquire
                        </a>
                      </Button>
                    )}
                  </div>
                  <p className="w-full text-[10px] text-muted-foreground/40">
                    Last verified: {t.lastVerified}
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No transport providers found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
