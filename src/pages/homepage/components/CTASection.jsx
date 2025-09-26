import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('cta-section');
    if (section) observer?.observe(section);

    return () => observer?.disconnect();
  }, []);

  const handleNewsletterSubmit = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const ctaOptions = [
    {
      id: 1,
      title: "Free Consultation",
      subtitle: "Expert Wellness Guidance",
      description: "Get personalized oil recommendations from our wellness experts based on your family\'s health goals.",
      icon: "MessageCircle",
      color: "bg-liquid-gold",
      textColor: "text-heritage-green",
      link: "/contact",
      buttonText: "Book Consultation",
      features: [
        "Personalized recommendations",
        "Health goal assessment",
        "Usage guidance",
        "Follow-up support"
      ]
    },
    {
      id: 2,
      title: "Sample Kit",
      subtitle: "Try Before You Buy",
      description: "Experience the quality difference with our premium sample kit featuring all our signature oils.",
      icon: "Package",
      color: "bg-heritage-green",
      textColor: "text-warm-cream",
      link: "/contact",
      buttonText: "Order Samples",
      features: [
        "All oil varieties",
        "Usage instructions",
        "Recipe suggestions",
        "Free shipping"
      ]
    },
    {
      id: 3,
      title: "Facility Tour",
      subtitle: "See Our Process",
      description: "Visit our state-of-the-art facility and witness our commitment to quality and transparency firsthand.",
      icon: "Factory",
      color: "bg-warm-cream",
      textColor: "text-heritage-green",
      link: "/infrastructure-process",
      buttonText: "Schedule Visit",
      features: [
        "Guided facility tour",
        "Process demonstration",
        "Quality lab visit",
        "Expert interaction"
      ]
    }
  ];

  const quickActions = [
    {
      id: 1,
      title: "Product Catalog",
      description: "Browse our complete collection",
      icon: "BookOpen",
      link: "/products"
    },
    {
      id: 2,
      title: "Health Benefits",
      description: "Learn about wellness benefits",
      icon: "Heart",
      link: "/health-benefits"
    },
    {
      id: 3,
      title: "Our Story",
      description: "Discover our heritage",
      icon: "Users",
      link: "/about"
    },
    {
      id: 4,
      title: "Contact Us",
      description: "Get in touch today",
      icon: "Phone",
      link: "/contact"
    }
  ];

  return (
    <section id="cta-section" className="py-20 bg-gradient-to-br from-heritage-green via-primary to-heritage-green">
      <div className="container mx-auto px-4">
        {/* Main CTA Cards */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {ctaOptions?.map((option, index) => (
            <div
              key={option?.id}
              className={`${option?.color} rounded-3xl p-8 shadow-premium hover:shadow-warm transition-all duration-300 hover:scale-105 group`}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${option?.id === 3 ? 'bg-heritage-green' : 'bg-white/20'} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon 
                    name={option?.icon} 
                    size={28} 
                    className={option?.id === 3 ? 'text-liquid-gold' : option?.textColor} 
                  />
                </div>
                
                <h3 className={`font-heading text-2xl font-bold ${option?.textColor} mb-2`}>
                  {option?.title}
                </h3>
                
                <h4 className={`font-accent text-lg ${option?.id === 3 ? 'text-heritage-green/80' : option?.textColor + '/80'} font-medium mb-4`}>
                  {option?.subtitle}
                </h4>
                
                <p className={`${option?.id === 3 ? 'text-heritage-green/70' : option?.textColor + '/70'} leading-relaxed mb-6`}>
                  {option?.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {option?.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 ${option?.id === 3 ? 'bg-heritage-green' : 'bg-white/20'} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon 
                        name="Check" 
                        size={12} 
                        className={option?.id === 3 ? 'text-liquid-gold' : option?.textColor} 
                      />
                    </div>
                    <span className={`${option?.id === 3 ? 'text-heritage-green/80' : option?.textColor + '/80'} text-sm`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link to={option?.link} className="block">
                <Button 
                  variant={option?.id === 3 ? "default" : "outline"}
                  size="lg"
                  className={`w-full font-semibold ${
                    option?.id === 3 
                      ? 'bg-heritage-green hover:bg-heritage-green/90 text-warm-cream' 
                      : option?.id === 1
                        ? 'border-2 border-heritage-green text-heritage-green hover:bg-heritage-green hover:text-warm-cream' :'border-2 border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-heritage-green'
                  }`}
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  {option?.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className={`max-w-4xl mx-auto mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-warm-cream rounded-3xl p-8 md:p-12 shadow-premium text-center">
            <div className="w-16 h-16 bg-liquid-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Mail" size={28} className="text-heritage-green" />
            </div>
            
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-heritage-green mb-4">
              Stay Connected with Wellness Tips
            </h3>
            
            <p className="text-heritage-green/80 text-lg mb-8 max-w-2xl mx-auto">
              Join our wellness community and receive exclusive health tips, recipes, and special offers delivered to your inbox.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e?.target?.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button 
                    type="submit"
                    variant="default"
                    size="lg"
                    className="bg-liquid-gold hover:bg-liquid-gold-dark text-heritage-green font-semibold"
                    iconName="Send"
                    iconPosition="right"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-center space-x-3 text-heritage-green">
                <Icon name="CheckCircle" size={24} className="text-liquid-gold" />
                <span className="font-semibold text-lg">Thank you for subscribing!</span>
              </div>
            )}

            <p className="text-heritage-green/60 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        

        {/* Final CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Family's Wellness?
          </h3>
          <p className="text-warm-cream text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of families who have made the switch to Royal Green Oil's premium organic oils.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                variant="default" 
                size="xl"
                className="bg-liquid-gold hover:bg-liquid-gold-dark text-heritage-green font-bold shadow-premium"
                
              >
                Start Your Journey Today
              </Button>
            </Link>
            
            <Link to="/products">
              <Button 
                variant="outline" 
                size="xl"
                className="border-2 border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-heritage-green font-bold"
                
              >
                Explore Our Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;