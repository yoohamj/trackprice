"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ChartComponent without SSR
const ChartComponent = dynamic(() => import('../../components/item/chart'), {
  ssr: false,
});

const ItemPage: React.FC = () => {
  return (
    <div className="p-6 min-h-screen max-w-7xl mx-auto">
      {/* Item Title aligned to the left */}
      <h1 className="text-4xl font-bold mb-8">Item Page</h1>

      {/* Three-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column: Product Image */}
        <div className="flex justify-center items-start">
          <img
            src="https://via.placeholder.com/300"
            alt="Product"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Middle column: Price and Ranked List */}
        <div className="flex flex-col items-start">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Price: $299.99</h2>
          </div>
          <div className="w-full">
            <h3 className="text-lg font-bold mb-2">Top 5 Cheapest Prices:</h3>
            <ul className="list-decimal list-inside">
              <li>Website 1 - $290.00</li>
              <li>Website 2 - $295.00</li>
              <li>Website 3 - $297.50</li>
              <li>Website 4 - $298.00</li>
              <li>Website 5 - $299.00</li>
            </ul>
          </div>
        </div>

        {/* Right column: Chart */}
        <div className="flex justify-center items-center">
          <ChartComponent />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
