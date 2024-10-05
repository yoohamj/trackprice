import LogoSquare from 'components/logo-square';
import Link from 'next/link';
import { Suspense } from 'react';
import Search, { SearchSkeleton } from './search';

export async function Navbar() {
  return (
    <nav className="relative p-4 lg:px-6">
      <div className="flex flex-col items-center w-full md:flex-row md:justify-between">
        <div className="flex items-center justify-center mb-4 md:mb-0 md:justify-start md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="flex items-center"
          >
            <LogoSquare />
            <div className="ml-2 text-sm font-medium uppercase">
              Track Price <span className="text-red-500">Canada</span>
            </div>
          </Link>
        </div>
        <div className="w-full md:w-1/3 md:flex md:justify-center">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end w-full md:w-1/3 mt-4 md:mt-0">
          {/* Removed Modal */}
        </div>
      </div>
    </nav>
  );
}
