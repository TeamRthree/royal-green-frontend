import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HealthBenefitsPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('health-benefits-preview');
    if (section) observer?.observe(section);

    return () => observer?.disconnect();
  }, []);

  const healthCategories = [
    {
      id: 1,
      title: "Heart Health",
      icon: "Heart",
      color: "text-red-500",
      bgColor: "bg-red-50",
      description: "Support cardiovascular wellness with omega-rich oils that help maintain healthy cholesterol levels and promote circulation.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      benefits: [
        "Reduces bad cholesterol (LDL)",
        "Supports healthy blood pressure",
        "Improves circulation",
        "Rich in omega-3 fatty acids"
      ],
      oils: ["Sesame Oil", "Groundnut Oil"]
    },
    {
      id: 2,
      title: "Skin & Hair Care",
      icon: "Sparkles",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      description: "Nourish your skin and hair naturally with vitamin-rich oils that provide deep moisturization and protection.",
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?w=400&h=300&fit=crop",
      benefits: [
        "Deep moisturization",
        "Anti-aging properties",
        "Hair strength & shine",
        "Natural UV protection"
      ],
      oils: ["Coconut Oil", "Sesame Oil"]
    },
    {
      id: 3,
      title: "Digestive Wellness",
      icon: "Zap",
      color: "text-green-500",
      bgColor: "bg-green-50",
      description: "Enhance digestive health with easily digestible oils that support nutrient absorption and gut wellness.",
      image: "https://images.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729_1280.jpg?w=400&h=300&fit=crop",
      benefits: [
        "Improves nutrient absorption",
        "Supports gut health",
        "Easy digestion",
        "Reduces inflammation"
      ],
      oils: ["Coconut Oil", "Groundnut Oil"]
    },
    {
      id: 4,
      title: "Immunity Boost",
      icon: "Shield",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      description: "Strengthen your immune system with antioxidant-rich oils that help protect against oxidative stress.",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=300&fit=crop",
      benefits: [
        "Rich in antioxidants",
        "Boosts natural immunity",
        "Anti-inflammatory properties",
        "Supports cellular health"
      ],
      oils: ["Mustard Oil", "Sesame Oil"]
    }
  ];

  const wellnessStats = [
    {
      id: 1,
      number: "95%",
      label: "Customer Satisfaction",
      description: "Report improved health"
    },
    {
      id: 2,
      number: "30+",
      label: "Health Benefits",
      description: "Scientifically documented"
    },
    {
      id: 3,
      number: "100%",
      label: "Natural Ingredients",
      description: "No artificial additives"
    }
  ];

  return (
    <section id="health-benefits-preview" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-liquid-gold/20 rounded-full px-4 py-2 mb-4">
            <Icon name="Heart" size={16} className="text-liquid-gold" />
            <span className="text-liquid-gold font-accent text-sm tracking-wide">Wellness Benefits</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-heritage-green mb-4">
            Nature's Medicine Cabinet
          </h2>
          
          <p className="text-heritage-green/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the scientifically-backed health benefits of our premium oils. Each drop is packed with essential nutrients that support your family's wellness journey naturally.
          </p>
        </div>

        {/* Wellness Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {wellnessStats?.map((stat, index) => (
            <div key={stat?.id} className="text-center bg-warm-cream rounded-2xl p-8 shadow-soft hover:shadow-premium transition-all duration-300">
              <div className="font-heading text-4xl md:text-5xl font-bold text-liquid-gold mb-2">
                {stat?.number}
              </div>
              <div className="font-heading text-xl font-semibold text-heritage-green mb-2">
                {stat?.label}
              </div>
              <div className="text-heritage-green/70">
                {stat?.description}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Health Categories */}
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {healthCategories?.map((category, index) => (
              <button
                key={category?.id}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-liquid-gold text-heritage-green shadow-warm scale-105'
                    : 'bg-warm-cream text-heritage-green hover:bg-liquid-gold/20 hover:scale-102'
                }`}
              >
               
                <span className="font-medium">{category?.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Category Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-premium">
                  <Image
                    src={healthCategories?.[activeCategory]?.image}
                    alt={healthCategories?.[activeCategory]?.title}
                    className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  
                  
                </div>
              </div>

              {/* Category Details */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-heritage-green">
                    {healthCategories?.[activeCategory]?.title}
                  </h3>
                  
                  <p className="text-heritage-green/80 text-lg leading-relaxed">
                    {healthCategories?.[activeCategory]?.description}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-3">
                  <h4 className="font-heading text-xl font-semibold text-heritage-green">Key Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {healthCategories?.[activeCategory]?.benefits?.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-liquid-gold rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Check" size={14} className="text-heritage-green" />
                        </div>
                        <span className="text-heritage-green/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Oils */}
                <div className="space-y-3">
                  <h4 className="font-heading text-xl font-semibold text-heritage-green">Best Oils for This:</h4>
                  <div className="flex flex-wrap gap-2">
                    {healthCategories?.[activeCategory]?.oils?.map((oil, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center space-x-2 bg-liquid-gold/20 text-heritage-green px-4 py-2 rounded-full text-sm font-medium"
                      >
                        <Icon name="Droplets" size={14} className="text-liquid-gold" />
                        <span>{oil}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/health-benefits" className="flex-1">
                    <Button 
                      variant="default" 
                      size="lg"
                      className="bg-liquid-gold hover:bg-liquid-gold-dark text-heritage-green font-semibold w-full"
                     
                    >
                      Learn More
                    </Button>
                  </Link>
                  
                  <Link to="/products" className="flex-1">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-heritage-green text-heritage-green hover:bg-heritage-green hover:text-white w-full"
                   
                    >
                      View Products
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
              Start Your Wellness Journey Today
            </h3>
            <p className="text-heritage-green/80 text-lg mb-8 max-w-2xl mx-auto">
              Consult with our wellness experts to discover which oils are perfect for your family's health goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-liquid-gold hover:bg-liquid-gold-dark text-heritage-green font-semibold shadow-premium"
                  
                >
                  Free Health Consultation
                </Button>
              </Link>
              
              <Link to="/health-benefits">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-heritage-green text-heritage-green hover:bg-heritage-green hover:text-white"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Complete Health Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefitsPreview;