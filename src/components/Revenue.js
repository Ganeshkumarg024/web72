import React, { useState } from 'react';

const Revenue = () => {
  const [calculatorType, setCalculatorType] = useState('crorepati');
  const [amount, setAmount] = useState('');
  const [years, setYears] = useState('');
  const [rate, setRate] = useState('');
  const [result, setResult] = useState(null);

  const calculateCrorepati = () => {
    const principal = parseFloat(amount);
    const timeYears = parseFloat(years);
    const interestRate = parseFloat(rate) / 100;
    
    const monthlyRate = interestRate / 12;
    const months = timeYears * 12;
    
    const futureValue = principal * Math.pow(1 + monthlyRate, months);
    return Math.round(futureValue);
  };

  const calculateSIP = () => {
    const monthly = parseFloat(amount);
    const timeYears = parseFloat(years);
    const interestRate = parseFloat(rate) / 100;
    
    const monthlyRate = interestRate / 12;
    const months = timeYears * 12;
    
    const futureValue = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    return Math.round(futureValue);
  };

  const handleCalculate = () => {
    if (!amount || !years || !rate) return;
    
    let calculatedResult;
    switch (calculatorType) {
      case 'crorepati':
        calculatedResult = calculateCrorepati();
        break;
      case 'sip':
      case 'goalSip':
      case 'targetSip':
      case 'retirement':
        calculatedResult = calculateSIP();
        break;
      default:
        calculatedResult = 0;
    }
    
    setResult(calculatedResult);
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-lg p-20 mb-8">
        <div className="mb-6">
          <h4 className="text-xl font-bold mb-4">Tools and Calculators</h4>
          <p className="text-gray-600 mb-4">Simplify your financial planning with our user-friendly tools</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium mb-1">Calculator Type</label>
            <select 
              value={calculatorType} 
              onChange={(e) => setCalculatorType(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="crorepati">Become a Crorepati Calculator</option>
              <option value="sip">SIP Calculator</option>
              <option value="goalSip">Goal-Based Top-Up SIP Calculator</option>
              <option value="targetSip">Target Amount SIP Calculator</option>
              <option value="retirement">Retirement Planning Calculator</option>
            </select>
          </div>

          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
            <div className="space-y-2">
              <label className="block text-sm font-medium mb-1">
                {calculatorType === 'crorepati' ? 'Initial Investment' : 'Monthly Investment'}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium mb-1">Investment Period (Years)</label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter years"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium mb-1">Expected Return Rate (%)</label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter rate"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          >
            Calculate
          </button>

          {result && (
            <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Your Investment Results</h3>
              <div className="text-3xl font-bold text-green-600">
                ₹{result.toLocaleString('en-IN')}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Estimated future value of your investment
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Revenue;