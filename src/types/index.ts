export interface BaseResource {
  id: string;
  name: string;
  acronym?: string;
  category: string;
  subcategory?: string;
  description: string;
  bestFor?: string;
  sector?: string;
  products?: string[];
  productsCovered?: string[];
  city?: string;
  state?: string;
  port?: string;
  officialUrl: string;
  serviceUrl?: string;
  loginUrl?: string;
  membershipUrl?: string;
  trackingUrl?: string;
  scheduleUrl?: string;
  bookingUrl?: string;
  customerCareUrl?: string;
  contactUrl?: string;
  officialPhone?: string;
  officialMobile?: string;
  officialLandline?: string;
  officialWhatsapp?: string;
  officialEmail?: string;
  headName?: string;
  headDesignation?: string;
  proName?: string;
  proContact?: string;
  sourceUrl: string;
  lastVerified: string;
  tags: string[];
  verificationStatus: 'verified' | 'pending' | 'unverified';
  organizationType?: string;
  servicePage?: string;
  businessContactPage?: string;
  publicBusinessPhone?: string;
  publicBusinessEmail?: string;
  enquiryUrl?: string;
  quotationUrl?: string;
  customerSupportUrl?: string;
  branchLocatorUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  headOffice?: string;
  regionalOffices?: string[];
  officiallyPublishedMobile?: string;
  officiallyPublishedWhatsapp?: string;
  generalEmail?: string;
  officialContactPage?: string;
  currentHead?: string;
  currentHeadDesignation?: string;
  rcmcUrl?: string;
  helpdesk?: string;
  headTitle?: string;
  headOfficePhone?: string;
  headOfficeEmail?: string;
  headOfficeAddress?: string;
  authority?: string;
  exportStage?: string;
  cost?: string;
  mobileFriendly?: boolean;
  icon?: string;
  color?: string;
  whoShouldUse?: string;
  keyFeatures?: string[];
  benefits?: string;
  registration?: string;
  licenseNumber?: string;
  portsServed?: string[];
  cargoSpecialization?: string[];
  seaCargo?: boolean;
  airCargo?: boolean;
  icdServices?: boolean;
  localOfficePage?: string;
  documentationSupportUrl?: string;
  localCustomerSupportUrl?: string;
  vesselInfoUrl?: string;
  roadFreight?: boolean;
  ftl?: boolean;
  ptl?: boolean;
  containerTransport?: boolean;
  portConnectivity?: boolean;
  warehousing?: boolean;
  multimodalTransport?: boolean;
  projectCargo?: boolean;
  serviceCategories?: string[];
  location?: string;
  serviceArea?: string;
  terminalInfoUrl?: string;
  tradeNoticesUrl?: string;
  coverageDetails?: string;
  applicableProducts?: string[];
  destinationCountries?: string[];
  exportFinanceUrl?: string;
  importFinanceUrl?: string;
  preShipmentCreditUrl?: string;
  postShipmentCreditUrl?: string;
  packingCreditUrl?: string;
  letterOfCreditUrl?: string;
  bankGuaranteeUrl?: string;
  documentaryCollectionUrl?: string;
  foreignExchangeUrl?: string;
  inwardRemittanceUrl?: string;
  outwardRemittanceUrl?: string;
  tradePortalUrl?: string;
  internationalBankingUrl?: string;
  grievanceUrl?: string;
  district?: string;
  product?: string;
  exportPotential?: string;
  relevantEPC?: string;
  tradeDataUrl?: string;
  packagingNeeds?: string[];
  logisticsResources?: string[];
  districtExportPlanUrl?: string;
  dataCoverage?: string;
  accessType?: 'public' | 'free' | 'freemium' | 'restricted';
  directLink?: string;
  updateFrequency?: string;
  services?: string[];
}

export interface GovernmentPortal extends BaseResource {
  category: 'Government Portal';
  subcategory: 'DGFT' | 'Customs' | 'Trade Policy' | 'Analytics' | 'Food & Agri' | 'Investment' | 'Standards' | 'Ports' | 'Logistics' | 'Insurance' | 'Finance';
  authority: string;
  exportStage: string;
  cost: string;
  mobileFriendly: boolean;
  icon: string;
  color: string;
  helpdesk?: string;
  headTitle?: string;
  headOfficePhone?: string;
  purpose?: string;
  exporterUseCase?: string;
}

