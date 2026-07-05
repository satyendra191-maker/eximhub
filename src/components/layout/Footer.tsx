import { siteConfig } from '@/config/site'
import { journeySteps } from '@/config/journey'
import { portals } from '@/config/portals'

const quickLinks = portals.slice(0, 6)

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      <div className="exim-container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-sm font-bold text-primary-foreground shadow-sm">
                E
              </div>
              <span className="text-lg font-bold text-foreground">
                {siteConfig.shortName}
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteConfig.tagline} — EximHub is an independent navigation platform that organizes export-related information and links to official and industry resources.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-foreground">Government Resources</h3>
            <ul className="space-y-3">
              {quickLinks.map((portal) => (
                <li key={portal.id}>
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm transition-colors"
                  >
                    {portal.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-foreground">Export Journey</h3>
            <ul className="space-y-3">
              {journeySteps.map((step) => (
                <li key={step.step}>
                  <a
                    href="#journey"
                    className="text-muted-foreground hover:text-foreground hover:underline text-sm transition-colors"
                  >
                    {step.step}. {step.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-foreground">EximHub</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block font-medium text-foreground">Address</span>
                <p className="text-muted-foreground">{siteConfig.footer.address}</p>
              </li>
              <li>
                <span className="block font-medium text-foreground">Email</span>
                <a
                  href={`mailto:${siteConfig.footer.email}`}
                  className="text-muted-foreground hover:text-foreground hover:underline"
                >
                  {siteConfig.footer.email || 'Verify on official website'}
                </a>
              </li>
              <li>
                <span className="block font-medium text-foreground">Phone</span>
                <p className="text-muted-foreground">{siteConfig.footer.phone || 'Verify on official website'}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.name} — Last verified: {siteConfig.lastVerified}
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
      </div>
    </footer>
  )
}
