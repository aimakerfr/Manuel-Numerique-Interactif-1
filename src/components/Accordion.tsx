import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SubSection } from '../types';

interface AccordionProps {
  items: SubSection[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
            {expandedItems.includes(item.id) ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {expandedItems.includes(item.id) && (
            <div className="px-6 py-4 border-t border-gray-200">
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
