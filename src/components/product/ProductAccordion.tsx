"use client"

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ProductAccordionProps {
  title: string;
  content: string;
}

export default function ProductAccordion({ title, content }: ProductAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-200">
      <button
        className="w-full py-4 flex justify-between items-center font-barlow text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown 
          className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="font-barlow text-sm">{content}</p>
      </div>
    </div>
  );
}