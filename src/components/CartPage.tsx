"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import BreadcrumbNav from '@/components/navigation/BreadCrumbNav';

export default function CartPage() {
  const { items, itemCount, totalPrice, updateQuantity, removeFromCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const shippingCost = 20;
  const finalTotal = totalPrice + shippingCost;

  const handleQuantityChange = (itemId: string, newQuantity: number, size?: string, color?: string) => {
    updateQuantity(itemId, newQuantity, size, color);
  };

  const handleRemoveItem = (itemId: string, size?: string, color?: string) => {
    removeFromCart(itemId, size, color);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    console.log('Proceeding to checkout...');
  };

  return (
    <>
      <Header transparent={false} />
      <main className="min-h-screen bg-white text-black">
        <BreadcrumbNav category="CART" />
        
        <div className="max-w-7xl mx-auto p-4">
          {items.length === 0 ? (
            // Empty cart state
            <div className="text-center py-16">
              <h1 className="text-2xl font-barlow mb-4">Your cart is empty</h1>
              <p className="text-gray-600 mb-8">Add some items to get started</p>
              <Link 
                href="/shop"
                className="inline-block px-8 py-3 bg-black text-white font-barlow uppercase tracking-wide hover:bg-gray-900 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            // Cart with items
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <h1 className="text-2xl font-barlow mb-8">Shopping Cart</h1>
                
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div key={`${item.id}-${item.size}-${item.color}-${index}`} className="flex gap-4 p-4 border-b border-gray-200">
                      {/* Product Image */}
                      <div className="relative w-20 h-24 flex-shrink-0">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-barlow text-lg">{item.collection}</h3>
                        <p className="text-sm text-gray-600">
                          {item.color && `${item.color} / `}{item.size}
                        </p>
                        <p className="font-barlow text-lg mt-1">{item.currency}{item.price}</p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center mt-2 space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.size, item.color)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 border border-gray-300 min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.size, item.color)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      {/* Remove Button */}
                      <div className="flex flex-col justify-between items-end">
                        <button
                          onClick={() => handleRemoveItem(item.id, item.size, item.color)}
                          className="text-sm text-gray-500 hover:text-black uppercase font-barlow"
                        >
                          REMOVE
                        </button>
                        <p className="font-barlow text-lg">
                          {item.currency}{(item.price * item.quantity).toFixed(0)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Cart Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                  <h2 className="text-xl font-barlow mb-6">CART ({itemCount})</h2>
                  
                  {/* Summary Items */}
                  <div className="space-y-4 mb-6">
                    {items.map((item, index) => (
                      <div key={`summary-${item.id}-${item.size}-${item.color}-${index}`} className="flex gap-3">
                        <div className="relative w-12 h-16 flex-shrink-0">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-barlow text-sm">{item.collection}</h4>
                          <p className="text-xs text-gray-600">
                            {item.color && `${item.color} / `}{item.size}
                          </p>
                          <div className="flex justify-between items-center mt-1">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.size, item.color)}
                                className="w-6 h-6 flex items-center justify-center text-xs border border-gray-300"
                              >
                                -
                              </button>
                              <span className="text-sm">{item.quantity}</span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.size, item.color)}
                                className="w-6 h-6 flex items-center justify-center text-xs border border-gray-300"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => handleRemoveItem(item.id, item.size, item.color)}
                              className="text-xs text-gray-500 hover:text-black uppercase font-barlow"
                            >
                              REMOVE
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-barlow text-sm">£{(item.price * item.quantity).toFixed(0)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <h3 className="font-barlow text-lg mb-4">SUMMARY</h3>
                    
                    <div className="flex justify-between">
                      <span className="font-barlow">Sub Total</span>
                      <span className="font-barlow">£{totalPrice.toFixed(0)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="font-barlow">Estimated Shipping</span>
                      <span className="font-barlow">£{shippingCost}</span>
                    </div>
                    
                    <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
                      <span className="font-barlow">Total</span>
                      <span className="font-barlow">£{finalTotal.toFixed(0)}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full mt-6 py-4 bg-black text-white font-barlow uppercase tracking-wider hover:bg-gray-900 transition-colors disabled:opacity-50"
                  >
                    {isCheckingOut ? 'PROCESSING...' : 'CHECKOUT'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}