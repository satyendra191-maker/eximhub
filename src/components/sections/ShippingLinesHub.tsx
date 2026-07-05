import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink, Ship } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { shippingLineResources } from '@/data/shippingLines'

export function ShippingLinesHub() {
  const [search, setSearch] = useState('')

  const filtered = shippingLineResources.filter(s => {
    if (!search) return true
    const q = search.toLowerCase()
    return s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.tags.some(t => t.includes(q))
  })

  return (
    <section id="shipping" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Shipping Lines & Container Carrier Hub
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Major global container shipping lines serving Indian ports with schedule search, cargo tracking, and booking services
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search shipping lines..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filtered.map((line) => (
            <motion.div
              key={line.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/30">
                      <Ship className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{line.name}</CardTitle>
                      {line.acronym && (
                        <CardDescription className="text-xs">{line.acronym}</CardDescription>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">{line.description}</p>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 pt-0">
                  <div className="flex w-full gap-2">
                    <Button size="sm" variant="default" asChild className="flex-1">
                      <a href={line.officialUrl} target="_blank" rel="noopener noreferrer">
                        Website <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                    {line.trackingUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={line.trackingUrl} target="_blank" rel="noopener noreferrer">
                          Track
                        </a>
                      </Button>
                    )}
                    {line.bookingUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={line.bookingUrl} target="_blank" rel="noopener noreferrer">
                          Book
                        </a>
                      </Button>
                    )}
                  </div>
                  <div className="flex w-full flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground/60">
                    {line.scheduleUrl && (
                      <a href={line.scheduleUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        Schedules
                      </a>
                    )}
                    {line.localOfficePage && (
                      <a href={line.localOfficePage} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        India Office
                      </a>
                    )}
                    {line.contactUrl && (
                      <a href={line.contactUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        Contact
                      </a>
                    )}
                  </div>
                  <p className="w-full text-[10px] text-muted-foreground/40">
                    Last verified: {line.lastVerified}
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No shipping lines found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
