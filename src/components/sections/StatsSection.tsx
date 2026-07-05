'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '14', label: 'Government Portals' },
  { value: '16', label: 'Export Promotion Councils' },
  { value: '24', label: 'Document Templates' },
  { value: '7', label: 'Journey Steps' },
]

export function StatsSection() {
  return (
    <section className="border-y bg-muted/30 py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-extrabold text-primary sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
