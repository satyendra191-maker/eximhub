import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { complianceResources } from '@/data/complianceResources'

const complianceTypes = ['All', ...new Set(complianceResources.map(c => c.subcategory!))]

export function ComplianceSection() {
  const [search, setSearch] = useState('')
  const [activeType, setActiveType] = useState('All')

  const filtered = complianceResources.filter(c => {
    const matchSearch = !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.tags.some(t => t.includes(search.toLowerCase()))
    const matchType = activeType === 'All' || c.subcategory === activeType
    return matchSearch && matchType
  })

  return (
    <section id="compliance" className="relative py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Standards, Certification & Compliance
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality standards bodies, certification agencies, inspection services, and regulatory compliance resources for exports
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
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
                className="whitespace-nowrap"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((c) => (
            <motion.div
              key={c.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-base">{c.name}</CardTitle>
                      {c.acronym && <CardDescription className="text-xs">{c.acronym}</CardDescription>}
                    </div>
                    <Badge variant="secondary" className="shrink-0 text-xs">{c.subcategory}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-sm text-muted-foreground line-clamp-3">{c.description}</p>
                  {c.applicableProducts && c.applicableProducts.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Applicable for:</p>
                      <div className="flex flex-wrap gap-1">
                        {c.applicableProducts.map((p) => (
                          <Badge key={p} variant="outline" className="text-xs font-normal">{p}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col gap-2 pt-0">
                  <div className="flex w-full gap-2">
                    <Button size="sm" variant="default" asChild className="flex-1">
                      <a href={c.officialUrl} target="_blank" rel="noopener noreferrer">
                        Official Website <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                    {c.contactUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={c.contactUrl} target="_blank" rel="noopener noreferrer">
                          Contact
                        </a>
                      </Button>
                    )}
                  </div>
                  {c.officialPhone && (
                    <p className="w-full text-xs text-muted-foreground">
                      <span className="font-medium">Phone:</span> {c.officialPhone}
                    </p>
                  )}
                  <p className="w-full text-[10px] text-muted-foreground/40">
                    Last verified: {c.lastVerified}
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No compliance resources found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
