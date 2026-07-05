import { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ServiceCard, ServiceResource } from '@/components/ui/ServiceCard';
import { motion, AnimatePresence } from 'framer-motion';

export interface ServiceFilter {
  category?: string;
  trustClassification?: string;
  pricing?: string;
  ownership?: string;
  verificationStatus?: string;
  searchQuery?: string;
}

export interface ServiceDirectoryProps {
  services: ServiceResource[];
  onServiceSelect?: (service: ServiceResource) => void;
  showFilters?: boolean;
  showSearch?: boolean;
  categories?: string[];
  trustClassifications?: string[];
  pricingOptions?: string[];
  ownershipOptions?: string[];
  className?: string;
}

export function ServiceDirectory({
  services,
  onServiceSelect,
  showFilters = true,
  showSearch = true,
  categories,
  trustClassifications,
  pricingOptions,
  ownershipOptions,
  className,
}: ServiceDirectoryProps) {
  const [filters, setFilters] = useState<ServiceFilter>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          service.name.toLowerCase().includes(query) ||
          service.capabilitySummary.toLowerCase().includes(query) ||
          service.description.toLowerCase().includes(query) ||
          service.acronym?.toLowerCase().includes(query) ||
          service.category.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.category && filters.category !== 'All' && service.category !== filters.category) {
        return false;
      }

      // Trust classification filter
      if (filters.trustClassification && filters.trustClassification !== 'All' && service.trustClassification !== filters.trustClassification) {
        return false;
      }

      // Pricing filter
      if (filters.pricing && filters.pricing !== 'All' && service.pricing !== filters.pricing) {
        return false;
      }

      // Ownership filter
      if (filters.ownership && filters.ownership !== 'All' && service.ownership !== filters.ownership) {
        return false;
      }

      // Verification status filter
      if (filters.verificationStatus && filters.verificationStatus !== 'All' && service.verificationStatus !== filters.verificationStatus) {
        return false;
      }

      return true;
    });
  }, [services, filters, searchQuery]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setFilters(prev => ({ ...prev, searchQuery: value }));
  };

  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({ ...prev, category: category === 'All' ? undefined : category }));
  };

  const handleTrustClassificationChange = (classification: string) => {
    setFilters(prev => ({ ...prev, trustClassification: classification === 'All' ? undefined : classification }));
  };

  const handlePricingChange = (pricing: string) => {
    setFilters(prev => ({ ...prev, pricing: pricing === 'All' ? undefined : pricing }));
  };

  const handleOwnershipChange = (ownership: string) => {
    setFilters(prev => ({ ...prev, ownership: ownership === 'All' ? undefined : ownership }));
  };

  const clearFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  const hasActiveFilters = Object.keys(filters).length > 0 || searchQuery;

  return (
    <div className={className}>
      {/* Search Bar */}
      {showSearch && (
        <div className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search services by name, capability, description..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      )}

      {/* Filter Toggle */}
      {showFilters && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-1 text-xs">
                {
                  Object.values(filters).filter(v => v && v !== 'All').length +
                  (searchQuery ? 1 : 0)
                }
              </Badge>
            )}
          </Button>

          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="flex items-center gap-1 text-muted-foreground"
            >
              <X className="h-4 w-4" />
              Clear filters
            </Button>
          )}
        </div>
      )}

      {/* Expandable Filters */}
      {showFilters && isFilterOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-6 p-4 border rounded-lg bg-muted/20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Category Filter */}
            {categories && (
              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <div className="flex flex-wrap gap-1">
                  {(categories as any).includes('All') && (
                    <Badge
                      variant={filters.category === 'All' ? 'default' : 'outline'}
                      className="cursor-pointer text-xs"
                      onClick={() => handleCategoryChange('All')}
                    >
                      All
                    </Badge>
                  )}
                  {(categories as any)
                    .filter((c: string) => c !== 'All')
                    .map((category: string) => (
                      <Badge
                        key={category}
                        variant={filters.category === category ? 'default' : 'outline'}
                        className="cursor-pointer text-xs"
                        onClick={() => handleCategoryChange(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                </div>
              </div>
            )}

            {/* Trust Classification Filter */}
            {trustClassifications && (
              <div>
                <label className="text-sm font-medium mb-2 block">Trust Status</label>
                <div className="flex flex-wrap gap-1">
                  {(trustClassifications as any).includes('All') && (
                    <Badge
                      variant={filters.trustClassification === 'All' ? 'default' : 'outline'}
                      className="cursor-pointer text-xs"
                      onClick={() => handleTrustClassificationChange('All')}
                    >
                      All
                    </Badge>
                  )}
                  {(trustClassifications as any)
                    .filter((c: string) => c !== 'All')
                    .slice(0, 3)
                    .map((classification: string) => (
                      <Badge
                        key={classification}
                        variant={filters.trustClassification === classification ? 'default' : 'outline'}
                        className="cursor-pointer text-xs"
                        onClick={() => handleTrustClassificationChange(classification)}
                      >
                        {classification}
                      </Badge>
                    ))}
                </div>
              </div>
            )}

            {/* Pricing Filter */}
            {pricingOptions && (
              <div>
                <label className="text-sm font-medium mb-2 block">Pricing</label>
                <div className="flex flex-wrap gap-1">
                  {(pricingOptions as any).includes('All') && (
                    <Badge
                      variant={filters.pricing === 'All' ? 'default' : 'outline'}
                      className="cursor-pointer text-xs"
                      onClick={() => handlePricingChange('All')}
                    >
                      All
                    </Badge>
                  )}
                  {(pricingOptions as any)
                    .filter((p: string) => p !== 'All')
                    .slice(0, 2)
                    .map((pricing: string) => (
                      <Badge
                        key={pricing}
                        variant={filters.pricing === pricing ? 'default' : 'outline'}
                        className="cursor-pointer text-xs"
                        onClick={() => handlePricingChange(pricing)}
                      >
                        {pricing}
                      </Badge>
                    ))}
                </div>
              </div>
            )}

            {/* Ownership Filter */}
            {ownershipOptions && (
              <div>
                <label className="text-sm font-medium mb-2 block">Ownership</label>
                <div className="flex flex-wrap gap-1">
                  {(ownershipOptions as any).includes('All') && (
                    <Badge
                      variant={filters.ownership === 'All' ? 'default' : 'outline'}
                      className="cursor-pointer text-xs"
                      onClick={() => handleOwnershipChange('All')}
                    >
                      All
                    </Badge>
                  )}
                  {(ownershipOptions as any)
                    .filter((o: string) => o !== 'All')
                    .slice(0, 2)
                    .map((ownership: string) => (
                      <Badge
                        key={ownership}
                        variant={filters.ownership === ownership ? 'default' : 'outline'}
                        className="cursor-pointer text-xs"
                        onClick={() => handleOwnershipChange(ownership)}
                      >
                        {ownership}
                      </Badge>
                    ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Results Count */}
      <div className="mb-4 text-sm text-muted-foreground">
        Showing {filteredServices.length} of {services.length} services
      </div>

      {/* Services Grid */}
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
              Try adjusting your search or filters to find what you're looking for.
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
                  onViewDetails={onServiceSelect}
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
  );
}