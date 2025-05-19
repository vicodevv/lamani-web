"use client"

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const previousPathRef = useRef(pathname);

  useEffect(() => {
    // Skip animation on initial render
    if (previousPathRef.current === pathname) return;
    
    // Update previous path
    previousPathRef.current = pathname;
    
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    if (!overlay || !logo) return;

    // Check if menu is open
    const isMenuOpen = document.body.classList.contains('menu-open');

    // If menu is open, wait for it to close before starting transition
    if (isMenuOpen) {
      document.body.classList.remove('menu-open');
      // Give time for menu closing animation to complete
      setTimeout(() => {
        startTransition(overlay, logo);
      }, 300);
    } else {
      startTransition(overlay, logo);
    }
  }, [pathname]);

  const startTransition = (overlay: HTMLDivElement, logo: HTMLDivElement) => {
    setIsTransitioning(true);
    
    // Create timeline for page transition
    const tl = gsap.timeline({
      onComplete: () => setIsTransitioning(false)
    });

    // Animate overlay to cover the screen
    tl.fromTo(
      overlay,
      { y: '100%' },
      { y: '0%', duration: 0.5, ease: 'power3.inOut' }
    );

    // Fade in the logo
    tl.fromTo(
      logo,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' },
      "-=0.2" // Start slightly before the overlay finishes
    );

    // Fade out the logo
    tl.to(
      logo,
      { opacity: 0, scale: 1.2, duration: 0.3, ease: 'power2.in' },
      "+=0.2" // Short pause before logo fades out
    );

    // Animate overlay to slide up and reveal the new page
    tl.fromTo(
      overlay,
      { y: '0%' },
      { y: '-100%', duration: 0.5, ease: 'power3.inOut' },
      "-=0.1" // Slight overlap with logo fade out
    );
  };

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-[999] transform translate-y-full flex items-center justify-center"
        style={{ pointerEvents: isTransitioning ? 'auto' : 'none' }}
      >
        <div ref={logoRef} className="opacity-0">
          <div className="flex flex-col items-center">
            <Image
              src="/images/icons/lamani-icon.svg"
              alt="LAMANI"
              width={126}
              height={87}
              className="mb-2"
            />
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default PageTransition;