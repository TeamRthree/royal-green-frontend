import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const trustElements = [
    {
      icon: "Shield",
      title: "SSL Secured",
      description: "256-bit encryption protects all communications"
    },
    {
      icon: "Lock",
      title: "Privacy Protected",
      description: "Your information is never shared with third parties"
    },
    {
      icon: "Award",
      title: "Certified Quality",
      description: "ISO 9001 and organic certifications maintained"
    },
    {
      icon: "Clock",
      title: "Guaranteed Response",
      description: "24-hour response time commitment"
    }
  ];

  const certifications = [
    {
      name: "USDA Organic",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      description: "Certified organic processing"
    },
    {
      name: "ISO 9001",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop&crop=center", 
      description: "Quality management system"
    },
    {
      name: "FDA Registered",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop&crop=center",
      description: "Food facility registration"
    },
    {
      name: "Non-GMO Project",
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=100&h=100&fit=crop&crop=center",
      description: "Non-GMO verified products"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-heritage-green text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
            Your Trust is Our Priority
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We maintain the highest standards of security, privacy, and quality to ensure your confidence in every interaction with Royal Green Oil.
          </p>
        </div>

        {/* Trust Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustElements?.map((element, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-liquid-gold rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={element?.icon} size={28} className="text-white" />
              </div>
              
              <h3 className="font-heading text-lg font-semibold mb-2">
                {element?.title}
              </h3>
              
              <p className="text-sm opacity-80">
                {element?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white/10 backdrop-blur-sm rounded-organic p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Our Certifications & Compliance
            </h3>
            <p className="opacity-90">
              Recognized by leading industry organizations for our commitment to quality and safety.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications?.map((cert, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-white/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={cert?.image}
                    alt={cert?.name}
                    className="w-16 h-16 object-cover rounded-full"
                    onError={(e) => {
                      e.target.src = '/assets/images/no_image.png';
                    }}
                  />
                </div>
                
                <h4 className="font-semibold mb-1">
                  {cert?.name}
                </h4>
                
                <p className="text-sm opacity-80">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Commitment */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-liquid-gold/20 rounded-organic px-8 py-4">
            <Icon name="MessageCircle" size={24} className="text-liquid-gold" />
            <div className="text-left">
              <p className="font-semibold">Commitment to Excellence</p>
              <p className="text-sm opacity-90">Every inquiry receives personal attention from our expert team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;