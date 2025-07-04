import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SectionPage from './pages/SectionPage';
import SearchModal from './components/SearchModal';
import FavoritesModal from './components/FavoritesModal';
import ShareModal from './components/ShareModal';
import { Favorite } from './types';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const handleToggleFavorite = (favorite: Favorite) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.path === favorite.path);
      if (exists) {
        return prev.filter(f => f.path !== favorite.path);
      }
      return [...prev, favorite];
    });
  };

  const handleRemoveFavorite = (id: string) => {
    setFavorites(prev => prev.filter(f => f.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar
          onSearchClick={() => setIsSearchOpen(true)}
          onFavoritesClick={() => setIsFavoritesOpen(true)}
          onShareClick={() => setIsShareOpen(true)}
        />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/:sectionId"
            element={
              <SectionPage
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            }
          />
        </Routes>

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
        
        <FavoritesModal
          isOpen={isFavoritesOpen}
          onClose={() => setIsFavoritesOpen(false)}
          favorites={favorites}
          onRemoveFavorite={handleRemoveFavorite}
        />
        
        <ShareModal
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          url={window.location.href}
          title="Manuel Numérique - TechCorp"
        />
      </div>
    </Router>
  );
}

export default App;
