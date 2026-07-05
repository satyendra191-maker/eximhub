import type { FAQItem } from '@/types'

export const faqItems: FAQItem[] = [
  {
    id: 'faq-iec',
    question: 'What is IEC and how do I obtain it?',
    answer: 'IEC (Import-Export Code) is a 10-digit unique number issued by DGFT mandatory for any business engaged in import/export. Apply online at dgft.gov.in with your PAN, business address proof, and bank certificate. The process is free and typically takes 2-3 working days.',
    category: 'Registration'
  },
  {
    id: 'faq-rcmc',
    question: 'What is RCMC and who needs it?',
    answer: 'RCMC (Registration-cum-Membership Certificate) is issued by Export Promotion Councils to exporters dealing in specific product categories. It is required to avail export benefits under FTP. Apply to the relevant EPC after obtaining IEC.',
    category: 'Registration'
  },
  {
    id: 'faq-gst-export',
    question: 'How does GST work for exports?',
    answer: 'Exports are treated as zero-rated supplies under GST. Exporters can either export under bond/LUT without paying IGST and claim refund of input tax credit, or pay IGST and claim refund. File LUT on the GST portal before exporting.',
    category: 'Compliance'
  },
  {
    id: 'faq-hs-code',
    question: 'How do I find the correct HS code for my product?',
    answer: 'The Indian Customs ITC(HS) classification system provides 8-digit HS codes for all products. Use the India Trade Portal (indiantradeportal.in) or the DGCI&S website to search HS codes by product description.',
    category: 'Trade Intelligence'
  },
  {
    id: 'faq-export-benefits',
    question: 'What export incentive schemes are available?',
    answer: 'Key export incentive schemes include RoDTEP (refund of duties/taxes), Advance Authorization (duty-free import of inputs), EPCG (duty-free import of capital goods), and Interest Equalisation Scheme. Check dgft.gov.in for current schemes and eligibility.',
    category: 'Incentives'
  },
  {
    id: 'faq-freight-forwarder',
    question: 'What is the difference between a CHA and a freight forwarder?',
    answer: 'A CHA (Customs House Agent) handles customs documentation and clearance. A freight forwarder arranges cargo transportation, consolidates shipments, and coordinates with carriers. Many companies offer both services.',
    category: 'Logistics'
  },
  {
    id: 'faq-payment-terms',
    question: 'What are common export payment terms?',
    answer: 'Common payment terms include Advance Payment, Letter of Credit (LC), Documents Against Payment (D/P), Documents Against Acceptance (D/A), and Open Account. LC is safest for exporters but requires bank involvement.',
    category: 'Finance'
  },
  {
    id: 'faq-incoterms',
    question: 'What Incoterms should I use?',
    answer: 'Common Incoterms for exports: FOB (Free on Board) - seller delivers goods on board vessel; CIF (Cost, Insurance, Freight) - seller covers cost, insurance, and freight to destination port; EXW (Ex Works) - buyer arranges all transport. Choose based on risk and cost preference.',
    category: 'Trade Basics'
  },
  {
    id: 'faq-export-documents',
    question: 'What are the essential documents for exporting?',
    answer: 'Essential export documents include: Commercial Invoice, Packing List, Bill of Lading/Air Waybill, Shipping Bill, Certificate of Origin, Insurance Certificate, and Export Declaration. Additional documents may be required based on product and destination country.',
    category: 'Documentation'
  },
  {
    id: 'faq-quality-certification',
    question: 'Do I need quality certification for exports?',
    answer: 'Many products require quality certification for export. Agricultural products need APEDA/MPEDA registration; food products need FSSAI compliance; industrial products may need BIS certification. Check destination country requirements for additional certifications.',
    category: 'Compliance'
  },
  {
    id: 'faq-ecgc',
    question: 'What is ECGC and should I buy export insurance?',
    answer: 'ECGC (Export Credit Guarantee Corporation) provides export credit insurance covering buyer default, political risks, and bank guarantees. It is highly recommended, especially for new exporters and open account transactions.',
    category: 'Finance'
  },
  {
    id: 'faq-freight-optimization',
    question: 'How can I reduce export freight costs?',
    answer: 'Optimize freight costs by: consolidating shipments, negotiating with multiple shipping lines, using INCOTERMS wisely, choosing the right container type, booking during off-peak seasons, and working with a freight forwarder for better rates.',
    category: 'Logistics'
  },
  {
    id: 'faq-odop',
    question: 'What is One District One Product (ODOP) and how can it help my export business?',
    answer: 'ODOP is a government initiative to promote unique products from each district for export. Benefits include focused marketing support, participation in international exhibitions, quality improvement programs, and financial assistance under various schemes.',
    category: 'Schemes'
  },
  {
    id: 'faq-export-inspection',
    question: 'Do I need pre-shipment inspection for exports?',
    answer: 'Pre-shipment inspection may be required depending on the product and destination country. Agricultural products may need FSSAI/APEDA inspection, engineering products may need BIS certification, and some countries require independent inspection agency certification.',
    category: 'Compliance'
  },
  {
    id: 'faq-export-finance',
    question: 'How can I get pre-shipment and post-shipment finance?',
    answer: 'Pre-shipment (packing credit) finance is available from banks against confirmed export orders. Post-shipment finance covers the period between shipment and payment realization. Contact your bank\'s trade finance department with your IEC, LC/export order, and past export performance.',
    category: 'Finance'
  }
]
