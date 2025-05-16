"use client"

import Image from 'next/image';
import Link from 'next/link';

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
      <Link href={`/product/${id}`} className="relative w-full overflow-hidden mb-4">
        <div className="aspect-[3/4]">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="flex flex-col items-center text-center">
        <h3 className="text-sm font-barlow text-black">
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