import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ExpertTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Quality Officer",
      specialization: "Food Science & Quality Control",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&face",
      credentials: ["PhD Food Science", "HACCP Certified", "ISO 22000 Lead Auditor"],
      expertise: [
        "Quality management systems",
        "Food safety protocols",
        "Analytical chemistry",
        "Process optimization"
      ],
      quote: "Quality is not an accident; it\'s the result of intelligent effort and meticulous attention to detail."
    },
    {
      name: "Michael Chen",
      role: "Production Manager",
      specialization: "Oil Extraction & Processing",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&face",
      credentials: ["MSc Chemical Engineering", "Lean Six Sigma Black Belt", "Process Safety Certified"],
      expertise: [
        "Cold-pressing technology",
        "Process automation",
        "Equipment maintenance",
        "Production efficiency"
      ],
      quote: "Traditional methods enhanced by modern precision create the perfect balance for superior oil quality."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Research & Development Head",
      specialization: "Nutritional Science & Innovation",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1594824388853-2c5899d87b98?w=300&h=300&fit=crop&face",
      credentials: ["PhD Nutritional Science", "Research Publication Author", "Innovation Award Winner"],
      expertise: [
        "Nutritional analysis",
        "Product development",
        "Health benefit research",
        "Scientific validation"
      ],
      quote: "Innovation in nutrition science helps us unlock the full potential of nature\'s liquid gold."
    },
    {
      name: "James Rodriguez",
      role: "Sustainability Director",
      specialization: "Environmental Management",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face",
      credentials: ["MSc Environmental Science", "LEED AP Certified", "Carbon Footprint Specialist"],
      expertise: [
        "Environmental impact assessment",
        "Renewable energy systems",
        "Waste management",
        "Sustainability reporting"
      ],
      quote: "Sustainable practices today ensure a healthier planet for future generations."
    }
  ];

  const achievements = [
    {
      icon: "Award",
      title: "Industry Recognition",
      description: "Multiple awards for quality excellence and innovation in oil processing"
    },
    {
      icon: "BookOpen",
      title: "Research Publications",
      description: "25+ peer-reviewed publications on oil quality and nutritional benefits"
    },
    {
      icon: "Users",
      title: "Expert Network",
      description: "Collaboration with leading universities and research institutions"
    },
    {
      icon: "TrendingUp",
      title: "Continuous Innovation",
      description: "Ongoing R&D projects for process improvement and product development"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-liquid-gold/10 rounded-full border border-liquid-gold/20 mb-6">
            <Icon name="Users" size={16} className="text-liquid-gold mr-2" />
            <span className="text-liquid-gold font-accent text-sm tracking-wide">
              Expert Team
            </span>
          </div>
          
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-heritage-green mb-6">
            Masters of Their
            <span className="text-liquid-gold"> Craft</span>
          </h2>
          
          <p className="text-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Our team of industry experts, scientists, and quality specialists brings decades of combined 
            experience to ensure every drop of Royal Green Oil meets the highest standards of excellence.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {teamMembers?.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-warm transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src={member?.image}
                        alt={member?.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-liquid-gold rounded-full flex items-center justify-center">
                        <Icon name="Star" size={16} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-heritage-green mb-1">
                      {member?.name}
                    </h3>
                    <p className="text-liquid-gold font-semibold mb-2">{member?.role}</p>
                    <p className="text-foreground/70 text-sm mb-3">{member?.specialization}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-foreground/60 mb-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{member?.experience}</span>
                      </div>
                    </div>

                    {/* Credentials */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member?.credentials?.map((credential, credIndex) => (
                        <span key={credIndex} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                          {credential}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-6 p-4 bg-warm-cream rounded-lg border-l-4 border-liquid-gold">
                  <p className="text-foreground/80 italic text-sm leading-relaxed">
                    "{member?.quote}"
                  </p>
                </div>

                {/* Expertise */}
                <div className="mt-6">
                  <h4 className="font-semibold text-heritage-green mb-3">Areas of Expertise</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {member?.expertise?.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} className="text-primary flex-shrink-0" />
                        <span className="text-foreground/70 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Achievements */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">
              Team Achievements
            </h3>
            <p className="text-warm-cream text-lg max-w-2xl mx-auto">
              Our collective expertise drives innovation and maintains the highest standards 
              of quality in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements?.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-liquid-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={achievement?.icon} size={24} className="text-liquid-gold" />
                </div>
                <h4 className="font-semibold text-white mb-2">{achievement?.title}</h4>
                <p className="text-warm-cream text-sm leading-relaxed">{achievement?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-heritage-green mb-6">
              Collaborative Excellence
            </h3>
            <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
              Our team works in close collaboration with leading universities, research institutions, 
              and industry experts to continuously advance our knowledge and improve our processes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Building2" size={20} className="text-primary" />
                <span className="text-foreground/80">Partnership with 5+ universities</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="FlaskConical" size={20} className="text-primary" />
                <span className="text-foreground/80">Active research collaborations</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Globe" size={20} className="text-primary" />
                <span className="text-foreground/80">International expert network</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Lightbulb" size={20} className="text-primary" />
                <span className="text-foreground/80">Continuous innovation programs</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-warm-cream rounded-2xl p-8">
              <div className="text-center">
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <h4 className="font-heading text-xl font-bold text-heritage-green mb-4">
                  Meet Our Team
                </h4>
                <p className="text-foreground/70 mb-6">
                  Schedule a consultation with our experts to learn more about our processes 
                  and quality standards.
                </p>
                <button className="bg-liquid-gold hover:bg-liquid-gold-dark text-heritage-green font-semibold px-8 py-3 rounded-full transition-colors duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;