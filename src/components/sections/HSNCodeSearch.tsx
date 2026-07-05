import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink, Hash, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const HS_CODE_PATTERN = /^\d{2,10}$/

const POPULAR_HS_SECTIONS = [
  { code: '01-05', label: 'Animal Products' },
  { code: '06-14', label: 'Vegetable Products' },
  { code: '15', label: 'Fats & Oils' },
  { code: '16-24', label: 'Food Products' },
  { code: '25-27', label: 'Mineral Products' },
  { code: '28-38', label: 'Chemicals' },
  { code: '39-40', label: 'Plastics & Rubber' },
  { code: '41-43', label: 'Leather & Hides' },
  { code: '44-46', label: 'Wood Products' },
  { code: '47-49', label: 'Paper & Pulp' },
  { code: '50-63', label: 'Textiles & Apparel' },
  { code: '64-67', label: 'Footwear & Headgear' },
  { code: '68-70', label: 'Stone, Glass & Ceramics' },
  { code: '71', label: 'Precious Stones & Metals' },
  { code: '72-83', label: 'Base Metals' },
  { code: '84-85', label: 'Machinery & Electronics' },
  { code: '86-89', label: 'Transport Equipment' },
  { code: '90-92', label: 'Optical & Medical' },
  { code: '94-96', label: 'Miscellaneous' },
  { code: '97', label: 'Art & Antiques' },
]

export function HSNCodeSearch() {
  const [query, setQuery] = useState('')

  const isCode = HS_CODE_PATTERN.test(query)
  const searchUrl = isCode
    ? `https://www.indiantradeportal.in/#q=${query}`
    : `https://www.indiantradeportal.in/#search=${encodeURIComponent(query)}`

  const handleSearch = () => {
    if (!query.trim()) return
    window.open(searchUrl, '_blank', 'noopener noreferrer')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
  }

  const handleSectionClick = (code: string) => {
    window.open(
      `https://www.indiantradeportal.in/#q=${code}`,
      '_blank',
      'noopener noreferrer',
    )
  }

  return (
    <section id="hs-code-search" className="scroll-mt-20 py-16 bg-muted/30">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <Badge variant="outline" className="mb-4 text-xs font-medium">
            <Hash className="mr-1 h-3 w-3" />
            HSN / HS Code
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Search HSN / HS Codes
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the correct HS classification for your product. Search by code or product name
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="premium-shadow">
            <CardContent className="p-6 sm:p-8">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Hash className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter HS code (e.g. 1006, 8471) or product name..."
                    className="pl-9 h-12 text-base"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  disabled={!query.trim()}
                  className="h-12 px-6"
                  size="lg"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>

              {isCode && (
                <p className="mt-3 text-xs text-muted-foreground">
                  Searching by {query.length}-digit HS code
                </p>
              )}

              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <ExternalLink className="h-3 w-3" />
                <span>Search on Indian Trade Portal or NIRYAT</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t pt-4">
                <span className="text-xs font-medium text-muted-foreground mr-1 self-center">
                  Quick search:
                </span>
                {['0402', '0901', '1006', '2710', '3004', '8471', '8703', '6204'].map(
                  (code) => (
                    <button
                      key={code}
                      onClick={() => {
                        setQuery(code)
                      }}
                      className="rounded-md border border-border bg-muted/50 px-2 py-1 text-xs font-mono hover:bg-muted transition-colors"
                    >
                      {code}
                    </button>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="text-sm font-semibold text-muted-foreground mb-4 text-center uppercase tracking-wider">
            Browse by HS Section
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {POPULAR_HS_SECTIONS.map((section, i) => (
              <motion.button
                key={section.code}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                onClick={() => handleSectionClick(section.code)}
                className="group flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2.5 text-sm hover:bg-muted hover:border-primary/30 transition-all"
              >
                <span className="font-mono text-xs text-primary font-medium">
                  HS {section.code}
                </span>
                <span className="text-xs text-muted-foreground truncate ml-2">
                  {section.label}
                </span>
                <ArrowRight className="h-3 w-3 text-muted-foreground shrink-0 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Need help finding the right HS code?{' '}
            <a
              href="#trade-intelligence"
              className="text-primary font-medium hover:underline"
            >
              Visit Trade Intelligence section
            </a>{' '}
            for more resources.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
