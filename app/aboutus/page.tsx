import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <main className="w-full">
      <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
        <h1 className="mb-8 text-5xl font-bold">About Us</h1>
        <div className="prose mx-auto max-w-6xl text-base leading-7 text-black mb-8 dark:text-white">
          <p>
            Welcome to TrackPrice.ca, your go-to platform for tracking prices and finding the best deals across a variety of products. Our mission is to help you save money by providing real-time price updates, insightful historical pricing data, and tailored notifications to ensure you get the best value for your purchases.
          </p>
          <h2>Our Vision</h2>
          <p>
            We believe everyone should have access to the tools needed to make informed purchasing decisions. TrackPrice.ca aims to create a seamless experience where users can effortlessly monitor price changes and make better financial decisions.
          </p>
          <h2>What We Do</h2>
          <p>
            Our service tracks prices from numerous online retailers, providing you with a centralized hub for all the information you need to make a smart buy. Whether you're looking for the best deals on electronics, apparel, or groceries, TrackPrice.ca is here to ensure you never overpay again.
          </p>
          <h2>How It Works</h2>
          <p>
            Simply search for the product you’re interested in, and our platform will provide the current price, historical pricing trends, and any available deals. You can also set up alerts to get notified when the price drops, allowing you to buy at just the right moment.
          </p>
          <h2>Our Promise</h2>
          <p>
            We are committed to helping our users save both time and money by providing transparent, accurate, and real-time data on product prices. With TrackPrice.ca, you can be sure you’re making informed buying decisions.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
