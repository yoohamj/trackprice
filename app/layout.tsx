import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import { Navbar } from 'components/layout/navbar';
import { GeistSans } from 'geist/font/sans';
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrackPrice.ca",
  description: "Find the best price",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <meta name="impact-site-verification" content="03c3e2e1-1a72-4dd2-af15-fa8da814fb0c" />
      </head>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Navbar />
        <main>
          {children} {/* Render the page content here */}
        </main>
      </body>
    </html>
  );
}
