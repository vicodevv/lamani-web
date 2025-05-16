/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/types';
import BreadcrumbNav from '@/components/navigation/BreadCrumbNav';
import Accordion from './Accordion';
import ColorSelector from './ColorSelector';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors && product.colors.length > 0 ? product.colors[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  
  const images = product.images || [product.imageUrl];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Handle adding to bag
  const handleAddToBag = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    console.log('Adding to bag:', {
      product,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <BreadcrumbNav 
        category={product.category} 
        subcategory={product.subcategory} 
        productName={product.name}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-7 gap-8 p-4 max-w-7xl mx-auto">
        <div className="md:col-span-5 space-y-4 max-h-[80vh]">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={images[currentImageIndex]}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 60vw, 50vw"
              className="object-contain object-center"
            />
          </div>
          
          {images.length > 1 && (
            <div className="flex space-x-2 overflow-hidden">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-24 flex-shrink-0 border ${
                    index === currentImageIndex ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="md:col-span-2 flex flex-col space-y-6">
          {/* Product name and price */}
          <div>
            <h1 className="text-xl font-barlow">{product.collection}</h1>
            <p className="text-xl font-barlow mt-1">{product.currency}{product.price}</p>
          </div>
          
          {/* Size selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-barlow">Size</h2>
                <a href="#" className="text-sm text-gray-500 hover:underline">Size Guide</a>
              </div>
              
              {/* Custom dropdown to match design */}
              <div className="relative w-full mt-2">
                <select 
                  className="w-full py-3 pl-4 pr-10 border border-gray-300 appearance-none font-barlow"
                  value={selectedSize || ''}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="" disabled>Select Size</option>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          )}
          
          {/* Color selector - updated to match design */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <h2 className="text-sm font-barlow">
                Color {selectedColor && `(${selectedColor})`}
              </h2>
              
              {/* Updated color selector to match design */}
              <div className="mt-2">
                <ColorSelector
                  colors={product.colors}
                  selectedColor={selectedColor}
                  onSelectColor={setSelectedColor}
                />
              </div>
            </div>
          )}
          
          {/* Accordion sections */}
          <div className="space-y-0">
            <Accordion title="Product Details">
              <div className="py-4 space-y-2">
                <p className="text-sm">{product.description}</p>
                {product.details && (
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {product.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Accordion>
            
            <Accordion title="Sizing Details">
              <div className="py-4">
                <p className="text-sm">
                  Our items are true to size. For a more relaxed fit, we recommend sizing up.
                  Model wears size M.
                </p>
              </div>
            </Accordion>
            
            <Accordion title="Delivery and Returns">
              <div className="py-4">
                <p className="text-sm">
                  Free Standard delivery on orders over £50. Express delivery available.
                  We accept returns within 30 days of delivery. Items must be unworn and in their original packaging.
                </p>
              </div>
            </Accordion>
          </div>
          
          {/* Add to bag button - updated to match design */}
          <div className="mt-4">
            <button
              onClick={handleAddToBag}
              className="w-full py-4 bg-black text-white font-barlow uppercase tracking-wider hover:bg-gray-900 transition-colors"
            >
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}