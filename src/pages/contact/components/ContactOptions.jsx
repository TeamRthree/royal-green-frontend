import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactOptions = () => {
  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us Directly",
      description: "Speak with our wellness experts for immediate guidance",
      details: "+1 (555) 123-4567",
      subDetails: "Mon-Fri: 9AM-6PM EST",
      action: "Call Now",
      variant: "outline"
    },
    {
      icon: "Mail",
      title: "Email Support",
      description: "Send us your questions and we\'ll respond within 24 hours",
      details: "support@royalgreen.com",
      subDetails: "Average response: 4 hours",
      action: "Send Email",
      variant: "outline"
    },
    {
      icon: "MessageSquare",
      title: "Live Chat",
      description: "Get instant answers from our customer care team",
      details: "Available Now",
      subDetails: "Mon-Fri: 9AM-8PM EST",
      action: "Start Chat",
      variant: "default"
    },
    {
      icon: "Calendar",
      title: "Schedule Consultation",
      description: "Book a personalized wellness consultation with our experts",
      details: "30-minute sessions",
      subDetails: "Free for first consultation",
      action: "Book Now",
      variant: "default"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-heritage-green mb-6">
            Choose Your Preferred Way to Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer multiple channels to ensure you get the support you need, when you need it. Our team is committed to providing exceptional service across all touchpoints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods?.map((method, index) => (
            <div
              key={index}
              className="bg-card rounded-organic p-8 shadow-soft hover:shadow-warm transition-all duration-300 border border-border group hover:border-liquid-gold/30"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-liquid-gold/10 to-primary/10 rounded-full mb-6 group-hover:from-liquid-gold/20 group-hover:to-primary/20 transition-all duration-300">
                  <Icon 
                    name={method?.icon} 
                    size={28} 
                    className="text-primary group-hover:text-liquid-gold transition-colors duration-300" 
                  />
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-heritage-green mb-3">
                  {method?.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {method?.description}
                </p>
                
                <div className="mb-6">
                  <p className="font-semibold text-primary text-lg mb-1">
                    {method?.details}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {method?.subDetails}
                  </p>
                </div>
                
                <Button
                  variant={method?.variant}
                  fullWidth
                  className={method?.variant === 'default' ? 
                    "bg-gradient-to-r from-liquid-gold to-liquid-gold-dark hover:from-liquid-gold-dark hover:to-liquid-gold" : "border-liquid-gold text-liquid-gold hover:bg-liquid-gold hover:text-white"
                  }
                >
                  {method?.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;