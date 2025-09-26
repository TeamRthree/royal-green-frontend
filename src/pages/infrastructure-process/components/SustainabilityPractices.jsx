import React from 'react';
import Icon from '../../../components/Appicon';
import Image from '../../../components/AppImage';

const SustainabilityPractices = () => {
  const sustainabilityMetrics = [
    {
      icon: "Leaf",
      value: "100%",
      label: "Renewable Energy",
      description: "Solar and wind power for all operations"
    },
    {
      icon: "Droplets",
      value: "85%",
      label: "Water Conservation",
      description: "Recycled water usage in production"
    },
    {
      icon: "Recycle",
      value: "95%",
      label: "Waste Reduction",
      description: "Zero waste to landfill policy"
    },
    {
      icon: "TreePine",
      value: "50+",
      label: "Partner Farms",
      description: "Certified organic farming partners"
    }
  ];

  const practices = [
    {
      title: "Sustainable Sourcing",
      description: "Direct partnerships with certified organic farms practicing regenerative agriculture",
      image: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?w=400&h=300&fit=crop",
      details: [
        "Regenerative farming practices that restore soil health",
        "Biodiversity conservation through crop rotation",
        "Fair trade partnerships with local farmers",
        "Chemical-free cultivation methods"
      ],
      impact: "Supporting 50+ farming families while preserving 10,000 acres of organic farmland"
    },
    {
      title: "Energy Efficiency",
      description: "100% renewable energy powered facility with advanced energy management systems",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
      details: [
        "Solar panel installation covering 80% of roof area",
        "Wind energy supplementation for consistent power",
        "Energy-efficient LED lighting throughout facility",
        "Smart energy management and monitoring systems"
      ],
      impact: "Reducing carbon footprint by 75% compared to conventional facilities"
    },
    {
      title: "Water Conservation",
      description: "Advanced water recycling and conservation systems minimizing environmental impact",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?w=400&h=300&fit=crop",
      details: [
        "Closed-loop water recycling system",
        "Rainwater harvesting for non-production use",
        "Advanced filtration for water reuse",
        "Minimal water usage in extraction process"
      ],
      impact: "85% reduction in freshwater consumption through recycling initiatives"
    },
    {
      title: "Waste Management",
      description: "Comprehensive zero-waste policy with complete byproduct utilization",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
      details: [
        "Oil cake converted to organic fertilizer",
        "Packaging materials from recycled sources",
        "Composting of all organic waste",
        "Glass bottle return and reuse program"
      ],
      impact: "Achieving 95% waste diversion from landfills through circular economy practices"
    }
  ];

  const certifications = [
    {
      name: "Carbon Neutral Certified",
      organization: "Climate Action Reserve",
      year: "2024"
    },
    {
      name: "Sustainable Agriculture Standard",
      organization: "Rainforest Alliance",
      year: "2024"
    },
    {
      name: "Green Building Certification",
      organization: "LEED Gold Standard",
      year: "2023"
    },
    {
      name: "Water Stewardship Certification",
      organization: "Alliance for Water Stewardship",
      year: "2024"
    }
  ];

  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Icon name="Leaf" size={16} className="text-primary mr-2" />
            <span className="text-primary font-accent text-sm tracking-wide">
              Sustainability
            </span>
          </div>
          
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-heritage-green mb-6">
            Nurturing Nature,
            <span className="text-liquid-gold"> Preserving Future</span>
          </h2>
          
          <p className="text-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Our commitment extends beyond quality oil production to environmental stewardship, 
            sustainable practices, and community development that creates lasting positive impact.
          </p>
        </div>

        {/* Sustainability Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {sustainabilityMetrics?.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={metric?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-liquid-gold mb-2">{metric?.value}</div>
              <div className="font-semibold text-heritage-green mb-2">{metric?.label}</div>
              <div className="text-sm text-foreground/70">{metric?.description}</div>
            </div>
          ))}
        </div>

        {/* Sustainability Practices */}
        <div className="space-y-16">
          {practices?.map((practice, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-heritage-green mb-4">
                  {practice?.title}
                </h3>
                
                <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                  {practice?.description}
                </p>

                <div className="space-y-3 mb-6">
                  {practice?.details?.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground/80">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="TrendingUp" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-heritage-green mb-1">Environmental Impact</div>
                      <div className="text-foreground/80">{practice?.impact}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-premium">
                  <Image
                    src={practice?.image}
                    alt={practice?.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-green/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-premium p-8">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-heritage-green mb-4">
                Sustainability Certifications
              </h3>
              <p className="text-foreground/70">
                Recognized by leading environmental organizations for our commitment to sustainable practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications?.map((cert, index) => (
                <div key={index} className="text-center p-4 border border-border rounded-xl hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-heritage-green mb-2">{cert?.name}</h4>
                  <p className="text-sm text-foreground/70 mb-1">{cert?.organization}</p>
                  <p className="text-xs text-liquid-gold font-semibold">{cert?.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary rounded-2xl p-8 lg:p-12">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">
              Join Our Sustainability Journey
            </h3>
            <p className="text-warm-cream text-lg mb-8 max-w-2xl mx-auto">
              Partner with us in creating a more sustainable future through responsible consumption 
              and environmental stewardship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-liquid-gold hover:bg-liquid-gold-dark text-heritage-green font-semibold px-8 py-3 rounded-full transition-colors duration-300">
                Sustainability Report
              </button>
              <button className="border-2 border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-heritage-green font-semibold px-8 py-3 rounded-full transition-all duration-300">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityPractices;