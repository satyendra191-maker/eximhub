'use client'

import { useState, useMemo } from 'react'
import {
  Search, ExternalLink, FileText, Ship, BarChart3,
  Sprout, Globe, Building2, ArrowRight,
} from 'lucide-react'
import type { ElementType } from 'react'
import { portals } from '@/config/portals'
import { Input } from '@/components/ui/input'

const iconMap: Record<string, ElementType> = {
  FileText, Ship, Search, BarChart3, Sprout,
  Globe, Building2,
}

const featured = portals.filter((p) =>
  ['DGFT', 'ICEGATE', 'APEDA', 'FIEO', 'EXIM Bank', 'ECGC'].includes(p.name),
)

export function ResourcePreview() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return featured
    const q = query.toLowerCase()
    return featured.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <section className="py-16 md:py-20 bg-muted/30 border-y border-border/50">
      <div className="exim-container">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Resources
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Start with the most-used government portals for Indian exports
          </p>
        </div>

        <div className="relative mx-auto mb-8 max-w-md">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search featured resources..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 pl-11 text-base rounded-xl"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((portal) => {
            const Icon = iconMap[portal.icon] || Building2
            return (
              <a
                key={portal.id}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border bg-card p-4 transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground truncate">
                      {portal.name}
                    </span>
                    <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-primary/60" />
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                    {portal.bestFor}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-muted-foreground">
            No resources match your search.
          </p>
        )}

        <div className="mt-8 text-center">
          <a
            href="#portals"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Browse all {portals.length} government portals
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
