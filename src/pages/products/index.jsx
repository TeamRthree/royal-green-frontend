import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/Appicon';
import Button from '../../components/ui/Button';
import ProductCard from './components/ProductCard';
import ProductFilter from './components/ProductFilter';
import ProductComparison from './components/ProductComparison';
import ProductSearch from './components/ProductSearch';
import ProductModal from './components/ProductModal';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [comparisonProducts, setComparisonProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    extraction: 'all',
    benefits: [],
    minPurity: 0,
    isOrganic: false,
    isPremium: false,
    isLabTested: false,
    priceMin: 0,
    priceMax: 999
  });

  // Mock product data
  const allProducts = [
    {
      id: 1,
      name: "Premium Coconut Oil",
      category: "Cooking Oils",
      description: "Pure, cold-pressed coconut oil extracted from fresh coconuts using traditional methods. Rich in medium-chain triglycerides (MCTs) and natural antioxidants.",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      purity: 99.8,
      extraction: "Cold Pressed",
      rating: 4.8,
      reviews: 342,
      isOrganic: true,
      isPremium: true,
      isLabTested: true,
      priceRange: "$35-45",
      keyBenefits: [
        "Boosts Metabolism",
        "Supports Heart Health",
        "Natural Antimicrobial",
        "Improves Skin Health",
        "Brain Function Support"
      ],
      features: ["MCT Rich", "Unrefined", "Chemical Free"]
    },
    {
      id: 2,
      name: "Extra Virgin Olive Oil",
      category: "Cooking Oils",
      description: "First cold-pressed extra virgin olive oil from Mediterranean olives. Contains powerful antioxidants and healthy monounsaturated fats.",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      purity: 99.5,
      extraction: "Cold Pressed",
      rating: 4.9,
      reviews: 567,
      isOrganic: true,
      isPremium: true,
      isLabTested: true,
      priceRange: "$28-38",
      keyBenefits: [
        "Heart Healthy",
        "Anti-inflammatory",
        "Rich in Antioxidants",
        "Supports Brain Health",
        "Aids Digestion"
      ],
      features: ["Single Origin", "First Press", "Polyphenol Rich"]
    },
    {
      id: 3,
      name: "Organic Sesame Oil",
      category: "Wellness Oils",
      description: "Traditional sesame oil extracted using ancient methods. Known for its nutty flavor and exceptional nutritional profile with high vitamin E content.",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      purity: 98.9,
      extraction: "Traditional Press",
      rating: 4.7,
      reviews: 289,
      isOrganic: true,
      isPremium: false,
      isLabTested: true,
      priceRange: "$22-32",
      keyBenefits: [
        "Bone Health Support",
        "Natural Detoxification",
        "Skin Nourishment",
        "Hormone Balance",
        "Joint Health"
      ],
      features: ["Vitamin E Rich", "Calcium Source", "Ayurvedic"]
    },
    {
      id: 4,
      name: "Pure Avocado Oil",
      category: "Skincare Oils",
      description: "Premium avocado oil rich in oleic acid and vitamins A, D, and E. Perfect for both culinary and cosmetic applications.",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      purity: 99.2,
      extraction: "Cold Pressed",
      rating: 4.6,
      reviews: 198,
      isOrganic: true,
      isPremium: true,
      isLabTested: true,
      priceRange: "$42-52",
      keyBenefits: [
        "Deep Skin Moisturizing",
        "Hair Strengthening",
        "Anti-aging Properties",
        "Wound Healing",
        "UV Protection"
      ],
      features: ["High Smoke Point", "Vitamin Rich", "Multi-purpose"]
    },
    {
      id: 5,
      name: "Organic Sunflower Oil",
      category: "Cooking Oils",
      description: "Light, neutral-tasting sunflower oil high in vitamin E and low in saturated fats. Ideal for everyday cooking and baking.",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      purity: 98.5,
      extraction: "Expeller Pressed",
      rating: 4.4,
      reviews: 156,
      isOrganic: true,
      isPremium: false,
      isLabTested: true,
      priceRange: "$18-28",
      keyBenefits: [
        "Heart Health",
        "Immune Support",
        "Skin Health",
        "Energy Boost",
        "Cholesterol Management"
      ],
      features: ["Light Taste", "High Vitamin E", "Versatile"]
    },
    {
      id: 6,
      name: "Premium Argan Oil",
      category: "Skincare Oils",
      description: "Rare Moroccan argan oil extracted from argan tree kernels. Known as \'liquid gold\' for its exceptional beauty and health benefits.",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      purity: 99.9,
      extraction: "Traditional Hand Press",
      rating: 4.9,
      reviews: 423,
      isOrganic: true,
      isPremium: true,
      isLabTested: true,
      priceRange: "$65-85",
      keyBenefits: [
        "Anti-aging",
        "Hair Restoration",
        "Skin Elasticity",
        "Scar Healing",
        "Nail Strengthening"
      ],
      features: ["Rare Origin", "Hand Extracted", "Beauty Grade"]
    },
    {
      id: 7,
      name: "Organic Mustard Oil",
      category: "Wellness Oils",
      description: "Traditional mustard oil with natural warming properties. Rich in omega-3 and omega-6 fatty acids with natural antimicrobial properties.",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      purity: 98.2,
      extraction: "Cold Pressed",
      rating: 4.5,
      reviews: 234,
      isOrganic: true,
      isPremium: false,
      isLabTested: true,
      priceRange: "$15-25",
      keyBenefits: [
        "Circulation Boost",
        "Joint Pain Relief",
        "Respiratory Health",
        "Natural Preservative",
        "Muscle Relaxation"
      ],
      features: ["Warming Effect", "Traditional Use", "Therapeutic"]
    },
    {
      id: 8,
      name: "Pure Jojoba Oil",
      category: "Aromatherapy Oils",
      description: "Golden jojoba oil that closely mimics human sebum. Excellent carrier oil for essential oils and natural skincare applications.",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      purity: 99.7,
      extraction: "Cold Pressed",
      rating: 4.8,
      reviews: 312,
      isOrganic: true,
      isPremium: true,
      isLabTested: true,
      priceRange: "$38-48",
      keyBenefits: [
        "Skin Balance",
        "Non-comedogenic",
        "Long Shelf Life",
        "Carrier Oil",
        "Hair Conditioning"
      ],
      features: ["Sebum-like", "Stable", "Hypoallergenic"]
    }
  ];

  // Filter and sort products
  const filteredProducts = allProducts?.filter(product => {
    const matchesSearch = product?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         product?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         product?.keyBenefits?.some(benefit => benefit?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
    
    const matchesCategory = filters?.category === 'all' || product?.category?.toLowerCase()?.includes(filters?.category);
    const matchesExtraction = filters?.extraction === 'all' || product?.extraction?.toLowerCase()?.includes(filters?.extraction?.replace('-', ' '));
    const matchesPurity = product?.purity >= filters?.minPurity;
    const matchesOrganic = !filters?.isOrganic || product?.isOrganic;
    const matchesPremium = !filters?.isPremium || product?.isPremium;
    const matchesLabTested = !filters?.isLabTested || product?.isLabTested;

    return matchesSearch && matchesCategory && matchesExtraction && matchesPurity && 
           matchesOrganic && matchesPremium && matchesLabTested;
  });

  // Sort products
  const sortedProducts = [...filteredProducts]?.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a?.name?.localeCompare(b?.name);
      case 'rating':
        return b?.rating - a?.rating;
      case 'purity':
        return b?.purity - a?.purity;
      case 'newest':
        return b?.id - a?.id;
      default:
        return 0;
    }
  });

  const handleCompareProduct = (productId) => {
    const product = allProducts?.find(p => p?.id === productId);
    if (comparisonProducts?.find(p => p?.id === productId)) {
      setComparisonProducts(comparisonProducts?.filter(p => p?.id !== productId));
    } else if (comparisonProducts?.length < 3) {
      setComparisonProducts([...comparisonProducts, product]);
    }
  };

  const handleRemoveFromComparison = (productId) => {
    setComparisonProducts(comparisonProducts?.filter(p => p?.id !== productId));
  };

  const handleClearComparison = () => {
    setComparisonProducts([]);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleClearFilters = () => {
    setFilters({
      category: 'all',
      extraction: 'all',
      benefits: [],
      minPurity: 0,
      isOrganic: false,
      isPremium: false,
      isLabTested: false,
      priceMin: 0,
      priceMax: 999
    });
    setSearchTerm('');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Premium Organic Oils - Product Collection | Royal Green Oil</title>
        <meta name="description" content="Discover our comprehensive collection of premium organic oils. Cold-pressed, lab-tested, and certified for purity. Compare products and find the perfect oil for your wellness journey." />
        <meta name="keywords" content="organic oils, cold pressed oils, coconut oil, olive oil, wellness oils, premium oils, natural oils" />
      </Helmet>
      <div className="min-h-screen bg-background">
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-heritage-green to-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Premium Oil Collection
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                Discover our carefully curated selection of organic, cold-pressed oils. 
                Each bottle represents our commitment to purity, quality, and your wellness.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={20} className="text-liquid-gold" />
                  <span>100% Organic Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="FlaskConical" size={20} className="text-liquid-gold" />
                  <span>Lab Tested Purity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Leaf" size={20} className="text-liquid-gold" />
                  <span>Cold Pressed Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search and Sort */}
            <ProductSearch
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onSortChange={setSortBy}
              sortBy={sortBy}
              totalResults={sortedProducts?.length}
            />

            {/* Product Comparison */}
            <ProductComparison
              products={comparisonProducts}
              onRemoveProduct={handleRemoveFromComparison}
              onClearComparison={handleClearComparison}
            />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <ProductFilter
                  filters={filters}
                  onFilterChange={setFilters}
                  onClearFilters={handleClearFilters}
                />
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-3">
                {sortedProducts?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {sortedProducts?.map((product) => (
                      <ProductCard
                        key={product?.id}
                        product={product}
                        onCompare={handleCompareProduct}
                        isComparing={comparisonProducts?.some(p => p?.id === product?.id)}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Icon name="Search" size={64} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-semibold text-heritage-green mb-2">
                      No Products Found
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search criteria or filters to find what you're looking for.
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleClearFilters}
                      className="border-liquid-gold text-liquid-gold hover:bg-liquid-gold hover:text-white"
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Expert Recommendations */}
        <section className="py-16 bg-warm-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-heritage-green mb-4">
                Expert Recommendations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our wellness experts have curated these combinations based on your health goals and lifestyle needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Heart Health Bundle",
                  description: "Olive oil and avocado oil combination for cardiovascular wellness",
                  products: ["Extra Virgin Olive Oil", "Pure Avocado Oil"],
                  icon: "Heart",
                  benefit: "Supports healthy cholesterol levels"
                },
                {
                  title: "Beauty & Wellness Kit",
                  description: "Argan and jojoba oils for complete skin and hair care",
                  products: ["Premium Argan Oil", "Pure Jojoba Oil"],
                  icon: "Sparkles",
                  benefit: "Natural anti-aging properties"
                },
                {
                  title: "Cooking Essentials",
                  description: "Versatile oils for all your culinary adventures",
                  products: ["Premium Coconut Oil", "Organic Sunflower Oil"],
                  icon: "ChefHat",
                  benefit: "High smoke point for healthy cooking"
                }
              ]?.map((recommendation, index) => (
                <div key={index} className="bg-card rounded-organic shadow-soft p-6 hover:shadow-premium transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-liquid-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={recommendation?.icon} size={32} className="text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-heritage-green mb-2">
                      {recommendation?.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {recommendation?.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {recommendation?.products?.map((product, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-liquid-gold" />
                        <span className="text-sm text-foreground">{product}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-warm-cream p-3 rounded-organic mb-4">
                    <div className="flex items-center space-x-2">
                      <Icon name="Star" size={16} className="text-liquid-gold" />
                      <span className="text-sm font-medium text-heritage-green">
                        {recommendation?.benefit}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    fullWidth
                    className="border-liquid-gold text-liquid-gold hover:bg-liquid-gold hover:text-white"
                  >
                    Get Recommendation
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-heritage-green">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help Choosing the Right Oil?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our wellness experts are here to guide you. Get personalized recommendations 
              based on your health goals and preferences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                className="bg-liquid-gold hover:bg-liquid-gold-dark text-heritage-green font-semibold"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-heritage-green"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Download Buying Guide
              </Button>
            </div>
          </div>
        </section>

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
};

export default Products;