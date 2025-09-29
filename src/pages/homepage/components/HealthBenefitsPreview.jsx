import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Appicon';
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
    description: "Support cardiovascular wellness with oils that help maintain healthy cholesterol levels and promote circulation.",
    image: "https://media.istockphoto.com/id/2227309633/photo/doctor-holding-red-heart-symbol-in-hand-concept-of-healthcare-cardiology-and-medical-care.jpg?s=612x612&w=0&k=20&c=qilJyTN9kxEuUZiw8Xknduks-eVAVhcEZQZmchEXB80=",
    benefits: [
      "Reduces bad cholesterol (LDL)",
      "Supports healthy blood pressure",
      "Improves circulation",
      "Rich in natural nutrients"
    ],
    oils: ["Sunflower Oil", "Chekku Groundnut Oil", "Groundnut Oil", "Blended Edible Vegetable Oil", "Palmolein Oil"]
  },
  {
    id: 2,
    title: "Everyday Nutrition",
    icon: "Sparkles",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    description: "Enhance daily meals with oils that preserve natural vitamins, essential fatty acids, and provide balanced nutrition.",
    image: "https://media.istockphoto.com/id/1477430966/photo/woman-preparing-quinoa-vegetable-mix-cooked-in-a-frying-pan.jpg?s=612x612&w=0&k=20&c=eGlflJ8A7Kg8SbidqJxDp9hzbG0ETt3saS7Z4Sf250g=",
    benefits: [
      "Retains natural vitamins",
      "Supports balanced diet",
      "Safe cooking without harmful chemicals",
      "Versatile for all recipes"
    ],
    oils: [
      "Sunflower Oil",
      "Chekku Groundnut Oil",
      "Groundnut Oil",
      "Blended Edible Vegetable Oil",
      "Palmolein Oil"
    ]
  },
  {
    id: 3,
    title: "Digestive Wellness",
    icon: "Zap",
    color: "text-green-500",
    bgColor: "bg-green-50",
    description: "Enhance digestive health with easily digestible oils that support nutrient absorption and gut wellness.",
    image: "https://t3.ftcdn.net/jpg/15/61/21/14/240_F_1561211466_qBPs7zQzEdFc0lkIoVP1ZeONF0IKvX3W.jpg",
    benefits: [
      "Improves nutrient absorption",
      "Supports gut health",
      "Easy digestion",
      "Reduces inflammation"
    ],
    oils: ["Chekku Groundnut Oil", "Groundnut Oil", "Blended Edible Vegetable Oil"]
  },
  {
    id: 4,
    title: "Immunity Boost",
    icon: "Shield",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    description: "Strengthen your immune system with antioxidant-rich oils that help protect against oxidative stress.",
    image: "https://media.istockphoto.com/id/1315846133/photo/female-doing-meditation-in-park-stock-photo.jpg?s=612x612&w=0&k=20&c=L3ewGOHBDzlbxoNh57yymKBCSF-LMv1_kHMrJNYpVvw=",
    benefits: [
      "Rich in antioxidants",
      "Boosts natural immunity",
      "Anti-inflammatory properties",
      "Supports cellular health"
    ],
    oils: ["Sunflower Oil", "Palmolein Oil", "Blended Edible Vegetable Oil"]
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

        
      </div>
    </section>
  );
};

export default HealthBenefitsPreview;