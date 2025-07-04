import React from 'react';
import { X, Star, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Favorite } from '../types';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Favorite[];
  onRemoveFavorite: (id: string) => void;
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({ isOpen, onClose, favorites, onRemoveFavorite }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg max-w-2xl w-full shadow-xl">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center">
              <Star className="h-6 w-6 text-yellow-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Mes Favoris</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          <div className="p-6">
            {favorites.length > 0 ? (
              <div className="space-y-3">
                {favorites.map((favorite) => (
                  <div
                    key={favorite.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <Link
                      to={favorite.path}
                      onClick={onClose}
                      className="flex-1"
                    >
                      <h4 className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                        {favorite.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{favorite.section}</p>
                    </Link>
                    <button
                      onClick={() => onRemoveFavorite(favorite.id)}
                      className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Star className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">Aucun favori pour le moment</p>
                <p className="text-sm text-gray-400 mt-1">
                  Cliquez sur l'étoile sur une page pour l'ajouter aux favoris
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;
