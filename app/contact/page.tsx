"use client";

import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="w-full">
      <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
        <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
        
        <div className="prose mx-auto max-w-6xl text-base leading-7 text-black dark:text-white">
          <p>
            We value your feedback and are here to assist you. If you have any questions, concerns, or need help, feel free to reach out to us.
          </p>

          <p>
            You can contact our support team via email at{' '}
            <Link href="mailto:support@trackprice.ca">
              <span className="text-blue-500 underline hover:text-blue-700">support@trackprice.ca</span>
            </Link>
            .
          </p>

          <p>
            We aim to respond to all inquiries within 24-48 hours.
          </p>
        </div>
      </div>
    </main>
  );
}
