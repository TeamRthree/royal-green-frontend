import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Appicon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TrustSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Keerthi Subramanian",
      role: "Nutritionist & Wellness Expert",
      image: "data:image/jpeg;base64,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",
      content: "Royal Green Oil's commitment to purity is exceptional. I recommend their products to my clients because of their consistent quality and health benefits.",
      rating: 5,
      expertise: "15+ years in nutrition"
    },
    {
      id: 2,
      name: "Chef Karthik Selvam",
      role: "Michelin Star Chef",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQck5uBgPLIJudSghGgQKgYwY4zy9tiHcziUQ&s",
      content: "The flavor profile and quality of Royal Green oils elevate every dish. Their cold-pressed methods preserve the natural essence beautifully.",
      rating: 5,
      expertise: "20+ years culinary arts"
    },
    {
      id: 3,
      name: "Revathi Murugan",
      role: "Mother of Three",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHmo3Y6omlFA7UhWWWMy7oYH9XSsUKDy7ZQ&s",
      content: "Since switching to Royal Green oils, my family's health has improved significantly. The purity and taste are unmatched.",
      rating: 5,
      expertise: "Health-conscious family"
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

    const section = document.getElementById('trust-section');
    if (section) observer?.observe(section);

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const certifications = [
    {
      id: 1,
      name: "USDA Organic",
      icon: "Leaf",
      description: "Certified organic by USDA standards",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "ISO 22000",
      icon: "Shield",
      description: "Food safety management certified",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "HACCP",
      icon: "CheckCircle",
      description: "Hazard analysis critical control points",
      image: "https://images.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729_1280.jpg?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Lab Tested",
      icon: "FlaskConical",
      description: "Third-party laboratory verified",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=100&h=100&fit=crop"
    }
  ];

  const stats = [
    {
      id: 1,
      number: "10,000+",
      label: "Happy Families",
      icon: "Users"
    },
    {
      id: 2,
      number: "99.8%",
      label: "Purity Standard",
      icon: "Droplets"
    },
    {
      id: 3,
      number: "25+",
      label: "Years Experience",
      icon: "Calendar"
    },
    {
      id: 4,
      number: "100%",
      label: "Organic Certified",
      icon: "Leaf"
    }
  ];

  return (
    <section id="trust-section" className="py-20 bg-heritage-green">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-liquid-gold/20 rounded-full px-4 py-2 mb-4">
            <Icon name="Award" size={16} className="text-liquid-gold" />
            <span className="text-liquid-gold font-accent text-sm tracking-wide">Trust & Quality</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Experts & Families
          </h2>
          
          <p className="text-warm-cream text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is validated by industry certifications, expert endorsements, and thousands of satisfied families who trust our oils for their daily wellness.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats?.map((stat, index) => (
            <div key={stat?.id} className="text-center">
              <div className="w-16 h-16 bg-liquid-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-warm">
                <Icon name={stat?.icon} size={24} className="text-heritage-green" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-liquid-gold mb-2">
                {stat?.number}
              </div>
              <div className="text-white font-medium">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className={`mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Quality Certifications
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div
                key={cert?.id}
                className="bg-warm-cream rounded-xl p-6 text-center hover:shadow-premium transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-liquid-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={cert?.icon} size={24} className="text-heritage-green" />
                </div>
                <h4 className="font-heading text-lg font-bold text-heritage-green mb-2">
                  {cert?.name}
                </h4>
                <p className="text-heritage-green/70 text-sm">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Testimonials */}
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-8">
            What Experts Say
          </h3>
          
          <div className="relative">
            <div className="bg-warm-cream rounded-2xl p-8 md:p-12 shadow-premium">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Testimonial Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Image
                      src={testimonials?.[activeTestimonial]?.image}
                      alt={testimonials?.[activeTestimonial]?.name}
                      className="w-20 h-20 rounded-full object-cover shadow-soft"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-liquid-gold rounded-full flex items-center justify-center">
                      <Icon name="Quote" size={14} className="text-heritage-green" />
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-liquid-gold fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-heritage-green text-lg md:text-xl leading-relaxed mb-4 italic">
                    "{testimonials?.[activeTestimonial]?.content}"
                  </blockquote>
                  
                  <div>
                    <div className="font-heading text-xl font-bold text-heritage-green">
                      {testimonials?.[activeTestimonial]?.name}
                    </div>
                    <div className="text-liquid-gold font-medium">
                      {testimonials?.[activeTestimonial]?.role}
                    </div>
                    <div className="text-heritage-green/70 text-sm">
                      {testimonials?.[activeTestimonial]?.expertise}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
                      ? 'bg-liquid-gold scale-125' :'bg-white hover:bg-warm-cream/80'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
              Ready to Experience the Difference?
            </h3>
            <p className="text-warm-cream text-lg max-w-2xl mx-auto">
              Join thousands of families who trust Royal Green Oil for their wellness journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-liquid-gold hover:bg-liquid-gold-dark text-heritage-green font-semibold shadow-premium"
                  
                >
                  Get Free Consultation
                </Button>
              </Link>
              
              <Link to="/infrastructure-process">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-heritage-green"
                 
                >
                  View Our Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;