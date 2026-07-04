'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { journeySteps } from '@/config/journey'

export function ExportJourney() {
  return (
    <section id="journey" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Your Export Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A step-by-step roadmap from product selection to successful export.
            Every step connected to the right portal.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-border md:block" />

          <div className="space-y-8">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col gap-4 md:flex-row md:items-start"
              >
                <div className="flex md:flex-col items-center gap-3 md:w-16 md:items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md md:mx-auto">
                    {step.step === 7 ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      step.step
                    )}
                  </div>
                  {i < journeySteps.length - 1 && (
                    <div className="h-px flex-1 bg-border md:hidden" />
                  )}
                  {i < journeySteps.length - 1 && (
                    <div className="hidden h-full w-px bg-border md:mx-auto md:block" />
                  )}
                </div>

                <div className="flex-1 rounded-xl border bg-card p-5 premium-shadow transition-all hover:premium-shadow-hover md:ml-4">
                  <h3 className="text-lg font-semibold">
                    {step.step}. {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                  {step.portals.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {step.portals.map((portal) => (
                        <span
                          key={portal}
                          className="inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                        >
                          {portal}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
