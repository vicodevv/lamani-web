"use client"

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
  // Map of common color names to hex values
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

  return (
    <div className="flex space-x-2">
      {colors.map(color => {
        const hexColor = colorMap[color] || '#808080';
        
        return (
          <button
            key={color}
            onClick={() => onSelectColor(color)}
            className={`w-8 h-8 rounded-full border border-gray-300 ${
              selectedColor === color ? 'ring-1 ring-black' : ''
            }`}
            style={{ backgroundColor: hexColor }}
            aria-label={`Select ${color} color`}
          >
            {selectedColor === color && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="h-5 w-5 bg-transparent border-2 border-white rounded-full"></span>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}