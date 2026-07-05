import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function ExportJourney() {
  const journeySteps = [
    { step: '01', title: 'Research Product', description: 'Identify a product with export potential and market demand.', portals: ['ODOP', 'TradeStat'] },
    { step: '02', title: 'Study Market', description: 'Research target markets, tariffs, and competitive landscape.', portals: ['Indian Trade Portal', 'TradeStat'] },
    { step: '03', title: 'Obtain IEC', description: 'Apply for Import-Export Code from DGFT.', portals: ['DGFT'] },
    { step: '04', title: 'Find EPC', description: 'Locate relevant Export Promotion Council for your sector.', portals: ['EPCs'] },
    { step: '05', title: 'Check Compliance', description: 'Understand quality standards, certifications, and regulations.', portals: ['APEDA', 'Packaging Quality Council'] },
    { step: '06', title: 'Find Buyer', description: 'Connect with international buyers through trade platforms.', portals: ['FIEO', 'Trade Delegations'] },
    { step: '07', title: 'Agree Payment Terms', description: 'Set up payment methods including LC, advance payment, or consignment.', portals: ['Export Banking'] },
    { step: '08', title: 'Arrange Finance', description: 'Secure trade finance, packing credit, or working capital.', portals: ['Export Banking'] },
    { step: '09', title: 'Produce or Source', description: 'Manufacture product or source from suppliers.', portals: ['ODOP', 'Local Manufacturers'] },
    { step: '10', title: 'Inspect', description: 'Quality check and final inspection before shipment.', portals: ['commodityBoards'] },
    { step: '11', title: 'Package', description: 'Proper packaging and labeling for export.', portals: ['Packaging Association'] },
    { step: '12', title: 'Appoint CHA', description: 'Hire a Customs House Agent for clearance.', portals: ['CHADirectory'] },
    { step: '13', title: 'Complete Customs', description: 'File all export documentation and clear customs.', portals: ['Customs & ICEGATE'] },
    { step: '14', title: 'Ship', description: 'Load cargo onto vessel and track shipment.', portals: ['ShippingLinesHub'] },
    { step: '15', title: 'Submit Documents', description: 'Provide all export paperwork to buyer.', portals: ['Trade Intelligence'] },
    { step: '16', title: 'Receive Payment', description: 'Complete payment and receive foreign exchange.', portals: ['Export Banking'] },
    { step: '17', title: 'Post-Shipment Compliance', description: 'Handle export reporting and compliance requirements.', portals: ['Export Banking', 'ComplianceSection'] },
  ]

  return (
    <section id="journey" className="exim-section exim-bg-light">
      <div className="exim-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold exim-text-primary sm:text-4xl">
            Your Export Journey
          </h2>
          <p className="mt-4 text-lg exim-text-secondary">
            A step-by-step roadmap from product selection to successful export.
            Every step connected to the right portal.
          </p>
        </div>

        <div className="relative">
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-exim-odop text-sm font-bold text-exim-odop-text-dark shadow-md md:mx-auto">
                    {step.step === '07' || step.step === '08' ? (
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

                <div className="flex-1 rounded-xl border border-exim-odop-border/30 bg-exim-card p-5 exim-shadow transition-all hover:exim-shadow-hover md:ml-4">
                  <h3 className="text-lg font-semibold exim-text-primary">
                    {step.step}. {step.title}
                  </h3>
                  <p className="mt-1 text-sm exim-text-secondary">
                    {step.description}
                  </p>
                  {step.portals.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {step.portals.map((portal) => (
                        <span
                          key={portal}
                          className="inline-block rounded-full bg-exim-odop-light px-2.5 py-1 text-xs font-medium exim-text-odop"
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
