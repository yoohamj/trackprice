"use client";

import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <p className="text-lg mb-6">
        We value your feedback and are here to assist you. If you have any questions, concerns, or need help, feel free to reach out to us.
      </p>

      <p className="text-lg">
        You can contact our support team via email at{' '}
        <Link href="mailto:support@trackprice.ca">
          <span className="text-blue-500 underline hover:text-blue-700">support@trackprice.ca</span>
        </Link>
        .
      </p>
      
      <p className="text-lg mt-6">
        We aim to respond to all inquiries within 24-48 hours.
      </p>
    </div>
  );
}
