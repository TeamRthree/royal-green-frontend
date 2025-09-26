import React from "react";
import { useNavigate } from "react-router-dom";

const BlockedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-warm-cream text-heritage px-6 relative overflow-hidden">
      
      {/* Decorative oil drops background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-24 h-24 bg-liquid-gold rounded-full opacity-20 animate-ping top-10 left-1/4"></div>
        <div className="absolute w-32 h-32 bg-liquid-gold-dark rounded-full opacity-10 animate-pulse top-1/2 left-3/4"></div>
        <div className="absolute w-16 h-16 bg-liquid-gold rounded-full opacity-20 animate-ping top-3/4 left-1/3"></div>
      </div>

      <h1 className="relative text-5xl md:text-6xl font-heading mb-4 z-10">Oil in Progress</h1>
      <p className="relative text-lg md:text-xl font-body mb-6 max-w-lg text-center z-10">
        This section is being carefully pressed and bottled. Check back soon for premium content!
      </p>
      <button
        onClick={() => navigate("/")}
        className="relative px-6 py-3 bg-liquid-gold text-foreground rounded-full font-semibold hover:bg-liquid-gold-dark transition-colors duration-300 z-10"
      >
        Go to Home
      </button>
    </div>
  );
};

export default BlockedPage;