export interface EPC extends BaseResource {
  category: 'EPC';
  subcategory: 'Export Promotion Council' | 'Commodity Board' | 'Export Development Authority';
  productsCovered: string[];
  rcmcUrl?: string;
  headOffice: string;
  regionalOffices?: string[];
  officiallyPublishedMobile?: string;
  officiallyPublishedWhatsapp?: string;
  generalEmail?: string;
  officialContactPage?: string;
  currentHead?: string;
  currentHeadDesignation?: string;
  proContact?: string;
}

export interface ODOPResource extends BaseResource {
  category: 'ODOP';
  district: string;
  product: string;
  exportPotential: string;
  relevantEPC?: string;
  tradeDataUrl?: string;
  packagingNeeds?: string[];
  logisticsResources?: string[];
  districtExportPlanUrl?: string;
}

export interface TradeIntelligenceResource extends BaseResource {
  category: 'Trade Intelligence';
  subcategory: 'Export Statistics' | 'Import Statistics' | 'Commodity Data' | 'Country Data' | 'HS Code' | 'Tariffs' | 'Trade Agreements' | 'Rules of Origin' | 'Market Access' | 'Global Trade Data' | 'Market Opportunity';
  dataCoverage?: string;
  accessType: 'public' | 'free' | 'freemium' | 'restricted';
  directLink: string;
  updateFrequency?: string;
}

export interface BankResource extends BaseResource {
  category: 'Banking & Trade Finance';
  subcategory: 'Public Sector Bank' | 'Private Sector Bank' | 'Export Finance Institution' | 'Trade Finance' | 'Forex' | 'LC' | 'BG' | 'Export Credit' | 'Digital Trade Portal';
  services: string[];
  exportFinanceUrl?: string;
  importFinanceUrl?: string;
  preShipmentCreditUrl?: string;
  postShipmentCreditUrl?: string;
  packingCreditUrl?: string;
  letterOfCreditUrl?: string;
  bankGuaranteeUrl?: string;
  documentaryCollectionUrl?: string;
  foreignExchangeUrl?: string;
  inwardRemittanceUrl?: string;
  outwardRemittanceUrl?: string;
  tradePortalUrl?: string;
  internationalBankingUrl?: string;
  grievanceUrl?: string;
  branchLocatorUrl?: string;
}

export interface CHAResource extends BaseResource {
  category: 'CHA & Customs Broker';
  businessName?: string;
  licenseNumber?: string;
  portsServed: string[];
  cargoSpecialization: string[];
  seaCargo: boolean;
  airCargo: boolean;
  icdServices: boolean;
  businessContactPage?: string;
  publicBusinessPhone?: string;
  publicBusinessEmail?: string;
}

export interface ShippingLineResource extends BaseResource {
  category: 'Shipping Line';
  localOfficePage?: string;
  scheduleSearchUrl?: string;
  containerTrackingUrl?: string;
  vesselInfoUrl?: string;
  bookingPortalUrl?: string;
  documentationSupportUrl?: string;
  localCustomerSupportUrl?: string;
}

export interface TransportResource extends BaseResource {
  category: 'Transport & Logistics';
  services: string[];
  roadFreight: boolean;
  ftl: boolean;
  ptl: boolean;
  containerTransport: boolean;
  portConnectivity: boolean;
  warehousing: boolean;
  multimodalTransport: boolean;
  projectCargo: boolean;
  trackingUrl?: string;
  branchLocatorUrl?: string;
  enquiryUrl?: string;
  quotationUrl?: string;
  customerSupportUrl?: string;
}

export interface PackagingResource extends BaseResource {
  category: 'Export Packaging';
  serviceCategories: string[];
  location: string;
  serviceArea: string;
  enquiryUrl?: string;
  quotationUrl?: string;
}

export interface PortResource extends BaseResource {
  category: 'Ports & Logistics Gateways';
  terminalInfoUrl?: string;
  vesselInfoUrl?: string;
  tradeNoticesUrl?: string;
}

export interface InsuranceResource extends BaseResource {
  category: 'Export Insurance & Credit';
  subcategory: 'ECGC' | 'Private Insurance' | 'Credit Insurance' | 'Political Risk' | 'Marine Insurance';
  coverageDetails?: string;
}

export interface ComplianceResource extends BaseResource {
  category: 'Standards, Testing & Certification';
  subcategory: 'Product Standards' | 'Food Compliance' | 'Inspection' | 'Laboratory Testing' | 'Certification' | 'Packaging Compliance' | 'Destination Market Requirements';
  applicableProducts?: string[];
  destinationCountries?: string[];
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  details?: string[];
  resources?: string[];
  portals: string[];
  tips?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface QuickAccessItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  category: string;
  color: string;
}

export interface PopularSearch {
  query: string;
  category: string;
  count?: number;
}

export type ResourceCategory =
  | 'Government Portal'
  | 'EPC'
  | 'ODOP'
  | 'Trade Intelligence'
  | 'Banking & Trade Finance'
  | 'CHA & Customs Broker'
  | 'Shipping Line'
  | 'Transport & Logistics'
  | 'Export Packaging'
  | 'Ports & Logistics Gateways'
  | 'Export Insurance & Credit'
  | 'Standards, Testing & Certification';

export type VerificationStatus = 'verified' | 'pending' | 'unverified';

export interface NavLink {
  label: string;
  href: string;
}

export interface CompanyInfo {
  name: string;
  addr1: string;
  addr2: string;
  phone: string;
  wa: string;
  email: string;
  gstin: string;
  iec: string;
  pan: string;
}

export interface SearchResult {
  resource: BaseResource;
  matchedFields: string[];
  highlight: string;
}

export interface Portal {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string;
  bestFor: string;
  whyImportant: string;
  whoShouldUse?: string;
  keyFeatures: string[];
  benefits?: string;
  registration?: string;
  authority: string;
  exportStage: string;
  cost: string;
  mobileFriendly: boolean;
  icon: string;
  color: string;
  phone: string;
  email: string;
  helpdesk: string;
  headTitle: string;
  headOfficePhone: string;
  whatsapp: string;
}

export type PortalCategory = 'All' | 'Market Research' | 'Compliance' | 'Analytics' | 'Food & Agri' | 'Customs' | 'Investment' | 'Transport & Logistics';

export type PortalColor = 'blue' | 'indigo' | 'orange' | 'teal' | 'emerald' | 'purple' | 'pink' | 'green' | 'red' | 'amber' | 'cyan';

export type DocumentCategory = {
  title: string;
  description: string;
  items: {
    name: string;
    filename: string;
    tag: string;
    tagColor: string;
    icon: string;
    desc: string;
    countries: string;
  }[];
};

export interface GovernmentService {
  id: string;
  name: string;
  shortName?: string;
  acronym?: string;
  icon: string;
  capabilitySummary: string;
  description: string;
  trustClassification: 'OFFICIAL' | 'VERIFIED' | 'REGULATORY' | 'EXPORT_BODY' | 'FINANCIAL' | 'CERTIFICATION';
  category: string;
  pricing: 'Free' | 'Paid' | 'Application Fee' | 'Transaction Based' | 'Subscription' | 'Government Fee' | 'Contact for Pricing';
  ownership: 'GOVT.' | 'PRIVATE' | 'ASSOCIATION' | 'INTERNATIONAL' | 'BANK' | 'REGULATOR' | 'EPC' | 'PSU';
  officialWebsite: string;
  internalDetailsRoute: string;
  contactInfo?: {
    phone?: string;
    email?: string;
    headOffice?: string;
    whatsapp?: string;
  };
  expertise?: string[];
  services?: string[];
  verificationStatus: 'verified' | 'pending' | 'unverified';
  lastVerified: string;
}

export interface ServiceFilter {
  category?: string;
  trustClassification?: string;
  pricing?: string;
  ownership?: string;
  verificationStatus?: string;
  searchQuery?: string;
}
