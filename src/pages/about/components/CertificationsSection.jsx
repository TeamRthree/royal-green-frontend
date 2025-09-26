import React, { useState } from 'react';
import Icon from '../../../components/Appicon';
import Image from '../../../components/AppImage';

const CertificationsSection = () => {
  const [activeCategory, setActiveCategory] = useState('organic');

  const certificationCategories = {
    organic: {
      title: "Organic Certifications",
      description: "Verified organic standards ensuring pure, chemical-free products",
      certifications: [
        {
          name: "USDA Organic",
          issuer: "United States Department of Agriculture",
          year: "2011",
          description: "Certified organic production and processing standards",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
          validUntil: "2026"
        },
        {
          name: "India Organic",
          issuer: "Agricultural and Processed Food Products Export Development Authority",
          year: "2012",
          description: "National organic certification for Indian market",
          image: "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?w=200&h=200&fit=crop",
          validUntil: "2026"
        },
        {
          name: "EU Organic",
          issuer: "European Union Organic Certification",
          year: "2014",
          description: "European organic standards compliance",
          image: "https://images.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729_1280.jpg?w=200&h=200&fit=crop",
          validUntil: "2025"
        }
      ]
    },
    quality: {
      title: "Quality & Safety",
      description: "International quality management and food safety standards",
      certifications: [
        {
          name: "ISO 22000",
          issuer: "International Organization for Standardization",
          year: "2016",
          description: "Food safety management system certification",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=200&fit=crop",
          validUntil: "2025"
        },
        {
          name: "HACCP",
          issuer: "Hazard Analysis Critical Control Points",
          year: "2015",
          description: "Food safety through hazard analysis and control",
          image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?w=200&h=200&fit=crop",
          validUntil: "2026"
        },
        {
          name: "GMP Certified",
          issuer: "Good Manufacturing Practices",
          year: "2017",
          description: "Manufacturing quality and safety standards",
          image: "https://images.pixabay.com/photo/2020/04/10/17/43/hand-5026120_1280.jpg?w=200&h=200&fit=crop",
          validUntil: "2025"
        }
      ]
    },
    sustainability: {
      title: "Sustainability & Environment",
      description: "Environmental responsibility and sustainable business practices",
      certifications: [
        {
          name: "Carbon Neutral",
          issuer: "Climate Action Reserve",
          year: "2019",
          description: "Verified carbon-neutral operations and supply chain",
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop",
          validUntil: "2025"
        },
        {
          name: "Fair Trade",
          issuer: "Fair Trade International",
          year: "2018",
          description: "Ethical sourcing and fair farmer compensation",
          image: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?w=200&h=200&fit=crop",
          validUntil: "2026"
        },
        {
          name: "Rainforest Alliance",
          issuer: "Rainforest Alliance Certified",
          year: "2020",
          description: "Sustainable agriculture and forest conservation",
          image: "https://images.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg?w=200&h=200&fit=crop",
          validUntil: "2025"
        }
      ]
    }
  };

  const categories = Object.keys(certificationCategories);
  const activeData = certificationCategories?.[activeCategory];

  return (
    <section className="py-16 lg:py-24 bg-liquid-gold/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-heritage-green mb-6">
            Quality Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence is validated by leading international certification bodies. 
            Every certification represents our dedication to quality, safety, and sustainability.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-organic font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-liquid-gold text-white shadow-warm'
                  : 'bg-white text-heritage-green hover:bg-warm-cream border border-primary/20'
              }`}
            >
              {certificationCategories?.[category]?.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl font-bold text-heritage-green mb-4">
              {activeData?.title}
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {activeData?.description}
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeData?.certifications?.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-organic shadow-soft hover:shadow-premium transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={cert?.image}
                    alt={`${cert?.name} certification`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-heading text-xl font-bold text-heritage-green mb-2">
                        {cert?.name}
                      </h4>
                      <p className="text-sm text-liquid-gold font-medium mb-2">
                        {cert?.issuer}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Certified</div>
                      <div className="font-bold text-primary">{cert?.year}</div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {cert?.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-green-600">
                      <Icon name="CheckCircle" size={14} />
                      <span>Valid until {cert?.validUntil}</span>
                    </div>
                    <div className="w-8 h-8 bg-liquid-gold rounded-full flex items-center justify-center">
                      <Icon name="Award" size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-organic p-8 lg:p-12 shadow-premium">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-liquid-gold rounded-full flex items-center justify-center mx-auto">
                <Icon name="Shield" size={28} className="text-white" />
              </div>
              <h4 className="font-heading text-xl font-bold text-heritage-green">
                15+ Certifications
              </h4>
              <p className="text-muted-foreground">
                Comprehensive quality and safety validations from leading international bodies
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Icon name="Globe" size={28} className="text-white" />
              </div>
              <h4 className="font-heading text-xl font-bold text-heritage-green">
                Global Standards
              </h4>
              <p className="text-muted-foreground">
                Meeting and exceeding international quality standards across all markets
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-liquid-gold rounded-full flex items-center justify-center mx-auto">
                <Icon name="Clock" size={28} className="text-white" />
              </div>
              <h4 className="font-heading text-xl font-bold text-heritage-green">
                Annual Audits
              </h4>
              <p className="text-muted-foreground">
                Regular third-party audits ensuring continuous compliance and improvement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;