import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProcessOverview = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Source Selection",
      description: "Premium raw materials sourced from certified organic farms with rigorous quality standards.",
      details: `Our sourcing process begins with careful selection of the finest raw materials from certified organic farms. We maintain direct relationships with farmers who share our commitment to sustainable agriculture and chemical-free cultivation.\n\nEach batch undergoes preliminary testing for pesticide residues, heavy metals, and microbial contamination before acceptance into our facility.`,
      icon: "Leaf",
      image: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?w=400&h=300&fit=crop",
      metrics: [
        { label: "Organic Certification", value: "100%" },
        { label: "Farm Partnerships", value: "50+" },
        { label: "Quality Score", value: "A+" }
      ]
    },
    {
      id: 2,
      title: "Traditional Extraction",
      description: "Time-honored cold-pressing methods preserve natural nutrients and maintain oil integrity.",
      details: `Our extraction process honors ancient wisdom while incorporating modern precision. We use traditional cold-pressing techniques that operate at temperatures below 45°C to preserve heat-sensitive nutrients and maintain the oil's natural properties.\n\nThe process takes 72 hours to complete, allowing for maximum nutrient retention and optimal flavor development. No chemical solvents or artificial additives are ever used.`,
      icon: "Cog",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
      metrics: [
        { label: "Temperature Control", value: "≤45°C" },
        { label: "Processing Time", value: "72hrs" },
        { label: "Nutrient Retention", value: "95%" }
      ]
    },
    {
      id: 3,
      title: "Quality Testing",
      description: "Comprehensive laboratory analysis ensures purity, potency, and safety standards.",
      details: `Every batch undergoes rigorous testing in our state-of-the-art laboratory. We conduct over 25 different quality checks including purity analysis, nutritional profiling, and contamination screening.\n\nOur testing protocols exceed industry standards and include third-party verification to ensure complete transparency and reliability of results.`,
      icon: "TestTube",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
      metrics: [
        { label: "Quality Checks", value: "25+" },
        { label: "Purity Level", value: "99.9%" },
        { label: "Lab Accuracy", value: "100%" }
      ]
    },
    {
      id: 4,
      title: "Filtration & Purification",
      description: "Advanced filtration systems remove impurities while preserving beneficial compounds.",
      details: `Our multi-stage filtration process uses advanced membrane technology to remove any remaining impurities while carefully preserving beneficial compounds and natural antioxidants.\n\nThe filtration system operates under controlled atmospheric conditions to prevent oxidation and maintain the oil's golden color and fresh aroma.`,
      icon: "Filter",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?w=400&h=300&fit=crop",
      metrics: [
        { label: "Filtration Stages", value: "5" },
        { label: "Impurity Removal", value: "99.8%" },
        { label: "Antioxidant Retention", value: "92%" }
      ]
    },
    {
      id: 5,
      title: "Packaging & Storage",
      description: "Protective packaging in controlled environments maintains freshness and extends shelf life.",
      details: `Our packaging facility maintains strict environmental controls with temperature and humidity monitoring. We use dark glass bottles and nitrogen flushing to prevent oxidation and light damage.\n\nEach bottle is sealed under sterile conditions and labeled with batch information for complete traceability from source to consumer.`,
      icon: "Package",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      metrics: [
        { label: "Shelf Life", value: "24mo" },
        { label: "UV Protection", value: "100%" },
        { label: "Freshness Retention", value: "98%" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Icon name="Settings" size={16} className="text-primary mr-2" />
            <span className="text-primary font-accent text-sm tracking-wide">
              Our Process
            </span>
          </div>
          
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-heritage-green mb-6">
            From Source to
            <span className="text-liquid-gold"> Liquid Gold</span>
          </h2>
          
          <p className="text-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Every drop of Royal Green Oil follows a meticulous journey through our time-tested process, 
            combining traditional wisdom with modern precision to deliver uncompromising quality.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps Navigation */}
          <div className="space-y-4">
            {processSteps?.map((step, index) => (
              <div
                key={step?.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'transform scale-105' : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-white border-liquid-gold shadow-warm'
                    : 'bg-white/50 border-transparent hover:border-primary/30 hover:bg-white/80'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-liquid-gold text-white' :'bg-primary/10 text-primary'
                    }`}>
                      <Icon name={step?.icon} size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                          activeStep === index
                            ? 'bg-liquid-gold/20 text-liquid-gold' :'bg-primary/10 text-primary'
                        }`}>
                          Step {step?.id}
                        </span>
                      </div>
                      
                      <h3 className={`font-heading text-xl font-bold mb-2 transition-colors duration-300 ${
                        activeStep === index ? 'text-heritage-green' : 'text-foreground'
                      }`}>
                        {step?.title}
                      </h3>
                      
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {step?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-premium overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={processSteps?.[activeStep]?.image}
                  alt={processSteps?.[activeStep]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-green/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    {processSteps?.[activeStep]?.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-foreground/80 leading-relaxed mb-6 whitespace-pre-line">
                  {processSteps?.[activeStep]?.details}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {processSteps?.[activeStep]?.metrics?.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl font-bold text-liquid-gold mb-1">
                        {metric?.value}
                      </div>
                      <div className="text-xs text-foreground/60">
                        {metric?.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;