import type { CompanyInfo } from '@/types'
import { siteConfig } from '@/config/site'

const printStyles = [
  '*, *::before, *::after { box-sizing: border-box; }',
  'body { font-family: Arial, sans-serif; font-size: 12px; color: #111; margin: 0; padding: 16px; }',
  'h1 { font-size: 16px; text-align: center; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }',
  '.subtitle { text-align: center; font-size: 10px; color: #555; margin-bottom: 16px; }',
  'table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }',
  'th { background: #1e3a5f; color: #fff; padding: 6px 4px; text-align: left; font-size: 10px; }',
  'td { padding: 5px 4px; border: 1px solid #d1d5db; vertical-align: top; font-size: 10px; }',
  'tr:nth-child(even) td { background: #f9fafb; }',
  '.label { font-weight: bold; color: #374151; width: 140px; }',
  '.section-title { font-size: 12px; font-weight: bold; color: #1e3a5f; border-bottom: 2px solid #1e3a5f; padding-bottom: 3px; margin-top: 12px; margin-bottom: 8px; }',
  '.header-grid { display: grid; grid-template-columns: 1fr; gap: 6px; margin-bottom: 12px; }',
  '.signature { margin-top: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }',
  '.signature div { border-top: 1px solid #333; padding-top: 3px; font-size: 10px; }',
  '.footer-note { text-align: center; font-size: 9px; color: #888; margin-top: 16px; border-top: 1px solid #ddd; padding-top: 6px; }',
  '@media (min-width: 600px) { .header-grid { grid-template-columns: 1fr 1fr; } padding: 20px; }',
  '@media (min-width: 600px) { body { padding: 24px; } }',
  '@media (min-width: 600px) { h1 { font-size: 18px; } }',
  '@media (min-width: 600px) { th { padding: 8px; font-size: 11px; } td { padding: 7px 8px; font-size: 11px; } .label { width: 180px; } }',
  '@media print { body { padding: 0; } }',
  'table th:last-child, table td:last-child { word-break: break-word; }',
  '.contact-bar { text-align: center; font-size: 9px; color: #666; margin-top: 8px; padding-top: 6px; border-top: 1px solid #eee; }',
].join('')

function wrapHtml(title: string, body: string): string {
  return [
    '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>',
    title,
    ' - Savita Global Interprises</title><style>',
    printStyles,
    '</style></head><body>',
    body,
    '<div class="contact-bar">Savita Global Interprises | 302 Parth A, 3/11, Patel Colony, Jamnagar, Gujarat - 361008 | GST: 24GOMPD3586L1ZF | Tel: +919506943134</div>',
    '</body></html>',
  ].join('')
}

