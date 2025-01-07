import React from "react";
import investmentVideo from "../img/invesment.mp4";

const Carousel = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={investmentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-blue-900/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
          Empowering Individuals to Achieve Financial Freedom and Security
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
          "Wealth Creation is a plan, not a product or procedure" - Let us guide you through your financial journey
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition">
            Start Your Investment Journey
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition">
            Explore Our Services
          </button>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="text-sm mb-2">Discover More</div>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Carousel;