import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SupportResources = () => {
  const resources = [
    {
      icon: "HelpCircle",
      title: "Frequently Asked Questions",
      description: "Find quick answers to common questions about our products, usage, and ordering process.",
      items: [
        "Product specifications and certifications",
        "Usage guidelines and recommendations", 
        "Shipping and delivery information",
        "Quality assurance and testing"
      ],
      action: "Browse FAQ",
      link: "#"
    },
    {
      icon: "BookOpen",
      title: "Usage Guides & Recipes",
      description: "Comprehensive guides on how to incorporate our oils into your daily wellness routine.",
      items: [
        "Cooking and culinary applications",
        "Wellness and therapeutic uses",
        "Storage and handling tips",
        "Recipe collections and ideas"
      ],
      action: "View Guides",
      link: "#"
    },
    {
      icon: "FileText",
      title: "Product Documentation",
      description: "Access detailed product information, certifications, and technical specifications.",
      items: [
        "Certificate of analysis reports",
        "Organic certification documents",
        "Nutritional information sheets",
        "Safety data sheets (SDS)"
      ],
      action: "Download Docs",
      link: "#"
    }
  ];

  const socialChannels = [
    {
      name: "Facebook",
      icon: "Facebook",
      handle: "@RoyalGreenOil",
      description: "Community discussions and wellness tips",
      followers: "12.5K followers"
    },
    {
      name: "Instagram", 
      icon: "Instagram",
      handle: "@royalgreen_oil",
      description: "Behind-the-scenes and product showcases",
      followers: "8.2K followers"
    },
    {
      name: "YouTube",
      icon: "Youtube",
      handle: "Royal Green Oil",
      description: "Educational videos and facility tours",
      followers: "5.1K subscribers"
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      handle: "Royal Green Oil Co.",
      description: "Industry insights and B2B updates",
      followers: "3.8K connections"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-warm-cream/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Support Resources */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-heritage-green mb-6">
              Self-Service Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access our comprehensive library of resources to find answers, learn about our products, and optimize your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resources?.map((resource, index) => (
              <div
                key={index}
                className="bg-card rounded-organic p-8 shadow-soft hover:shadow-warm transition-all duration-300 border border-border group hover:border-liquid-gold/30"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-liquid-gold/10 to-primary/10 rounded-full mb-4 group-hover:from-liquid-gold/20 group-hover:to-primary/20 transition-all duration-300">
                    <Icon 
                      name={resource?.icon} 
                      size={28} 
                      className="text-primary group-hover:text-liquid-gold transition-colors duration-300" 
                    />
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-heritage-green mb-3">
                    {resource?.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {resource?.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {resource?.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <Icon name="Check" size={16} className="text-liquid-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  fullWidth
                  className="border-liquid-gold text-liquid-gold hover:bg-liquid-gold hover:text-white"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  {resource?.action}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Community */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-heritage-green mb-6">
              Join Our Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with us on social media for wellness tips, product updates, and to be part of our growing community of health-conscious individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialChannels?.map((channel, index) => (
              <div
                key={index}
                className="bg-card rounded-organic p-6 shadow-soft hover:shadow-warm transition-all duration-300 border border-border group hover:border-liquid-gold/30 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-liquid-gold/10 to-primary/10 rounded-full mb-4 group-hover:from-liquid-gold/20 group-hover:to-primary/20 transition-all duration-300">
                  <Icon 
                    name={channel?.icon} 
                    size={24} 
                    className="text-primary group-hover:text-liquid-gold transition-colors duration-300" 
                  />
                </div>
                
                <h3 className="font-semibold text-heritage-green mb-2">
                  {channel?.name}
                </h3>
                
                <p className="text-primary font-medium mb-2">
                  {channel?.handle}
                </p>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {channel?.description}
                </p>
                
                <p className="text-xs text-liquid-gold font-medium">
                  {channel?.followers}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="default"
              className="bg-gradient-to-r from-liquid-gold to-liquid-gold-dark hover:from-liquid-gold-dark hover:to-liquid-gold"
              iconName="Users"
              iconPosition="left"
            >
              Follow All Channels
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportResources;