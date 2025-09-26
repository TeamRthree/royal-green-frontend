import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-heritage-green via-primary to-heritage-green overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-liquid-gold rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-warm-cream rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-liquid-gold rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-liquid-gold/20 rounded-full border border-liquid-gold/30">
                <span className="text-liquid-gold font-accent text-sm tracking-wide">
                  Process Transparency
                </span>
              </div>
              
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white leading-tight">
                Where Ancient Wisdom
                <span className="block text-liquid-gold">Meets Modern Purity</span>
              </h1>
              
              <p className="text-warm-cream text-lg lg:text-xl leading-relaxed max-w-2xl">
                Journey through our state-of-the-art facilities where traditional extraction methods are enhanced by cutting-edge quality control, ensuring every drop meets the highest standards of purity and excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-liquid-gold hover:bg-liquid-gold-dark text-heritage-green font-semibold shadow-warm"
              >
                Virtual Facility Tour
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-heritage-green"
              >
                Download Quality Reports
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-warm-cream/20">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-liquid-gold">25+</div>
                <div className="text-warm-cream text-sm">Quality Checks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-liquid-gold">99.9%</div>
                <div className="text-warm-cream text-sm">Purity Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-liquid-gold">ISO</div>
                <div className="text-warm-cream text-sm">Certified</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=700&fit=crop"
                alt="Modern oil extraction facility with traditional methods"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Overlay Info Cards */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-soft">
                <div className="text-heritage-green font-semibold text-sm">Temperature Control</div>
                <div className="text-liquid-gold font-bold text-lg">45°C</div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-soft">
                <div className="text-heritage-green font-semibold text-sm">Processing Time</div>
                <div className="text-liquid-gold font-bold text-lg">72 Hours</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-liquid-gold/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-warm-cream/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;