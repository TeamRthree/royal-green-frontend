import React, { useState, useEffect } from 'react';
import Icon from '../../../components/Appicon';
import Image from '../../../components/AppImage';

const testimonials = [
  {
    id: 1,
    name: "Dr. Keerthi Subramanian",
    role: "Nutritionist & Wellness Expert",
    image: "https://media.istockphoto.com/id/1302922407/photo/doctor-and-patient-are-discussing-at-clinic-and-writting-prescription-medicine-stock-photo.jpg?s=612x612&w=0&k=20&c=MvG0mub-9nnp5ujfrIaPcWvxPuKjZGx2oTYFbYZcTEg=",
    content: "Royal Green Oil's commitment to quality and purity is unmatched. I always recommend their oils to my clients because they meet the highest standards of nutrition and health.",
    rating: 5,
    expertise: "15+ years in nutrition"
  },
  {
    id: 2,
    name: "Chef Karthik Selvam",
    role: "Michelin Star Chef",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQck5uBgPLIJudSghGgQKgYwY4zy9tiHcziUQ&s",
    content: "The flavor profile of Royal Green Oils is impeccable. In my kitchen, quality ingredients make all the difference, and these oils deliver the perfect balance of taste, aroma, and nutrition.",
    rating: 5,
    expertise: "20+ years culinary arts"
  },
  {
    id: 3,
    name: "Revathi Murugan",
    role: "Mother of Three",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHmo3Y6omlFA7UhWWWMy7oYH9XSsUKDy7ZQ&s",
    content: "Since switching to Royal Green Oils, my family has felt the difference in taste and health. The oils are light, pure, and truly organic. I no longer worry about hidden chemicals or preservatives.",
    rating: 5,
    expertise: "Health-conscious family"
  }
];

const Testimonial = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );

    const section = document.getElementById('testimonial-section');
    if (section) observer?.observe(section);

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonial-section" className="py-20  bg-background">
      <div className="container mx-auto px-4">
        <h3 className={`font-heading text-2xl md:text-3xl font-bold text-heritage-green text-center mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          What Experts Say
        </h3>

        <div className={`relative max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-heritage-green rounded-2xl p-8 md:p-12 shadow-premium">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover shadow-soft"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-liquid-gold rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={14} className="text-warm-cream" />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-liquid-gold fill-current" />
                  ))}
                </div>

                <blockquote className="text-warm-cream text-lg md:text-xl leading-relaxed mb-4 italic">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                <div>
                  <div className="font-heading text-xl font-bold text-warm-cream">{testimonials[activeTestimonial].name}</div>
                  <div className="text-liquid-gold font-medium">{testimonials[activeTestimonial].role}</div>
                  <div className="text-warm-cream text-sm">{testimonials[activeTestimonial].expertise}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? 'bg-liquid-gold scale-125' : 'bg-neutral-300 hover:bg-warm-cream/80'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
