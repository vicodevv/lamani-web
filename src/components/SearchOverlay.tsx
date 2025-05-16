"use client"

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import gsap from 'gsap';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Animation for search overlay
  useEffect(() => {
    if (!overlayRef.current || !searchBarRef.current) return;
    
    if (isOpen) {
      // Show overlay
      gsap.set(overlayRef.current, { 
        display: 'block',
        opacity: 0
      });
      
      gsap.to(overlayRef.current, { 
        opacity: 1, 
        duration: 0.3,
        ease: 'power2.out'
      });
      
      // Animate search bar
      gsap.fromTo(
        searchBarRef.current,
        { y: -20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.4, 
          delay: 0.1,
          ease: 'power2.out',
          onComplete: () => {
            // Focus input after animation completes
            if (searchInputRef.current) {
              searchInputRef.current.focus();
            }
          }
        }
      );
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Hide overlay
      const tl = gsap.timeline({
        onComplete: () => {
          if (overlayRef.current) {
            gsap.set(overlayRef.current, { display: 'none' });
          }
          // Reset scroll
          document.body.style.overflow = '';
          // Reset search query
          setSearchQuery('');
        }
      });
      
      tl.to(searchBarRef.current, { 
        y: -10, 
        opacity: 0, 
        duration: 0.2,
        ease: 'power2.in' 
      });
      
      tl.to(overlayRef.current, { 
        opacity: 0, 
        duration: 0.2,
        ease: 'power2.in'
      }, "-=0.1");
    }
  }, [isOpen]);

  // Handle search submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onClose();
      // Navigate to search results page
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Handle escape key to close
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-40 glassmorphism"
      style={{ display: 'none' }}
      onClick={onClose} // Close when clicking background
    >
      <div 
        ref={searchBarRef}
        className="border-b border-white/20"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Title */}
            <div className="text-white font-barlow tracking-wide text-base uppercase">
              SEARCH FOR
            </div>
            
            {/* Close button */}
            <button 
              onClick={onClose}
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="Close search"
            >
              <Image 
                src="/images/icons/close-icon.svg" 
                alt="Close search" 
                width={14} 
                height={18}
              />
            </button>
          </div>
        </div>
      </div>
      
      {/* Search input */}
      <div className="mx-auto px-4 pt-8">
        <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="SEARCH FOR"
            className="w-full bg-transparent border-none outline-none text-white text-sm font-barlow placeholder-gray-500 focus:ring-0"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchOverlay;