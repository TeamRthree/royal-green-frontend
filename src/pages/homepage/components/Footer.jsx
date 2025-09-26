import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Sesame Oil", path: "/products" },
        { name: "Coconut Oil", path: "/products" },
        { name: "Mustard Oil", path: "/products" },
        { name: "Groundnut Oil", path: "/products" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Process", path: "/infrastructure-process" },
        { name: "Quality Standards", path: "/infrastructure-process" },
        { name: "Sustainability", path: "/about" }
      ]
    },
    {
      title: "Wellness",
      links: [
        { name: "Health Benefits", path: "/health-benefits" },
        { name: "Usage Guides", path: "/health-benefits" },
        { name: "Recipes", path: "/health-benefits" },
        { name: "Expert Tips", path: "/health-benefits" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "FAQ", path: "/contact" },
        { name: "Distributor Inquiry", path: "/contact" },
        { name: "Sample Request", path: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", url: "#" },
    { name: "Instagram", icon: "Instagram", url: "#" },
    { name: "Twitter", icon: "Twitter", url: "#" },
    { name: "LinkedIn", icon: "Linkedin", url: "#" },
    { name: "YouTube", icon: "Youtube", url: "#" }
  ];

  const certifications = [
    { name: "USDA Organic", icon: "Leaf" },
    { name: "ISO 22000", icon: "Shield" },
    { name: "HACCP", icon: "CheckCircle" },
    { name: "Lab Tested", icon: "FlaskConical" }
  ];

  return (
    <footer className="bg-heritage-green text-warm-cream">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <Link to="/homepage" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-liquid-gold to-liquid-gold-dark rounded-full flex items-center justify-center shadow-warm group-hover:shadow-glow transition-all duration-300">
                  <svg 
                    className="w-7 h-7 text-white" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                    <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.3)" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-liquid-gold transition-colors duration-300">
                  Royal Green Oil
                </h3>
                <p className="font-accent text-sm text-liquid-gold tracking-wide">
                  Liquid Gold for Wellness
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="text-warm-cream/80 leading-relaxed max-w-md">
              Three generations of expertise in crafting premium organic oils. We combine traditional wisdom with modern quality standards to deliver pure wellness for your family.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={18} className="text-liquid-gold flex-shrink-0" />
                <span className="text-warm-cream/80">123 Organic Valley, Green Hills, GH 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-liquid-gold flex-shrink-0" />
                <span className="text-warm-cream/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-liquid-gold flex-shrink-0" />
                <span className="text-warm-cream/80">info@royalgreenoil.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-10 h-10 bg-warm-cream/10 rounded-full flex items-center justify-center hover:bg-liquid-gold hover:text-heritage-green transition-all duration-300 group"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-heading text-lg font-semibold text-white">
                {section?.title}
              </h4>
              <ul className="space-y-3">
                {section?.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link?.path}
                      className="text-warm-cream/80 hover:text-liquid-gold transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <Icon name="ChevronRight" size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{link?.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-warm-cream/20">
          <h4 className="font-heading text-lg font-semibold text-white mb-6 text-center">
            Quality Certifications
          </h4>
          <div className="flex flex-wrap justify-center gap-8">
            {certifications?.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2 text-warm-cream/80">
                <Icon name={cert?.icon} size={20} className="text-liquid-gold" />
                <span className="text-sm font-medium">{cert?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-warm-cream/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-warm-cream/70 text-sm text-center md:text-left">
              <p>
                © {currentYear} Royal Green Oil. All rights reserved. | 
                <span className="hover:text-liquid-gold transition-colors duration-300 cursor-pointer"> Privacy Policy</span> | 
                <span className="hover:text-liquid-gold transition-colors duration-300 cursor-pointer"> Terms of Service</span>
              </p>
            </div>

            {/* Quality Badge */}
            <div className="flex items-center space-x-2 text-warm-cream/70 text-sm">
              <Icon name="Award" size={16} className="text-liquid-gold" />
              <span>Premium Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-liquid-gold rounded-full flex items-center justify-center shadow-premium hover:bg-liquid-gold-dark transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <Icon name="ChevronUp" size={20} className="text-heritage-green" />
      </button>
    </footer>
  );
};

export default Footer;