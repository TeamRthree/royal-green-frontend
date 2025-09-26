import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const [activeYear, setActiveYear] = useState(2010);

  const milestones = [
    {
      year: 2010,
      title: "The Beginning",
      description: "Founded with a vision to bring pure, traditional oils to modern families. Started with a small facility and big dreams.",
      image: "https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?w=400&h=300&fit=crop",
      achievement: "First organic certification"
    },
    {
      year: 2013,
      title: "Expansion & Growth",
      description: "Expanded our product line and established partnerships with local organic farmers across three states.",
      image: "https://images.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg?w=400&h=300&fit=crop",
      achievement: "50+ farming partnerships"
    },
    {
      year: 2016,
      title: "Quality Excellence",
      description: "Achieved international quality certifications and implemented advanced cold-press extraction technology.",
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=400&h=300&fit=crop",
      achievement: "ISO 22000 certification"
    },
    {
      year: 2019,
      title: "Sustainability Focus",
      description: "Launched our zero-waste initiative and became carbon-neutral through renewable energy adoption.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?w=400&h=300&fit=crop",
      achievement: "Carbon neutral operations"
    },
    {
      year: 2022,
      title: "Digital Innovation",
      description: "Introduced blockchain traceability and launched our direct-to-consumer platform for transparency.",
      image: "https://images.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg?w=400&h=300&fit=crop",
      achievement: "Full supply chain transparency"
    },
    {
      year: 2025,
      title: "Future Vision",
      description: "Expanding internationally while maintaining our commitment to family health and sustainable practices.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      achievement: "Global wellness mission"
    }
  ];

  const activeMilestone = milestones?.find(m => m?.year === activeYear);

  return (
    <section className="py-16 lg:py-24 bg-warm-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-heritage-green mb-6">
            Our Journey Through Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to industry leadership, discover the milestones that shaped our commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline Navigation */}
          <div className="space-y-6">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              {milestones?.map((milestone, index) => (
                <div
                  key={milestone?.year}
                  className={`relative flex items-center space-x-6 pb-8 cursor-pointer group transition-all duration-300 ${
                    activeYear === milestone?.year ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                  }`}
                  onClick={() => setActiveYear(milestone?.year)}
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeYear === milestone?.year 
                      ? 'bg-liquid-gold shadow-warm scale-110' 
                      : 'bg-primary group-hover:bg-liquid-gold'
                  }`}>
                    <span className="text-white font-bold text-sm">{milestone?.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`font-heading text-xl font-semibold mb-2 transition-colors duration-300 ${
                      activeYear === milestone?.year ? 'text-liquid-gold' : 'text-heritage-green'
                    }`}>
                      {milestone?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone?.description}
                    </p>
                    <div className={`mt-2 inline-flex items-center space-x-2 text-xs font-medium transition-colors duration-300 ${
                      activeYear === milestone?.year ? 'text-liquid-gold' : 'text-primary'
                    }`}>
                      <Icon name="Award" size={14} />
                      <span>{milestone?.achievement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Milestone Display */}
          <div className="relative">
            <div className="bg-white rounded-organic shadow-premium overflow-hidden heritage-reveal in-view">
              <div className="aspect-video overflow-hidden">
                <img
                  src={activeMilestone?.image}
                  alt={`${activeMilestone?.title} milestone`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-liquid-gold font-bold text-2xl">{activeMilestone?.year}</span>
                  <div className="flex items-center space-x-2 text-primary">
                    <Icon name="Award" size={16} />
                    <span className="text-sm font-medium">{activeMilestone?.achievement}</span>
                  </div>
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-heritage-green mb-4">
                  {activeMilestone?.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {activeMilestone?.description}
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-liquid-gold rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;