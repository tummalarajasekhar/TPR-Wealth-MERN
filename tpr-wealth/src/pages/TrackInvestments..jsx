import React, { useState } from "react";

const TrackInvestment = () => {
  const [investmentData, setInvestmentData] = useState({
    totalInvested: 0, // Initial state as 0 for no investment
    currentValue: 0, // No value yet
    growthPercentage: 0, // No growth
  });

  // Example check if the user has made an investment or not
  const hasInvestment = investmentData.totalInvested > 0;

  return (
    <div className="px-6 py-16 bg-gray-900">
      <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white text-center">
        Track Your Investment
      </h2>

      {/* Check if user has investment */}
      {hasInvestment ? (
        <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md text-center">
          {/* Investment Overview */}
          <div className="mb-8">
            <p className="text-gray-400 mb-2">Total Invested Amount</p>
            <h3 className="text-2xl font-semibold text-white">{`₹${investmentData.totalInvested}`}</h3>
          </div>

          <div className="mb-8">
            <p className="text-gray-400 mb-2">Current Value</p>
            <h3 className="text-2xl font-semibold text-white">{`₹${investmentData.currentValue}`}</h3>
          </div>

          <div className="mb-8">
            <p className="text-gray-400 mb-2">Growth Percentage</p>
            <h3 className="text-2xl font-semibold text-white">{`${investmentData.growthPercentage}%`}</h3>
          </div>

          {/* Investment Growth Chart (Placeholder for future chart integration) */}
          <div className="mb-8">
            <h3 className="text-xl text-white">Investment Growth Over Time</h3>
            <div className="h-48 bg-gray-600 rounded-lg mt-4">Chart Placeholder</div>
          </div>

          {/* Investment History (Example data) */}
          <div>
            <h3 className="text-xl text-white mb-4">Investment History</h3>
            <table className="w-full text-left text-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Growth</th>
                </tr>
              </thead>
              <tbody>
                {/* Example investment rows */}
                <tr>
                  <td className="px-4 py-2">01 Jan 2024</td>
                  <td className="px-4 py-2">₹1000</td>
                  <td className="px-4 py-2">+10%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">01 Feb 2024</td>
                  <td className="px-4 py-2">₹1500</td>
                  <td className="px-4 py-2">+5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        // Show this message if no investment
        <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <p className="text-white text-xl">At present, you have no investment.</p>
          <p className="text-gray-400 mt-4">Start investing today to track your growth!</p>
        </div>
      )}
    </div>
  );
};

export default TrackInvestment;
