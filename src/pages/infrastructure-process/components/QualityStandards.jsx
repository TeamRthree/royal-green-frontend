import React, { useState } from 'react';
import Icon from '../../../components/Appicon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const QualityStandards = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  const certifications = [
    {
      name: "USDA Organic",
      description: "Certified organic production methods ensuring no synthetic pesticides or fertilizers",
      validUntil: "December 2025",
      certifyingBody: "USDA National Organic Program",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      status: "Active"
    },
    {
      name: "ISO 22000",
      description: "Food safety management system certification for the entire production chain",
      validUntil: "March 2026",
      certifyingBody: "International Organization for Standardization",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?w=300&h=200&fit=crop",
      status: "Active"
    },
    {
      name: "HACCP Certified",
      description: "Hazard Analysis Critical Control Points system implementation",
      validUntil: "August 2025",
      certifyingBody: "Food Safety Authority",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&h=200&fit=crop",
      status: "Active"
    },
    {
      name: "Non-GMO Project",
      description: "Verified non-genetically modified organism ingredients and processes",
      validUntil: "June 2025",
      certifyingBody: "Non-GMO Project",
      image: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?w=300&h=200&fit=crop",
      status: "Active"
    }
  ];

  const qualityTests = [
    {
      parameter: "Purity Level",
      standard: "≥99.5%",
      ourResult: "99.9%",
      testMethod: "Gas Chromatography-Mass Spectrometry",
      frequency: "Every Batch"
    },
    {
      parameter: "Acid Value",
      standard: "≤0.5 mg KOH/g",
      ourResult: "0.2 mg KOH/g",
      testMethod: "Titration Method",
      frequency: "Every Batch"
    },
    {
      parameter: "Peroxide Value",
      standard: "≤10 meq O2/kg",
      ourResult: "3.2 meq O2/kg",
      testMethod: "Iodometric Method",
      frequency: "Every Batch"
    },
    {
      parameter: "Moisture Content",
      standard: "≤0.2%",
      ourResult: "0.05%",
      testMethod: "Karl Fischer Method",
      frequency: "Every Batch"
    },
    {
      parameter: "Heavy Metals",
      standard: "≤10 ppm",
      ourResult: "≤2 ppm",
      testMethod: "ICP-MS Analysis",
      frequency: "Monthly"
    },
    {
      parameter: "Pesticide Residues",
      standard: "Not Detected",
      ourResult: "Not Detected",
      testMethod: "LC-MS/MS Analysis",
      frequency: "Every Batch"
    }
  ];

  const labReports = [
    {
      title: "Batch Analysis Report - RGO2024-001",
      date: "September 20, 2025",
      type: "Complete Analysis",
      status: "Passed",
      downloadUrl: "#"
    },
    {
      title: "Nutritional Profile Analysis",
      date: "September 15, 2025",
      type: "Nutritional Testing",
      status: "Passed",
      downloadUrl: "#"
    },
    {
      title: "Contamination Screening Report",
      date: "September 10, 2025",
      type: "Safety Testing",
      status: "Passed",
      downloadUrl: "#"
    },
    {
      title: "Third-Party Verification",
      date: "September 5, 2025",
      type: "Independent Audit",
      status: "Certified",
      downloadUrl: "#"
    }
  ];

  const tabs = [
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'testing', label: 'Quality Testing', icon: 'TestTube' },
    { id: 'reports', label: 'Lab Reports', icon: 'FileText' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-liquid-gold/10 rounded-full border border-liquid-gold/20 mb-6">
            <Icon name="Shield" size={16} className="text-liquid-gold mr-2" />
            <span className="text-liquid-gold font-accent text-sm tracking-wide">
              Quality Assurance
            </span>
          </div>
          
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-heritage-green mb-6">
            Uncompromising
            <span className="text-liquid-gold"> Quality Standards</span>
          </h2>
          
          <p className="text-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is validated through rigorous testing, international certifications, 
            and transparent reporting that exceeds industry standards.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-warm-cream rounded-full p-2">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab?.id
                    ? 'bg-liquid-gold text-white shadow-warm'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span className="font-medium">{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 gap-8">
              {certifications?.map((cert, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-warm transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={cert?.image}
                      alt={cert?.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {cert?.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-heritage-green mb-3">
                      {cert?.name}
                    </h3>
                    
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {cert?.description}
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Valid Until:</span>
                        <span className="font-semibold text-primary">{cert?.validUntil}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Certified By:</span>
                        <span className="font-semibold">{cert?.certifyingBody}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quality Testing Tab */}
          {activeTab === 'testing' && (
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="p-6 bg-primary text-white">
                <h3 className="font-heading text-2xl font-bold mb-2">Quality Testing Parameters</h3>
                <p className="text-warm-cream">Comprehensive analysis ensuring superior quality standards</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-warm-cream">
                    <tr>
                      <th className="text-left p-4 font-semibold text-heritage-green">Parameter</th>
                      <th className="text-left p-4 font-semibold text-heritage-green">Industry Standard</th>
                      <th className="text-left p-4 font-semibold text-heritage-green">Our Result</th>
                      <th className="text-left p-4 font-semibold text-heritage-green">Test Method</th>
                      <th className="text-left p-4 font-semibold text-heritage-green">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualityTests?.map((test, index) => (
                      <tr key={index} className="border-b border-border hover:bg-warm-cream/30 transition-colors duration-200">
                        <td className="p-4 font-semibold text-heritage-green">{test?.parameter}</td>
                        <td className="p-4 text-foreground/70">{test?.standard}</td>
                        <td className="p-4">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-semibold">
                            {test?.ourResult}
                          </span>
                        </td>
                        <td className="p-4 text-foreground/70 text-sm">{test?.testMethod}</td>
                        <td className="p-4">
                          <span className="bg-liquid-gold/10 text-liquid-gold px-2 py-1 rounded-full text-xs font-semibold">
                            {test?.frequency}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Lab Reports Tab */}
          {activeTab === 'reports' && (
            <div className="grid md:grid-cols-2 gap-6">
              {labReports?.map((report, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-warm transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="FileText" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-heritage-green">{report?.title}</h3>
                        <p className="text-sm text-foreground/60">{report?.date}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      report?.status === 'Passed' || report?.status === 'Certified'
                        ? 'bg-primary/10 text-primary' :'bg-liquid-gold/10 text-liquid-gold'
                    }`}>
                      {report?.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-warm-cream text-heritage-green px-3 py-1 rounded-full text-sm">
                      {report?.type}
                    </span>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download Report
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QualityStandards;