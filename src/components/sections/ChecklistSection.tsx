'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, RotateCcw, PartyPopper } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { checklistItems } from '@/config/checklist'
import { cn } from '@/lib/utils'
import { useChecklist } from '@/hooks/use-checklist'

export function ChecklistSection() {
  const { checked, toggle, reset, completedCount, progress, allDone } =
    useChecklist(checklistItems.length)

  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Export Readiness Checklist
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Track your progress. Progress is saved automatically.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="mb-6 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">
                {completedCount} / {checklistItems.length} completed
              </span>
              <span className="text-muted-foreground">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2.5" />
          </div>

          {allDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 rounded-xl border bg-success/10 p-6 text-center"
            >
              <PartyPopper className="mx-auto mb-2 h-8 w-8 text-success" />
              <h3 className="text-lg font-semibold text-success">All Ready!</h3>
              <p className="text-sm text-muted-foreground">
                You are fully prepared to start exporting. Good luck with your
                export journey!
              </p>
            </motion.div>
          )}

          <div className="rounded-xl border bg-card premium-shadow">
            {checklistItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={cn(
                  'flex items-center gap-3 border-b p-4 last:border-b-0 transition-colors',
                  checked[i] && 'bg-muted/30',
                )}
              >
                <Checkbox
                  id={`check-${i}`}
                  checked={checked[i]}
                  onCheckedChange={() => toggle(i)}
                />
                <label
                  htmlFor={`check-${i}`}
                  className={cn(
                    'flex-1 cursor-pointer text-sm',
                    checked[i] && 'text-muted-foreground line-through',
                  )}
                >
                  {item}
                </label>
                {checked[i] && (
                  <CheckCircle2 className="h-4 w-4 text-success" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Button
              variant="outline"
              size="sm"
              onClick={reset}
              className="gap-2"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
