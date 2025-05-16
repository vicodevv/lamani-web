"use client"

import Link from 'next/link';

interface BreadcrumbNavProps {
  category: string;
  subcategory?: string;
}

const BreadcrumbNav = ({ category, subcategory }: BreadcrumbNavProps) => {
  // Generate URL for category
  const categoryUrl = `/${category.toLowerCase()}`;

  return (
    <div className="w-full py-4 px-4 flex justify-between items-center border border-gray-100 mt-2">
      <div className="text-black font-barlow uppercase text-sm tracking-wide">
        {subcategory ? (
          <>
            <Link 
              href={categoryUrl}
              className="hover:opacity-70 transition-opacity"
            >
              {category}
            </Link>
            <span className="mx-1">{' > '}</span>
            <span>{subcategory}</span>
          </>
        ) : (
          <span>{category}</span>
        )}
      </div>
      
      <div>
        <button className="text-black font-barlow uppercase text-sm tracking-wide hover:opacity-70 transition-opacity">
          SORT/FILTER
        </button>
      </div>
    </div>
  );
};

export default BreadcrumbNav;