import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './components/HeroSection';
import ProcessOverview from './components/ProcessOverview';
import QualityStandards from './components/QualityStandards';
import FacilityTour from './components/FacilityTour';
import SustainabilityPractices from './components/SustainabilityPractices';
import ExpertTeam from './components/ExpertTeam';

const InfrastructureProcess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Infrastructure & Process - Royal Green Oil | Quality Transparency</title>
        <meta name="description" content="Explore Royal Green Oil's state-of-the-art facilities, traditional extraction methods, quality control processes, and sustainability practices. Transparency in production methods building credibility." />
        <meta name="keywords" content="oil extraction, quality control, facility tour, sustainability, organic oil production, traditional methods, modern technology" />
        <meta property="og:title" content="Infrastructure & Process - Royal Green Oil" />
        <meta property="og:description" content="Journey through our world-class facilities where ancient wisdom meets modern purity standards." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/infrastructure-process" />
      </Helmet>
      <div className="min-h-screen bg-background">
        
        
        <main>
          <HeroSection />
          <ProcessOverview />
          <QualityStandards />
          <FacilityTour />
          <SustainabilityPractices />
          <ExpertTeam />
        </main>

        {/* Footer */}
        <footer className="bg-heritage-green text-white py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-liquid-gold to-liquid-gold-dark rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold">Royal Green Oil</h3>
                    <p className="font-accent text-sm text-liquid-gold">Liquid Gold for Wellness</p>
                  </div>
                </div>
                <p className="text-warm-cream mb-6 leading-relaxed">
                  Where ancient wisdom meets modern purity. Every drop represents our commitment 
                  to quality, sustainability, and your family's wellness.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-liquid-gold/20 rounded-full flex items-center justify-center hover:bg-liquid-gold/30 transition-colors duration-300 cursor-pointer">
                    <span className="text-liquid-gold text-sm font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-liquid-gold/20 rounded-full flex items-center justify-center hover:bg-liquid-gold/30 transition-colors duration-300 cursor-pointer">
                    <span className="text-liquid-gold text-sm font-bold">t</span>
                  </div>
                  <div className="w-8 h-8 bg-liquid-gold/20 rounded-full flex items-center justify-center hover:bg-liquid-gold/30 transition-colors duration-300 cursor-pointer">
                    <span className="text-liquid-gold text-sm font-bold">in</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-liquid-gold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-warm-cream hover:text-liquid-gold transition-colors duration-300">About Us</a></li>
                  <li><a href="/products" className="text-warm-cream hover:text-liquid-gold transition-colors duration-300">Products</a></li>
                  <li><a href="/health-benefits" className="text-warm-cream hover:text-liquid-gold transition-colors duration-300">Health Benefits</a></li>
                  <li><a href="/contact" className="text-warm-cream hover:text-liquid-gold transition-colors duration-300">Contact</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold text-liquid-gold mb-4">Contact Info</h4>
                <div className="space-y-3 text-warm-cream">
                  <p className="text-sm">123 Organic Valley Road<br />Green Hills, CA 90210</p>
                  <p className="text-sm">Phone: +1 (555) 123-4567</p>
                  <p className="text-sm">Email: info@royalgreen.com</p>
                </div>
              </div>
            </div>

            <div className="border-t border-warm-cream/20 mt-12 pt-8 text-center">
              <p className="text-warm-cream text-sm">
                © {new Date()?.getFullYear()} Royal Green Oil. All rights reserved. | 
                <span className="text-liquid-gold"> Crafted with care for your wellness</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default InfrastructureProcess;