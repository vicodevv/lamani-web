/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import gsap from 'gsap';

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Toggle main menu function
  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    
    // Dispatch custom event for MenuManager
    const event = new CustomEvent('mainMenuToggle', {
      detail: { isOpen: newState },
    });
    window.dispatchEvent(event);
    
    // Reset submenu when closing
    if (!newState) {
      setActiveSubmenu(null);
    }
  };

  // Toggle submenu function
  const toggleSubmenu = (submenu: string) => {
    if (activeSubmenu === submenu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(submenu);
    }
    
    // Dispatch custom event for MenuManager
    const event = new CustomEvent('submenuToggle', {
      detail: { category: submenu, isOpen: activeSubmenu !== submenu },
    });
    window.dispatchEvent(event);
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

  return (
    <header className={`header fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${transparent ? 'bg-transparent' : 'bg-black'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Left - Hamburger or Close */}
        <div className="flex-1">
          <button 
            onClick={toggleMenu}
            className="text-white hover:opacity-70 transition-opacity"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <Image 
                src="/images/icons/close-icon.svg" 
                alt="Close menu" 
                width={14} 
                height={18}
              />
            ) : (
              <Image 
                src="/images/icons/menu-icon.svg" 
                alt="Open menu" 
                width={14} 
                height={18}
              />
            )}
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
              className="h-10"
            />
          </Link>
        </div>

        {/* Right - Search, Account, Cart icons */}
        <div className="flex-1 flex justify-end space-x-6">
          <button className="text-white hover:opacity-70 transition-opacity">
            <Image 
              src="/images/icons/search-icon.svg" 
              alt="Search" 
              width={14} 
              height={18}
            />
          </button>
          <Link href="/profile" className="text-white hover:opacity-70 transition-opacity">
            <Image 
              src="/images/icons/profile-icon.svg" 
              alt="Profile" 
              width={14} 
              height={18}
            />
          </Link>
          <Link href="/cart" className="text-white hover:opacity-70 transition-opacity">
            <Image 
              src="/images/icons/cart-icon.svg" 
              alt="Cart" 
              width={14} 
              height={18}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;