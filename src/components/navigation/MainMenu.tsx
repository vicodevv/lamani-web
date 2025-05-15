"use client"

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

interface MainMenuProps {
  isOpen: boolean;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

const MainMenu = ({ isOpen, activeCategory, setActiveCategory }: MainMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const mainLinksRef = useRef<HTMLDivElement>(null);
  const unisexItemsRef = useRef<HTMLDivElement>(null);
  const menItemsRef = useRef<HTMLDivElement>(null);
  const womenItemsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  
  // Toggle submenu function
  const toggleCategory = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };
  
  // Animation for main menu opening/closing
  useEffect(() => {
    if (!menuRef.current || !mainLinksRef.current || !footerRef.current) return;
    
    if (isOpen) {
      // Show menu
      gsap.set(menuRef.current, { 
        display: 'block', 
        x: '-100%',
        autoAlpha: 1
      });
      
      gsap.to(menuRef.current, { 
        x: '0%', 
        duration: 0.3,
        ease: 'power2.out'
      });
      
      // Animate main links
      gsap.fromTo(
        mainLinksRef.current.children,
        { x: -10, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05, duration: 0.3, delay: 0.1 }
      );
      
      // Animate footer
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, delay: 0.3 }
      );
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Hide menu
      const tl = gsap.timeline({
        onComplete: () => {
          if (menuRef.current) {
            gsap.set(menuRef.current, { display: 'none' });
          }
          // Reset body scroll
          document.body.style.overflow = '';
        }
      });
      
      tl.to(menuRef.current, { x: '-100%', duration: 0.3, ease: 'power2.in' });
    }
  }, [isOpen]);
  
  // Animation for submenu items
  useEffect(() => {
    if (!unisexItemsRef.current || !menItemsRef.current || !womenItemsRef.current) return;
    
    // Hide all submenus first
    gsap.set([unisexItemsRef.current, menItemsRef.current, womenItemsRef.current], { 
      display: 'none', 
      opacity: 0 
    });
    
    // Show active submenu
    if (activeCategory) {
      let activeRef = null;
      
      switch (activeCategory) {
        case 'unisex':
          activeRef = unisexItemsRef.current;
          break;
        case 'men':
          activeRef = menItemsRef.current;
          break;
        case 'women':
          activeRef = womenItemsRef.current;
          break;
      }
      
      if (activeRef) {
        gsap.set(activeRef, { display: 'flex', opacity: 0 });
        gsap.fromTo(
          activeRef.children,
          { x: -5, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.05, duration: 0.2 }
        );
        gsap.to(activeRef, { opacity: 1, duration: 0.2 });
      }
    }
  }, [activeCategory]);

  return (
    <div 
      ref={menuRef}
      className="fixed inset-y-0 left-0 w-80 bg-black text-white z-20"
      style={{ display: 'none' }}
    >
      <div className="h-full px-8 py-28 flex flex-col justify-between">
        {/* Main Navigation Links */}
        <div ref={mainLinksRef} className="space-y-8">
          <div>
            <Link href="/shop" className="text-base tracking-wide font-light hover:opacity-70 transition-opacity">
              SHOP
            </Link>
          </div>
          
          {/* Expandable Categories */}
          <div>
            <button 
              onClick={() => toggleCategory('unisex')}
              className="text-base tracking-wide font-light hover:opacity-70 transition-opacity flex items-center"
            >
              <span>UNISEX</span>
              <span className="ml-2">
                {activeCategory === 'unisex' ? "▲" : "▼"}
              </span>
            </button>
            
            {/* Unisex Submenu */}
            <div 
              ref={unisexItemsRef}
              className="flex-col space-y-4 mt-4 ml-4"
              style={{ display: 'none' }}
            >
              <Link href="/unisex/tshirts" className="text-sm font-light hover:opacity-70 transition-opacity">
                Tshirts
              </Link>
              <Link href="/unisex/sets" className="text-sm font-light hover:opacity-70 transition-opacity">
                Sets
              </Link>
              <Link href="/unisex/hoodies" className="text-sm font-light hover:opacity-70 transition-opacity">
                Hoodies
              </Link>
            </div>
          </div>
          
          <div>
            <button 
              onClick={() => toggleCategory('men')}
              className="text-base tracking-wide font-light hover:opacity-70 transition-opacity flex items-center"
            >
              <span>MEN</span>
              <span className="ml-2">
                {activeCategory === 'men' ? "▲" : "▼"}
              </span>
            </button>
            
            {/* Men Submenu */}
            <div 
              ref={menItemsRef}
              className="flex-col space-y-4 mt-4 ml-4"
              style={{ display: 'none' }}
            >
              <Link href="/men/2-piece-sets" className="text-sm font-light hover:opacity-70 transition-opacity">
                2-Piece Sets
              </Link>
              <Link href="/men/active-wear" className="text-sm font-light hover:opacity-70 transition-opacity">
                Active wear
              </Link>
            </div>
          </div>
          
          <div>
            <button 
              onClick={() => toggleCategory('women')}
              className="text-base tracking-wide font-light hover:opacity-70 transition-opacity flex items-center"
            >
              <span>WOMEN</span>
              <span className="ml-2">
                {activeCategory === 'women' ? "▲" : "▼"}
              </span>
            </button>
            
            {/* Women Submenu */}
            <div 
              ref={womenItemsRef}
              className="flex-col space-y-4 mt-4 ml-4"
              style={{ display: 'none' }}
            >
              <Link href="/women/2-piece-sets" className="text-sm font-light hover:opacity-70 transition-opacity">
                2-Piece Sets
              </Link>
              <Link href="/women/active-wear" className="text-sm font-light hover:opacity-70 transition-opacity">
                Active wear
              </Link>
            </div>
          </div>
          
          <div>
            <Link href="/lookbook" className="text-base tracking-wide font-light hover:opacity-70 transition-opacity">
              LOOKBOOK &rsquo;25
            </Link>
          </div>
        </div>
        
        {/* Footer Section */}
        <div ref={footerRef} className="mt-auto">
          {/* Shipping selector */}
          <div className="mb-6">
            <div className="text-sm flex items-center">
              <span>Shipping To: US / $ USD</span>
              <span className="ml-2">▼</span>
            </div>
          </div>
          
          {/* Newsletter subscription */}
          <div className="mb-6 flex items-center border-b border-white pb-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent text-white placeholder-gray-400 mr-2 px-0 py-1 focus:outline-none w-full text-sm"
            />
            <button className="text-white hover:opacity-70 transition-opacity whitespace-nowrap text-sm">
              Subscribe
            </button>
          </div>
          
          {/* Social links */}
          <div className="flex flex-wrap gap-2 text-xs">
            <Link href="/client-services" className="hover:opacity-70 transition-opacity">
              Client Services
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:opacity-70 transition-opacity">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="https://tiktok.com" className="hover:opacity-70 transition-opacity">
              TikTok
            </Link>
            <span>•</span>
            <Link href="https://facebook.com" className="hover:opacity-70 transition-opacity">
              Facebook
            </Link>
            <span>•</span>
            <Link href="https://instagram.com" className="hover:opacity-70 transition-opacity">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;