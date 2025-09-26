import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ContactHero from './components/ContactHero';
import ContactOptions from './components/ContactOptions';
import ContactForms from './components/ContactForms';
import LocationInfo from './components/LocationInfo';
import SupportResources from './components/SupportResources';
import TrustSignals from './components/TrustSignals';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - Royal Green Oil | Expert Wellness Consultation & Support</title>
        <meta 
          name="description" 
          content="Connect with Royal Green Oil's wellness experts for product guidance, distributor partnerships, and personalized consultations. Multiple contact channels with 24-hour response guarantee." 
        />
        <meta name="keywords" content="contact royal green oil, wellness consultation, distributor partnership, organic oil support, expert guidance" />
        <meta property="og:title" content="Contact Us - Royal Green Oil | Expert Wellness Consultation" />
        <meta property="og:description" content="Get expert guidance on premium organic oils. Contact us for product information, wellness consultations, or partnership opportunities." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
       
        
        <main className="">
          <ContactHero />
          <ContactOptions />
          <ContactForms />
          <LocationInfo />
          <SupportResources />
          <TrustSignals />
        </main>
      </div>
    </>
  );
};

export default Contact;