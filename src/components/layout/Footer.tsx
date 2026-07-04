import { siteConfig } from '@/config/site'
import { journeySteps } from '@/config/journey'
import { portals } from '@/config/portals'

const quickLinks = portals.slice(0, 6)

const socialLinks = [
  { name: 'Twitter', href: siteConfig.social.twitter },
  { name: 'LinkedIn', href: siteConfig.social.linkedin },
  { name: 'Facebook', href: siteConfig.social.facebook },
  { name: 'YouTube', href: siteConfig.social.youtube },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                S
              </div>
              <span className="text-lg font-bold tracking-tight">
                {siteConfig.shortName}
              </span>
            </a>
            <p className="text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xs font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((portal) => (
                <li key={portal.id}>
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {portal.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Export Journey</h3>
            <ul className="space-y-2">
              {journeySteps.map((step) => (
                <li key={step.step}>
                  <a
                    href="#journey"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {step.step}. {step.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact & Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="block font-medium text-foreground">Address</span>
                {siteConfig.address}
              </li>
              <li>
                <span className="block font-medium text-foreground">Email</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="block font-medium text-foreground">Phone</span>
                {siteConfig.phone}
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:text-foreground"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            {siteConfig.footer.madeIn}
          </p>
          <p className="mb-2">
            &copy; {new Date().getFullYear()} {siteConfig.name} | Last
            Updated: {siteConfig.lastUpdated} | Version {siteConfig.version}
          </p>
          <p className="max-w-3xl mx-auto text-xs">
            {siteConfig.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
