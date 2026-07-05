import type { NavLink, CompanyInfo } from '@/types'

export const siteConfig = {
  name: 'EximHub',
  shortName: 'EximHub',
  tagline: 'India Export Ecosystem Gateway',
  description: 'Access verified government portals, EPCs, trade statistics, ODOP resources, banks, customs services, shipping lines, logistics providers, transporters and packaging partners from one mobile-friendly export gateway.',
  url: 'https://exporsthub.vercel.app',
  lastVerified: '2026-07-05',
  company: {
    name: 'EximHub',
    addr1: 'Export Intelligence Hub',
    addr2: 'India',
    phone: '',
    wa: '',
    email: '',
    gstin: '',
    iec: '',
    pan: '',
  } satisfies CompanyInfo,
  social: {
    twitter: '#',
    linkedin: '#',
    facebook: '#',
    youtube: '#',
  },
  footer: {
    email: '',
    phone: '',
    address: 'India',
  },
}

export const navLinks: NavLink[] = [
  { label: 'Quick Access', href: '#tools' },
  { label: 'Portals', href: '#portals' },
  { label: 'EPCs', href: '#epc' },
  { label: 'Trade Data', href: '#trade-intelligence' },
  { label: 'Banking', href: '#banking' },
  { label: 'Shipping', href: '#shipping' },
  { label: 'Journey', href: '#journey' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Resources', href: '#resources' },
  { label: 'FAQ', href: '#faq' },
]
