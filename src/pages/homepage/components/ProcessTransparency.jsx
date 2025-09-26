import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Appicon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProcessTransparency = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Source Selection",
      subtitle: "Premium Raw Materials",
      description: "We carefully select the finest organic seeds and nuts from certified farms, ensuring only the highest quality raw materials enter our facility.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
      icon: "Leaf",
      details: [
        "Organic certified farms",
        "Quality inspection",
        "Freshness guarantee",
        "Traceability records"
      ]
    },
    {
      id: 2,
      title: "Cold Pressing",
      subtitle: "Traditional Methods",
      description: "Our traditional cold-pressing method preserves natural nutrients and flavors without heat or chemicals, maintaining the oil's therapeutic properties.",
      image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?w=400&h=300&fit=crop",
      icon: "Settings",
      details: [
        "No heat processing",
        "Chemical-free extraction",
        "Nutrient preservation",
        "Traditional wooden presses"
      ]
    },
    {
      id: 3,
      title: "Quality Testing",
      subtitle: "Laboratory Verification",
      description: "Every batch undergoes rigorous testing in our state-of-the-art laboratory to ensure purity, potency, and safety standards are met.",
      image: "https://images.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729_1280.jpg?w=400&h=300&fit=crop",
      icon: "FlaskConical",
      details: [
        "Purity analysis",
        "Contamination testing",
        "Nutritional profiling",
        "Third-party verification"
      ]
    },
    {
      id: 4,
      title: "Packaging",
      subtitle: "Freshness Protection",
      description: "Our oils are packaged in dark glass bottles with nitrogen flushing to protect against oxidation and maintain freshness for longer periods.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      icon: "Package",
      details: [
        "Dark glass protection",
        "Nitrogen flushing",
        "Tamper-proof sealing",
        "Batch tracking labels"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('process-transparency');
    if (section) observer?.observe(section);

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [processSteps?.length]);

  const qualityMetrics = [
    {
      id: 1,
      metric: "99.8%",
      label: "Purity Level",
      icon: "Droplets",
      description: "Achieved through our meticulous extraction process"
    },
    {
      id: 2,
      metric: "0°C",
      label: "Processing Temp",
      icon: "Thermometer",
      description: "Cold-pressed to preserve natural nutrients"
    },
    {
      id: 3,
      metric: "24hrs",
      label: "Farm to Press",
      icon: "Clock",
      description: "Maximum freshness from source to extraction"
    },
    {
      id: 4,
      metric: "100%",
      label: "Batch Tested",
      icon: "CheckCircle",
      description: "Every batch undergoes comprehensive testing"
    }
  ];

  return (
    <section id="process-transparency" className="py-20 bg-liquid-gold">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-heritage-green/20 rounded-full px-4 py-2 mb-4">
            <Icon name="Eye" size={16} className="text-heritage-green" />
            <span className="text-heritage-green font-accent text-sm tracking-wide">Process Transparency</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-heritage-green mb-4">
            From Source to Your Table
          </h2>
          
          <p className="text-heritage-green/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Witness our commitment to quality through complete transparency in our production process. Every step is designed to preserve nature's goodness and deliver pure wellness to your family.
          </p>
        </div>

        {/* Quality Metrics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {qualityMetrics?.map((metric, index) => (
            <div key={metric?.id} className="bg-warm-cream rounded-xl p-6 text-center shadow-soft hover:shadow-premium transition-all duration-300">
              <div className="w-12 h-12 bg-heritage-green rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={metric?.icon} size={20} className="text-liquid-gold" />
              </div>
              <div className="font-heading text-2xl md:text-3xl font-bold text-heritage-green mb-1">
                {metric?.metric}
              </div>
              <div className="font-semibold text-heritage-green mb-2">
                {metric?.label}
              </div>
              <div className="text-heritage-green/70 text-sm">
                {metric?.description}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Process Steps */}
        <div className="max-w-6xl mx-auto">
          {/* Step Navigation */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {processSteps?.map((step, index) => (
              <button
                key={step?.id}
                onClick={() => setActiveStep(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-heritage-green text-warm-cream shadow-warm scale-105'
                    : 'bg-warm-cream text-heritage-green hover:bg-heritage-green/10 hover:scale-102'
                }`}
              >
               
                <span className="font-medium">{step?.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Step Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-premium">
                  <Image
                    src={processSteps?.[activeStep]?.image}
                    alt={processSteps?.[activeStep]?.title}
                    className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  
                  
                  
                 
                </div>
              </div>

              {/* Step Details */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-heritage-green">
                    {processSteps?.[activeStep]?.title}
                  </h3>
                  
                  <h4 className="font-accent text-xl text-heritage-green/80 font-medium">
                    {processSteps?.[activeStep]?.subtitle}
                  </h4>
                  
                  <p className="text-heritage-green/80 text-lg leading-relaxed">
                    {processSteps?.[activeStep]?.description}
                  </p>
                </div>

                {/* Process Details */}
                <div className="space-y-3">
                  <h5 className="font-heading text-xl font-semibold text-heritage-green">Key Features:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {processSteps?.[activeStep]?.details?.map((detail, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-heritage-green rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Check" size={14} className="text-liquid-gold" />
                        </div>
                        <span className="text-heritage-green/80">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/infrastructure-process" className="flex-1">
                    <Button 
                      variant="default" 
                      size="lg"
                      className="bg-heritage-green hover:bg-heritage-green/90 text-warm-cream font-semibold w-full"
                      
                    >
                      Tour Our Facility
                    </Button>
                  </Link>
                  
                  <Link to="/contact" className="flex-1">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-heritage-green text-heritage-green hover:bg-heritage-green hover:text-warm-cream w-full"
                     
                    >
                      Schedule Visit
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-warm-cream rounded-3xl p-8 md:p-12 shadow-premium max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-heritage-green mb-4">
              Experience Our Commitment to Quality
            </h3>
            <p className="text-heritage-green/80 text-lg mb-8 max-w-2xl mx-auto">
              Visit our facility and witness firsthand how we transform nature's finest ingredients into liquid gold for your family's wellness.
            </p>
            
            <Link to="/infrastructure-process">
              <Button 
                variant="default" 
                size="lg"
                className="bg-heritage-green hover:bg-heritage-green/90 text-warm-cream font-semibold shadow-premium"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Explore Our Infrastructure
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTransparency;