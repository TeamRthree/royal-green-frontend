import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationInfo = () => {
  const contactDetails = [
    {
      icon: "MapPin",
      title: "Visit Our Facility",
      details: [
        "Royal Green Oil Processing Center",
        "1234 Wellness Boulevard",
        "Natural Valley, CA 90210",
        "United States"
      ]
    },
    {
      icon: "Clock",
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM", 
        "Sunday: Closed",
        "Emergency Support: 24/7"
      ]
    },
    {
      icon: "Globe",
      title: "Service Areas",
      details: [
        "North America (Primary)",
        "International Shipping Available",
        "Distributor Network Worldwide",
        "Custom Solutions Available"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-heritage-green mb-8">
              Find Us & Connect
            </h2>
            
            <div className="space-y-8">
              {contactDetails?.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-liquid-gold/10 to-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item?.icon} size={24} className="text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-heritage-green mb-3">
                      {item?.title}
                    </h3>
                    <div className="space-y-1">
                      {item?.details?.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-organic p-6 shadow-soft border border-border hover:border-liquid-gold/30 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Phone" size={20} className="text-liquid-gold" />
                  <span className="font-semibold text-heritage-green">Call Us</span>
                </div>
                <p className="text-lg font-semibold text-primary">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Toll-free support line</p>
              </div>
              
              <div className="bg-card rounded-organic p-6 shadow-soft border border-border hover:border-liquid-gold/30 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Mail" size={20} className="text-liquid-gold" />
                  <span className="font-semibold text-heritage-green">Email Us</span>
                </div>
                <p className="text-lg font-semibold text-primary">support@royalgreen.com</p>
                <p className="text-sm text-muted-foreground">24-hour response time</p>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-card rounded-organic overflow-hidden shadow-soft border border-border">
              <div className="h-96 lg:h-[500px] relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Royal Green Oil Processing Center"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=34.0522,-118.2437&z=14&output=embed"
                  className="border-0"
                />
                
                {/* Map Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-organic p-4 shadow-soft">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-liquid-gold rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-semibold text-heritage-green">Royal Green Oil Facility</p>
                      <p className="text-sm text-muted-foreground">Processing & Distribution Center</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-heritage-green mb-3">
                  Visit Our Facility
                </h3>
                <p className="text-muted-foreground mb-4">
                  Schedule a tour of our state-of-the-art processing facility and see our commitment to quality firsthand.
                </p>
                <button className="inline-flex items-center space-x-2 text-liquid-gold hover:text-liquid-gold-dark transition-colors duration-200">
                  <Icon name="Calendar" size={16} />
                  <span className="font-semibold">Schedule a Tour</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;