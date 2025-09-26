import React, { useState } from 'react';
import Icon from '../../../components/Appicon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FacilityTour = () => {
  const [activeArea, setActiveArea] = useState(0);

  const facilityAreas = [
    {
      name: "Reception & Storage",
      description: "Climate-controlled storage facilities for raw materials with automated inventory management",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      features: [
        "Temperature controlled at 18-22°C",
        "Humidity maintained at 45-55%",
        "Automated inventory tracking",
        "Quality inspection stations"
      ],
      specifications: {
        area: "2,500 sq ft",
        capacity: "500 tons",
        temperature: "18-22°C",
        humidity: "45-55%"
      }
    },
    {
      name: "Extraction Unit",
      description: "State-of-the-art cold-pressing equipment maintaining traditional extraction principles",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
      features: [
        "Cold-pressing at ≤45°C",
        "Stainless steel equipment",
        "Nitrogen atmosphere protection",
        "Continuous monitoring systems"
      ],
      specifications: {
        area: "1,800 sq ft",
        capacity: "200L/hour",
        temperature: "≤45°C",
        pressure: "50-80 bar"
      }
    },
    {
      name: "Quality Control Lab",
      description: "Advanced laboratory equipped with modern analytical instruments for comprehensive testing",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
      features: [
        "Gas chromatography systems",
        "Mass spectrometry analysis",
        "Microbiological testing",
        "Nutritional profiling"
      ],
      specifications: {
        area: "1,200 sq ft",
        instruments: "15+",
        tests: "25+ parameters",
        accuracy: "99.9%"
      }
    },
    {
      name: "Filtration & Purification",
      description: "Multi-stage filtration systems ensuring maximum purity while preserving nutrients",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?w=600&h=400&fit=crop",
      features: [
        "5-stage filtration process",
        "Membrane technology",
        "UV sterilization",
        "Antioxidant preservation"
      ],
      specifications: {
        area: "1,000 sq ft",
        stages: "5 filtration",
        efficiency: "99.8%",
        retention: "92% antioxidants"
      }
    },
    {
      name: "Packaging & Dispatch",
      description: "Sterile packaging environment with nitrogen flushing and quality sealing systems",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop",
      features: [
        "Sterile packaging environment",
        "Nitrogen flushing system",
        "Dark glass bottle protection",
        "Automated labeling"
      ],
      specifications: {
        area: "1,500 sq ft",
        capacity: "1000 bottles/hour",
        protection: "100% UV",
        shelf_life: "24 months"
      }
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-liquid-gold/20 rounded-full border border-liquid-gold/30 mb-6">
            <Icon name="Building" size={16} className="text-liquid-gold mr-2" />
            <span className="text-liquid-gold font-accent text-sm tracking-wide">
              Virtual Tour
            </span>
          </div>
          
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-6">
            Inside Our
            <span className="text-liquid-gold"> World-Class Facility</span>
          </h2>
          
          <p className="text-warm-cream text-lg max-w-3xl mx-auto leading-relaxed">
            Take a virtual journey through our state-of-the-art production facility where traditional 
            craftsmanship meets modern technology to create liquid gold.
          </p>
        </div>

        {/* Facility Navigation */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Area List */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-heading text-xl font-bold text-white mb-6">Facility Areas</h3>
              <div className="space-y-3">
                {facilityAreas?.map((area, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveArea(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeArea === index
                        ? 'bg-liquid-gold text-heritage-green shadow-warm'
                        : 'bg-white/5 text-warm-cream hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        activeArea === index
                          ? 'bg-heritage-green text-liquid-gold' :'bg-liquid-gold/20 text-liquid-gold'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-semibold">{area?.name}</div>
                        <div className={`text-sm ${
                          activeArea === index ? 'text-heritage-green/70' : 'text-warm-cream/70'
                        }`}>
                          {area?.specifications?.area}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Area Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-premium overflow-hidden">
              {/* Image */}
              <div className="relative h-64 lg:h-80">
                <Image
                  src={facilityAreas?.[activeArea]?.image}
                  alt={facilityAreas?.[activeArea]?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-green/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    {facilityAreas?.[activeArea]?.name}
                  </h3>
                  <p className="text-warm-cream">
                    {facilityAreas?.[activeArea]?.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-heritage-green mb-4">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {facilityAreas?.[activeArea]?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-heritage-green mb-4">Specifications</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(facilityAreas?.[activeArea]?.specifications)?.map(([key, value], index) => (
                      <div key={index} className="text-center p-3 bg-warm-cream rounded-lg">
                        <div className="text-lg font-bold text-liquid-gold">{value}</div>
                        <div className="text-xs text-heritage-green capitalize">
                          {key?.replace('_', ' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    className="bg-primary hover:bg-primary/90 text-white"
                    iconName="Play"
                    iconPosition="left"
                  >
                    Watch 360° Tour
                  </Button>
                  <Button
                    variant="outline"
                    className="border-liquid-gold text-liquid-gold hover:bg-liquid-gold hover:text-white"
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-premium p-8">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-heritage-green mb-4">
                Facility Layout
              </h3>
              <p className="text-foreground/70">
                Interactive overview of our production facility showing the complete oil journey
              </p>
            </div>

            {/* Simplified Facility Map */}
            <div className="relative bg-warm-cream rounded-xl p-8 overflow-hidden">
              <div className="grid grid-cols-5 gap-4 h-64">
                {facilityAreas?.map((area, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveArea(index)}
                    className={`cursor-pointer rounded-lg flex items-center justify-center text-center p-4 transition-all duration-300 ${
                      activeArea === index
                        ? 'bg-liquid-gold text-white shadow-warm transform scale-105'
                        : 'bg-white hover:bg-primary/10 text-heritage-green hover:shadow-soft'
                    }`}
                  >
                    <div>
                      <div className="text-2xl font-bold mb-1">{index + 1}</div>
                      <div className="text-xs font-semibold leading-tight">
                        {area?.name?.split(' ')?.[0]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Flow Arrows */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                            refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#D4A017" />
                    </marker>
                  </defs>
                  <path d="M 80 100 L 120 100" stroke="#D4A017" strokeWidth="2" 
                        markerEnd="url(#arrowhead)" />
                  <path d="M 160 100 L 200 100" stroke="#D4A017" strokeWidth="2" 
                        markerEnd="url(#arrowhead)" />
                  <path d="M 240 100 L 280 100" stroke="#D4A017" strokeWidth="2" 
                        markerEnd="url(#arrowhead)" />
                  <path d="M 320 100 L 360 100" stroke="#D4A017" strokeWidth="2" 
                        markerEnd="url(#arrowhead)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityTour;