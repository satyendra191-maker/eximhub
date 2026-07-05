import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ServiceCard, ServiceResource } from '@/components/ui/ServiceCard';

export interface ServiceCategory {
  value: string;
  label: string;
  color?: string;
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  { value: 'All', label: 'All' },
  { value: 'Government Portal', label: 'Government Portals' },
  { value: 'EPC', label: 'Export Promotion Councils' },
  { value: 'ODOP', label: 'ODOP Products' },
  { value: 'Trade Intelligence', label: 'Trade Intelligence' },
  { value: 'Banking & Trade Finance', label: 'Banking & Finance' },
  { value: 'Customs & Clearing', label: 'Customs & Clearing' },
  { value: 'Shipping & Logistics', label: 'Shipping & Logistics' },
  { value: 'Export Insurance', label: 'Export Insurance' },
  { value: 'Compliance', label: 'Standards & Compliance' },
  { value: 'Packaging', label: 'Packaging' },
  { value: 'Ports', label: 'Ports & Logistics' },
  { value: 'Transport', label: 'Transport' },
]

const TRUST_CLASSIFICATIONS = [
  'All', 'OFFICIAL', 'VERIFIED', 'REGULATORY', 'EXPORT_BODY', 'FINANCIAL', 'CERTIFICATION',
]

const PRICING_OPTIONS = [
  'All', 'Free', 'Paid', 'Application Fee', 'Transaction Based', 'Subscription', 'Government Fee', 'Contact for Pricing',
]

const OWNERSHIP_OPTIONS = [
  'All', 'GOVT.', 'PRIVATE', 'ASSOCIATION', 'INTERNATIONAL', 'BANK', 'REGULATOR', 'EPC', 'PSU',
]

const PORTALS_DATA: ServiceResource[] = []
const EPCS_DATA: ServiceResource[] = []

export const globalServices: ServiceResource[] = [...PORTALS_DATA, ...EPCS_DATA]

export function ServiceDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [trustFilter, setTrustFilter] = useState('All');
  const [pricingFilter, setPricingFilter] = useState('All');
  const [ownershipFilter, setOwnershipFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredServices = useMemo(() => {
    return globalServices.filter((service) => {
      const matchesSearch = 
        !searchQuery ||
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.capabilitySummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.acronym?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = categoryFilter === 'All' || service.category === categoryFilter;
      const matchesTrust = trustFilter === 'All' || service.trustClassification === trustFilter;
      const matchesPricing = pricingFilter === 'All' || service.pricing === pricingFilter;
      const matchesOwnership = ownershipFilter === 'All' || service.ownership === ownershipFilter;

      return matchesSearch && matchesCategory && matchesTrust && matchesPricing && matchesOwnership;
    });
  }, [searchQuery, categoryFilter, trustFilter, pricingFilter, ownershipFilter]);

  const handleServiceClick = (service: ServiceResource) => {
    window.location.hash = service.internalDetailsRoute;
  };

  const clearFilters = () => {
    setSearchQuery('');
    setCategoryFilter('All');
    setTrustFilter('All');
    setPricingFilter('All');
    setOwnershipFilter('All');
  };

  const hasActiveFilters = searchQuery || 
    categoryFilter !== 'All' || 
    trustFilter !== 'All' || 
    pricingFilter !== 'All' || 
    ownershipFilter !== 'All';

  return (
    <section id="services-directory" className="scroll-mt-20 py-20 bg-muted/30">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Comprehensive Service Directory
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore 600+ government services, export promotion councils, and trade intelligence platforms
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search services, HS codes, schemes, export stages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Advanced Filters
              {hasActiveFilters && (
                <Badge variant="secondary" className="ml-1 text-xs">
                  {[
                    categoryFilter !== 'All',
                    trustFilter !== 'All',
                    pricingFilter !== 'All',
                    ownershipFilter !== 'All',
                  ].filter(Boolean).length}
                </Badge>
              )}
            </Button>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground"
              >
                <X className="mr-1 h-4 w-4" />
                Clear all
              </Button>
            )}
          </div>
        </div>

        {showFilters && (
          <div className="mb-8 p-6 border rounded-lg bg-muted/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <div className="flex flex-wrap gap-1">
                  {SERVICE_CATEGORIES.map((category) => (
                    <Badge
                      key={category.value}
                      variant={categoryFilter === category.value ? 'default' : 'outline'}
                      className="cursor-pointer text-xs"
                      onClick={() => setCategoryFilter(category.value)}
                    >
                      {category.label}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Trust Status</label>
                <div className="flex flex-wrap gap-1">
                  {TRUST_CLASSIFICATIONS.map((classification) => (
                    <Badge
                      key={classification}
                      variant={trustFilter === classification ? 'default' : 'outline'}
                      className="cursor-pointer text-xs"
                      onClick={() => setTrustFilter(classification)}
                    >
                      {classification}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Pricing</label>
                <div className="flex flex-wrap gap-1">
                  {PRICING_OPTIONS.map((pricing) => (
                    <Badge
                      key={pricing}
                      variant={pricingFilter === pricing ? 'default' : 'outline'}
                      className="cursor-pointer text-xs"
                      onClick={() => setPricingFilter(pricing)}
                    >
                      {pricing}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Ownership</label>
                <div className="flex flex-wrap gap-1">
                  {OWNERSHIP_OPTIONS.map((ownership) => (
                    <Badge
                      key={ownership}
                      variant={ownershipFilter === ownership ? 'default' : 'outline'}
                      className="cursor-pointer text-xs"
                      onClick={() => setOwnershipFilter(ownership)}
                    >
                      {ownership}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredServices.length} services
          {hasActiveFilters && ' (filtered)'}
        </div>

        <AnimatePresence mode="wait">
          {filteredServices.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <p className="text-lg text-muted-foreground mb-2">No services found</p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ServiceCard
                    service={service}
                    onViewDetails={handleServiceClick}
                    showActions={true}
                    showTrustBadge={true}
                    showMetadata={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
