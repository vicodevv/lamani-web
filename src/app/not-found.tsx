"use client"

import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import Header from '@/components/layout/Header';

export default function NotFound() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    // Animate content
    tl.fromTo(
      '.not-found-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3 }
    );
    
    // Animate links with stagger
    tl.fromTo(
      '.link-item',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
      "-=0.4"
    );
  }, []);

  return (
    <>
      <Header transparent={false} />
      
      <main className="min-h-screen bg-white text-black flex items-center justify-center pt-16">
        <div className="max-w-md mx-auto px-4 py-16 text-center not-found-content">
          <h1 className="text-7xl font-barlow mb-4">404</h1>
          <h2 className="text-2xl font-barlow mb-8">PAGE NOT FOUND</h2>
          
          <p className="text-base font-barlow mb-12">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <div className="space-y-4">
            <div className="link-item">
              <Link 
                href="/"
                className="inline-block px-8 py-3 bg-black text-white font-barlow uppercase tracking-wide hover:bg-gray-900 transition-colors w-full"
              >
                Go to Homepage
              </Link>
            </div>
            
            <div className="link-item">
              <Link 
                href="/shop"
                className="inline-block px-8 py-3 border border-black text-black font-barlow uppercase tracking-wide hover:bg-black hover:text-white transition-colors w-full"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}