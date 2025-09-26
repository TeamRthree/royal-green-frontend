import React, { useState } from 'react';
import Icon from '../../../components/Appicon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ProductFilter = ({ filters, onFilterChange, onClearFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'cooking', label: 'Cooking Oils' },
    { value: 'wellness', label: 'Wellness Oils' },
    { value: 'skincare', label: 'Skincare Oils' },
    { value: 'aromatherapy', label: 'Aromatherapy Oils' }
  ];

  const extractionOptions = [
    { value: 'all', label: 'All Methods' },
    { value: 'cold-pressed', label: 'Cold Pressed' },
    { value: 'steam-distilled', label: 'Steam Distilled' },
    { value: 'solvent-free', label: 'Solvent Free' }
  ];

  const benefitOptions = [
    { value: 'heart-health', label: 'Heart Health' },
    { value: 'immunity', label: 'Immunity Boost' },
    { value: 'anti-inflammatory', label: 'Anti-inflammatory' },
    { value: 'antioxidant', label: 'Antioxidant Rich' },
    { value: 'digestive', label: 'Digestive Health' },
    { value: 'skin-care', label: 'Skin Care' }
  ];

  const handleCategoryChange = (value) => {
    onFilterChange({ ...filters, category: value });
  };

  const handleExtractionChange = (value) => {
    onFilterChange({ ...filters, extraction: value });
  };

  const handleBenefitChange = (benefit, checked) => {
    const updatedBenefits = checked
      ? [...filters?.benefits, benefit]
      : filters?.benefits?.filter(b => b !== benefit);
    onFilterChange({ ...filters, benefits: updatedBenefits });
  };

  const handlePurityChange = (value) => {
    onFilterChange({ ...filters, minPurity: value });
  };

  const handleToggleFilter = (filterType, value) => {
    onFilterChange({ ...filters, [filterType]: !filters?.[filterType] });
  };

  return (
    <div className="bg-card rounded-organic shadow-soft p-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-liquid-gold" />
          <h3 className="font-heading text-lg font-semibold text-heritage-green">
            Filter Products
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-heritage-green"
          >
            Clear All
          </Button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden p-2 rounded-organic hover:bg-warm-cream/50 transition-colors"
          >
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              className="text-heritage-green" 
            />
          </button>
        </div>
      </div>
      {/* Filter Content */}
      <div className={`space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
        {/* Category Filter */}
        <div>
          <Select
            label="Category"
            options={categoryOptions}
            value={filters?.category}
            onChange={handleCategoryChange}
            className="mb-4"
          />
        </div>

        {/* Extraction Method */}
        <div>
          <Select
            label="Extraction Method"
            options={extractionOptions}
            value={filters?.extraction}
            onChange={handleExtractionChange}
            className="mb-4"
          />
        </div>

        {/* Health Benefits */}
        <div>
          <h4 className="font-medium text-heritage-green mb-3">Health Benefits</h4>
          <div className="space-y-2">
            {benefitOptions?.map((benefit) => (
              <Checkbox
                key={benefit?.value}
                label={benefit?.label}
                checked={filters?.benefits?.includes(benefit?.value)}
                onChange={(e) => handleBenefitChange(benefit?.value, e?.target?.checked)}
                size="sm"
              />
            ))}
          </div>
        </div>

        {/* Purity Level */}
        <div>
          <h4 className="font-medium text-heritage-green mb-3">Minimum Purity</h4>
          <div className="space-y-2">
            {[95, 98, 99]?.map((purity) => (
              <label key={purity} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="purity"
                  value={purity}
                  checked={filters?.minPurity === purity}
                  onChange={() => handlePurityChange(purity)}
                  className="w-4 h-4 text-liquid-gold border-gray-300 focus:ring-liquid-gold"
                />
                <span className="text-sm text-foreground">{purity}% & above</span>
              </label>
            ))}
          </div>
        </div>

        {/* Special Filters */}
        <div>
          <h4 className="font-medium text-heritage-green mb-3">Special Features</h4>
          <div className="space-y-2">
            <Checkbox
              label="Organic Certified"
              checked={filters?.isOrganic}
              onChange={(e) => handleToggleFilter('isOrganic', e?.target?.checked)}
              size="sm"
            />
            <Checkbox
              label="Premium Quality"
              checked={filters?.isPremium}
              onChange={(e) => handleToggleFilter('isPremium', e?.target?.checked)}
              size="sm"
            />
            <Checkbox
              label="Lab Tested"
              checked={filters?.isLabTested}
              onChange={(e) => handleToggleFilter('isLabTested', e?.target?.checked)}
              size="sm"
            />
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="font-medium text-heritage-green mb-3">Price Range (per 500ml)</h4>
          <div className="space-y-2">
            {[
              { label: 'Under $25', min: 0, max: 25 },
              { label: '$25 - $50', min: 25, max: 50 },
              { label: '$50 - $100', min: 50, max: 100 },
              { label: 'Above $100', min: 100, max: 999 }
            ]?.map((range) => (
              <label key={range?.label} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="priceRange"
                  value={`${range?.min}-${range?.max}`}
                  checked={filters?.priceMin === range?.min && filters?.priceMax === range?.max}
                  onChange={() => onFilterChange({ 
                    ...filters, 
                    priceMin: range?.min, 
                    priceMax: range?.max 
                  })}
                  className="w-4 h-4 text-liquid-gold border-gray-300 focus:ring-liquid-gold"
                />
                <span className="text-sm text-foreground">{range?.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;