"use client"

import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string | null;
  onSelectColor: (color: string) => void;
}

export default function ColorSelector({
  colors,
  selectedColor,
  onSelectColor
}: ColorSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const colorMap: Record<string, string> = {
    'Black': '#000000',
    'White': '#FFFFFF',
    'Grey': '#808080',
    'Blue': '#0000FF',
    'Navy': '#000080',
    'Green': '#008000',
    'Red': '#FF0000',
    'Brown': '#A52A2A',
    'Orange': '#FFA500',
    'Purple': '#800080',
    'Pink': '#FFC0CB',
    'Yellow': '#FFFF00',
  };

  const handleSelect = (color: string) => {
    onSelectColor(color);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black hover:border-gray-400 transition-colors cursor-pointer flex justify-between items-center"
      >
        <div className="flex items-center space-x-3">
          {selectedColor && (
            <div 
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: colorMap[selectedColor] || '#808080' }}
            />
          )}
          <span className={`font-barlow ${selectedColor ? 'text-black' : 'text-gray-500'}`}>
            {selectedColor || 'Select Color'}
          </span>
        </div>
        <ChevronDown 
          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 shadow-lg max-h-60 overflow-auto">
          {colors.map((color) => {
            const hexColor = colorMap[color] || '#808080';
            
            return (
              <button
                key={color}
                type="button"
                onClick={() => handleSelect(color)}
                className={`w-full px-4 py-3 text-left font-barlow hover:bg-gray-50 transition-colors cursor-pointer flex items-center space-x-3 ${
                  selectedColor === color ? 'bg-gray-100' : ''
                }`}
              >
                <div 
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: hexColor }}
                />
                <span>{color}</span>
                {selectedColor === color && (
                  <div className="ml-auto">
                    <div className="w-2 h-2 bg-black rounded-full" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}