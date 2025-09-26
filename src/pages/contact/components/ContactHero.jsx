import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-heritage-green text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-liquid-gold rounded-full mb-8 shadow-warm">
            <Icon name="MessageCircle" size={32} className="text-white" />
          </div>
          
          <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Connect with Our
            <span className="block text-liquid-gold">Wellness Experts</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
            Whether you're seeking premium oils for your family's wellness or exploring partnership opportunities, our team is here to guide you on your journey to natural health.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
            <div className="flex items-center space-x-3">
              <Icon name="Clock" size={20} className="text-liquid-gold" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Shield" size={20} className="text-liquid-gold" />
              <span>Secure & Confidential</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Users" size={20} className="text-liquid-gold" />
              <span>Expert Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;