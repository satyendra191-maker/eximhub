import type { ServiceResource } from '@/components/ui/ServiceCard'
import type {
  EPC,
  BankResource,
  TradeIntelligenceResource,
  ShippingLineResource,
  TransportResource,
  ComplianceResource,
  PackagingResource,
  CHAResource,
} from '@/types'

const trustFromVerification = (v: string | undefined): ServiceResource['trustClassification'] => {
  if (v === 'verified') return 'VERIFIED'
  if (v === 'pending') return 'REGULATORY'
  return 'OFFICIAL'
}

export function epcToServiceResource(epc: EPC): ServiceResource {
  return {
    id: `epc-${epc.id}`,
    name: epc.name,
    acronym: epc.acronym,
    icon: 'Globe',
    capabilitySummary: epc.sector ?? 'Export Promotion',
    description: epc.description,
    trustClassification: 'EXPORT_BODY',
    category: epc.category,
    pricing: 'Paid',
    ownership: 'ASSOCIATION',
    officialWebsite: epc.officialUrl || epc.sourceUrl || '#',
    internalDetailsRoute: `/epc/${epc.id}`,
    contactInfo: {
      phone: epc.officialPhone,
      email: epc.officialEmail,
      headOffice: epc.headOffice,
    },
    services: epc.productsCovered?.slice(0, 5),
    verificationStatus: (epc.verificationStatus === 'verified' ? 'verified' : 'unverified') as 'verified' | 'pending' | 'unverified',
    lastVerified: epc.lastVerified,
  }
}

export function bankToServiceResource(bank: BankResource): ServiceResource {
  return {
    id: `bank-${bank.id}`,
    name: bank.name,
    acronym: bank.acronym,
    icon: 'Building2',
    capabilitySummary: bank.subcategory ?? 'Banking & Trade Finance',
    description: bank.description,
    trustClassification: 'FINANCIAL',
    category: bank.category,
    pricing: 'Contact for Pricing',
    ownership: (bank.subcategory === 'Export Finance Institution' ? 'REGULATOR' : 'BANK') as ServiceResource['ownership'],
    officialWebsite: bank.officialUrl || bank.sourceUrl || '#',
    internalDetailsRoute: `/banking/${bank.id}`,
    contactInfo: {
      phone: bank.officialPhone,
      email: bank.officialEmail,
    },
    services: bank.services?.slice(0, 5),
    verificationStatus: (bank.verificationStatus === 'verified' ? 'verified' : 'unverified') as 'verified' | 'pending' | 'unverified',
    lastVerified: bank.lastVerified,
  }
}

export function tradeIntelligenceToServiceResource(r: TradeIntelligenceResource): ServiceResource {
  return {
    id: `trade-${r.id}`,
    name: r.name,
    acronym: r.acronym,
    icon: 'BarChart3',
    capabilitySummary: r.subcategory ?? 'Trade Intelligence',
    description: r.description,
    trustClassification: trustFromVerification(r.verificationStatus) as ServiceResource['trustClassification'],
    category: r.category,
    pricing: r.accessType === 'public' || r.accessType === 'free' ? 'Free' : r.accessType === 'freemium' ? 'Subscription' : 'Contact for Pricing',
    ownership: 'GOVT.',
    officialWebsite: r.officialUrl || r.directLink || '#',
    internalDetailsRoute: `/trade-intelligence/${r.id}`,
    contactInfo: {
      headOffice: r.dataCoverage,
    },
    services: r.tags?.slice(0, 5),
    verificationStatus: (r.verificationStatus === 'verified' ? 'verified' : 'unverified') as 'verified' | 'pending' | 'unverified',
    lastVerified: r.lastVerified,
  }
}

