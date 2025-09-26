import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForms = () => {
  const [activeTab, setActiveTab] = useState('consumer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
    newsletter: false,
    privacy: false
  });

  const tabs = [
    {
      id: 'consumer',
      label: 'General Inquiry',
      icon: 'User',
      description: 'Product questions & wellness guidance'
    },
    {
      id: 'distributor',
      label: 'Distributor Partnership',
      icon: 'Building2',
      description: 'Wholesale & business opportunities'
    },
    {
      id: 'consultation',
      label: 'Expert Consultation',
      icon: 'Stethoscope',
      description: 'Personalized wellness recommendations'
    }
  ];

  const inquiryTypes = {
    consumer: [
      { value: 'product-info', label: 'Product Information' },
      { value: 'usage-guidance', label: 'Usage Guidance' },
      { value: 'health-benefits', label: 'Health Benefits' },
      { value: 'sample-request', label: 'Sample Request' },
      { value: 'other', label: 'Other' }
    ],
    distributor: [
      { value: 'wholesale-pricing', label: 'Wholesale Pricing' },
      { value: 'partnership', label: 'Partnership Opportunities' },
      { value: 'territory-rights', label: 'Territory Rights' },
      { value: 'marketing-support', label: 'Marketing Support' },
      { value: 'other', label: 'Other' }
    ],
    consultation: [
      { value: 'wellness-plan', label: 'Personalized Wellness Plan' },
      { value: 'product-selection', label: 'Product Selection Guidance' },
      { value: 'usage-optimization', label: 'Usage Optimization' },
      { value: 'health-goals', label: 'Health Goals Discussion' },
      { value: 'other', label: 'Other' }
    ]
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Form submitted:', { ...formData, type: activeTab });
    // Handle form submission
  };

  return (
    <section className="py-16 lg:py-24 bg-warm-cream/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-heritage-green mb-6">
              Get in Touch with Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the inquiry type that best matches your needs and we'll connect you with the right expert.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row bg-card rounded-organic p-2 mb-8 shadow-soft">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-organic transition-all duration-300 ${
                  activeTab === tab?.id
                    ? 'bg-gradient-to-r from-liquid-gold to-liquid-gold-dark text-white shadow-warm'
                    : 'text-muted-foreground hover:text-primary hover:bg-warm-cream/50'
                }`}
              >
                <Icon name={tab?.icon} size={20} />
                <div className="text-left">
                  <div className="font-semibold">{tab?.label}</div>
                  <div className="text-xs opacity-80">{tab?.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-organic p-8 lg:p-12 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  required
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                />
                
                {activeTab === 'distributor' && (
                  <Input
                    label="Company Name"
                    type="text"
                    placeholder="Your company name"
                    value={formData?.company}
                    onChange={(e) => handleInputChange('company', e?.target?.value)}
                    required
                  />
                )}
              </div>

              <Select
                label="Inquiry Type"
                placeholder="Select your inquiry type"
                options={inquiryTypes?.[activeTab]}
                value={formData?.inquiryType}
                onChange={(value) => handleInputChange('inquiryType', value)}
                required
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder={`Tell us more about your ${activeTab === 'consumer' ? 'questions or needs' : activeTab === 'distributor' ? 'business and partnership interests' : 'wellness goals and consultation needs'}...`}
                  value={formData?.message}
                  onChange={(e) => handleInputChange('message', e?.target?.value)}
                  className="w-full px-4 py-3 border border-border rounded-organic focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  required
                />
              </div>

              <div className="space-y-4">
                <Checkbox
                  label="Subscribe to our wellness newsletter for tips, recipes, and product updates"
                  checked={formData?.newsletter}
                  onChange={(e) => handleInputChange('newsletter', e?.target?.checked)}
                />
                
                <Checkbox
                  label="I agree to the Privacy Policy and Terms of Service"
                  checked={formData?.privacy}
                  onChange={(e) => handleInputChange('privacy', e?.target?.checked)}
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  type="submit"
                  variant="default"
                  className="flex-1 bg-gradient-to-r from-liquid-gold to-liquid-gold-dark hover:from-liquid-gold-dark hover:to-liquid-gold"
                  iconName="Send"
                  iconPosition="right"
                >
                  Send Message
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  className="border-liquid-gold text-liquid-gold hover:bg-liquid-gold hover:text-white"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Call Instead
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForms;