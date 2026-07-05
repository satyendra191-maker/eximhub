'use client'

import { ScrollText, BadgeCheck, Users } from 'lucide-react'

const reasons = [
  {
    icon: ScrollText,
    title: 'Curated, Not Scraped',
    description:
      'Every portal and resource is hand-verified against official government sources. No broken links, no outdated information.',
  },
  {
    icon: BadgeCheck,
    title: 'Always Current',
    description:
      'Resources are reviewed and updated monthly. Last verified July 2026 — you can trust what you find here is live.',
  },
  {
    icon: Users,
    title: 'Built for Indian Exporters',
    description:
      'From DGFT and ICEGATE to EPCs and shipping lines — everything an Indian exporter needs, organized in one place.',
  },
]

export function WhyEximHub() {
  return (
    <section className="py-16 md:py-20">
      <div className="exim-container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why EximHub?
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            A directory you can actually rely on — no ads, no spam, just verified resources.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
