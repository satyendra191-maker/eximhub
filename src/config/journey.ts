import type { JourneyStep } from '@/types'

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: 'Choose Product',
    description:
      'Identify your product and local manufacturing clusters.',
    portals: ['ODOP'],
  },
  {
    step: 2,
    title: 'Market Research',
    description:
      'Analyze data, find demand, and check HS codes and tariffs.',
    portals: ['TradeStat', 'NIRYAT', 'Indian Trade Portal'],
  },
  {
    step: 3,
    title: 'Registration',
    description:
      'Register your business and obtain your Importer Exporter Code (IEC).',
    portals: ['DGFT'],
  },
  {
    step: 4,
    title: 'Certification',
    description:
      'Get quality certifications and RCMC from respective councils.',
    portals: ['APEDA', 'EPCs'],
  },
  {
    step: 5,
    title: 'Customs & Shipping',
    description:
      'File shipping bills and clear customs electronically.',
    portals: ['ICEGATE', 'Fumigation Services', 'Packaging Solutions'],
  },
  {
    step: 6,
    title: 'Find Buyers',
    description:
      'Attend buyer-seller meets and trade delegations.',
    portals: ['FIEO'],
  },
  {
    step: 7,
    title: 'Export Successfully!',
    description:
      'Ship your goods and claim export incentives.',
    portals: ['Fumigation Services', 'Packaging Solutions'],
  },
]
