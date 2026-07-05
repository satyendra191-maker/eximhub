import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { commodityBoards } from '@/data/commodityBoards'

const sectors = ['All', ...new Set(commodityBoards.map(c => c.sector!))]

export function CommodityBoardsSection() {
  const [search, setSearch] = useState('')
  const [activeSector, setActiveSector] = useState('All')

  const filtered = commodityBoards.filter(c => {
    const matchSearch = !search || 
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.acronym?.toLowerCase().includes(search.toLowerCase()) ||
      c.sector?.toLowerCase().includes(search.toLowerCase()) ||
      c.productsCovered?.some(p => p.toLowerCase().includes(search.toLowerCase()))
    const matchSector = activeSector === 'All' || c.sector === activeSector
    return matchSearch && matchSector
  })

  return (
    <section id="commodity-boards" className="relative py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Commodity Boards & Export Authorities
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Official commodity boards providing sector-specific export promotion, quality certification, and market development support
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search commodity boards..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <Button
                key={sector}
                variant={activeSector === sector ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveSector(sector)}
                className="whitespace-nowrap"
              >
                {sector}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filtered.map((board) => (
            <motion.div
              key={board.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group"
            >
              <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-base">{board.acronym || board.name}</CardTitle>
                      <CardDescription className="text-xs mt-1 line-clamp-2">{board.name}</CardDescription>
                    </div>
                    {board.sector && (
                      <Badge variant="outline" className="shrink-0 text-xs">{board.sector}</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-sm text-muted-foreground line-clamp-3">{board.description}</p>
                  {board.productsCovered && board.productsCovered.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {board.productsCovered.slice(0, 4).map((p) => (
                        <Badge key={p} variant="secondary" className="text-xs font-normal">{p}</Badge>
                      ))}
                      {board.productsCovered.length > 4 && (
                        <Badge variant="secondary" className="text-xs font-normal">+{board.productsCovered.length - 4}</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col gap-2 pt-0">
                  <div className="flex w-full gap-2">
                    <Button size="sm" variant="default" asChild className="flex-1">
                      <a href={board.officialUrl} target="_blank" rel="noopener noreferrer">
                        Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                    {board.contactUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={board.contactUrl} target="_blank" rel="noopener noreferrer">
                          Contact
                        </a>
                      </Button>
                    )}
                  </div>
                  {board.officialPhone && (
                    <p className="w-full text-xs text-muted-foreground">
                      <span className="font-medium">Phone:</span> {board.officialPhone}
                    </p>
                  )}
                  {board.lastVerified && (
                    <p className="w-full text-[10px] text-muted-foreground/60">
                      Last verified: {board.lastVerified}
                    </p>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No commodity boards found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
