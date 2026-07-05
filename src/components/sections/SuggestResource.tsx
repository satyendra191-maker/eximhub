'use client'

import { Lightbulb, Mail } from 'lucide-react'

export function SuggestResource() {
  return (
    <section id="suggest" className="scroll-mt-20 py-12 md:py-16 bg-muted/30 border-y border-border/50">
      <div className="exim-container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 mb-5">
            <Lightbulb className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Missing a Resource?
          </h2>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            Know a government portal, trade body, or service that should be here? 
            We verify and add new resources regularly.
          </p>
          <a
            href={`mailto:savitaglobalinterprises@gmail.com?subject=Resource%20Suggestion%20for%20EximHub`}
            className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all shadow-sm active:scale-[0.97]"
          >
            <Mail className="h-4 w-4" />
            Suggest a Resource
          </a>
        </div>
      </div>
    </section>
  )
}
