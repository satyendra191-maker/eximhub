import type { NavLink, CompanyInfo } from '@/types'

export const siteConfig = {
  name: 'EximHub',
  shortName: 'EximHub',
  tagline: 'India Export Ecosystem Gateway',
  description: 'Access verified government portals, EPCs, trade statistics, ODOP resources, banks, customs services, shipping lines, logistics providers, transporters and packaging partners from one mobile-friendly export gateway.',
  url: 'https://exporsthub.vercel.app',
  lastVerified: '2026-07-05',
  company: {
    name: 'Savita Global Interprises',
    addr1: '302 Parth A, 3/11, Patel Colony',
    addr2: 'Jamnagar, Gujarat - 361008, India',
    phone: '+919506943134',
    wa: '+919506943134',
    email: 'savitaglobalinterprises@gmail.com',
    gstin: '24GOMPD3586L1ZF',
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
    email: 'savitaglobalinterprises@gmail.com',
    phone: '+919506943134',
    address: '302 Parth A, 3/11, Patel Colony, Jamnagar, Gujarat - 361008',
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
