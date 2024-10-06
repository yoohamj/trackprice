import LogoSquare from 'components/logo-square';
import Link from 'next/link';
import { Suspense } from 'react';
import Search, { SearchSkeleton } from './search';
import SignInModal from 'components/layout/navbar/signInModal';

export async function Navbar() {
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        {/* Mobile menu can be handled here */}
      </div>
      <div className="flex w-full items-center">
        <div className="flex items-center w-full md:w-1/3">
          {/* Logo and Site Name */}
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex items-center justify-center"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:block">
              Track Price <span className="text-red-500">Canada</span>
            </div>
          </Link>

          {/* Forum Button */}
          <Link
            href="/forum"
            className="ml-4 text-sm font-medium text-neutral-500 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
          >
            Forum
          </Link>
        </div>

        {/* Search Component */}
        <div className="hidden md:flex md:w-1/3 justify-center">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>

        {/* Sign In and Cart Modals */}
        <div className="flex items-center justify-end md:w-1/3 space-x-4">
          <SignInModal />
        </div>
      </div>
    </nav>
  );
}
