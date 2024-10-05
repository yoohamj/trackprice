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
        height: 240,
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
    <div className="relative flex flex-col rounded-xl bg-white shadow-md">
      <div className="relative mx-4 mt-4 flex flex-col md:flex-row md:items-center">
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
            ></path>
          </svg>
        </div>
        <div>
          <h6 className="font-sans text-base font-semibold text-blue-gray-900">Line Chart</h6>
          <p className="max-w-sm font-sans text-sm text-gray-700">
            Visualize your data in a simple way using the @material-tailwind/html chart plugin.
          </p>
        </div>
      </div>
      <div className="pt-6 px-2 pb-0">
        <ReactApexChart
          options={chartConfig.options}
          series={chartConfig.series}
          type="line"
          height={240}
        />
      </div>
    </div>
  );
};

export default ChartComponent;
