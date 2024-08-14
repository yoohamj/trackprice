import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export function Carousel() {
  // Static data for demonstration purposes
  const products = [
    {
      handle: 'product-1',
      featuredImage: { url: '/images/product1.jpg' },
      title: 'Product 1',
      priceRange: {
        maxVariantPrice: {
          amount: '100.00',
          currencyCode: 'USD'
        }
      }
    },
    {
      handle: 'product-2',
      featuredImage: { url: '/images/product2.jpg' },
      title: 'Product 2',
      priceRange: {
        maxVariantPrice: {
          amount: '200.00',
          currencyCode: 'USD'
        }
      }
    },
    {
      handle: 'product-3',
      featuredImage: { url: '/images/product3.jpg' },
      title: 'Product 3',
      priceRange: {
        maxVariantPrice: {
          amount: '300.00',
          currencyCode: 'USD'
        }
      }
    }
  ];

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
