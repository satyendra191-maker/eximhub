'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Printer, ChevronDown, ChevronUp, FileText, Package, Ship, Plane, Shield, FlaskConical, AlertTriangle, ScrollText, Apple, SearchCheck, Moon, ClipboardCheck, TriangleAlert, FileSignature, FileBadge, FileSpreadsheet, CheckSquare, Receipt, FileStack, DollarSign, FileCheck, ClipboardList, ListChecks } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { documentCategories } from '@/config/documents'

import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="h-4 w-4" />,
  Package: <Package className="h-4 w-4" />,
  Ship: <Ship className="h-4 w-4" />,
  Plane: <Plane className="h-4 w-4" />,
  Shield: <Shield className="h-4 w-4" />,
  FlaskConical: <FlaskConical className="h-4 w-4" />,
  AlertTriangle: <AlertTriangle className="h-4 w-4" />,
  ScrollText: <ScrollText className="h-4 w-4" />,
  Apple: <Apple className="h-4 w-4" />,
  SearchCheck: <SearchCheck className="h-4 w-4" />,
  Moon: <Moon className="h-4 w-4" />,
  ClipboardCheck: <ClipboardCheck className="h-4 w-4" />,
  TriangleAlert: <TriangleAlert className="h-4 w-4" />,
  FileSignature: <FileSignature className="h-4 w-4" />,
  FileBadge: <FileBadge className="h-4 w-4" />,
  FileSpreadsheet: <FileSpreadsheet className="h-4 w-4" />,
  CheckSquare: <CheckSquare className="h-4 w-4" />,
  Receipt: <Receipt className="h-4 w-4" />,
  FileStack: <FileStack className="h-4 w-4" />,
  DollarSign: <DollarSign className="h-4 w-4" />,
  FileCheck: <FileCheck className="h-4 w-4" />,
  ClipboardList: <ClipboardList className="h-4 w-4" />,
  ListChecks: <ListChecks className="h-4 w-4" />,
}

export function DocumentSection() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="downloads" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Export Document Templates
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Download ready-to-use HTML templates for all your export documentation needs
          </p>
        </div>

        <div className="space-y-8">
          {documentCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <Card className="premium-shadow overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((doc) => (
                      <Collapsible
                        key={doc.filename}
                        open={expanded === doc.filename}
                        onOpenChange={() =>
                          setExpanded(
                            expanded === doc.filename ? null : doc.filename,
                          )
                        }
                      >
                        <div
                          className={cn(
                            'rounded-lg border p-3 transition-all hover:premium-shadow-hover card-lift',
                            expanded === doc.filename && 'premium-shadow-hover ring-1 ring-primary/20',
                          )}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-start gap-2 min-w-0 flex-1">
                              <span className="mt-0.5 shrink-0 text-muted-foreground">
                                {iconMap[doc.icon] ?? <FileText className="h-4 w-4" />}
                              </span>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium truncate">
                                  {doc.name}
                                </p>
                                <p className="text-xs text-muted-foreground line-clamp-2">
                                  {doc.desc}
                                </p>
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className={cn('shrink-0 text-[10px] px-1.5 py-0', doc.tagColor)}
                            >
                              {doc.tag}
                            </Badge>
                          </div>

                          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <CollapsibleTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-9 w-full sm:w-auto px-3 text-xs justify-center"
                              >
                                {expanded === doc.filename ? (
                                  <ChevronUp className="h-3.5 w-3.5 mr-1.5" />
                                ) : (
                                  <ChevronDown className="h-3.5 w-3.5 mr-1.5" />
                                )}
                                Details
                              </Button>
                            </CollapsibleTrigger>
                            <div className="flex gap-2 w-full sm:w-auto">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-9 flex-1 sm:flex-none gap-1.5 text-xs"
                                onClick={async () => {
                                  const mod = await import('@/utils/document-generator')
                                  const fn = mod.documentPrinters[doc.filename]
                                  if (fn) fn()
                                }}
                              >
                                <Printer className="h-3.5 w-3.5" />
                                <span className="hidden sm:inline">Print</span>
                              </Button>
                              <Button
                                size="sm"
                                className="h-9 flex-1 sm:flex-none gap-1.5 text-xs"
                                onClick={async () => {
                                  const mod = await import('@/utils/document-generator')
                                  const gen = mod.documentGenerators[doc.filename]
                                  if (gen) gen()
                                }}
                              >
                                <Download className="h-3.5 w-3.5" />
                                <span className="hidden sm:inline">Save HTML</span>
                              </Button>
                            </div>
                          </div>

                          <AnimatePresence>
                            {expanded === doc.filename && (
                              <CollapsibleContent forceMount>
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-2 space-y-1.5 border-t pt-2 text-xs text-muted-foreground">
                                    <p>
                                      <span className="font-medium text-foreground">Countries: </span>
                                      {doc.countries}
                                    </p>
                                    <p>
                                      <span className="font-medium text-foreground">Format: </span>
                                      HTML - Open in browser - Print / Save as PDF
                                    </p>
                                  </div>
                                </motion.div>
                              </CollapsibleContent>
                            )}
                          </AnimatePresence>
                        </div>
                      </Collapsible>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
