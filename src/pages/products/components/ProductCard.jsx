import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onCompare, isComparing, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-card rounded-organic shadow-soft hover:shadow-premium transition-all duration-500 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product?.image}
          alt={product?.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay with benefits on hover */}
        <div className={`absolute inset-0 bg-heritage-green/90 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center text-white p-4">
            <h4 className="font-heading text-lg font-semibold mb-2">Key Benefits</h4>
            <ul className="text-sm space-y-1">
              {product?.keyBenefits?.slice(0, 3)?.map((benefit, index) => (
                <li key={index} className="flex items-center justify-center space-x-2">
                  <Icon name="Check" size={14} className="text-liquid-gold" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product?.isOrganic && (
            <span className="bg-liquid-gold text-white px-2 py-1 rounded-full text-xs font-medium">
              Organic
            </span>
          )}
          {product?.isPremium && (
            <span className="bg-heritage-green text-white px-2 py-1 rounded-full text-xs font-medium">
              Premium
            </span>
          )}
        </div>

        {/* Compare checkbox */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => onCompare(product?.id)}
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
              isComparing 
                ? 'bg-liquid-gold border-liquid-gold text-white' :'bg-white/80 border-white hover:bg-liquid-gold hover:border-liquid-gold hover:text-white'
            }`}
          >
            {isComparing && <Icon name="Check" size={16} />}
          </button>
        </div>
      </div>
      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-heading text-xl font-semibold text-heritage-green mb-1">
              {product?.name}
            </h3>
            <p className="text-liquid-gold font-medium text-sm">{product?.category}</p>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < product?.rating ? 'text-liquid-gold fill-current' : 'text-gray-300'}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-1">({product?.reviews})</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product?.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {product?.features?.slice(0, 3)?.map((feature, index) => (
              <span
                key={index}
                className="bg-warm-cream text-heritage-green px-2 py-1 rounded-full text-xs font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Purity & Extraction */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="Droplets" size={16} className="text-liquid-gold" />
            <span className="text-muted-foreground">Purity: {product?.purity}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Leaf" size={16} className="text-primary" />
            <span className="text-muted-foreground">{product?.extraction}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(product)}
            className="flex-1 border-liquid-gold text-liquid-gold hover:bg-liquid-gold hover:text-white"
          >
            View Details
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1 bg-gradient-to-r from-liquid-gold to-liquid-gold-dark hover:from-liquid-gold-dark hover:to-liquid-gold"
          >
            Get Sample
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;