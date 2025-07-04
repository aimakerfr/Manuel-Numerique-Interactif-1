import React from 'react';
import Hero from '../components/Hero';
import SectionCard from '../components/SectionCard';
import { sections } from '../data/content';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Besoin d'aide supplémentaire ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Notre équipe RH est disponible pour répondre à toutes vos questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rh@techcorp.com"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contacter les RH
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                01 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
