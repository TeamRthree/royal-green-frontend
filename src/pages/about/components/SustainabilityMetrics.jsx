import React, { useState, useEffect } from 'react';
import Icon from '../../../components/Appicon';

const SustainabilityMetrics = () => {
  const [animatedValues, setAnimatedValues] = useState({
    carbonReduction: 0,
    wasteReduction: 0,
    farmersSupported: 0,
    treesPlanted: 0
  });

  const targetValues = {
    carbonReduction: 85,
    wasteReduction: 92,
    farmersSupported: 150,
    treesPlanted: 5000
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedValues({
        carbonReduction: Math.floor(targetValues?.carbonReduction * progress),
        wasteReduction: Math.floor(targetValues?.wasteReduction * progress),
        farmersSupported: Math.floor(targetValues?.farmersSupported * progress),
        treesPlanted: Math.floor(targetValues?.treesPlanted * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValues(targetValues);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const metrics = [
    {
      icon: "Leaf",
      value: animatedValues?.carbonReduction,
      suffix: "%",
      title: "Carbon Footprint Reduction",
      description: "Achieved through renewable energy adoption and sustainable practices",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: "Recycle",
      value: animatedValues?.wasteReduction,
      suffix: "%",
      title: "Zero Waste Achievement",
      description: "Waste reduction through circular economy principles and recycling",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: "Users",
      value: animatedValues?.farmersSupported,
      suffix: "+",
      title: "Farmers Supported",
      description: "Direct partnerships providing fair wages and sustainable livelihoods",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: "TreePine",
      value: animatedValues?.treesPlanted,
      suffix: "+",
      title: "Trees Planted",
      description: "Reforestation efforts contributing to biodiversity and carbon sequestration",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const initiatives = [
    {
      title: "Renewable Energy",
      description: "100% solar-powered facilities reducing our carbon footprint by 85%",
      icon: "Sun",
      impact: "Clean Energy"
    },
    {
      title: "Water Conservation",
      description: "Rainwater harvesting and efficient irrigation systems saving 40% water",
      icon: "Droplets",
      impact: "Water Saved"
    },
    {
      title: "Biodegradable Packaging",
      description: "Eco-friendly packaging materials that decompose naturally",
      icon: "Package",
      impact: "Plastic-Free"
    },
    {
      title: "Organic Farming Support",
      description: "Training and supporting farmers in sustainable organic practices",
      icon: "Sprout",
      impact: "Soil Health"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-heritage-green">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-6">
            Our Environmental Impact
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Measurable commitment to sustainability through concrete actions and transparent reporting. 
            Every metric represents our dedication to protecting the planet for future generations.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics?.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-organic p-8 text-center shadow-premium hover:shadow-warm transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${metric?.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Icon name={metric?.icon} size={28} className={metric?.color} />
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-heritage-green mb-2">
                    {metric?.value?.toLocaleString()}{metric?.suffix}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-heritage-green">
                    {metric?.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {metric?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sustainability Initiatives */}
        <div className="bg-white/10 backdrop-blur-sm rounded-organic p-8 lg:p-12">
          <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            Sustainability Initiatives
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives?.map((initiative, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-6 bg-white/10 rounded-organic hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-liquid-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={initiative?.icon} size={20} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-heading text-lg font-semibold text-white">
                      {initiative?.title}
                    </h4>
                    <span className="text-xs text-liquid-gold font-medium px-3 py-1 bg-liquid-gold/20 rounded-full">
                      {initiative?.impact}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {initiative?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-liquid-gold rounded-organic p-8 lg:p-12">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-heritage-green mb-4">
              Join Our Sustainability Journey
            </h3>
            <p className="text-heritage-green/80 text-lg mb-6 max-w-2xl mx-auto">
              Every purchase supports our environmental initiatives. Together, we're creating a more sustainable future 
              while delivering the purest oils for your family's wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-heritage-green hover:bg-primary text-white font-semibold px-8 py-3 rounded-organic transition-colors duration-300 shadow-soft">
                View Sustainability Report
              </button>
              <button className="border-2 border-heritage-green text-heritage-green hover:bg-heritage-green hover:text-white font-semibold px-8 py-3 rounded-organic transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityMetrics;