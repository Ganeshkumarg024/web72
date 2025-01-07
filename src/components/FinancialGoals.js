import React from "react";
import { TrendingUp, BarChart2, Target } from 'lucide-react';
import retirementImage from '../img/retirement.png';
import marriage from '../img/marriage.png';
import education from '../img/education.png';
import { FaWhatsapp } from 'react-icons/fa';


const FinancialGoals = () => {
  return (
    <div className="min-h-screen bg-white py-2">
      {/* Header Section */}
      <div className="py-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">What We Offer</h1>
          {/* <p className="text-blue-100 text-center mt-4">We offer comprehensive financial planning solutions with personalized strategies & expert guidance.</p> */}
        </div>
      </div>

      {/* Services Showcase */}
      <div className="container mx-auto px-4 py-16">
        {/* Retirement Planning Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2">
            <img
              src={retirementImage}
              alt="Retirement Planning"
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-blue-600" size={32} />
              <h2 className="text-2xl font-bold">Retirement Planning</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Create a secure and comfortable retirement with our expert financial planning services. We help you build a retirement corpus that matches your lifestyle goals.
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-blue-600 mb-1">Recommended Savings</div>
                <div className="text-xl font-semibold">30x Annual Expenses</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-blue-600 mb-1">Investment Strategy</div>
                <div className="text-xl font-semibold">Balanced Portfolio Approach</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marriage Planning Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24">
          <div className="w-full md:w-1/2">
            <img
              src={marriage}
              alt="Marriage Planning"
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-blue-600" size={32} />
              <h2 className="text-2xl font-bold">Marriage Planning</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Plan ahead for your children's wedding expenses with strategic investments. Our experts help you create a dedicated marriage fund with systematic investments.
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-blue-600 mb-1">Typical Requirements</div>
                <div className="text-xl font-semibold">₹25L+ for Wedding Expenses</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-blue-600 mb-1">Planning Timeline</div>
                <div className="text-xl font-semibold">15-20 Years Horizon</div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Planning Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src={education}
              alt="Education Planning"
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <BarChart2 className="text-blue-600" size={32} />
              <h2 className="text-2xl font-bold">Education Planning</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Secure your children's future with our education planning services. We help you invest systematically to meet rising education costs.
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-blue-600 mb-1">Fund Target</div>
                <div className="text-xl font-semibold">₹50L+ for Higher Education</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-blue-600 mb-1">Investment Approach</div>
                <div className="text-xl font-semibold">Long-term Growth Focus</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6">
        <a
          href="https://wa.me/+916379015821"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center gap-2"
        >
          <FaWhatsapp size={20} />
          Talk to us
        </a>
      </div>

    </div>
  );
};
export default FinancialGoals;
