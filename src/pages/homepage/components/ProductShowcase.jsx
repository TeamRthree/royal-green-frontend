import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Appicon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('product-showcase');
    if (section) observer?.observe(section);

    return () => observer?.disconnect();
  }, []);

  const products = [
    {
      id: 1,
      name: "Sunflower Oil",
      subtitle: "Cold-Pressed Excellence",
      description: "Physically refined, least or no use of chemicals, retains natural vitamins and nutrition",
      image: "https://media.istockphoto.com/id/1186197556/photo/hair-remedy-of-all-purpose-ayurvedic-medicinal-herb-i-e-neem-or-nim-or-indian-lilac-in-a.jpg?s=612x612&w=0&k=20&c=dQ6vi_DSBwGNQgsvxrEnooGcVpNsvEBY1k_fm6-skj0=",
      benefits: ["Heart Health", "Skin Care", "Bone Strength"],
      purity: "99.8%",
      extraction: "Cold Pressed",
      certification: "Organic Certified"
    },
    {
      id: 2,
      name: "Chekku Groundnut Oil",
      subtitle: "Traditional Strength",
      description: "AGMARK certified, traditionally processed via Rotary extraction (“Chekku”)",
      image: "https://media.istockphoto.com/id/953883278/photo/peanut-oil-on-a-table.jpg?s=612x612&w=0&k=20&c=ubwsr8CZlZT3Ku1MuL42eSBjElPNGLmJQSmb7UY-dPc=",
      benefits: ["Immunity Boost", "Hair Care", "Weight Management"],
      purity: "99.9%",
      extraction: "Virgin Cold Pressed",
      certification: "Premium Grade"
    },
    {
      id: 3,
      name: "Blended Edible Vegetable Oil",
      subtitle: "Heart Healthy Choice",
      description: "Blend of raw Groundnut Oil + refined Palmolein Oil",
      image: "https://www.foodrepublic.com/img/gallery/youll-probably-never-guess-what-vegetable-oil-actually-is/l-intro-1701371874.jpg",
      benefits: ["Joint Health", "Circulation", "Antimicrobial"],
      purity: "99.7%",
      extraction: "Wood Pressed",
      certification: "Traditional Method"
    },
    {
      id: 4,
      name: "Royal Groundnut Oil",
      subtitle: "Virgin & Pure",
      description: "Light and flavorful groundnut oil with balanced fatty acids, perfect for everyday cooking needs.",
      image: "https://media.istockphoto.com/id/1408296553/photo/peanut-oil-in-a-glass-jug-and-raw-peeled-groundnut-in-a-glass-bowl-over-gray-background.jpg?s=612x612&w=0&k=20&c=smSLbST6tLTBMhywWK9zwqw2sfahMefjDGdsWBjT704=",
      benefits: ["Heart Health", "Vitamin E", "Cooking Versatility"],
      purity: "99.6%",
      extraction: "Expeller Pressed",
      certification: "Quality Assured"
    }
    ,
    {
      id: 5,
      name: "Premium Palmolein Oil",
      subtitle: "Refined & Light",
      description: "Crude Palmolein imported from Malaysia, processed in India, rich in Vitamin E",
      image: "https://media.istockphoto.com/id/1390042990/photo/palm-oil-in-glass-tropical-leaves-and-fruits-on-grey-table-space-for-text.jpg?s=612x612&w=0&k=20&c=UjykjL6J2zpES9ARnZ59MlF_Nb9ycCt-S2vU55yZepY=",
      benefits: ["High Stability", "Long Shelf Life", "Perfect for Frying"],
      purity: "99.6%",
      extraction: "Refined from Palm Fruit",
      certification: "FSSAI Certified"
    }
  ];

  const nextProduct = () => {
    setActiveProduct((prev) => (prev + 1) % products?.length);
  };

  const prevProduct = () => {
    setActiveProduct((prev) => (prev - 1 + products?.length) % products?.length);
  };

  return (
    <section id="product-showcase" className="py-20 bg-[#fffce3]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-liquid-gold/20 rounded-full px-4 py-2 mb-4">
            <Icon name="Droplets" size={16} className="text-liquid-gold" />
            <span className="text-liquid-gold font-accent text-sm tracking-wide">Premium Collection</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-heritage-green mb-4">
            Discover Our Liquid Gold
          </h2>
          
          <p className="text-heritage-green/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Each oil in our collection represents generations of expertise, combining traditional extraction methods with modern quality standards to deliver pure wellness in every drop.
          </p>
        </div>

        {/* Interactive Product Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image & Info */}
            <div className={`relative transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative">
                {/* Main Product Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-premium border-4 border-white ">
                  <Image
                    src={products?.[activeProduct]?.image}
                    alt={products?.[activeProduct]?.name}
                    className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                  
                  
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevProduct}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center hover:bg-liquid-gold hover:text-heritage-green transition-all duration-300 group"
                  aria-label="Previous product"
                >
                  <Icon name="ChevronLeft" size={20} className="group-hover:scale-110 transition-transform" />
                </button>
                
                <button
                  onClick={nextProduct}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center hover:bg-liquid-gold hover:text-heritage-green transition-all duration-300 group"
                  aria-label="Next product"
                >
                  <Icon name="ChevronRight" size={20} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className={`space-y-8 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="space-y-4">
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-heritage-green">
                  {products?.[activeProduct]?.name}
                </h3>
                
                <h4 className="font-accent text-xl text-liquid-gold font-medium">
                  {products?.[activeProduct]?.subtitle}
                </h4>
                
                <p className="text-heritage-green/80 text-lg leading-relaxed">
                  {products?.[activeProduct]?.description}
                </p>
              </div>

              {/* Product Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                  <Icon name="Droplets" size={24} className="text-liquid-gold mx-auto mb-2" />
                  <div className="text-heritage-green font-semibold text-sm">Purity</div>
                  <div className="text-heritage-green/70 text-xs">{products?.[activeProduct]?.purity}</div>
                </div>
                
                <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                  <Icon name="Settings" size={24} className="text-liquid-gold mx-auto mb-2" />
                  <div className="text-heritage-green font-semibold text-sm">Method</div>
                  <div className="text-heritage-green/70 text-xs">{products?.[activeProduct]?.extraction}</div>
                </div>
                
                <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                  <Icon name="Award" size={24} className="text-liquid-gold mx-auto mb-2" />
                  <div className="text-heritage-green font-semibold text-sm">Grade</div>
                  <div className="text-heritage-green/70 text-xs">{products?.[activeProduct]?.certification}</div>
                </div>
              </div>

              {/* Health Benefits */}
              <div className="space-y-3">
                <h5 className="font-heading text-lg font-semibold text-heritage-green">Key Benefits:</h5>
                <div className="flex flex-wrap gap-2">
                  {products?.[activeProduct]?.benefits?.map((benefit, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center space-x-1 bg-liquid-gold/20 text-heritage-green px-3 py-1 rounded-full text-sm font-medium"
                    >
                      <Icon name="Check" size={14} className="text-liquid-gold" />
                      <span>{benefit}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="flex-1">
                  <Button 
                    variant="default" 
                    size="lg"
                    className="bg-liquid-gold hover:bg-liquid-gold-dark text-white font-semibold w-full"
                    
                  >
                    View Details
                  </Button>
                </Link>
                
                <Link to="/contact" className="flex-1">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-heritage-green text-heritage-green hover:bg-heritage-green hover:text-white w-full"
                    
                  >
                    Get Sample
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Product Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {products?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProduct === index 
                    ? 'bg-liquid-gold scale-125' :'bg-stone-200 hover:bg-heritage-green/60'
                }`}
                aria-label={`View ${products?.[index]?.name}`}
              />
            ))}
          </div>
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-16">
          <Link to="/products">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-liquid-gold text-liquid-gold hover:bg-liquid-gold hover:text-heritage-green"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Explore Complete Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;