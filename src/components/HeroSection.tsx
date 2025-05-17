"use client"

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Initial animations
  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const imageContainer = imageContainerRef.current;
    
    if (!section || !text || !imageContainer) return;
    
    // Timeline for initial animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    // Animate the image first (fade in)
    tl.fromTo(
      imageContainer,
      { opacity: 0 },
      { opacity: 1, duration: 1.2 }
    );
    
    // Then animate the text (fade in and slight upward movement)
    tl.fromTo(
      text,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5" // Start slightly before the previous animation finishes
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Hero Image Container */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 z-0"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/hero-image-2.jpg"
            alt="LAMANI Collection"
            fill
            className="object-cover"
            priority={true}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;