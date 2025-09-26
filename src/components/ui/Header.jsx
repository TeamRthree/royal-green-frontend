import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../Appicon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'Info' },
    { name: 'Products', path: '/products', icon: 'Package' },
    { name: 'Infrastructure & Process', path: '/infrastructure-process', icon: 'Factory' },
    { name: 'Contact', path: '/contact', icon: 'Phone' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActivePath = (path) => location?.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0  right-0 z-header transition-all duration-300 ${
        isScrolled 
          ? 'bg-white backdrop-blur-organic shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full container mx-auto">
        <div className="flex items-center justify-between h-24 px-4">
          {/* Logo Section */}
          <Link 
  to="/homepage" 
  className="flex items-center space-x-3 group"
  onClick={closeMenu}
>
  <img 
    src={isScrolled 
      ? "/assets/images/royal_green_logo.png"   // 👈 scrolled version
      : "/assets/images/royal_green_logo_white.png"        // 👈 default version
    } 
    alt="Royal Green Logo" 
    className="h-12 w-auto transition-all duration-300"
  />
</Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`relative flex items-center space-x-2 px-3 py-2 rounded-organic transition-all duration-300 group ${
                  isActivePath(item?.path)
                    ? (isScrolled ? 'text-primary bg-warm-cream/50' : 'text-white')
                    : (isScrolled 
                        ? 'text-foreground hover:text-primary hover:bg-warm-cream/30' 
                        : 'text-white hover:text-liquid-gold')
                }`}
              >
               
                <span className="font-body font-medium">{item?.name}</span>
                {isActivePath(item?.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-liquid-gold rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          {/* CTA Button */}
<div className="hidden lg:flex items-center space-x-4">
  <Link to="/contact" onClick={closeMenu}>
    <Button
      variant="outline"
      size="sm"
      className="border-liquid-gold hover:text-liquid-gold bg-liquid-gold hover:bg-transparent text-white"
    >
      Get in Touch
    </Button>
  </Link>
</div>


          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-organic hover:bg-warm-cream/50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-foreground transition-transform duration-300" 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-card/95 backdrop-blur-organic border-t border-border">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-organic transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-warm-cream/50 shadow-soft'
                      : 'text-foreground hover:text-primary hover:bg-warm-cream/30'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span className="font-body font-medium">{item?.name}</span>
                  {isActivePath(item?.path) && (
                    <div className="ml-auto w-2 h-2 bg-liquid-gold rounded-full"></div>
                  )}
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-border space-y-3">
  <Link to="/contact" onClick={closeMenu}>
    <Button
      variant="outline"
      size="sm"
      className="border-liquid-gold hover:text-liquid-gold bg-liquid-gold hover:bg-transparent text-white"
    >
      Get in Touch
    </Button>
  </Link>
</div>

            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
