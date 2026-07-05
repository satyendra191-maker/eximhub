import { motion } from 'framer-motion'
import {
  ExternalLink, Star, Share2, Link,
  FileText, Ship, Search, BarChart3, Sprout,
  Globe, Building2, MapPin, PieChart, TrendingUp,
  Package, Shield, SearchCheck,
} from 'lucide-react'
import type { ElementType } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface ServiceResource {
  id: string
  name: string
  shortName?: string
  acronym?: string
  icon: string
  capabilitySummary: string
  description: string
  trustClassification: 'OFFICIAL' | 'VERIFIED' | 'REGULATORY' | 'EXPORT_BODY' | 'FINANCIAL' | 'CERTIFICATION'
  category: string
  pricing: 'Free' | 'Paid' | 'Application Fee' | 'Transaction Based' | 'Subscription' | 'Government Fee' | 'Contact for Pricing'
  ownership: 'GOVT.' | 'PRIVATE' | 'ASSOCIATION' | 'INTERNATIONAL' | 'BANK' | 'REGULATOR' | 'EPC' | 'PSU'
  officialWebsite: string
  internalDetailsRoute: string
  contactInfo?: {
    phone?: string
    email?: string
    headOffice?: string
    whatsapp?: string
  }
  expertise?: string[]
  services?: string[]
  verificationStatus: 'verified' | 'pending' | 'unverified'
  lastVerified: string
}

const TRUST_BADGE_CONFIG = {
  'OFFICIAL': { label: 'OFFICIAL', variant: 'default' as const, className: 'bg-primary text-primary-foreground' },
  'VERIFIED': { label: 'VERIFIED', variant: 'secondary' as const, className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
  'REGULATORY': { label: 'REGULATORY', variant: 'outline' as const, className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
  'EXPORT_BODY': { label: 'EXPORT PROMOTION', variant: 'outline' as const, className: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' },
  'FINANCIAL': { label: 'FINANCIAL INSTITUTION', variant: 'outline' as const, className: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400' },
  'CERTIFICATION': { label: 'CERTIFICATION BODY', variant: 'outline' as const, className: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' },
}

const getTrustBadgeConfig = (classification: string) => TRUST_BADGE_CONFIG[classification as keyof typeof TRUST_BADGE_CONFIG] || TRUST_BADGE_CONFIG['OFFICIAL']

const iconMap: Record<string, ElementType> = {
  FileText, Ship, Search, BarChart3, Sprout,
  Globe, Building2, MapPin, PieChart, TrendingUp,
  Package, Shield, SearchCheck,
}

export interface ServiceCardProps {
  service: ServiceResource
  showActions?: boolean
  showTrustBadge?: boolean
  showMetadata?: boolean
  onViewDetails?: (service: ServiceResource) => void
  onLaunchWebsite?: (service: ServiceResource) => void
  onBookmark?: (service: ServiceResource) => void
  className?: string
}

export function ServiceCard({
  service,
  showActions = true,
  showTrustBadge = true,
  showMetadata = true,
  onViewDetails,
  onLaunchWebsite,
  onBookmark,
  className,
}: ServiceCardProps) {
  const trustBadge = getTrustBadgeConfig(service.trustClassification)
  const Icon = iconMap[service.icon] || Building2

  const handleLaunchWebsite = () => {
    if (onLaunchWebsite) {
      onLaunchWebsite(service)
    } else {
      window.open(service.officialWebsite, '_blank', 'noopener noreferrer')
    }
  }

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(service)
    } else {
      window.location.hash = service.internalDetailsRoute
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg border-border/50">
        <div className="p-5 pb-3">
          <div className="flex items-start gap-3 mb-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg font-semibold leading-tight mb-1">
                {service.name}
              </CardTitle>
              {service.acronym && (
                <p className="text-sm text-muted-foreground font-medium">
                  ({service.acronym})
                </p>
              )}
              <p className="text-sm text-primary font-medium mt-1 leading-snug">
                {service.capabilitySummary}
              </p>
            </div>
          </div>
        </div>

        {showTrustBadge && (
          <div className="px-5 mb-3">
            <Badge
              variant="outline"
              className={cn('text-xs font-medium', trustBadge.className)}
            >
              {trustBadge.label}
            </Badge>
          </div>
        )}

        <div className="px-5 mb-4">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {service.description}
          </p>
        </div>

        {showMetadata && (
          <div className="px-5 mb-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                {service.category}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {service.pricing}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {service.ownership}
              </Badge>
            </div>
          </div>
        )}

        {showActions && (
          <div className="px-5 pb-5">
            <div className="flex gap-2 mb-3">
              <Button
                variant="default"
                size="sm"
                className="flex-1"
                onClick={handleViewDetails}
              >
                View Details & Contact
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={handleLaunchWebsite}
              >
                <ExternalLink className="mr-1 h-3 w-3" />
                Launch Website
              </Button>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => onBookmark?.(service)}
                aria-label="Bookmark this service"
              >
                <Star className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                aria-label="Share this service"
              >
                <Share2 className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                aria-label="Copy link"
              >
                <Link className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        )}

        <div className="px-5 pb-3 pt-2 border-t">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Verified: {service.lastVerified}</span>
            <Badge variant={service.verificationStatus === 'verified' ? 'default' : 'outline'} className="text-xs">
              {service.verificationStatus}
            </Badge>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
