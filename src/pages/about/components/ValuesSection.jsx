import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const values = [
    {
      icon: "Heart",
      title: "Family First",
      description: "Every decision we make is guided by what's best for families. From our family to yours, we prioritize health, safety, and nurturing wellness in every drop.",
      color: "text-red-500"
    },
    {
      icon: "Leaf",
      title: "Sustainability",
      description: "We're committed to protecting the environment for future generations through carbon-neutral operations, sustainable farming, and zero-waste initiatives.",
      color: "text-green-500"
    },
    {
      icon: "Shield",
      title: "Purity Promise",
      description: "Our unwavering commitment to purity means rigorous testing, organic certification, and transparent processes that you can trust completely.",
      color: "text-blue-500"
    },
    {
      icon: "Users",
      title: "Community Impact",
      description: "We believe in lifting our farming communities through fair trade practices, education, and sustainable partnerships that benefit everyone.",
      color: "text-purple-500"
    },
    {
      icon: "BookOpen",
      title: "Knowledge Sharing",
      description: "Education empowers better choices. We share our expertise about oil benefits, usage, and wellness to help families make informed decisions.",
      color: "text-orange-500"
    },
    {
      icon: "Star",
      title: "Excellence",
      description: "We never compromise on quality. Every process, every product, every interaction reflects our commitment to being the gold standard in organic oils.",
      color: "text-yellow-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-heritage-green mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide every decision we make and every relationship we build. 
            They're not just words on a page—they're the foundation of who we are.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values?.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-organic p-8 shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center space-y-6">
                {/* Icon */}
                <div className="relative inline-flex">
                  <div className="w-16 h-16 bg-warm-cream rounded-full flex items-center justify-center group-hover:bg-liquid-gold transition-colors duration-300">
                    <Icon 
                      name={value?.icon} 
                      size={28} 
                      className={`${value?.color} group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-liquid-gold to-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading text-xl font-bold text-heritage-green mb-4 group-hover:text-liquid-gold transition-colors duration-300">
                    {value?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value?.description}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-liquid-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-heritage-green rounded-organic p-8 lg:p-12 text-white">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
              Experience Our Values in Action
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              These aren't just principles we talk about—they're the foundation of every product we create 
              and every relationship we build. See how our values translate into liquid gold for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-liquid-gold hover:bg-liquid-gold-dark text-heritage-green font-semibold px-8 py-3 rounded-organic transition-colors duration-300 shadow-warm">
                Explore Our Products
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-organic transition-all duration-300">
                Learn Our Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;