export function shippingLineToServiceResource(s: ShippingLineResource): ServiceResource {
  return {
    id: `shipping-${s.id}`,
    name: s.name,
    acronym: s.acronym,
    icon: 'Ship',
    capabilitySummary: 'Container Shipping Line',
    description: s.description,
    trustClassification: 'VERIFIED',
    category: s.category,
    pricing: 'Contact for Pricing',
    ownership: 'PRIVATE',
    officialWebsite: s.officialUrl || '#',
    internalDetailsRoute: `/shipping/${s.id}`,
    contactInfo: {
      headOffice: s.localOfficePage,
    },
    services: [],
    verificationStatus: (s.verificationStatus === 'verified' ? 'verified' : 'unverified') as 'verified' | 'pending' | 'unverified',
    lastVerified: s.lastVerified,
  }
}

export function transportToServiceResource(t: TransportResource): ServiceResource {
  return {
    id: `transport-${t.id}`,
    name: t.name,
    acronym: t.acronym,
    icon: 'Package',
    capabilitySummary: 'Transport & Logistics',
    description: t.description,
    trustClassification: 'VERIFIED',
    category: t.category,
    pricing: 'Contact for Pricing',
    ownership: 'PRIVATE',
    officialWebsite: t.officialUrl || '#',
    internalDetailsRoute: `/transport/${t.id}`,
    contactInfo: {
      headOffice: t.branchLocatorUrl,
    },
    services: t.services?.slice(0, 5),
    verificationStatus: (t.verificationStatus === 'verified' ? 'verified' : 'unverified') as 'verified' | 'pending' | 'unverified',
    lastVerified: t.lastVerified,
  }
}

export function complianceToServiceResource(c: ComplianceResource): ServiceResource {
  return {
    id: `compliance-${c.id}`,
    name: c.name,
    acronym: c.acronym,
    icon: 'FileText',
    capabilitySummary: c.subcategory ?? 'Standards & Compliance',
    description: c.description,
    trustClassification: 'REGULATORY',
    category: c.category,
    pricing: 'Application Fee',
    ownership: 'GOVT.',
    officialWebsite: c.officialUrl || '#',
    internalDetailsRoute: `/compliance/${c.id}`,
    contactInfo: {
      phone: c.officialPhone,
      email: c.officialEmail,
    },
    services: c.applicableProducts?.slice(0, 5),
    verificationStatus: (c.verificationStatus === 'verified' ? 'verified' : 'unverified') as 'verified' | 'pending' | 'unverified',
    lastVerified: c.lastVerified,
  }
}

export function packagingToServiceResource(p: PackagingResource): ServiceResource {
  return {
    id: `packaging-${p.id}`,
    name: p.name,
    acronym: undefined,
    icon: 'Package',
    capabilitySummary: 'Export Packaging Provider',
    description: p.description,
    trustClassification: 'VERIFIED',
    category: p.category,
    pricing: 'Contact for Pricing',
    ownership: 'PRIVATE',
    officialWebsite: p.officialUrl || '#',
    internalDetailsRoute: `/packaging/${p.id}`,
    contactInfo: {
      headOffice: p.location,
    },
    services: p.serviceCategories?.slice(0, 5),
    verificationStatus: (p.verificationStatus === 'verified' ? 'verified' : 'unverified') as 'verified' | 'pending' | 'unverified',
    lastVerified: p.lastVerified,
  }
}

export function chaToServiceResource(c: CHAResource): ServiceResource {
  return {
    id: `cha-${c.id}`,
    name: c.name,
    acronym: undefined,
    icon: 'MapPin',
    capabilitySummary: 'Customs House Agent',
    description: c.description,
    trustClassification: 'REGULATORY',
    category: c.category,
    pricing: 'Contact for Pricing',
    ownership: 'PRIVATE',
    officialWebsite: c.officialUrl || '#',
    internalDetailsRoute: `/cha/${c.id}`,
    contactInfo: {
      phone: c.publicBusinessPhone,
      email: c.publicBusinessEmail,
      headOffice: c.city ? `${c.city}, ${c.state ?? ''}` : undefined,
    },
    services: c.portsServed?.slice(0, 5),
    verificationStatus: (c.verificationStatus === 'verified' ? 'verified' : 'unverified') as 'verified' | 'pending' | 'unverified',
    lastVerified: c.lastVerified,
  }
}
