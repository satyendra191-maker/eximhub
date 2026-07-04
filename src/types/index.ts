export interface Portal {
  id: string
  name: string
  url: string
  description: string
  category: PortalCategory
  bestFor: string
  whyImportant: string
  whoShouldUse: string
  keyFeatures: string[]
  benefits: string
  registration: string
  authority: string
  exportStage: string
  cost: string
  mobileFriendly: boolean
  icon: string
  color: PortalColor
  phone: string
  email: string
  helpdesk: string
  headTitle: string
  headOfficePhone: string
  whatsapp: string
}

export type PortalCategory =
  | 'All'
  | 'Market Research'
  | 'Compliance'
  | 'Analytics'
  | 'Food & Agri'
  | 'Customs'
  | 'Investment'
  | 'Transport & Logistics'

export type PortalColor =
  | 'blue'
  | 'indigo'
  | 'orange'
  | 'teal'
  | 'emerald'
  | 'purple'
  | 'pink'
  | 'green'
  | 'red'
  | 'amber'
  | 'cyan'

export interface JourneyStep {
  step: number
  title: string
  description: string
  portals: string[]
}

export interface DocumentTemplate {
  name: string
  filename: string
  tag: string
  tagColor: string
  icon: string
  desc: string
  countries: string
}

export interface DocumentCategory {
  title: string
  description: string
  items: DocumentTemplate[]
}

export interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'bot'
}

export interface CompanyInfo {
  name: string
  addr1: string
  addr2: string
  phone: string
  wa: string
  email: string
  gstin: string
  iec: string
  pan: string
}

export interface NavLink {
  label: string
  href: string
}
