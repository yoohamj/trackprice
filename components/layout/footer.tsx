import Link from 'next/link';
import LogoSquare from 'components/logo-square';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
            <LogoSquare size="sm" />
            <span className="uppercase">
              Track Price <span className="text-red-500">CANADA</span>
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 md:ml-auto">
          <Link href="/" className="hover:text-neutral-700 dark:hover:text-neutral-300">Home</Link>
          <Link href="/about" className="hover:text-neutral-700 dark:hover:text-neutral-300">About Us</Link>
          <Link href="/services" className="hover:text-neutral-700 dark:hover:text-neutral-300">Services</Link>
          <Link href="/contact" className="hover:text-neutral-700 dark:hover:text-neutral-300">Contact</Link>
          <Link href="/privacy" className="hover:text-neutral-700 dark:hover:text-neutral-300">Privacy Policy</Link>
        </div>
        <div className="md:ml-auto">
          <a
            className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
            aria-label="Deploy on Vercel"
            href="https://vercel.com/templates/next.js/nextjs-commerce"
          >
            <span className="px-3">▲</span>
            <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
            <span className="px-3">Deploy</span>
          </a>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <p className="md:ml-auto">
            <Link href="/" className="text-black dark:text-white">
              Track Price <span className="text-red-500">CANADA</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
