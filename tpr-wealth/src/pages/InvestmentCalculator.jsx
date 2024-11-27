import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const InvestmentCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000); // Default to ₹1000
  const [years, setYears] = useState(5); // Default to 5 years
  const [rate, setRate] = useState(7); // Default to 7% annual return
  const [projectedValue, setProjectedValue] = useState(0);

  // Function to calculate the projected investment value
  const calculateInvestment = () => {
    const months = years * 12;
    const rateMonthly = rate / 100 / 12;
    let futureValue = 0;

    for (let i = 0; i < months; i++) {
      futureValue += monthlyInvestment;
      futureValue *= 1 + rateMonthly;
    }

    setProjectedValue(futureValue.toFixed(2)); // Display value rounded to 2 decimal places
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-black">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Investment Calculator</h2>
      
      {/* Gradient Background Section */}
      <div className="relative mb-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg shadow-lg p-8 text-white">
        <h3 className="text-2xl font-bold text-center mb-4">
          Calculate Your Investment Growth
        </h3>
        
        <div className="w-full max-w-xs">
          <div className="mb-4">
            <label className="block text-lg mb-2">Monthly Investment (₹):</label>
            <input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-60 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter amount in ₹"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">Years to Invest:</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-60 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter number of years"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">Expected Annual Return (%)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-60 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter expected return rate"
            />
          </div>

          <button
            onClick={calculateInvestment}
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg w-full mb-4 hover:bg-blue-700"
          >
            Calculate
          </button>
        </div>
      </div>

      {/* Projected Value Result */}
      {projectedValue > 0 && (
        <div className="mt-6 text-center text-xl text-white">
          <p className="font-bold">Projected Value After {years} Years:</p>
          <p className="text-2xl">₹{projectedValue}</p> {/* Displayed in Rupees */}
        </div>
      )}

      {/* Button to Navigate to Contact Us Page (outside of the image overlay) */}
      <div className="mt-8 text-center">
        <Link to="/contact">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg w-full hover:bg-blue-700 transition-colors">
            Contact Us for Investment Assistance
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InvestmentCalculator;
