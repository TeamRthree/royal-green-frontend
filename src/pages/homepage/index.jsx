import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import TrustSection from './components/TrustSection';
import HealthBenefitsPreview from './components/HealthBenefitsPreview';
import ProcessTransparency from './components/ProcessTransparency';
import CTASection from './components/CTASection';


const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e) => {
      const target = e?.target?.closest('a[href^="#"]');
      if (target) {
        e?.preventDefault();
        const id = target?.getAttribute('href')?.slice(1);
        const element = document.getElementById(id);
        if (element) {
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Royal Green Oil - Premium Organic Oils | Liquid Gold for Wellness</title>
        <meta 
          name="description" 
          content="Discover Royal Green Oil's premium organic oils crafted with ancient wisdom and modern purity. Cold-pressed, lab-tested, and family-safe oils for your wellness journey." 
        />
        <meta 
          name="keywords" 
          content="organic oils, cold pressed oils, sesame oil, coconut oil, mustard oil, groundnut oil, premium oils, health benefits, wellness, natural oils" 
        />
        <meta name="author" content="Royal Green Oil" />
        <meta property="og:title" content="Royal Green Oil - Premium Organic Oils" />
        <meta 
          property="og:description" 
          content="Three generations of expertise in crafting premium organic oils. Liquid gold for your family's wellness." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://royalgreenoil.com/homepage" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Royal Green Oil - Premium Organic Oils" />
        <meta 
          name="twitter:description" 
          content="Discover premium organic oils crafted with ancient wisdom and modern purity." 
        />
        <link rel="canonical" href="https://royalgreenoil.com/homepage" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Royal Green Oil",
            "description": "Premium organic oil manufacturer specializing in cold-pressed, lab-tested oils for family wellness",
            "url": "https://royalgreenoil.com",
            "logo": "https://royalgreenoil.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Organic Valley",
              "addressLocality": "Green Hills",
              "addressRegion": "GH",
              "postalCode": "12345"
            },
            "sameAs": [
              "https://facebook.com/royalgreenoil",
              "https://instagram.com/royalgreenoil",
              "https://twitter.com/royalgreenoil"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />

          {/* Product Showcase */}
          <ProductShowcase />

          {/* Trust & Quality Section */}
          <TrustSection />

          {/* Health Benefits Preview */}
          <HealthBenefitsPreview />

          {/* Process Transparency */}
          <ProcessTransparency />

          {/* Call to Action Section */}
          <CTASection />
        </main>

       
      </div>
    </>
  );
};

export default Homepage;