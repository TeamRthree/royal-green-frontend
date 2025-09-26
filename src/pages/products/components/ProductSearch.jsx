import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const ProductSearch = ({ searchTerm, onSearchChange, onSortChange, sortBy, totalResults }) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant', icon: 'Target' },
    { value: 'name', label: 'Name A-Z', icon: 'ArrowUpAZ' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'purity', label: 'Highest Purity', icon: 'Droplets' },
    { value: 'newest', label: 'Newest First', icon: 'Clock' }
  ];

  const quickFilters = [
    { label: 'Organic', value: 'organic', icon: 'Leaf' },
    { label: 'Cold Pressed', value: 'cold-pressed', icon: 'Snowflake' },
    { label: 'Premium', value: 'premium', icon: 'Crown' },
    { label: 'Lab Tested', value: 'lab-tested', icon: 'FlaskConical' }
  ];

  return (
    <div className="bg-card rounded-organic shadow-soft p-6 mb-8">
      {/* Main Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
        <div className="flex-1 relative">
          <Input
            type="search"
            placeholder="Search oils by name, benefits, or ingredients..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="pl-12"
          />
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <Icon name="ArrowUpDown" size={16} className="text-muted-foreground" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e?.target?.value)}
            className="bg-background border border-border rounded-organic px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-liquid-gold"
          >
            {sortOptions?.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>

        {/* Advanced Search Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          className="border-liquid-gold text-liquid-gold hover:bg-liquid-gold hover:text-white"
        >
          <Icon name="Settings2" size={16} className="mr-2" />
          Advanced
        </Button>
      </div>
      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-sm text-muted-foreground font-medium">Quick Filters:</span>
        {quickFilters?.map((filter) => (
          <button
            key={filter?.value}
            className="flex items-center space-x-2 px-3 py-1 bg-warm-cream hover:bg-liquid-gold hover:text-white rounded-full text-sm transition-colors duration-200"
          >
            <Icon name={filter?.icon} size={14} />
            <span>{filter?.label}</span>
          </button>
        ))}
      </div>
      {/* Advanced Search Options */}
      {isAdvancedOpen && (
        <div className="border-t border-border pt-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-heritage-green mb-2">
                Health Benefit
              </label>
              <select className="w-full bg-background border border-border rounded-organic px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-liquid-gold">
                <option value="">Any Benefit</option>
                <option value="heart-health">Heart Health</option>
                <option value="immunity">Immunity Boost</option>
                <option value="anti-inflammatory">Anti-inflammatory</option>
                <option value="antioxidant">Antioxidant Rich</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-heritage-green mb-2">
                Extraction Method
              </label>
              <select className="w-full bg-background border border-border rounded-organic px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-liquid-gold">
                <option value="">Any Method</option>
                <option value="cold-pressed">Cold Pressed</option>
                <option value="steam-distilled">Steam Distilled</option>
                <option value="solvent-free">Solvent Free</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-heritage-green mb-2">
                Purity Level
              </label>
              <select className="w-full bg-background border border-border rounded-organic px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-liquid-gold">
                <option value="">Any Purity</option>
                <option value="99">99% & Above</option>
                <option value="98">98% & Above</option>
                <option value="95">95% & Above</option>
              </select>
            </div>
          </div>
        </div>
      )}
      {/* Results Summary */}
      <div className="flex items-center justify-between text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
        <span>
          {totalResults} products found
          {searchTerm && ` for "${searchTerm}"`}
        </span>
        <div className="flex items-center space-x-4">
          <span>Sort by: {sortOptions?.find(opt => opt?.value === sortBy)?.label}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;