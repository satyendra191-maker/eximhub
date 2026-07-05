import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink, Package, MapPin } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { packagingResources } from '@/data/packagingProviders'

export function PackagingServices() {
  const [search, setSearch] = useState('')

  const filtered = packagingResources.filter(p => {
    if (!search) return true
    const q = search.toLowerCase()
    return p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.serviceCategories.some(s => s.toLowerCase().includes(q)) ||
      p.tags.some(t => t.includes(q))
  })

  return (
    <section id="packaging" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Export Packaging & Industrial Packaging Services
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized packaging providers for export-grade packaging, crating, palletization, and protective packaging solutions
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search packaging providers..."
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
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-teal-100 p-2 dark:bg-teal-900/30">
                      <Package className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <CardTitle className="text-sm leading-tight">{p.name}</CardTitle>
                      {p.location && (
                        <p className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                          <MapPin className="h-3 w-3" /> {p.location}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {p.serviceCategories.map((cat) => (
                      <Badge key={cat} variant="secondary" className="text-xs font-normal">{cat}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 pt-0">
                  <div className="flex w-full gap-2">
                    <Button size="sm" variant="default" asChild className="flex-1">
                      <a href={p.officialUrl} target="_blank" rel="noopener noreferrer">
                        Website <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                    {p.enquiryUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={p.enquiryUrl} target="_blank" rel="noopener noreferrer">
                          Enquire
                        </a>
                      </Button>
                    )}
                  </div>
                  {p.serviceArea && (
                    <p className="w-full text-xs text-muted-foreground/60">
                      Service area: {p.serviceArea}
                    </p>
                  )}
                  <p className="w-full text-[10px] text-muted-foreground/40">
                    Last verified: {p.lastVerified}
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No packaging providers found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
