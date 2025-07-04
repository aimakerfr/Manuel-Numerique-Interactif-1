import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Star, StarOff } from 'lucide-react';
import Accordion from '../components/Accordion';
import Sidebar from '../components/Sidebar';
import Pagination from '../components/Pagination';
import { sections, sectionContent } from '../data/content';
import { Favorite } from '../types';

interface SectionPageProps {
  favorites: Favorite[];
  onToggleFavorite: (favorite: Favorite) => void;
}

const SectionPage: React.FC<SectionPageProps> = ({ favorites, onToggleFavorite }) => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const location = useLocation();
  const [activeSubSection, setActiveSubSection] = useState<string>('');

  const section = sections.find(s => s.id === sectionId);
  const content = sectionContent[sectionId || ''] || [];
  
  const currentIndex = sections.findIndex(s => s.id === sectionId);
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  const isFavorite = favorites.some(f => f.path === location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sectionId]);

  if (!section) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Section non trouvée</h1>
      </div>
    );
  }

  const handleToggleFavorite = () => {
    const favorite: Favorite = {
      id: `fav-${section.id}`,
      title: section.title,
      section: section.title,
      path: location.pathname,
      addedAt: new Date()
    };
    onToggleFavorite(favorite);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-bold text-gray-900">{section.title}</h1>
              <button
                onClick={handleToggleFavorite}
                className={`p-2 rounded-lg transition-colors ${
                  isFavorite
                    ? 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isFavorite ? <Star className="h-5 w-5 fill-current" /> : <StarOff className="h-5 w-5" />}
              </button>
            </div>
            <p className="text-lg text-gray-600">{section.description}</p>
          </div>

          <div className="mb-12">
            <Accordion items={content} />
          </div>

          <Pagination
            prevPath={prevSection ? `/${prevSection.id}` : '/'}
            prevLabel={prevSection ? prevSection.title : 'Accueil'}
            nextPath={nextSection ? `/${nextSection.id}` : undefined}
            nextLabel={nextSection?.title}
          />
        </div>

        <Sidebar items={content} activeId={activeSubSection} />
      </div>
    </div>
  );
};

export default SectionPage;
