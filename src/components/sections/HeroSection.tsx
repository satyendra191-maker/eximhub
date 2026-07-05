'use client'

import { ArrowRight, Library, BadgeCheck, Building2 } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,82,186,0.08)_0%,rgba(255,255,255,0)_60%)]" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="exim-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary font-medium mb-6">
            <Library className="h-4 w-4" />
            <span>India Export Ecosystem Gateway</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.1]">
            Everything You Need to Export{' '}
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-orange-500 gradient-text">
              from India
            </span>
          </h1>

          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated directory of verified government portals, export promotion councils, 
            trade data, banking, shipping, and compliance resources — organized for Indian exporters.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#tools"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 active:scale-[0.97]"
            >
              Explore Export Resources
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-border bg-card text-foreground font-medium text-sm hover:bg-muted transition-all active:scale-[0.97]"
            >
              Follow Export Journey
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-primary/60" />
              14 government portals
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-primary/60" />
              24 export promotion councils
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-primary/60" />
              Updated July 2026
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="h-4 w-4 text-primary/60" />
              Free access
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