function downloadHtml(html: string, filename: string) {
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function printHtml(html: string, title: string) {
  const w = window.open('', '_blank')
  if (!w) return
  w.document.write(html)
  w.document.close()
  w.document.title = title
  setTimeout(() => { w.print() }, 500)
}

const c: CompanyInfo = siteConfig.company

function exporterHeader() {
  return [
    '<div class="header-grid">',
    '<div><span class="label">Exporter:</span> ', c.name, '<br/><span style="font-size:10px;color:#666">', c.addr1, ', ', c.addr2, '</span></div>',
    '<div><span class="label">IEC:</span> ', c.iec || '_______________', '<br/><span class="label">PAN:</span> ', c.pan || '_______________', '</div>',
    '<div><span class="label">GSTIN:</span> ', c.gstin || '_______________', '<br/><span class="label">Contact:</span> ', c.phone, '</div>',
    '<div><span class="label">Email:</span> ', c.email, '<br/><span class="label">Date:</span> ', new Date().toLocaleDateString('en-IN'), '</div>',
    '</div>',
  ].join('')
}

// --- Commercial Invoice ---
function commercialInvoiceHtml(): string {
  return wrapHtml('Commercial Invoice', [
    '<h1>Commercial Invoice</h1><div class="subtitle">Tax Invoice / Export Invoice</div>',
    exporterHeader(),
    '<table><tr><th colspan="2">Consignee / Buyer Details</th></tr>',
    '<tr><td class="label">Consignee:</td><td>_______________</td></tr>',
    '<tr><td class="label">Address:</td><td>_______________</td></tr>',
    '<tr><td class="label">Country:</td><td>_______________</td></tr></table>',
    '<table><tr><th>#</th><th>Description of Goods</th><th>HS Code</th><th>Qty</th><th>Unit</th><th>Unit Price (USD)</th><th>Total (USD)</th></tr>',
    '<tr><td>1</td><td>_______________</td><td>_______________</td><td>___</td><td>___</td><td>___</td><td>___</td></tr></table>',
    '<table><tr><td class="label">Total Invoice Value (in words):</td><td>________________________________________</td></tr>',
    '<tr><td class="label">Currency:</td><td>USD</td></tr>',
    '<tr><td class="label">Payment Terms:</td><td>_______________</td></tr>',
    '<tr><td class="label">Port of Loading:</td><td>_______________</td></tr>',
    '<tr><td class="label">Port of Discharge:</td><td>_______________</td></tr>',
    '<tr><td class="label">Country of Origin:</td><td>India</td></tr>',
    '<tr><td class="label">Incoterms:</td><td>_______________</td></tr></table>',
    '<div class="signature"><div>Authorised Signatory</div><div>Seal / Stamp</div></div>',
    '<div class="footer-note">This is a computer-generated export commercial invoice. E. &amp; O.E.</div>',
  ].join(''))
}
export function generateCommercialInvoice() { downloadHtml(commercialInvoiceHtml(), 'commercial-invoice.html') }
export function printCommercialInvoice() { printHtml(commercialInvoiceHtml(), 'Commercial Invoice') }

// --- Packing List ---
function packingListHtml(): string {
  return wrapHtml('Packing List', [
    '<h1>Packing List</h1><div class="subtitle">Export Packing Specification</div>',
    exporterHeader(),
    '<table><tr><th colspan="2">Consignee Details</th></tr><tr><td class="label">Consignee:</td><td>_______________</td></tr><tr><td class="label">Address:</td><td>_______________</td></tr></table>',
    '<table><tr><th>#</th><th>Description</th><th>No. of Pkgs</th><th>Type</th><th>Net Wt (kg)</th><th>Gross Wt (kg)</th><th>Dimensions (cm)</th></tr>',
    '<tr><td>1</td><td>_______________</td><td>___</td><td>_______________</td><td>___</td><td>___</td><td>___</td></tr></table>',
    '<table><tr><td class="label">Total Packages:</td><td>_______________</td></tr><tr><td class="label">Total Net Weight:</td><td>_______________ kg</td></tr>',
    '<tr><td class="label">Total Gross Weight:</td><td>_______________ kg</td></tr><tr><td class="label">Shipping Marks:</td><td>_______________</td></tr>',
    '<tr><td class="label">Container No:</td><td>_______________</td></tr><tr><td class="label">Seal No:</td><td>_______________</td></tr></table>',
    '<div class="signature"><div>Authorised Signatory</div><div>Seal / Stamp</div></div>',
    '<div class="footer-note">This is a computer-generated packing list. E. &amp; O.E.</div>',
  ].join(''))
}
export function generatePackingList() { downloadHtml(packingListHtml(), 'packing-list.html') }
export function printPackingList() { printHtml(packingListHtml(), 'Packing List') }

// --- Proforma Invoice ---
function proformaInvoiceHtml(): string {
  return wrapHtml('Proforma Invoice', [
    '<h1>Proforma Invoice</h1><div class="subtitle">Quotation / Proforma Invoice for Export</div>',
    exporterHeader(),
    '<table><tr><th colspan="2">Buyer Details</th></tr><tr><td class="label">Buyer:</td><td>_______________</td></tr><tr><td class="label">Address:</td><td>_______________</td></tr></table>',
    '<table><tr><th>#</th><th>Description</th><th>HS Code</th><th>Qty</th><th>Unit Price (USD)</th><th>Total (USD)</th></tr>',
    '<tr><td>1</td><td>_______________</td><td>_______________</td><td>___</td><td>___</td><td>___</td></tr></table>',
    '<table><tr><td class="label">Total Value (USD):</td><td>_______________</td></tr><tr><td class="label">Validity:</td><td>_______________ days</td></tr>',
    '<tr><td class="label">Payment Terms:</td><td>_______________</td></tr><tr><td class="label">Delivery:</td><td>_______________</td></tr><tr><td class="label">Incoterms:</td><td>_______________</td></tr></table>',
    '<div class="signature"><div>Authorised Signatory</div><div>Seal / Stamp</div></div>',
    '<div class="footer-note">This is a computer-generated proforma invoice. E. &amp; O.E.</div>',
  ].join(''))
}
export function generateProformaInvoice() { downloadHtml(proformaInvoiceHtml(), 'proforma-invoice.html') }
export function printProformaInvoice() { printHtml(proformaInvoiceHtml(), 'Proforma Invoice') }

// --- Bill of Lading ---
function billOfLadingHtml(): string {
  return wrapHtml('Bill of Lading', [
    '<h1>Bill of Lading</h1><div class="subtitle">Ocean / Marine Bill of Lading</div>',
    '<table><tr><th colspan="2">Shipper / Exporter</th></tr><tr><td colspan="2">', c.name, '<br/>', c.addr1, ', ', c.addr2, '</td></tr>',
    '<tr><th colspan="2">Consignee</th></tr><tr><td colspan="2">_______________</td></tr>',
    '<tr><th colspan="2">Notify Party</th></tr><tr><td colspan="2">_______________</td></tr></table>',
    '<table><tr><th>Vessel</th><th>Voyage No.</th><th>Port of Loading</th><th>Port of Discharge</th></tr>',
    '<tr><td>_______________</td><td>_______________</td><td>_______________</td><td>_______________</td></tr></table>',
    '<table><tr><th>Marks &amp; Nos</th><th>No. of Pkgs</th><th>Description</th><th>Gross Wt (kg)</th><th>Measurement (cbm)</th></tr>',
    '<tr><td>_______________</td><td>___</td><td>_______________</td><td>___</td><td>___</td></tr></table>',
    '<table><tr><td class="label">Container No:</td><td>_______________</td></tr><tr><td class="label">Seal No:</td><td>_______________</td></tr>',
    '<tr><td class="label">Freight Charge:</td><td>Prepaid / Collect</td></tr><tr><td class="label">No. of Original B/L:</td><td>3 (Three)</td></tr>',
    '<tr><td class="label">Place &amp; Date of Issue:</td><td>_______________</td></tr></table>',
    '<div class="signature"><div>For the Carrier</div><div>Seal / Stamp</div></div>',
    '<div class="footer-note">This is a computer-generated bill of lading draft. E. &amp; O.E.</div>',
  ].join(''))
}
export function generateBillOfLading() { downloadHtml(billOfLadingHtml(), 'bill-of-lading.html') }
export function printBillOfLading() { printHtml(billOfLadingHtml(), 'Bill of Lading') }

// --- Air Waybill ---
function airWaybillHtml(): string {
  return wrapHtml('Air Waybill', [
    '<h1>Air Waybill (AWB)</h1><div class="subtitle">Master Air Waybill / House Air Waybill</div>',
    '<table><tr><th colspan="2">Shipper</th></tr><tr><td colspan="2">', c.name, '<br/>', c.addr1, ', ', c.addr2, '</td></tr>',
    '<tr><th colspan="2">Consignee</th></tr><tr><td colspan="2">_______________</td></tr></table>',
    '<table><tr><th>Airport of Departure</th><th>Airport of Destination</th><th>Flight / Date</th></tr>',
    '<tr><td>_______________</td><td>_______________</td><td>_______________</td></tr></table>',
    '<table><tr><th>No. of Pieces</th><th>Gross Wt</th><th>Rate Class</th><th>Chargeable Wt</th><th>Rate</th><th>Total</th></tr>',
    '<tr><td>___</td><td>___ kg</td><td>___</td><td>___ kg</td><td>___</td><td>___</td></tr></table>',
    '<table><tr><td class="label">Nature of Goods:</td><td>_______________</td></tr><tr><td class="label">AWB Number:</td><td>_______________</td></tr></table>',
    '<div class="signature"><div>Issued by (Carrier)</div><div>Seal / Stamp</div></div>',
    '<div class="footer-note">This is a computer-generated air waybill draft. E. &amp; O.E.</div>',
  ].join(''))
}
export function generateAirWaybill() { downloadHtml(airWaybillHtml(), 'air-waybill.html') }
export function printAirWaybill() { printHtml(airWaybillHtml(), 'Air Waybill') }

// --- Marine Insurance Certificate ---
function insuranceCertificateHtml(): string {
  return wrapHtml('Marine Insurance Certificate', [
    '<h1>Marine Insurance Certificate</h1><div class="subtitle">Cargo Insurance Certificate</div>',
    exporterHeader(),
    '<table><tr><th colspan="2">Consignee / Insured</th></tr><tr><td colspan="2">_______________</td></tr></table>',
    '<table><tr><td class="label">Policy No:</td><td>_______________</td></tr><tr><td class="label">Certificate No:</td><td>_______________</td></tr>',
    '<tr><td class="label">Insured Value:</td><td>_______________</td></tr><tr><td class="label">Currency:</td><td>USD</td></tr>',
    '<tr><td class="label">Vessel / Flight:</td><td>_______________</td></tr><tr><td class="label">Coverage:</td><td>Institute Cargo Clauses (A) / (B) / (C)</td></tr>',
    '<tr><td class="label">Transit:</td><td>Warehouse to Warehouse</td></tr></table>',
    '<div class="signature"><div>For Insurance Company</div><div>Seal / Stamp</div></div>',
    '<div class="footer-note">This is a computer-generated marine insurance certificate draft. E. &amp; O.E.</div>',
  ].join(''))
}
export function generateInsuranceCertificate() { downloadHtml(insuranceCertificateHtml(), 'insurance-certificate.html') }
export function printInsuranceCertificate() { printHtml(insuranceCertificateHtml(), 'Marine Insurance Certificate') }

// --- Fumigation Certificate ---
function fumigationCertificateHtml(): string {
  return wrapHtml('Fumigation Certificate', [
    '<h1>Fumigation Certificate</h1><div class="subtitle">ISPM-15 Fumigation Certificate for Wood Packaging</div>',
    exporterHeader(),
    '<table><tr><td class="label">Treatment Date:</td><td>_______________</td></tr><tr><td class="label">Fumigant Used:</td><td>Methyl Bromide / Phosphine</td></tr>',
    '<tr><td class="label">Temperature:</td><td>_______________ &deg;C</td></tr><tr><td class="label">Duration:</td><td>_______________ hours</td></tr>',
    '<tr><td class="label">Dosage:</td><td>_______________ g/m&sup3;</td></tr><tr><td class="label">Wood Packaging Type:</td><td>Pallet / Crate / Dunnage / Box</td></tr>',
    '<tr><td class="label">ISPM-15 Mark:</td><td>HT / MB</td></tr><tr><td class="label">Destination Country:</td><td>_______________</td></tr></table>',
    '<div class="signature"><div>Authorised Officer</div><div>Stamp</div></div>',
    '<div class="footer-note">This is a computer-generated fumigation certificate draft.</div>',
  ].join(''))
}
export function generateFumigationCertificate() { downloadHtml(fumigationCertificateHtml(), 'fumigation-certificate.html') }
export function printFumigationCertificate() { printHtml(fumigationCertificateHtml(), 'Fumigation Certificate') }

// --- Dangerous Goods Declaration ---
function dangerousGoodsDeclarationHtml(): string {
  return wrapHtml('Dangerous Goods Declaration', [
    '<h1>Dangerous Goods Declaration</h1><div class="subtitle">Shipper\'s Declaration for Dangerous Goods</div>',
    exporterHeader(),
    '<table><tr><td class="label">UN Number:</td><td>_______________</td></tr><tr><td class="label">Proper Shipping Name:</td><td>_______________</td></tr>',
    '<tr><td class="label">Class / Division:</td><td>_______________</td></tr><tr><td class="label">Packing Group:</td><td>I / II / III</td></tr>',
    '<tr><td class="label">Quantity:</td><td>_______________</td></tr><tr><td class="label">Packing Instruction:</td><td>_______________</td></tr>',
    '<tr><td class="label">Additional Handling:</td><td>_______________</td></tr></table>',
    '<div class="signature"><div>Shipper\'s Authorised Signatory</div><div>Stamp</div></div>',
    '<div class="footer-note">This is a computer-generated dangerous goods declaration draft.</div>',
  ].join(''))
}
export function generateDangerousGoodsDeclaration() { downloadHtml(dangerousGoodsDeclarationHtml(), 'dangerous-goods-declaration.html') }
export function printDangerousGoodsDeclaration() { printHtml(dangerousGoodsDeclarationHtml(), 'Dangerous Goods Declaration') }

// --- Certificate of Origin Checklist ---
function certificateOfOriginChecklistHtml(): string {
  return wrapHtml('Certificate of Origin Checklist', [
    '<h1>Certificate of Origin Checklist</h1><div class="subtitle">Non-Preferential Certificate of Origin</div>',
    exporterHeader(),
    '<div class="section-title">Required Details</div>',
    '<table><tr><td class="label">Exporter:</td><td>', c.name, '</td></tr><tr><td class="label">Consignee:</td><td>_______________</td></tr>',
    '<tr><td class="label">HS Code:</td><td>_______________</td></tr><tr><td class="label">Invoice No:</td><td>_______________</td></tr>',
    '<tr><td class="label">Country of Origin:</td><td>India</td></tr><tr><td class="label">Issuing Authority:</td><td>FIEO / Chamber of Commerce / EPC</td></tr></table>',
    '<div class="section-title">Checklist</div>',
    '<p style="font-size:11px;color:#555">1. COO application form filled and signed<br/>2. Original commercial invoice (signed)<br/>3. Packing list<br/>4. Self-declaration of origin<br/>5. Shipping bill / Bill of lading (if available)<br/>6. RCMC certificate copy<br/>7. Fee payment receipt</p>',
    '<div class="signature"><div>Authorised Signatory</div><div>Seal</div></div>',
    '<div class="footer-note">This is a computer-generated COO checklist.</div>',
  ].join(''))
}
export function generateCertificateOfOriginChecklist() { downloadHtml(certificateOfOriginChecklistHtml(), 'certificate-of-origin-checklist.html') }
export function printCertificateOfOriginChecklist() { printHtml(certificateOfOriginChecklistHtml(), 'Certificate of Origin Checklist') }

// --- Health & Sanitary Certificate ---
function healthSanitaryCertificateHtml(): string {
  return wrapHtml('Health & Sanitary Certificate', [
    '<h1>Health &amp; Sanitary Certificate</h1><div class="subtitle">Health Certificate for Food / Agricultural Products</div>',
    exporterHeader(),
    '<table><tr><td class="label">Product:</td><td>_______________</td></tr><tr><td class="label">Lot No / Batch No:</td><td>_______________</td></tr>',
    '<tr><td class="label">Quantity:</td><td>_______________</td></tr><tr><td class="label">Date of Manufacture:</td><td>_______________</td></tr>',
    '<tr><td class="label">Date of Expiry:</td><td>_______________</td></tr><tr><td class="label">Country of Origin:</td><td>India</td></tr>',
    '<tr><td class="label">Destination:</td><td>_______________</td></tr></table>',
    '<div class="section-title">Certificate of Health</div>',
    '<p style="font-size:11px">We hereby certify that the above products have been inspected and found to be wholesome, fit for human consumption, and comply with the sanitary standards of the importing country.</p>',
    '<div class="signature"><div>Authorised Officer / Veterinarian</div><div>Date &amp; Stamp</div></div>',
    '<div class="footer-note">This is a computer-generated health certificate draft.</div>',
  ].join(''))
}
export function generateHealthSanitaryCertificate() { downloadHtml(healthSanitaryCertificateHtml(), 'health-sanitary-certificate.html') }
export function printHealthSanitaryCertificate() { printHtml(healthSanitaryCertificateHtml(), 'Health & Sanitary Certificate') }

// --- Pre-Shipment Inspection Certificate ---
function psiCertificateHtml(): string {
  return wrapHtml('Pre-Shipment Inspection Certificate', [
    '<h1>Pre-Shipment Inspection (PSI) Certificate</h1><div class="subtitle">Quality &amp; Quantity Inspection Certificate</div>',
    exporterHeader(),
    '<table><tr><td class="label">Product:</td><td>_______________</td></tr><tr><td class="label">Quantity Inspected:</td><td>_______________</td></tr>',
    '<tr><td class="label">Date of Inspection:</td><td>_______________</td></tr><tr><td class="label">Place of Inspection:</td><td>_______________</td></tr>',
    '<tr><td class="label">P.O. / Contract No:</td><td>_______________</td></tr></table>',
    '<div class="section-title">Inspection Results</div>',
    '<p style="font-size:11px">We confirm that the above shipment has been inspected and found to comply with the specifications and quality standards as per the contract / purchase order.</p>',
    '<div class="signature"><div>Inspector / Agency</div><div>Seal / Stamp</div></div>',
    '<div class="footer-note">This is a computer-generated PSI certificate draft.</div>',
  ].join(''))
}
export function generatePSICertificate() { downloadHtml(psiCertificateHtml(), 'psi-certificate.html') }
export function printPSICertificate() { printHtml(psiCertificateHtml(), 'Pre-Shipment Inspection Certificate') }

// --- Halal Certificate Application ---
function halalCertificateHtml(): string {
  return wrapHtml('Halal Certificate Application', [
    '<h1>Halal Certificate Application</h1><div class="subtitle">Halal Certification for OIC / Islamic Countries</div>',
    exporterHeader(),
    '<table><tr><th colspan="2">Product Information</th></tr><tr><td class="label">Product Name:</td><td>_______________</td></tr>',
    '<tr><td class="label">Ingredients:</td><td>_______________</td></tr><tr><td class="label">Manufacturing Process:</td><td>_______________</td></tr>',
    '<tr><td class="label">Country of Origin:</td><td>India</td></tr></table>',
    '<table><tr><td class="label">Certifying Body:</td><td>_______________</td></tr><tr><td class="label">Application Date:</td><td>_______________</td></tr>',
    '<tr><td class="label">Halal Standard:</td><td>OIC / SMIIC / MUIS / JAKIM / Other</td></tr></table>',
    '<div class="signature"><div>Applicant Signature</div><div>Date</div></div>',
    '<div class="footer-note">This is a computer-generated halal certificate application form.</div>',
  ].join(''))
}
export function generateHalalCertificate() { downloadHtml(halalCertificateHtml(), 'halal-certificate-application.html') }
export function printHalalCertificate() { printHtml(halalCertificateHtml(), 'Halal Certificate Application') }

// --- US FDA Prior Notice Checklist ---
function fdaPriorNoticeChecklistHtml(): string {
  return wrapHtml('US FDA Prior Notice Checklist', [
    '<h1>US FDA Prior Notice Checklist</h1><div class="subtitle">Prior Notice of Imported Food (US FDA 21 CFR 1.276)</div>',
    exporterHeader(),
    '<div class="section-title">Required Information</div>',
    '<table><tr><td class="label">FDA Prior Notice (PN) No:</td><td>_______________</td></tr><tr><td class="label">Product Description:</td><td>_______________</td></tr>',
    '<tr><td class="label">Manufacturer:</td><td>_______________</td></tr><tr><td class="label">Grower / Shipper:</td><td>_______________</td></tr>',
    '<tr><td class="label">FDA Product Code:</td><td>_______________</td></tr><tr><td class="label">Entry Type:</td><td>Consumption / Warehouse / Transportation &amp; Export</td></tr>',
    '<tr><td class="label">Anticipated Arrival Date:</td><td>_______________</td></tr></table>',
    '<div class="section-title">FDA Checklist</div>',
    '<p style="font-size:11px;color:#555">&#9744; Prior notice submitted at least 2 hours before arrival by air/road<br/>&#9744; Prior notice submitted at least 4 hours before arrival by rail<br/>&#9744; Prior notice submitted at least 8 hours before arrival by vessel<br/>&#9744; FDA registration number of facility (if required)<br/>&#9744; Complete consignee and shipper details<br/>&#9744; Correct FDA product code identified</p>',
    '<div class="footer-note">This is a computer-generated FDA prior notice checklist. For reference only. Visit fda.gov for latest rules.</div>',
  ].join(''))
}
export function generateFDAPriorNoticeChecklist() { downloadHtml(fdaPriorNoticeChecklistHtml(), 'fda-prior-notice-checklist.html') }
export function printFDAPriorNoticeChecklist() { printHtml(fdaPriorNoticeChecklistHtml(), 'US FDA Prior Notice Checklist') }

// --- Safety Data Sheet ---
function safetyDataSheetHtml(): string {
  return wrapHtml('Safety Data Sheet', [
    '<h1>Safety Data Sheet (SDS / MSDS)</h1><div class="subtitle">Material Safety Data Sheet</div>',
    exporterHeader(),
    '<table><tr><td class="label">Product Identifier:</td><td>_______________</td></tr><tr><td class="label">UN Number:</td><td>_______________</td></tr>',
    '<tr><td class="label">CAS Number:</td><td>_______________</td></tr><tr><td class="label">Hazard Classification:</td><td>_______________</td></tr>',
    '<tr><td class="label">Signal Word:</td><td>Danger / Warning</td></tr><tr><td class="label">Physical State:</td><td>Solid / Liquid / Gas</td></tr>',
    '<tr><td class="label">Flash Point:</td><td>_______________ &deg;C</td></tr><tr><td class="label">Toxicological Data (LD50):</td><td>_______________</td></tr></table>',
    '<div class="signature"><div>Manufacturer / Supplier</div><div>Date</div></div>',
    '<div class="footer-note">This is a computer-generated SDS template. Ensure compliance with GHS Rev.9 and local regulations.</div>',
  ].join(''))
}
export function generateSafetyDataSheet() { downloadHtml(safetyDataSheetHtml(), 'safety-data-sheet.html') }
export function printSafetyDataSheet() { printHtml(safetyDataSheetHtml(), 'Safety Data Sheet') }

// --- EUR.1 Movement Certificate ---
function eur1CertificateHtml(): string {
  return wrapHtml('EUR.1 Movement Certificate', [
    '<h1>EUR.1 Movement Certificate</h1><div class="subtitle">Preferential Certificate of Origin for EU</div>',
    exporterHeader(),
    '<table><tr><td class="label">Exporter:</td><td>', c.name, '</td></tr><tr><td class="label">Consignee:</td><td>_______________</td></tr>',
    '<tr><td class="label">Country of Origin:</td><td>India</td></tr><tr><td class="label">Country of Destination:</td><td>_______________ (EU Member)</td></tr>',
    '<tr><td class="label">Means of Transport:</td><td>_______________</td></tr><tr><td class="label">Invoice No:</td><td>_______________</td></tr>',
    '<tr><td class="label">HS Code (6-digit):</td><td>_______________</td></tr></table>',
    '<table><tr><th>Marks &amp; Nos</th><th>No. &amp; Kind of Packages</th><th>Description of Goods</th><th>Gross Wt (kg)</th></tr>',
    '<tr><td>_______________</td><td>_______________</td><td>_______________</td><td>_______________</td></tr></table>',
    '<div class="signature"><div>Exporter\'s Declaration</div><div>Customs / Issuing Authority</div></div>',
    '<div class="footer-note">This is a computer-generated EUR.1 certificate draft. Must be endorsed by issuing authority.</div>',
  ].join(''))
}
export function generateEUR1Certificate() { downloadHtml(eur1CertificateHtml(), 'eur1-certificate.html') }
export function printEUR1Certificate() { printHtml(eur1CertificateHtml(), 'EUR.1 Movement Certificate') }

// --- SAFTA Certificate of Origin ---
function saftaCooHtml(): string {
  return wrapHtml('SAFTA Certificate of Origin', [
    '<h1>SAFTA Certificate of Origin</h1><div class="subtitle">South Asian Free Trade Area Certificate of Origin</div>',
    exporterHeader(),
    '<table><tr><td class="label">Exporter:</td><td>', c.name, '</td></tr><tr><td class="label">Consignee:</td><td>_______________</td></tr>',
    '<tr><td class="label">Country of Origin:</td><td>India</td></tr><tr><td class="label">Destination Country:</td><td>_______________ (SAARC)</td></tr>',
    '<tr><td class="label">HS Code:</td><td>_______________</td></tr><tr><td class="label">Invoice No:</td><td>_______________</td></tr></table>',
    '<table><tr><th>Marks &amp; Nos</th><th>No. of Packages</th><th>Description</th><th>Gross Wt</th></tr>',
    '<tr><td>_______________</td><td>_______________</td><td>_______________</td><td>_______________</td></tr></table>',
    '<div class="signature"><div>Exporter\'s Declaration</div><div>Issuing Authority</div></div>',
    '<div class="footer-note">This is a computer-generated SAFTA COO draft. Must be endorsed by issuing authority.</div>',
  ].join(''))
}
export function generateSAFTACOO() { downloadHtml(saftaCooHtml(), 'safta-coo.html') }
export function printSAFTACOO() { printHtml(saftaCooHtml(), 'SAFTA Certificate of Origin') }

// --- Arab League COO ---
function arabLeagueCooHtml(): string {
  return wrapHtml('Arab League COO', [
    '<h1>Arab League Certificate of Origin</h1><div class="subtitle">Arab League / GCC Certificate of Origin (AACO Form)</div>',
    exporterHeader(),
    '<table><tr><td class="label">Exporter:</td><td>', c.name, '</td></tr><tr><td class="label">Consignee:</td><td>_______________</td></tr>',
    '<tr><td class="label">Country of Origin:</td><td>India</td></tr><tr><td class="label">Country of Destination:</td><td>_______________ (Arab League)</td></tr>',
    '<tr><td class="label">HS Code:</td><td>_______________</td></tr><tr><td class="label">Invoice No:</td><td>_______________</td></tr>',
    '<tr><td class="label">Means of Transport:</td><td>_______________</td></tr></table>',
    '<div class="signature"><div>Exporter\'s Declaration</div><div>Chamber / Issuing Authority</div></div>',
    '<div class="footer-note">This is a computer-generated Arab League COO draft. Must be endorsed by issuing authority.</div>',
  ].join(''))
}
export function generateArabLeagueCOO() { downloadHtml(arabLeagueCooHtml(), 'arab-league-coo.html') }
export function printArabLeagueCOO() { printHtml(arabLeagueCooHtml(), 'Arab League Certificate of Origin') }

// --- LC Compliance Checklist ---
function lcComplianceChecklistHtml(): string {
  return wrapHtml('LC Compliance Checklist', [
    '<h1>LC Compliance Checklist</h1><div class="subtitle">Letter of Credit Compliance Checklist</div>',
    exporterHeader(),
    '<div class="section-title">LC Details</div>',
    '<table><tr><td class="label">LC No:</td><td>_______________</td></tr><tr><td class="label">Issuing Bank:</td><td>_______________</td></tr>',
    '<tr><td class="label">Advising Bank:</td><td>_______________</td></tr><tr><td class="label">LC Type:</td><td>Irrevocable / Confirmed / Transferable</td></tr>',
    '<tr><td class="label">LC Amount:</td><td>_______________</td></tr><tr><td class="label">Expiry Date:</td><td>_______________</td></tr>',
    '<tr><td class="label">Latest Shipment Date:</td><td>_______________</td></tr><tr><td class="label">Period for Presentation:</td><td>_______________ days after B/L</td></tr></table>',
    '<div class="section-title">Compliance Checklist</div>',
    '<p style="font-size:11px;color:#555">&#9744; Commercial Invoice (as per LC terms)<br/>&#9744; Bill of Lading (Full set, clean on board)<br/>&#9744; Packing List<br/>&#9744; Certificate of Origin<br/>&#9744; Insurance Policy/Certificate (if required)<br/>&#9744; Inspection Certificate (if required)<br/>&#9744; Beneficiary Certificate (if required)<br/>&#9744; All documents in compliance with UCP 600</p>',
    '<div class="footer-note">This is a computer-generated LC compliance checklist. Consult your bank for LC-specific requirements.</div>',
  ].join(''))
}
export function generateLCComplianceChecklist() { downloadHtml(lcComplianceChecklistHtml(), 'lc-compliance-checklist.html') }
export function printLCComplianceChecklist() { printHtml(lcComplianceChecklistHtml(), 'LC Compliance Checklist') }

// --- Bill of Exchange ---
function billOfExchangeHtml(): string {
  return wrapHtml('Bill of Exchange', [
    '<h1>Bill of Exchange</h1><div class="subtitle">Trade Draft / Bill of Exchange for Documentary Collection</div>',
    '<table><tr><td class="label">No:</td><td>_______________</td></tr><tr><td class="label">Date:</td><td>', new Date().toLocaleDateString('en-IN'), '</td></tr>',
    '<tr><td class="label">Amount:</td><td>_______________</td></tr><tr><td class="label">Place:</td><td>_______________</td></tr></table>',
    '<p style="font-size:12px;text-align:center;margin:20px 0;"><strong>At _______________ sight of this FIRST of Exchange (Second unpaid)</strong><br/>pay to the order of <strong>_______________</strong><br/>the sum of <strong>________________________________________</strong><br/>for value received.</p>',
    '<table><tr><td class="label">Drawee:</td><td>_______________</td></tr><tr><td class="label">Drawer:</td><td>', c.name, '</td></tr></table>',
    '<div class="signature"><div>Authorised Signatory</div><div>Seal / Stamp</div></div>',
    '<div class="footer-note">This is a computer-generated bill of exchange draft.</div>',
  ].join(''))
}
export function generateBillOfExchange() { downloadHtml(billOfExchangeHtml(), 'bill-of-exchange.html') }
export function printBillOfExchange() { printHtml(billOfExchangeHtml(), 'Bill of Exchange') }

// --- GST LUT Application ---
function gstLutApplicationHtml(): string {
  return wrapHtml('GST LUT Application', [
    '<h1>GST Letter of Undertaking (LUT)</h1><div class="subtitle">LUT for Zero-Rated Export Supplies (GST RFD-11)</div>',
    exporterHeader(),
    '<table><tr><td class="label">GSTIN:</td><td>', c.gstin || '_______________', '</td></tr><tr><td class="label">Financial Year:</td><td>_______________</td></tr>',
    '<tr><td class="label">Legal Name:</td><td>', c.name, '</td></tr><tr><td class="label">Principal Place of Business:</td><td>', c.addr1, ', ', c.addr2, '</td></tr></table>',
    '<div class="section-title">Undertaking</div>',
    '<p style="font-size:11px">I/We hereby undertake to comply with the provisions of Section 16(3) of the IGST Act, 2017 and Rule 96A of the CGST Rules, 2017. I/We agree to pay tax with interest if the goods are not exported within the prescribed period.</p>',
    '<div class="signature"><div>Authorised Signatory</div><div>Date &amp; Seal</div></div>',
    '<div class="footer-note">This is a computer-generated GST LUT application form. File online on GST portal.</div>',
  ].join(''))
}
export function generateGSTLUTApplication() { downloadHtml(gstLutApplicationHtml(), 'gst-lut-application.html') }
export function printGSTLUTApplication() { printHtml(gstLutApplicationHtml(), 'GST LUT Application') }

// --- RoDTEP / Drawback Claim ---
function rodtepDrawbackClaimHtml(): string {
  return wrapHtml('RoDTEP / Drawback Claim', [
    '<h1>RoDTEP / Duty Drawback Claim Form</h1><div class="subtitle">Remission of Duties and Taxes on Exported Products (RoDTEP)</div>',
    exporterHeader(),
    '<table><tr><td class="label">Shipping Bill No:</td><td>_______________</td></tr><tr><td class="label">Date:</td><td>_______________</td></tr>',
    '<tr><td class="label">Port of Export:</td><td>_______________</td></tr><tr><td class="label">FOB Value:</td><td>_______________</td></tr>',
    '<tr><td class="label">HS Code:</td><td>_______________</td></tr><tr><td class="label">RoDTEP Rate (%):</td><td>_______________</td></tr>',
    '<tr><td class="label">Claim Amount:</td><td>_______________</td></tr></table>',
    '<div class="section-title">Supporting Documents</div>',
    '<p style="font-size:11px;color:#555">&#9744; Copy of Shipping Bill (SB)<br/>&#9744; Commercial Invoice<br/>&#9744; Bank Realisation Certificate (BRC)<br/>&#9744; RoDTEP Application (on DGFT / ICEGATE)</p>',
    '<div class="footer-note">This is a computer-generated RoDTEP / drawback claim checklist. File claim on ICEGATE portal.</div>',
  ].join(''))
}
export function generateRoDTEPDrawbackClaim() { downloadHtml(rodtepDrawbackClaimHtml(), 'rodtep-drawback-claim.html') }
export function printRoDTEPDrawbackClaim() { printHtml(rodtepDrawbackClaimHtml(), 'RoDTEP / Drawback Claim') }

// --- BRC / FIRC Declaration ---
function brcFircDeclarationHtml(): string {
  return wrapHtml('BRC / FIRC Declaration', [
    '<h1>BRC / FIRC Declaration</h1><div class="subtitle">Bank Realisation Certificate / FIRC Declaration</div>',
    exporterHeader(),
    '<table><tr><td class="label">Exporter Name:</td><td>', c.name, '</td></tr><tr><td class="label">Bank Account No:</td><td>_______________</td></tr>',
    '<tr><td class="label">AD Bank Code:</td><td>_______________</td></tr><tr><td class="label">FIRC / BRC No:</td><td>_______________</td></tr>',
    '<tr><td class="label">Date of Realisation:</td><td>_______________</td></tr><tr><td class="label">Invoice No:</td><td>_______________</td></tr>',
    '<tr><td class="label">Shipping Bill No:</td><td>_______________</td></tr><tr><td class="label">Amount Realised (FC):</td><td>_______________</td></tr>',
    '<tr><td class="label">Amount Realised (INR):</td><td>_______________</td></tr><tr><td class="label">Exchange Rate:</td><td>_______________</td></tr></table>',
    '<div class="signature"><div>Authorised Signatory (Bank)</div><div>Bank Seal</div></div>',
    '<div class="footer-note">This is a computer-generated BRC/FIRC declaration form.</div>',
  ].join(''))
}
export function generateBRCFIRCDeclaration() { downloadHtml(brcFircDeclarationHtml(), 'brc-firc-declaration.html') }
export function printBRCFIRCDeclaration() { printHtml(brcFircDeclarationHtml(), 'BRC / FIRC Declaration') }

// --- Shipping Bill Checklist ---
function shippingBillChecklistHtml(): string {
  return wrapHtml('Shipping Bill Checklist', [
    '<h1>Shipping Bill Checklist</h1><div class="subtitle">Customs Shipping Bill Preparation Checklist</div>',
    exporterHeader(),
    '<div class="section-title">Required Documents</div>',
    '<p style="font-size:11px;color:#555">&#9744; Shipping Bill (SB) filing on ICEGATE<br/>&#9744; Commercial Invoice (signed)<br/>&#9744; Packing List<br/>&#9744; Bill of Lading / Air Waybill<br/>&#9744; Export Declaration (ED) form<br/>&#9744; ARE-1 (for excisable goods, if applicable)<br/>&#9744; RCMC Certificate<br/>&#9744; Certificate of Origin (if required)<br/>&#9744; Insurance Certificate<br/>&#9744; Fumigation Certificate (if wooden packaging)<br/>&#9744; GMP / Health Certificate (for food/pharma)<br/>&#9744; Letter of Credit (if applicable)</p>',
    '<div class="footer-note">This is a computer-generated shipping bill checklist. Ensure all documents match customs requirements.</div>',
  ].join(''))
}
export function generateShippingBillChecklist() { downloadHtml(shippingBillChecklistHtml(), 'shipping-bill-checklist.html') }
export function printShippingBillChecklist() { printHtml(shippingBillChecklistHtml(), 'Shipping Bill Checklist') }

// --- Export Readiness Checklist ---
function exportReadinessChecklistHtml(): string {
  return wrapHtml('Export Readiness Checklist', [
    '<h1>Export Readiness Checklist</h1><div class="subtitle">Complete Export Readiness Checklist for New Exporters</div>',
    exporterHeader(),
    '<div class="section-title">Prerequisites</div>',
    '<p style="font-size:11px;color:#555">&#9744; IEC obtained from DGFT<br/>&#9744; GST Registration completed<br/>&#9744; PAN Card linked<br/>&#9744; AD Category Bank Account opened<br/>&#9744; RCMC applied / obtained<br/>&#9744; Product identified for export<br/>&#9744; HS Code identified for product<br/>&#9744; Target market / country identified<br/>&#9744; Buyer / Importer identified<br/>&#9744; Payment terms agreed (LC / TT / DA)<br/>&#9744; Packaging compliance checked<br/>&#9744; Shipping line / freight forwarder contacted<br/>&#9744; Customs broker (CHA) appointed<br/>&#9744; Export insurance arranged<br/>&#9744; All documents prepared &amp; verified</p>',
    '<div class="signature"><div>Exporter\'s Signature</div><div>Date</div></div>',
    '<div class="footer-note">This is a computer-generated export readiness checklist. Use as a reference to ensure compliance.</div>',
  ].join(''))
}
export function generateExportReadinessChecklist() { downloadHtml(exportReadinessChecklistHtml(), 'export-readiness-checklist.html') }
export function printExportReadinessChecklist() { printHtml(exportReadinessChecklistHtml(), 'Export Readiness Checklist') }

// Maps for DocumentSection lookup
export const documentGenerators: Record<string, () => void> = {
  'commercial-invoice.html': generateCommercialInvoice,
  'packing-list.html': generatePackingList,
  'proforma-invoice.html': generateProformaInvoice,
  'bill-of-lading.html': generateBillOfLading,
  'air-waybill.html': generateAirWaybill,
  'insurance-certificate.html': generateInsuranceCertificate,
  'fumigation-certificate.html': generateFumigationCertificate,
  'dangerous-goods-declaration.html': generateDangerousGoodsDeclaration,
  'certificate-of-origin-checklist.html': generateCertificateOfOriginChecklist,
  'health-sanitary-certificate.html': generateHealthSanitaryCertificate,
  'psi-certificate.html': generatePSICertificate,
  'halal-certificate-application.html': generateHalalCertificate,
  'fda-prior-notice-checklist.html': generateFDAPriorNoticeChecklist,
  'safety-data-sheet.html': generateSafetyDataSheet,
  'eur1-certificate.html': generateEUR1Certificate,
  'safta-coo.html': generateSAFTACOO,
  'arab-league-coo.html': generateArabLeagueCOO,
  'lc-compliance-checklist.html': generateLCComplianceChecklist,
  'bill-of-exchange.html': generateBillOfExchange,
  'gst-lut-application.html': generateGSTLUTApplication,
  'rodtep-drawback-claim.html': generateRoDTEPDrawbackClaim,
  'brc-firc-declaration.html': generateBRCFIRCDeclaration,
  'shipping-bill-checklist.html': generateShippingBillChecklist,
  'export-readiness-checklist.html': generateExportReadinessChecklist,
}

export const documentPrinters: Record<string, () => void> = {
  'commercial-invoice.html': printCommercialInvoice,
  'packing-list.html': printPackingList,
  'proforma-invoice.html': printProformaInvoice,
  'bill-of-lading.html': printBillOfLading,
  'air-waybill.html': printAirWaybill,
  'insurance-certificate.html': printInsuranceCertificate,
  'fumigation-certificate.html': printFumigationCertificate,
  'dangerous-goods-declaration.html': printDangerousGoodsDeclaration,
  'certificate-of-origin-checklist.html': printCertificateOfOriginChecklist,
  'health-sanitary-certificate.html': printHealthSanitaryCertificate,
  'psi-certificate.html': printPSICertificate,
  'halal-certificate-application.html': printHalalCertificate,
  'fda-prior-notice-checklist.html': printFDAPriorNoticeChecklist,
  'safety-data-sheet.html': printSafetyDataSheet,
  'eur1-certificate.html': printEUR1Certificate,
  'safta-coo.html': printSAFTACOO,
  'arab-league-coo.html': printArabLeagueCOO,
  'lc-compliance-checklist.html': printLCComplianceChecklist,
  'bill-of-exchange.html': printBillOfExchange,
  'gst-lut-application.html': printGSTLUTApplication,
  'rodtep-drawback-claim.html': printRoDTEPDrawbackClaim,
  'brc-firc-declaration.html': printBRCFIRCDeclaration,
  'shipping-bill-checklist.html': printShippingBillChecklist,
  'export-readiness-checklist.html': printExportReadinessChecklist,
}
