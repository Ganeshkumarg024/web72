import React from 'react';
import { Link } from 'react-router-dom';
import InnerHeader from '../components/InnerHeader';
import serviceHeader from '../img/services-header.jpg';
import InnerHeaderBanner from "../components/InnerHeaderBanner";

const Services = () => {
  const services = [
    {
      title: "Investment Solutions",
      description: "Comprehensive investment services including Mutual Funds, Stocks, NPS, and Fixed Deposits. We help you choose the right investment mix based on your risk profile.",
      icon: "bi bi-graph-up-arrow",
      link: "/investment"
    },
    {
      title: "Insurance Planning",
      description: "Complete insurance solutions covering Term Life, Health, Motor, and Business Insurance to protect what matters most to you.",
      icon: "bi bi-shield-check",
      link: "/insurance"
    },
    {
      title: "Retirement Planning",
      description: "Strategic retirement planning services to ensure financial security in your golden years through optimized investment and savings strategies.",
      icon: "bi bi-piggy-bank",
      link: "/retirement"
    },
    {
      title: "Tax Planning",
      description: "Expert tax optimization services to help you maximize returns while staying compliant with all regulations and requirements.",
      icon: "bi bi-calculator",
      link: "/tax-planning"
    },
    {
      title: "Portfolio Management",
      description: "Professional portfolio management services with regular monitoring and rebalancing to ensure your investments stay aligned with your goals.",
      icon: "bi bi-briefcase",
      link: "/portfolio"
    },
    {
      title: "Financial Planning",
      description: "Comprehensive financial planning for major life goals including children's education, marriage expenses, and property investment.",
      icon: "bi bi-clipboard-data",
      link: "/planning"
    }
  ];

  return (
    <>
     <InnerHeader />
     <InnerHeaderBanner name={"Services"} img = {serviceHeader}/>
    <section className="py-16 bg-gray-50">
     
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer quality financial services to help you achieve your goals. Our expert team provides valuable investment and planning services tailored to our clients' needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which service suits your needs?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;