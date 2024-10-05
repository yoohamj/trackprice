"use client";

import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const ChartComponent: React.FC = () => {
  const chartConfig: { series: ApexAxisChartSeries; options: ApexOptions } = {
    series: [
      {
        name: 'Sales',
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        type: 'line',
        height: 300, // Increased the height for better visibility
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#020617'],
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            colors: '#616161',
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#616161',
            fontSize: '12px',
          },
        },
      },
      grid: {
        borderColor: '#dddddd',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      tooltip: {
        theme: 'dark',
      },
    },
  };

  return (
    <div className="relative flex flex-col rounded-xl bg-white shadow-md w-full max-w-4xl mx-auto">
      <div className="relative mx-4 mt-4 flex flex-col md:flex-row md:items-center">
        <div>
          <h6 className="font-sans text-base font-semibold text-blue-gray-900">Price History</h6>
          <p className="font-sans text-sm text-gray-700">
            Lowest Monthly Price for the past 6 months
          </p>
        </div>
      </div>
      <div className="pt-6 px-2 pb-0 w-full">
        <ReactApexChart
          options={chartConfig.options}
          series={chartConfig.series}
          type="line"
          height={300}
          width="100%"
        />
      </div>
    </div>
  );
};

export default ChartComponent;
