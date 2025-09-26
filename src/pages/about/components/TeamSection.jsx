import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      position: "Founder & CEO",
      expertise: "Organic Chemistry & Traditional Oil Extraction",
      experience: "25+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Dr. Sharma combines his PhD in Organic Chemistry with deep knowledge of traditional oil extraction methods passed down through generations. His vision of 'liquid gold for wellness' drives our company's mission.",
      certifications: ["PhD Organic Chemistry", "Ayurvedic Practitioner", "Organic Certification Expert"],
      achievements: ["Published 15+ research papers", "Industry Excellence Award 2023", "Sustainable Business Leader"]
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Head of Quality Assurance",
      expertise: "Food Safety & Quality Control",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c8e8b4?w=400&h=400&fit=crop",
      bio: "Priya ensures every drop of our oil meets the highest quality standards. Her meticulous approach to quality control has earned us multiple international certifications.",
      certifications: ["HACCP Certified", "ISO 22000 Lead Auditor", "Food Safety Manager"],
      achievements: ["Zero quality incidents in 5 years", "Quality Excellence Award", "Industry Safety Recognition"]
    },
    {
      id: 3,
      name: "Arjun Singh",
      position: "Head of Sustainability",
      expertise: "Environmental Science & Sustainable Practices",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Arjun leads our sustainability initiatives, ensuring our operations remain carbon-neutral while supporting local farming communities through fair trade practices.",
      certifications: ["Environmental Management", "Carbon Footprint Analyst", "Sustainable Agriculture"],
      achievements: ["Carbon Neutral Operations", "Sustainability Innovation Award", "Community Impact Leader"]
    },
    {
      id: 4,
      name: "Dr. Meera Krishnan",
      position: "Nutritionist & Wellness Expert",
      expertise: "Clinical Nutrition & Wellness",
      experience: "20+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      bio: "Dr. Krishnan provides scientific backing for our health claims and develops educational content about the nutritional benefits of our oils for families.",
      certifications: ["Clinical Nutritionist", "Wellness Coach", "Research Specialist"],
      achievements: ["50+ wellness publications", "Health Innovation Award", "Family Nutrition Expert"]
    }
  ];

  const currentMember = teamMembers?.[activeTeamMember];

  return (
    <section className="py-16 lg:py-24 bg-heritage-green">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Passionate professionals dedicated to bringing you the finest quality oils through expertise, innovation, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Team Member Cards */}
          <div className="lg:col-span-1 space-y-4">
            {teamMembers?.map((member, index) => (
              <div
                key={member?.id}
                className={`p-6 rounded-organic cursor-pointer transition-all duration-300 ${
                  activeTeamMember === index
                    ? 'bg-liquid-gold shadow-warm'
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                }`}
                onClick={() => setActiveTeamMember(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={member?.image}
                      alt={member?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {activeTeamMember === index && (
                      <div className="absolute -inset-1 bg-white rounded-full opacity-30"></div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`font-heading text-lg font-semibold ${
                      activeTeamMember === index ? 'text-heritage-green' : 'text-white'
                    }`}>
                      {member?.name}
                    </h3>
                    <p className={`text-sm ${
                      activeTeamMember === index ? 'text-heritage-green/80' : 'text-white/70'
                    }`}>
                      {member?.position}
                    </p>
                    <div className={`flex items-center space-x-2 mt-2 text-xs ${
                      activeTeamMember === index ? 'text-heritage-green/60' : 'text-white/50'
                    }`}>
                      <Icon name="Clock" size={12} />
                      <span>{member?.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Member Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-organic shadow-premium p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Profile Image */}
                <div className="relative">
                  <Image
                    src={currentMember?.image}
                    alt={currentMember?.name}
                    className="w-full aspect-square rounded-organic object-cover shadow-soft"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-liquid-gold rounded-organic p-4 shadow-warm">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-heritage-green mb-2">
                      {currentMember?.name}
                    </h3>
                    <p className="text-liquid-gold font-semibold text-lg mb-1">
                      {currentMember?.position}
                    </p>
                    <p className="text-muted-foreground">
                      {currentMember?.expertise}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2 text-primary">
                      <Icon name="Clock" size={16} />
                      <span className="font-medium">{currentMember?.experience}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {currentMember?.bio}
                  </p>

                  {/* Certifications */}
                  <div>
                    <h4 className="font-semibold text-heritage-green mb-3 flex items-center space-x-2">
                      <Icon name="Award" size={16} />
                      <span>Certifications</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentMember?.certifications?.map((cert, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-warm-cream text-primary text-xs font-medium rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-heritage-green mb-3 flex items-center space-x-2">
                      <Icon name="Trophy" size={16} />
                      <span>Key Achievements</span>
                    </h4>
                    <ul className="space-y-2">
                      {currentMember?.achievements?.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <Icon name="CheckCircle" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;