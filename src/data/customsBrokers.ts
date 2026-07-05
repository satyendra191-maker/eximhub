import type { CHAResource } from '@/types'

export const chaResources: CHAResource[] = [
  {
    id: 'icegate-cha-verification',
    name: 'ICEGATE CHA Verification',
    category: 'CHA & Customs Broker',
    description: 'Official ICEGATE portal to verify PAN-based CHA registration and license status — check if a Customs House Agent is ICEGATE-registered and authorized to transact business.',
    officialUrl: 'https://enquiry.icegate.gov.in/',
    contactUrl: 'https://enquiry.icegate.gov.in/',
    portsServed: ['All Indian Ports'],
    cargoSpecialization: ['All Cargo Types'],
    seaCargo: true,
    airCargo: true,
    icdServices: true,
    sourceUrl: 'https://enquiry.icegate.gov.in/',
    lastVerified: '2026-07-05',
    tags: ['cha', 'icegate', 'verification', 'customs-broker', 'pan-based'],
    verificationStatus: 'verified',
    city: 'New Delhi',
    state: 'Delhi'
  },
  {
    id: 'icegate-registration-enquiry',
    name: 'ICEGATE Registration Enquiry',
    category: 'CHA & Customs Broker',
    description: 'Check whether a CHA or importer/exporter PAN is registered with ICEGATE for customs electronic filing and compliance.',
    officialUrl: 'https://www.icegate.gov.in/new-initiatives/registration-enquiry',
    contactUrl: 'https://www.icegate.gov.in/new-initiatives/registration-enquiry',
    portsServed: ['All Indian Ports'],
    cargoSpecialization: ['All Cargo Types'],
    seaCargo: true,
    airCargo: true,
    icdServices: true,
    sourceUrl: 'https://www.icegate.gov.in/new-initiatives/registration-enquiry',
    lastVerified: '2026-07-05',
    tags: ['cha', 'icegate', 'registration', 'pan-enquiry'],
    verificationStatus: 'verified',
    city: 'New Delhi',
    state: 'Delhi'
  }
]
