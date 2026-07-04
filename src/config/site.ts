import type { NavLink } from '@/types'

export const siteConfig = {
  name: 'Export Intelligence Hub',
  shortName: 'Export Intelligence',
  tagline:
    'Your centralized gateway to navigate India\'s export ecosystem, find schemes, and connect with global markets.',
  description:
    'One intelligent hub for government portals, export documents, trade data, and compliance — everything your export business needs, all in one place.',
  url: 'https://exporsthub.vercel.app',
  ogImage: '/opengraph.jpg',
  version: '2.0',
  lastUpdated: 'June 2025',
  email: 'support@exporthub.example.com',
  phone: '1800-111-XXXX (Toll Free)',
  address: 'New Delhi, India',
  company: {
    name: 'Savita Global Interprises',
    addr1: 'Parth A Apartment, 3/11, Patel Colony',
    addr2: 'Jamnagar - 361008, Gujarat, India',
    phone: '+91-8299770889',
    wa: '8299770889',
    email: 'satyendra191@gmail.com',
    gstin: '',
    iec: '',
    pan: '',
  },
  footer: {
    disclaimer:
      'Disclaimer: This platform is an independent aggregator. All linked portals are official Government of India websites.',
    madeIn: 'Made with ❤️ for Indian Exporters',
  },
  social: {
    twitter: '#',
    linkedin: '#',
    facebook: '#',
    youtube: '#',
  },
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Portals', href: '#tools' },
  { label: 'Journey', href: '#journey' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Resources', href: '#resources' },
]
