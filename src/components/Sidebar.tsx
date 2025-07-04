import React from 'react';
import { SubSection } from '../types';

interface SidebarProps {
  items: SubSection[];
  activeId?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ items, activeId }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-20 bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Sur cette page</h3>
        <nav className="space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                activeId === item.id
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
