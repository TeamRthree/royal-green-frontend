import React from 'react';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-heritage-green via-primary to-heritage-green overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-liquid-gold rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-liquid-gold rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-liquid-gold rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-tight">
                Our Story of
                <span className="block text-liquid-gold liquid-gold-flow bg-clip-text text-transparent">
                  Liquid Gold
                </span>
              </h1>
              <p className="text-xl lg:text-2xl font-light opacity-90">
                Where ancient wisdom meets modern purity
              </p>
            </div>

            <div className="space-y-6 text-lg leading-relaxed opacity-90">
              <p>
                Royal Green Oil embodies the intersection of time-honored traditions and contemporary excellence. 
                Our journey began with a simple belief: every drop of oil should represent a promise of wellness, 
                sustainability, and authenticity.
              </p>
              <p>
                From our family to yours, we've dedicated ourselves to creating liquid gold that nurtures health and connects you with nature's bounty.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-liquid-gold/20 backdrop-blur-sm rounded-organic px-6 py-3 border border-liquid-gold/30">
                <span className="text-liquid-gold font-semibold">Est. 2010</span>
              </div>
              <div className="bg-liquid-gold/20 backdrop-blur-sm rounded-organic px-6 py-3 border border-liquid-gold/30">
                <span className="text-liquid-gold font-semibold">100% Organic</span>
              </div>
              <div className="bg-liquid-gold/20 backdrop-blur-sm rounded-organic px-6 py-3 border border-liquid-gold/30">
                <span className="text-liquid-gold font-semibold">Family Owned</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-organic overflow-hidden shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=700&fit=crop"
                alt="Traditional oil extraction process showing heritage and craftsmanship"
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-liquid-gold rounded-full flex items-center justify-center shadow-warm certification-badge">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
              </svg>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-organic p-6 shadow-premium">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;