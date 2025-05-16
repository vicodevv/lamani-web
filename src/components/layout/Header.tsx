"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import SearchOverlay from '@/components/SearchOverlay';

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toggle main menu function
  const toggleMenu = () => {
    if (isSearchOpen) return;
    
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    
    const event = new CustomEvent('mainMenuToggle', {
      detail: { isOpen: newState },
    });
    window.dispatchEvent(event);
  };

  // Toggle search overlay
  const toggleSearch = () => {
    const newState = !isSearchOpen;
    setIsSearchOpen(newState);
    
    if (newState && isMenuOpen) {
      setIsMenuOpen(false);
      const event = new CustomEvent('mainMenuToggle', {
        detail: { isOpen: false },
      });
      window.dispatchEvent(event);
    }
  };

  // Close search overlay
  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  // Animation for header
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(
      '.header',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.5 }
    );
  }, []);

  // Listen for menu state changes
  useEffect(() => {
    const handleMenuToggle = (e: CustomEvent) => {
      setIsMenuOpen(e.detail.isOpen);
    };
    
    window.addEventListener('mainMenuToggle', handleMenuToggle as EventListener);
    return () => {
      window.removeEventListener('mainMenuToggle', handleMenuToggle as EventListener);
    };
  }, []);

  // Determine text and icon color based on transparent prop
  const textColor = transparent && !isSearchOpen ? 'text-white' : 'text-black';
  const iconFilter = transparent && !isSearchOpen ? '' : 'invert';

  return (
    <>
      <header className={`header ${transparent ? 'absolute' : 'relative'} top-0 left-0 right-0 z-50 transition-colors duration-300 ${transparent && !isSearchOpen ? 'bg-transparent' : 'bg-white'}`}>
        <div className="mx-auto px-4 flex justify-between items-center h-16">
          {/* Left - Hamburger */}
          <div className="flex-1">
            <button 
              onClick={toggleMenu}
              className={`${textColor} hover:opacity-70 transition-opacity`}
              aria-label="Open menu"
            >
              <Image 
                src="/images/icons/menu-icon.svg" 
                alt="Open menu" 
                width={14} 
                height={18}
                className={iconFilter}
              />
            </button>
          </div>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/">
              <Image 
                src="/images/icons/lamani-icon.svg" 
                alt="Logo" 
                width={102} 
                height={18} 
                className={`h-10 ${iconFilter}`}
              />
            </Link>
          </div>

          {/* Right - Search, Account, Cart icons */}
          <div className="flex-1 flex justify-end space-x-6">
            <button 
              onClick={toggleSearch}
              className={`cursor-pointer ${textColor} hover:opacity-70 transition-opacity`}
              aria-label="Search"
            >
              <Image 
                src="/images/icons/search-icon.svg" 
                alt="Search" 
                width={14} 
                height={18}
                className={iconFilter}
              />
            </button>
            <Link href="/profile" className={`${textColor} hover:opacity-70 transition-opacity`}>
              <Image 
                src="/images/icons/profile-icon.svg" 
                alt="Profile" 
                width={14} 
                height={18}
                className={iconFilter}
              />
            </Link>
            <Link href="/cart" className={`${textColor} hover:opacity-70 transition-opacity`}>
              <Image 
                src="/images/icons/cart-icon.svg" 
                alt="Cart" 
                width={14} 
                height={18}
                className={iconFilter}
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={closeSearch} />
    </>
  );
};

export default Header;