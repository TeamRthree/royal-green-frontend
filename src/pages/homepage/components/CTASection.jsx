import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Appicon';
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


        

        {/* Final CTA */}
        <div className={`text-center  transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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