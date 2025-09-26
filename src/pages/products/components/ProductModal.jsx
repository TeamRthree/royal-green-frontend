import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPackage, setSelectedPackage] = useState(0);

  if (!isOpen || !product) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'benefits', label: 'Health Benefits', icon: 'Heart' },
    { id: 'usage', label: 'Usage Guide', icon: 'BookOpen' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' }
  ];

  const nutritionalInfo = [
    { label: 'Saturated Fat', value: '14g', percentage: 70 },
    { label: 'Monounsaturated Fat', value: '11g', percentage: 55 },
    { label: 'Polyunsaturated Fat', value: '2g', percentage: 10 },
    { label: 'Vitamin E', value: '15mg', percentage: 100 },
    { label: 'Antioxidants', value: 'High', percentage: 85 }
  ];

  const usageInstructions = [
    {
      title: "Cooking",
      description: "Perfect for medium-heat cooking, sautéing, and salad dressings.",
      dosage: "2-3 tablespoons daily",
      tips: ["Heat to maximum 350°F", "Store in cool, dark place", "Use within 6 months of opening"]
    },
    {
      title: "Wellness",
      description: "Take directly or mix with warm water for maximum health benefits.",
      dosage: "1 tablespoon on empty stomach",
      tips: ["Best taken in morning", "Can mix with lemon water", "Consistent daily use recommended"]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-organic shadow-premium max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <Image
              src={product?.image}
              alt={product?.name}
              className="w-16 h-16 object-cover rounded-organic"
            />
            <div>
              <h2 className="font-heading text-2xl font-bold text-heritage-green">
                {product?.name}
              </h2>
              <p className="text-liquid-gold font-medium">{product?.category}</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center space-x-1">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={14}
                      className={i < product?.rating ? 'text-liquid-gold fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product?.reviews} reviews)</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-warm-cream/50 rounded-organic transition-colors"
          >
            <Icon name="X" size={24} className="text-muted-foreground" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                activeTab === tab?.id
                  ? 'text-liquid-gold border-b-2 border-liquid-gold bg-warm-cream/30' :'text-muted-foreground hover:text-heritage-green'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-lg font-semibold text-heritage-green mb-3">
                  Product Description
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  {product?.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-warm-cream rounded-organic">
                    <Icon name="Droplets" size={24} className="text-liquid-gold mx-auto mb-2" />
                    <div className="font-semibold text-heritage-green">{product?.purity}%</div>
                    <div className="text-sm text-muted-foreground">Purity</div>
                  </div>
                  <div className="text-center p-4 bg-warm-cream rounded-organic">
                    <Icon name="Leaf" size={24} className="text-primary mx-auto mb-2" />
                    <div className="font-semibold text-heritage-green">{product?.extraction}</div>
                    <div className="text-sm text-muted-foreground">Method</div>
                  </div>
                  <div className="text-center p-4 bg-warm-cream rounded-organic">
                    <Icon name="Shield" size={24} className="text-liquid-gold mx-auto mb-2" />
                    <div className="font-semibold text-heritage-green">Certified</div>
                    <div className="text-sm text-muted-foreground">Organic</div>
                  </div>
                  <div className="text-center p-4 bg-warm-cream rounded-organic">
                    <Icon name="Clock" size={24} className="text-primary mx-auto mb-2" />
                    <div className="font-semibold text-heritage-green">24 Months</div>
                    <div className="text-sm text-muted-foreground">Shelf Life</div>
                  </div>
                </div>
              </div>

              {/* Nutritional Information */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-heritage-green mb-3">
                  Nutritional Information (per 100ml)
                </h3>
                <div className="space-y-3">
                  {nutritionalInfo?.map((info, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-foreground">{info?.label}</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-liquid-gold h-2 rounded-full transition-all duration-500"
                            style={{ width: `${info?.percentage}%` }}
                          ></div>
                        </div>
                        <span className="font-medium text-heritage-green w-12 text-right">
                          {info?.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-lg font-semibold text-heritage-green mb-4">
                  Key Health Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product?.keyBenefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-warm-cream rounded-organic">
                      <Icon name="Check" size={20} className="text-liquid-gold mt-0.5" />
                      <div>
                        <h4 className="font-medium text-heritage-green mb-1">{benefit}</h4>
                        <p className="text-sm text-muted-foreground">
                          Scientifically proven to support overall wellness and vitality.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-heritage-green mb-4">
                  Scientific Research
                </h3>
                <div className="bg-warm-cream p-4 rounded-organic">
                  <p className="text-foreground leading-relaxed">
                    Multiple clinical studies have demonstrated the effectiveness of this oil in supporting cardiovascular health, 
                    boosting immune function, and providing powerful antioxidant protection. Research published in leading 
                    nutrition journals confirms its role in reducing inflammation and supporting overall wellness.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="space-y-6">
              {usageInstructions?.map((usage, index) => (
                <div key={index} className="border border-border rounded-organic p-4">
                  <h3 className="font-heading text-lg font-semibold text-heritage-green mb-2">
                    {usage?.title}
                  </h3>
                  <p className="text-foreground mb-3">{usage?.description}</p>
                  <div className="bg-warm-cream p-3 rounded-organic mb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Clock" size={16} className="text-liquid-gold" />
                      <span className="font-medium text-heritage-green">Recommended Dosage</span>
                    </div>
                    <p className="text-foreground">{usage?.dosage}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-heritage-green mb-2">Pro Tips:</h4>
                    <ul className="space-y-1">
                      {usage?.tips?.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-2">
                          <Icon name="ArrowRight" size={14} className="text-liquid-gold mt-0.5" />
                          <span className="text-sm text-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'USDA Organic', icon: 'Leaf', description: 'Certified organic by USDA standards' },
                  { name: 'ISO 22000', icon: 'Shield', description: 'Food safety management certification' },
                  { name: 'HACCP', icon: 'CheckCircle', description: 'Hazard analysis critical control points' },
                  { name: 'Lab Tested', icon: 'FlaskConical', description: 'Third-party laboratory verified' }
                ]?.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 border border-border rounded-organic">
                    <div className="w-12 h-12 bg-liquid-gold rounded-full flex items-center justify-center">
                      <Icon name={cert?.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-heritage-green mb-1">{cert?.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-warm-cream/30">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Available in:</span>
            <div className="flex space-x-2">
              {['250ml', '500ml', '1L']?.map((size, index) => (
                <button
                  key={size}
                  onClick={() => setSelectedPackage(index)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedPackage === index
                      ? 'bg-liquid-gold text-white' :'bg-background text-foreground hover:bg-liquid-gold hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="border-liquid-gold text-liquid-gold hover:bg-liquid-gold hover:text-white"
            >
              Get Sample
            </Button>
            <Button
              variant="default"
              className="bg-gradient-to-r from-liquid-gold to-liquid-gold-dark hover:from-liquid-gold-dark hover:to-liquid-gold"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;