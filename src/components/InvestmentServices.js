import React from 'react';
import { BarChart2, Target, Shield, TrendingUp, ArrowRight } from 'lucide-react';

const InvestmentServices = () => {
  const services = [
    {
      phase: "Empathize",
      title: "Understanding Your Goals",
      icon: <Target size={32} />,
      color: "from-orange-500 to-orange-600",
      description: "We begin by understanding your financial needs, goals, and risk tolerance to create a personalized strategy.",
      points: [
        "Comprehensive financial assessment",
        "Risk profile analysis",
        "Goal-based planning approach"
      ]
    },
    {
      phase: "Define",
      title: "Investment Strategy",
      icon: <BarChart2 size={32} />,
      color: "from-blue-500 to-blue-600",
      description: "Creating a clear investment roadmap based on your unique financial situation and objectives.",
      points: [
        "Asset allocation strategy",
        "Investment timeline planning",
        "Risk management framework"
      ]
    },
    {
      phase: "Ideate",
      title: "Portfolio Design",
      icon: <TrendingUp size={32} />,
      color: "from-red-500 to-red-600",
      description: "Developing diverse investment solutions tailored to your goals and risk profile.",
      points: [
        "Mutual fund selection",
        "Direct equity strategies",
        "Balanced portfolio creation"
      ]
    },
    {
      phase: "Prototype",
      title: "Implementation",
      icon: <Shield size={32} />,
      color: "from-yellow-500 to-yellow-600",
      description: "Executing your investment strategy with careful consideration of market conditions.",
      points: [
        "Systematic investment plans",
        "Regular portfolio monitoring",
        "Performance tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Investment Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic framework for building and managing your wealth through strategic planning and careful execution
          </p>
        </div>

        {/* Services Flow */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-yellow-500 transform -translate-y-1/2 z-0" />

          {/* Service Cards */}
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {services.map((service, index) => (
              <div key={index} className="group">
                {/* Phase Label */}
                <div className={`bg-gradient-to-r ${service.color} text-white text-sm font-semibold py-1 px-4 rounded-full inline-block mb-4`}>
                  {service.phase}
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl relative h-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3">
                      {service.points.map((point, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <ArrowRight size={16} className="mr-2 text-blue-500" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
            Start Your Investment Journey
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentServices;