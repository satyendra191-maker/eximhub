import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { bankResources } from '@/data/banks'

const bankTypes = ['All', ...new Set(bankResources.map(b => b.subcategory!))]

export function ExportBanking() {
  const [search, setSearch] = useState('')
  const [activeType, setActiveType] = useState('All')

  const filtered = bankResources.filter(b => {
    const matchSearch = !search ||
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.description.toLowerCase().includes(search.toLowerCase()) ||
      b.tags.some(t => t.includes(search.toLowerCase()))
    const matchType = activeType === 'All' || b.subcategory === activeType
    return matchSearch && matchType
  })

  return (
    <section id="banking" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Banks for Exporters & Trade Finance
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Financial institutions offering export credit, trade finance, letter of credit, forex, and international banking services
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search banks and services..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {bankTypes.map((type) => (
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
          {filtered.map((bank) => (
            <motion.div
              key={bank.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-base">{bank.name}</CardTitle>
                      <CardDescription className="text-xs mt-1">{bank.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="shrink-0 text-xs whitespace-nowrap">
                      {bank.subcategory}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  {bank.services && bank.services.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {bank.services.map((service) => (
                        <Badge key={service} variant="outline" className="text-xs font-normal">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {bank.exportFinanceUrl && (
                    <Button variant="link" size="sm" className="mt-2 h-auto p-0 text-xs" asChild>
                      <a href={bank.exportFinanceUrl} target="_blank" rel="noopener noreferrer">
                        View export finance services <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col gap-2 pt-0">
                  <div className="flex w-full flex-wrap gap-2">
                    <Button size="sm" variant="default" asChild className="flex-1">
                      <a href={bank.officialUrl} target="_blank" rel="noopener noreferrer">
                        Bank Website <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                    {bank.tradePortalUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={bank.tradePortalUrl} target="_blank" rel="noopener noreferrer">
                          Trade Portal
                        </a>
                      </Button>
                    )}
                  </div>
                  <div className="flex w-full flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground/60">
                    {bank.letterOfCreditUrl && (
                      <a href={bank.letterOfCreditUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        LC Services
                      </a>
                    )}
                    {bank.foreignExchangeUrl && (
                      <a href={bank.foreignExchangeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        Forex
                      </a>
                    )}
                    {bank.letterOfCreditUrl && (
                      <a href={bank.bankGuaranteeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        Bank Guarantee
                      </a>
                    )}
                  </div>
                  {bank.lastVerified && (
                    <p className="w-full text-[10px] text-muted-foreground/40">
                      Last verified: {bank.lastVerified}
                    </p>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No banks found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
