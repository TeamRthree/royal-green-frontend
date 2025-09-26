import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Appicon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      id: 1,
      title: "Liquid Gold for Your Family\'s Wellness",
      subtitle: "Premium Organic Oils Crafted with Ancient Wisdom",
      description: "Experience the purity of nature's finest oils, cold-pressed to perfection and delivered with the promise of authentic wellness for your loved ones.",
      image: "https://img.freepik.com/premium-photo/bottle-pouring-virgin-olive-oi_752237-8575.jpg?w=800&h=600&fit=crop",
      cta: "Discover Our Heritage",
      ctaLink: "/about"
    },
    {
      id: 2,
      title: "Purity You Can Trust",
      subtitle: "Certified Organic • Lab Tested • Family Safe",
      description: "Every drop undergoes rigorous quality testing to ensure the highest standards of purity, potency, and safety for your family's daily wellness routine.",
      image: "https://img.freepik.com/free-photo/soybean-oil-soybean-food-beverage-products-food-nutrition-concept_1150-26352.jpg?w=800&h=600&fit=crop",
      cta: "View Certifications",
      ctaLink: "/infrastructure-process"
    },
    {
      id: 3,
      title: "From Our Family to Yours",
      subtitle: "Three Generations of Oil Mastery",
      description: "Rooted in tradition, perfected by science. Our family's commitment to excellence spans generations, bringing you oils that nourish both body and soul.",
      image: "https://media.istockphoto.com/id/1449785997/photo/smiling-couple-preparing-food-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=c7_3knbcxMFNvbZ6GfNZbD6Yl-55TWsMnf9heQLwyvs=",
      cta: "Explore Products",
      ctaLink: "/products"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-heritage-green via-primary to-heritage-green overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4A017%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-liquid-gold/20 backdrop-blur-sm rounded-full px-4 py-2 border border-[#807d62]">
                <Icon name="Award" size={16} className="text-liquid-gold" />
                <span className="text-liquid-gold font-accent text-sm tracking-wide">Premium Organic Certified</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              
              <h2 className="font-accent text-xl md:text-2xl text-liquid-gold font-medium">
                {heroSlides[currentSlide].subtitle}
              </h2>
              
              <p className="text-warm-cream text-lg md:text-xl leading-relaxed max-w-2xl">
                {heroSlides[currentSlide].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={heroSlides[currentSlide].ctaLink}>
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-liquid-gold hover:bg-liquid-gold-dark text-heritage-green font-semibold shadow-premium w-full sm:w-auto"
                  
                >
                  {heroSlides[currentSlide].cta}
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-heritage-green w-full sm:w-auto"
                  
                >
                  Free Consultation
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-liquid-gold" />
                <span className="text-warm-cream text-sm">100% Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Leaf" size={20} className="text-liquid-gold" />
                <span className="text-warm-cream text-sm">Cold Pressed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Heart" size={20} className="text-liquid-gold" />
                <span className="text-warm-cream text-sm">Family Safe</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-premium">
                <Image
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-green/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -top-4 -right-4 bg-liquid-gold rounded-full p-6 shadow-premium certification-badge">
                <div className="text-center">
                  <Icon name="Award" size={24} className="text-heritage-green mx-auto mb-1" />
                  <div className="text-heritage-green font-accent text-xs font-semibold">Premium</div>
                  <div className="text-heritage-green font-accent text-xs">Quality</div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-warm-cream rounded-2xl p-4 shadow-warm">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-liquid-gold rounded-full flex items-center justify-center">
                    <Icon name="Users" size={20} className="text-heritage-green" />
                  </div>
                  <div>
                    <div className="text-heritage-green font-heading text-xl font-bold">10,000+</div>
                    <div className="text-heritage-green/70 text-sm">Happy Families</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-liquid-gold scale-125' : 'bg-white hover:bg-stone-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-warm-cream text-sm font-accent">Discover More</span>
          <Icon name="ChevronDown" size={24} className="text-liquid-gold" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;