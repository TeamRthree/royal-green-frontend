import React from 'react';
import { Helmet } from 'react-helmet';

import HeroSection from './components/HeroSection';
import CompanyTimeline from './components/CompanyTimeline';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';
import CertificationsSection from './components/CertificationsSection';
import SustainabilityMetrics from './components/SustainabilityMetrics';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Royal Green Oil | Our Story of Liquid Gold Excellence</title>
        <meta 
          name="description" 
          content="Discover Royal Green Oil's journey from family tradition to premium organic oil leadership. Learn about our heritage, sustainability mission, quality certifications, and expert team committed to delivering liquid gold for your family's wellness." 
        />
        <meta name="keywords" content="Royal Green Oil story, organic oil company, sustainable oil production, family business, quality certifications, oil expertise" />
        <meta property="og:title" content="About Royal Green Oil - Heritage, Quality & Sustainability" />
        <meta property="og:description" content="From our family to yours - discover the story behind Royal Green Oil's commitment to liquid gold quality, sustainability, and family wellness." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
     
        
        <main>
          {/* Hero Section - Brand Story Introduction */}
          <HeroSection />
          
          {/* Company Timeline - Heritage & Milestones */}
          <CompanyTimeline />
          
          {/* Core Values - Brand Personality & Principles */}
          <ValuesSection />
          
          {/* Team Section - Expertise & Leadership */}
          <TeamSection />
          
          {/* Quality Certifications - Trust Building */}
          <CertificationsSection />
          
          {/* Sustainability Metrics - Environmental Commitment */}
          <SustainabilityMetrics />
        </main>
      </div>
    </>
  );
};

export default About;