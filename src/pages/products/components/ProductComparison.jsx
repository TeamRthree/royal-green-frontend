import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/Appicon';
import Button from '../../../components/ui/Button';

const ProductComparison = ({ products, onRemoveProduct, onClearComparison }) => {
  if (products?.length === 0) return null;

  const comparisonFeatures = [
    { key: 'purity', label: 'Purity Level', unit: '%' },
    { key: 'extraction', label: 'Extraction Method', unit: '' },
    { key: 'category', label: 'Category', unit: '' },
    { key: 'rating', label: 'Rating', unit: '/5' },
    { key: 'priceRange', label: 'Price Range', unit: '' }
  ];

  return (
    <div className="bg-card rounded-organic shadow-premium p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="GitCompare" size={24} className="text-liquid-gold" />
          <h3 className="font-heading text-xl font-semibold text-heritage-green">
            Product Comparison ({products?.length})
          </h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearComparison}
          className="text-muted-foreground hover:text-heritage-green"
        >
          Clear All
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <td className="w-48 pb-4"></td>
              {products?.map((product) => (
                <td key={product?.id} className="pb-4 px-4 text-center min-w-64">
                  <div className="relative">
                    <button
                      onClick={() => onRemoveProduct(product?.id)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-10"
                    >
                      <Icon name="X" size={12} />
                    </button>
                    <div className="bg-warm-cream rounded-organic p-4">
                      <Image
                        src={product?.image}
                        alt={product?.name}
                        className="w-20 h-20 object-cover rounded-organic mx-auto mb-3"
                      />
                      <h4 className="font-heading font-semibold text-heritage-green text-sm mb-1">
                        {product?.name}
                      </h4>
                      <p className="text-liquid-gold text-xs">{product?.category}</p>
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures?.map((feature, index) => (
              <tr key={feature?.key} className={index % 2 === 0 ? 'bg-warm-cream/30' : ''}>
                <td className="py-3 px-4 font-medium text-heritage-green border-r border-border">
                  {feature?.label}
                </td>
                {products?.map((product) => (
                  <td key={product?.id} className="py-3 px-4 text-center text-foreground">
                    {feature?.key === 'rating' ? (
                      <div className="flex items-center justify-center space-x-1">
                        <span>{product?.[feature?.key]}</span>
                        <Icon name="Star" size={14} className="text-liquid-gold fill-current" />
                      </div>
                    ) : (
                      `${product?.[feature?.key]}${feature?.unit}`
                    )}
                  </td>
                ))}
              </tr>
            ))}
            
            {/* Key Benefits Row */}
            <tr className="bg-warm-cream/30">
              <td className="py-3 px-4 font-medium text-heritage-green border-r border-border">
                Key Benefits
              </td>
              {products?.map((product) => (
                <td key={product?.id} className="py-3 px-4">
                  <div className="space-y-1">
                    {product?.keyBenefits?.slice(0, 3)?.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <Icon name="Check" size={12} className="text-liquid-gold" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Actions Row */}
            <tr>
              <td className="py-4 px-4 font-medium text-heritage-green border-r border-border">
                Actions
              </td>
              {products?.map((product) => (
                <td key={product?.id} className="py-4 px-4">
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      fullWidth
                      className="border-liquid-gold text-liquid-gold hover:bg-liquid-gold hover:text-white"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      fullWidth
                      className="bg-gradient-to-r from-liquid-gold to-liquid-gold-dark hover:from-liquid-gold-dark hover:to-liquid-gold"
                    >
                      Get Sample
                    </Button>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductComparison;