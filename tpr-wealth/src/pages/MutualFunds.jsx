import React, { useState } from "react";
import { motion } from "framer-motion";

const MutualFunds = () => {
  const [investment, setInvestment] = useState(1000); // Initial investment
  const [years, setYears] = useState(5); // Investment period
  const [rate, setRate] = useState(12); // Annual growth rate in %

  // Compound Interest Formula
  const calculateGrowth = (P, r, t) => {
    return Math.round(P * Math.pow(1 + r / 100, t));
  };

  const totalGrowth = calculateGrowth(investment, rate, years);

  return (
    <div className="px-6 py-16">
      {/* Header */}
      <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
        Learn About Mutual Funds
      </h2>

      {/* Description */}
      <p className="text-gray-400 mb-4">
        Mutual funds are a great way to grow your wealth over time. They pool
        money from multiple investors and invest in diversified assets such as
        stocks, bonds, and other securities. By investing regularly, you can
        take advantage of the power of compounding and achieve your financial
        goals.
      </p>

      {/* Tree Animation */}
      <div className="flex justify-center items-center py-10">
        <motion.svg
          width="200"
          height="400"
          viewBox="0 0 200 400"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="origin-bottom"
        >
          {/* Trunk */}
          <rect
            x="90"
            y="200"
            width="20"
            height="200"
            fill="#8B4513"
            className="origin-bottom"
          />
          {/* Branches */}
          <motion.circle
            cx="100"
            cy="150"
            r="50"
            fill="#228B22"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 2 }}
          />
          <motion.circle
            cx="70"
            cy="100"
            r="40"
            fill="#228B22"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
          />
          <motion.circle
            cx="130"
            cy="100"
            r="40"
            fill="#228B22"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, duration: 2 }}
          />
        </motion.svg>
      </div>
      <p className="text-gray-400 mt-6 text-center">
        Just like this tree grows steadily over time, your investments can grow
        with consistent contributions and compounding.
      </p>

      {/* Interactive Simulation */}
      <section className="py-12">
        <h3 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
          Investment Growth Simulation
        </h3>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Inputs */}
            <div className="flex flex-col space-y-4">
              <label className="text-gray-400">
                Monthly Investment (₹):
                <input
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
                />
              </label>
              <label className="text-gray-400">
                Investment Period (Years):
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="mt-1 p-2 w-full rounded-lg bg-gray-700 text-white"
                />
              </label>
              <label className="text-gray-400">
                Annual Interest Rate (%):
                <input
                  type="range"
                  min="8"
                  max="15"
                  step="0.5"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="mt-1 w-full"
                />
                <span className="text-gray-300 block text-right">
                  {rate}%
                </span>
              </label>
            </div>

            {/* Results */}
            <div className="text-center text-gray-300">
              <p className="text-xl font-bold">Projected Growth:</p>
              <p className="text-2xl font-extrabold mt-2">
                ₹{totalGrowth.toLocaleString()}
              </p>
              <p className="mt-2 text-sm">
                (Based on {rate}% annual returns)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center py-10">
        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
          Start Growing Your Wealth Today!
        </h3>
        {/* <button className="bg-gradient-to-r from-gray-300 to-gray-500 text-black px-8 py-3 rounded-lg hover:from-gray-400 hover:to-gray-600">
          Learn More
        </button> */}
      </div>
    </div>
  );
};

export default MutualFunds;
