"use client"

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { CATEGORIES, SUBCATEGORIES, SUBCATEGORY_ROUTES } from '@/lib/constants';
import Image from 'next/image';

interface MainMenuProps {
  isOpen: boolean;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

const MainMenu = ({ isOpen, activeCategory, setActiveCategory }: MainMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
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
  
  // Close menu function
  const closeMenu = () => {
    // Dispatch custom event for MenuManager
    const event = new CustomEvent('mainMenuToggle', {
      detail: { isOpen: false },
    });
    window.dispatchEvent(event);
  };
  
  // Animation for main menu opening/closing
  useEffect(() => {
    if (!menuRef.current || !menuContentRef.current || !mainLinksRef.current || !footerRef.current) return;
    
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
        case CATEGORIES.UNISEX:
          activeRef = unisexItemsRef.current;
          break;
        case CATEGORIES.MEN:
          activeRef = menItemsRef.current;
          break;
        case CATEGORIES.WOMEN:
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
      className="fixed inset-y-0 left-0 w-[414px] z-20"
      style={{ display: 'none' }}
    >
      <div 
        ref={menuContentRef}
        className="glassmorphism h-full w-full"
      >
        {/* Close button at the top left corner */}
        <button 
          onClick={closeMenu}
          className="absolute top-8 left-8 z-30 text-white hover:opacity-70 transition-opacity"
          aria-label="Close menu"
        >
          <Image 
            src="/images/icons/close-icon.svg" 
            alt="Close menu" 
            width={14} 
            height={18}
          />
        </button>
        
        <div className="h-full px-8 py-28 flex flex-col justify-between">
          {/* Main Navigation Links */}
          <div ref={mainLinksRef} className="space-y-8">
            <div>
              <Link 
                href="/shop" 
                className="font-barlow font-barlow-regular text-base tracking-wide hover:opacity-70 transition-opacity"
                onClick={closeMenu}
              >
                SHOP
              </Link>
            </div>
            
            {/* Expandable Categories */}
            <div>
              <button 
                onClick={() => toggleCategory(CATEGORIES.UNISEX)}
                className="font-barlow font-barlow-regular cursor-pointer text-base tracking-wide hover:opacity-70 transition-opacity flex items-center"
              >
                <span>{CATEGORIES.UNISEX}</span>
                <span className="ml-2 font-barlow-medium">
                  {activeCategory === CATEGORIES.UNISEX ? "▲" : "▼"}
                </span>
              </button>
              
              {/* Unisex Submenu */}
              <div 
                ref={unisexItemsRef}
                className="flex-col space-y-4 mt-4 ml-4"
                style={{ display: 'none' }}
              >
                <Link 
                  href={SUBCATEGORY_ROUTES.UNISEX.TSHIRTS}
                  className="font-barlow text-sm font-barlow-regular hover:opacity-70 transition-opacity"
                  onClick={closeMenu}
                >
                  {SUBCATEGORIES.UNISEX.TSHIRTS}
                </Link>
                <Link 
                  href={SUBCATEGORY_ROUTES.UNISEX.SETS}
                  className="font-barlow text-sm font-barlow-regular hover:opacity-70 transition-opacity"
                  onClick={closeMenu}
                >
                  {SUBCATEGORIES.UNISEX.SETS}
                </Link>
                <Link 
                  href={SUBCATEGORY_ROUTES.UNISEX.HOODIES}
                  className="font-barlow text-sm font-barlow-regular hover:opacity-70 transition-opacity"
                  onClick={closeMenu}
                >
                  {SUBCATEGORIES.UNISEX.HOODIES}
                </Link>
              </div>
            </div>
            
            <div>
              <button 
                onClick={() => toggleCategory(CATEGORIES.MEN)}
                className="font-barlow font-barlow-regular cursor-pointer text-base tracking-wide hover:opacity-70 transition-opacity flex items-center"
              >
                <span>{CATEGORIES.MEN}</span>
                <span className="ml-2 font-barlow-medium">
                  {activeCategory === CATEGORIES.MEN ? "▲" : "▼"}
                </span>
              </button>
              
              {/* Men Submenu */}
              <div 
                ref={menItemsRef}
                className="flex-col space-y-4 mt-4 ml-4"
                style={{ display: 'none' }}
              >
                <Link 
                  href={SUBCATEGORY_ROUTES.MEN.ACTIVEWEAR}
                  className="font-barlow text-sm font-barlow-regular hover:opacity-70 transition-opacity"
                  onClick={closeMenu}
                >
                  {SUBCATEGORIES.MEN.ACTIVEWEAR}
                </Link>
                <Link 
                  href={SUBCATEGORY_ROUTES.MEN.SETS}
                  className="font-barlow text-sm font-barlow-regular hover:opacity-70 transition-opacity"
                  onClick={closeMenu}
                >
                  {SUBCATEGORIES.MEN.SETS}
                </Link>
              </div>
            </div>
            
            <div>
              <button 
                onClick={() => toggleCategory(CATEGORIES.WOMEN)}
                className="font-barlow font-barlow-regular cursor-pointer text-base tracking-wide hover:opacity-70 transition-opacity flex items-center"
              >
                <span>{CATEGORIES.WOMEN}</span>
                <span className="ml-2 font-barlow-medium">
                  {activeCategory === CATEGORIES.WOMEN ? "▲" : "▼"}
                </span>
              </button>
              
              {/* Women Submenu */}
              <div 
                ref={womenItemsRef}
                className="flex-col space-y-4 mt-4 ml-4"
                style={{ display: 'none' }}
              >
                <Link 
                  href={SUBCATEGORY_ROUTES.WOMEN.ACTIVEWEAR}
                  className="font-barlow text-sm font-barlow-regular hover:opacity-70 transition-opacity"
                  onClick={closeMenu}
                >
                  {SUBCATEGORIES.WOMEN.ACTIVEWEAR}
                </Link>
                <Link 
                  href={SUBCATEGORY_ROUTES.WOMEN.SETS}
                  className="font-barlow text-sm font-barlow-regular hover:opacity-70 transition-opacity"
                  onClick={closeMenu}
                >
                  {SUBCATEGORIES.WOMEN.SETS}
                </Link>
              </div>
            </div>
            
            <div>
              <Link 
                href="/lookbook" 
                className="font-barlow font-barlow-regular text-base tracking-wide hover:opacity-70 transition-opacity"
                onClick={closeMenu}
              >
                LOOKBOOK &rsquo;25
              </Link>
            </div>
          </div>
          
          {/* Footer Section */}
          <div ref={footerRef} className="mt-auto">
            {/* Shipping selector */}
            <div className="mb-6">
              <div className="font-barlow text-sm flex items-center">
                <span>Shipping To: US / $ USD</span>
                <span className="ml-2">▼</span>
              </div>
            </div>
            
            {/* Newsletter subscription */}
            <div className="mb-6 flex items-center border-b border-white/50 pb-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="font-barlow bg-transparent text-white placeholder-gray-300 mr-2 px-0 py-1 focus:outline-none w-full text-sm"
              />
              <button className="font-barlow cursor-pointer text-white hover:opacity-70 transition-opacity whitespace-nowrap text-sm">
                Subscribe
              </button>
            </div>
            
            {/* Social links */}
            <div className="flex flex-wrap gap-2 text-xs font-barlow">
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
    </div>
  );
};

export default MainMenu;