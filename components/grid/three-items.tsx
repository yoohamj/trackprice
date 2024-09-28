import clsx from 'clsx';
import Image from 'next/image';

function ThreeItemGridItem({
  size,
  priority,
  src
}: {
  size: 'full' | 'half';
  priority?: boolean;
  src: string;
}) {
  return (
    <li
      className={clsx(
        'relative block aspect-square h-full w-full',
        size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'
      )}
    >
      <div
        className={clsx(
          'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black',
          {
            'border-2 border-blue-600': priority,
            'border-neutral-200 dark:border-neutral-800': !priority
          }
        )}
      >
        <Image
          src={src}
          className={clsx('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out group-hover:scale-105': true
          })}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt="Product Image"
        />
      </div>
    </li>
  );
}

export function ThreeItemGrid() {
  // Hardcoded image paths
  const firstProductImage = '/images/t-shirt-1.avif';
  const secondProductImage = '/images/bag-1-dark.avif';
  const thirdProductImage = '/images/cup-black.avif';

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      <ThreeItemGridItem size="full" src={firstProductImage} />
      <ThreeItemGridItem size="half" src={secondProductImage} />
      <ThreeItemGridItem size="half" src={thirdProductImage} />
    </section>
  );
}
