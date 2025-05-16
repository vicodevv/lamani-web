"use client"

import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  currency: string;
  imageUrl: string;
  collection?: string;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  currency, 
  imageUrl,
  collection = "Lamani summer edition"
}: ProductCardProps) => {
  return (
    <div className="flex flex-col">
      {/* Product image */}
      <Link href={ROUTES.PRODUCT(id)} className="block group product-card">
        <div className="relative w-full aspect-[5/9] overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className="object-contain object-center"
          />
        </div>
      </Link>

      {/* Product info */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-sm font-barlow text-black font-normal">
          {collection}
        </h3>
        <p className="text-sm font-barlow text-black">
          {currency} {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;