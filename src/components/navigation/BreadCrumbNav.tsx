"use client"

import Link from 'next/link';
import { ROUTES, SUBCATEGORY_ROUTES } from '@/lib/constants';

interface BreadcrumbNavProps {
  category: string;
  subcategory?: string;
  productName?: string;
}

const BreadcrumbNav = ({ category, subcategory, productName }: BreadcrumbNavProps) => {
  const categoryKey = category as keyof typeof ROUTES;
  const categoryPath = typeof ROUTES[categoryKey] === 'string' 
    ? ROUTES[categoryKey] as string 
    : `/${category.toLowerCase()}`;

  let subcategoryPath = '';
  if (subcategory && category) {
    const categoryKey = category as keyof typeof SUBCATEGORY_ROUTES;
    if (SUBCATEGORY_ROUTES[categoryKey]) {
      const subcategoryKey = subcategory as keyof typeof SUBCATEGORY_ROUTES[typeof categoryKey];
      subcategoryPath = SUBCATEGORY_ROUTES[categoryKey][subcategoryKey] as string || 
        `${categoryPath}/${subcategory.toLowerCase().replace(' ', '-')}`;
    } else {
      subcategoryPath = `${categoryPath}/${subcategory.toLowerCase().replace(' ', '-')}`;
    }
  }

  return (
    <div className="w-full py-4 px-4 flex justify-between items-center border border-gray-100 mt-2">
      <div className="text-black font-barlow uppercase text-sm tracking-wide">
        <Link 
          href={categoryPath}
          className="hover:opacity-70 transition-opacity"
        >
          {category}
        </Link>
        
        {subcategory && (
          <>
            <span className="mx-1">{' > '}</span>
            <Link 
              href={subcategoryPath}
              className="hover:opacity-70 transition-opacity"
            >
              {subcategory}
            </Link>
          </>
        )}
        
        {productName && (
          <>
            <span className="mx-1">{' > '}</span>
            <span>{productName}</span>
          </>
        )}
      </div>
      
      {!productName && (
        <div>
          <button className="text-black font-barlow uppercase text-sm tracking-wide hover:opacity-70 transition-opacity">
            SORT/FILTER
          </button>
        </div>
      )}
    </div>
  );
};

export default BreadcrumbNav;