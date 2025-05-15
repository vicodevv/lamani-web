"use client"

import { useState, useEffect, ReactNode } from 'react';
import MainMenu from '@/components/navigation/MainMenu';

interface MenuManagerProps {
  children: ReactNode;
}

const MenuManager = ({ children }: MenuManagerProps) => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Handle main menu toggle
  useEffect(() => {
    const handleMainMenuToggle = (e: CustomEvent) => {
      setIsMainMenuOpen(e.detail.isOpen);
      if (!e.detail.isOpen) {
        setActiveCategory(null);
      }
    };
    
    window.addEventListener('mainMenuToggle', handleMainMenuToggle as EventListener);
    return () => {
      window.removeEventListener('mainMenuToggle', handleMainMenuToggle as EventListener);
    };
  }, []);
  
  // Handle submenu toggle
  useEffect(() => {
    const handleSubmenuToggle = (e: CustomEvent) => {
      setActiveCategory(e.detail.isOpen ? e.detail.category : null);
    };
    
    window.addEventListener('submenuToggle', handleSubmenuToggle as EventListener);
    return () => {
      window.removeEventListener('submenuToggle', handleSubmenuToggle as EventListener);
    };
  }, []);

  return (
    <div className="relative">
      <div 
        id="content-wrapper"
        className="relative z-10"
      >
        {children}
      </div>
      
      {/* Main Menu with submenus */}
      <MainMenu 
        isOpen={isMainMenuOpen} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
};

export default MenuManager;