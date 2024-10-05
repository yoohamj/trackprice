"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ChartComponent without SSR
const ChartComponent = dynamic(() => import('../../components/item/chart'), {
  ssr: false,
});

const ItemPage: React.FC = () => {
  return (
    <div className="p-6 min-h-screen max-w-7xl mx-auto bg-neutral-50">
      {/* Item Title aligned to the left */}
      <h1 className="text-4xl font-bold mb-4">Item Page</h1>
      
      {/* Bold line separating title from content */}
      <hr className="border-t-2 border-gray-400 mb-8" />

      {/* Modified Three-column layout with even height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[400px]">
        {/* Left column: Product Image (3/12 of the width) */}
        <div className="lg:col-span-3 flex flex-col items-center justify-start h-full bg-neutral-50 rounded-lg p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Product"
            className="max-w-full h-auto rounded-lg"
          />
        </div>

        {/* Middle column: Price and Ranked List (4/12 of the width) */}
        <div className="lg:col-span-4 flex flex-col items-start justify-between h-full bg-neutral-50 rounded-lg p-4">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Price: $299.99</h2>
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

        {/* Right column: Chart (5/12 of the width) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center h-full bg-neutral-50 rounded-lg p-4">
          <ChartComponent />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
