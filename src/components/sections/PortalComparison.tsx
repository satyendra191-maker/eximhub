'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { portals } from '@/config/portals'

export function PortalComparison() {
  return (
    <section id="resources" className="scroll-mt-20 bg-muted/30 py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Portal Comparison Matrix
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Compare all government portals side by side to find the right one for your needs
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border bg-card premium-shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[140px]">Portal</TableHead>
                <TableHead className="min-w-[120px]">Category</TableHead>
                <TableHead className="min-w-[120px]">Stage</TableHead>
                <TableHead className="min-w-[100px]">Cost</TableHead>
                <TableHead className="min-w-[100px]">Mobile</TableHead>
                <TableHead className="min-w-[200px]">Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {portals.map((portal, i) => (
                <motion.tr
                  key={portal.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <TableCell className="font-medium">{portal.name}</TableCell>
                  <TableCell>
                    <span className="text-xs text-muted-foreground">
                      {portal.category}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs">{portal.exportStage}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs">{portal.cost}</span>
                  </TableCell>
                  <TableCell>
                    {portal.mobileFriendly ? (
                      <Check className="h-4 w-4 text-success" />
                    ) : (
                      <X className="h-4 w-4 text-destructive" />
                    )}
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate text-xs text-muted-foreground">
                    {portal.bestFor}
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
