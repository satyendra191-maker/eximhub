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
    <footer className="bg-gradient-to-b from-exim-bg-primary to-exim-bg-secondary/50 border-t border-exim-border/50">
      <div className="exim-container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-exim-government text-sm font-bold text-white exim-shadow-button">
                E
              </div>
              <span className="text-lg font-bold exim-text-primary">
                {siteConfig.shortName}
              </span>
            </a>
            <p className="text-sm exim-text-secondary">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-exim-text-muted exim-button-outline rounded-lg px-3 py-1.5 text-xs font-medium hover:exim-text-primary transition-all"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold exim-text-primary">Government Resources</h3>
            <ul className="space-y-3">
              {quickLinks.map((portal) => (
                <li key={portal.id}>
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exim-text-secondary hover:exim-text-primary hover:underline text-sm transition-colors"
                  >
                    {portal.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold exim-text-primary">Export Journey</h3>
            <ul className="space-y-3">
              {journeySteps.map((step) => (
                <li key={step.step}>
                  <a
                    href="#journey"
                    className="exim-text-secondary hover:exim-text-primary hover:underline text-sm transition-colors"
                  >
                    {step.step}. {step.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold exim-text-primary">Support</h3>
            <ul className="space-y-4 text-sm exim-text-secondary">
              <li>
                <span className="block font-medium exim-text-primary">Address</span>
                <p>{siteConfig.footer.address}</p>
              </li>
              <li>
                <span className="block font-medium exim-text-primary">Email</span>
                <a
                  href={`mailto:${siteConfig.footer.email}`}
                  className="exim-text-secondary hover:exim-text-primary hover:underline"
                >
                  {siteConfig.footer.email || 'Verify on official website'}
                </a>
              </li>
              <li>
                <span className="block font-medium exim-text-primary">Phone</span>
                <p>{siteConfig.footer.phone || 'Verify on official website'}</p>
              </li>
              <li>
                <a
                  href="#"
                  className="exim-text-secondary hover:exim-text-primary hover:underline block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="exim-text-secondary hover:exim-text-primary hover:underline block"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-exim-border/50 pt-8 text-center">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between">
            <p className="exim-text-muted text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.name} | Last Verified: {siteConfig.lastVerified}
            </p>
            <div className="flex gap-4 text-sm exim-text-muted">
              <span className="exim-button-secondary rounded-full px-3 py-1">
                Free to Use
              </span>
              <span className="exim-button-secondary rounded-full px-3 py-1">
                Government Platform
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
