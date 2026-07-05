import { siteConfig } from '@/config/site'

const sitemapGroups = [
  {
    title: 'Government',
    links: [
      { label: 'DGFT & IEC', href: '#portals' },
      { label: 'ICEGATE Customs', href: '#hs-code-search' },
      { label: 'APEDA', href: '#portals' },
      { label: 'EPCs Directory', href: '#epc' },
      { label: 'Commodity Boards', href: '#commodity' },
      { label: 'ODOP Gateway', href: '#odop' },
    ],
  },
  {
    title: 'Trade & Finance',
    links: [
      { label: 'Trade Intelligence', href: '#trade-intelligence' },
      { label: 'Export Banking', href: '#banking' },
      { label: 'ECGC Insurance', href: '#portals' },
      { label: 'Portal Comparison', href: '#compare' },
      { label: 'HS Code Search', href: '#hs-code-search' },
    ],
  },
  {
    title: 'Logistics & Compliance',
    links: [
      { label: 'Shipping Lines', href: '#shipping' },
      { label: 'CHA Directory', href: '#cha' },
      { label: 'Transporters', href: '#transporters' },
      { label: 'Packaging Services', href: '#packaging' },
      { label: 'Compliance', href: '#compliance' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Export Journey', href: '#journey' },
      { label: 'Checklists', href: '#checklist' },
      { label: 'Document Generator', href: '#downloads' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Suggest Resource', href: '#suggest' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-muted/30">
      <div className="exim-container py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-sm font-bold text-primary-foreground shadow-sm">
                E
              </div>
              <span className="text-lg font-bold text-foreground">
                {siteConfig.shortName}
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteConfig.tagline} — A curated, independent navigation platform
              organizing export resources for Indian businesses.
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>

          {sitemapGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border/50 pt-6 text-center sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            Last verified: {siteConfig.lastVerified}
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>Independent navigation platform</span>
            <span aria-hidden="true">|</span>
            <span>Not affiliated with any government agency</span>
            <span aria-hidden="true">|</span>
            <span>Always verify on official websites</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
