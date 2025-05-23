/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '@/lib/types';
import BreadcrumbNav from '@/components/navigation/BreadCrumbNav';
import Accordion from './Accordion';
import ColorSelector from './ColorSelector';
import CustomDropdown from '@/components/ui/CustomDropdown';
import Toast, { useToast } from '@/components/ui/Toast';
import { useCart } from '@/context/CartContext';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors && product.colors.length > 0 ? product.colors[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  
  // Use images array if available, otherwise fallback to single imageUrl
  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.imageUrl];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { addToCart } = useCart();
  const { toast, showToast, hideToast } = useToast();
  
  const handleAddToBag = () => {
    if (!selectedSize) {
      showToast('Please select a size', 'error');
      return;
    }
    
    addToCart({
      ...product,
      quantity,
      size: selectedSize,
      color: selectedColor || undefined
    });
    
    showToast(`Added ${product.collection} to your bag!`, 'success');
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <BreadcrumbNav 
        category={product.category} 
        subcategory={product.subcategory} 
        productName={product.name}
      />
      
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-4 gap-6 lg:gap-8">
        <div className="order-3 lg:order-1 w-full lg:w-[300px] lg:flex-shrink-0">
          <div className="space-y-0 pt-6 lg:pt-8 border-t lg:border-t-0 border-gray-200">
            <div className="hidden lg:block mb-6">
              <h2 className="text-lg font-barlow mb-4">INFO</h2>
            </div>
            
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
        </div>
        
        {/* Product Image Section with Better Sizing */}
        <div className="order-1 lg:order-2 flex-1 flex justify-center items-start">
          <div className="w-full max-w-[600px] relative">
            <div className="relative aspect-[3/4] w-full group bg-gray-50">
              <Image
                src={images[currentImageIndex]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              
              {/* Navigation arrows - only show if more than one image */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevImage}
                    className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 z-10"
                  >
                    <ChevronLeft className="h-5 w-5 text-black" />
                  </button>
                  
                  <button
                    onClick={goToNextImage}
                    className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 z-10"
                  >
                    <ChevronRight className="h-5 w-5 text-black" />
                  </button>
                </>
              )}
              
              {/* Image indicators - only show if more than one image */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-black' : 'bg-white/70 lg:bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            {/* Thumbnail navigation - only show if more than one image */}
            {images.length > 1 && (
              <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-16 h-20 lg:w-20 lg:h-24 flex-shrink-0 border cursor-pointer bg-gray-50 ${
                      index === currentImageIndex ? 'border-black border-2' : 'border-gray-200'
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
        </div>
        
        <div className="order-2 lg:order-3 w-full lg:w-[350px] lg:flex-shrink-0 flex flex-col space-y-6 pt-6 lg:pt-8">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-xl font-barlow">{product.collection}</h1>
            <p className="text-xl sm:text-2xl lg:text-xl font-barlow mt-1">{product.currency}{product.price}</p>
          </div>
          
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-barlow">Size</h2>
                <a href="#" className="text-sm text-gray-500 hover:underline">Size Guide</a>
              </div>
              
              <CustomDropdown
                options={product.sizes}
                value={selectedSize}
                onChange={setSelectedSize}
                placeholder="Select Size"
              />
            </div>
          )}
          
          {product.colors && product.colors.length > 0 && (
            <div>
              <h2 className="text-sm font-barlow mb-2">
                Color {selectedColor && `(${selectedColor})`}
              </h2>
              
              <ColorSelector
                colors={product.colors}
                selectedColor={selectedColor}
                onSelectColor={setSelectedColor}
              />
            </div>
          )}
          
          <div className="pt-4 lg:mt-auto lg:pt-8">
            <button
              onClick={handleAddToBag}
              className="w-full py-4 bg-black text-white font-barlow uppercase tracking-wider hover:bg-gray-900 transition-colors cursor-pointer"
            >
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
      
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </main>
  );
}