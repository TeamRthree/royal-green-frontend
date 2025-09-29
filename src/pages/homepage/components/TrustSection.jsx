import React, { useState, useEffect } from 'react';
import Icon from '../../../components/Appicon';

const TrustSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const certifications = [
    { id: 1, name: "USDA Organic", icon: "Leaf", description: "Certified organic by USDA standards" },
    { id: 2, name: "ISO 22000", icon: "Shield", description: "Food safety management certified" },
    { id: 3, name: "HACCP", icon: "CheckCircle", description: "Hazard analysis critical control points" },
    { id: 4, name: "Lab Tested", icon: "FlaskConical", description: "Third-party laboratory verified" }
  ];

  const stats = [
    { id: 1, number: 10000 , suffix: "+", label: "Happy Families", icon: "Users" },
    { id: 2, number: 99 , suffix: "%", label: "Purity Standard", icon: "Droplets" },
    { id: 3, number: 25 , suffix: "+", label: "Years Experience", icon: "Calendar" },
    { id: 4, number: 100 , suffix: "%", label: "Organic Certified", icon: "Leaf" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );

    const section = document.getElementById('trust-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = [0, 0, 0, 0];
    const end = stats.map(s => s.number);
    const duration = 1500; // 1.5s for count up
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const newCounts = start.map((s, i) => Math.floor(s + (end[i] - s) * progress));
      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible]);

  return (
    <section id="trust-section" className="py-20 bg-heritage-green">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-liquid-gold/20 rounded-full px-4 py-2 mb-4">
            <Icon name="Award" size={16} className="text-liquid-gold" />
            <span className="text-liquid-gold font-accent text-sm tracking-wide">Trust & Quality</span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Experts & Families
          </h2>

          <p className="text-warm-cream text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is validated by industry certifications, expert endorsements, and thousands of satisfied families who trust our oils for their daily wellness.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div key={stat.id} className="text-center">
              <div className="w-16 h-16 bg-liquid-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-warm">
                <Icon name={stat.icon} size={24} className="text-heritage-green" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-liquid-gold mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-white font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className={`mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-8">Quality Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map(cert => (
              <div key={cert.id} className="bg-warm-cream rounded-xl p-6 text-center hover:shadow-premium transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-liquid-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={cert.icon} size={24} className="text-heritage-green" />
                </div>
                <h4 className="font-heading text-lg font-bold text-heritage-green mb-2">{cert.name}</h4>
                <p className="text-heritage-green/70 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
