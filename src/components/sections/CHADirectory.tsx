import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink, MapPin, Anchor, Plane, Warehouse } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { chaResources } from '@/data/customsBrokers'

export function CHADirectory() {
  const [search, setSearch] = useState('')

  const filtered = chaResources.filter(c => {
    if (!search) return true
    const q = search.toLowerCase()
    return c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.portsServed?.some(p => p.toLowerCase().includes(q)) ||
      c.city?.toLowerCase().includes(q) ||
      c.tags.some(t => t.includes(q))
  })

  return (
    <section id="cha" className="relative py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            CHA & Customs Broker Directory
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Licensed Customs House Agents and customs brokers to handle your customs clearance and cargo documentation
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name, port, city..."
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
          {filtered.map((cha) => (
            <motion.div
              key={cha.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base">{cha.name}</CardTitle>
                    <div className="flex shrink-0 gap-1">
                      {cha.seaCargo && <Anchor className="h-3.5 w-3.5 text-blue-500" aria-label="Sea Cargo" />}
                      {cha.airCargo && <Plane className="h-3.5 w-3.5 text-cyan-500" aria-label="Air Cargo" />}
                      {cha.icdServices && <Warehouse className="h-3.5 w-3.5 text-amber-500" aria-label="ICD Services" />}
                    </div>
                  </div>
                  <CardDescription className="text-xs mt-1 line-clamp-2">{cha.description}</CardDescription>
                  {cha.city && cha.state && (
                    <p className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" /> {cha.city}, {cha.state}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="pb-3">
                  {cha.portsServed && cha.portsServed.length > 0 && (
                    <div className="mb-2">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Ports Served:</p>
                      <div className="flex flex-wrap gap-1">
                        {cha.portsServed.map((port) => (
                          <Badge key={port} variant="secondary" className="text-xs font-normal">{port}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {cha.cargoSpecialization && cha.cargoSpecialization.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {cha.cargoSpecialization.map((spec) => (
                        <Badge key={spec} variant="outline" className="text-xs font-normal">{spec}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col gap-2 pt-0">
                  <div className="flex w-full gap-2">
                    <Button size="sm" variant="default" asChild className="flex-1">
                      <a href={cha.officialUrl} target="_blank" rel="noopener noreferrer">
                        Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                    {cha.contactUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={cha.contactUrl} target="_blank" rel="noopener noreferrer">
                          Contact
                        </a>
                      </Button>
                    )}
                  </div>
                  <p className="w-full text-[10px] text-muted-foreground/40">
                    Last verified: {cha.lastVerified}
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No customs brokers found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
