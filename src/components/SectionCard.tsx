import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Section } from '../types';

interface SectionCardProps {
  section: Section;
}

const SectionCard: React.FC<SectionCardProps> = ({ section }) => {
  const Icon = Icons[section.icon as keyof typeof Icons] as React.FC<{ className?: string }>;

  return (
    <Link
      to={section.path}
      className="group relative bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
    >
      <div className={`inline-flex p-3 rounded-lg ${section.color} bg-opacity-10 mb-4`}>
        <Icon className={`h-6 w-6 ${section.color.replace('bg-', 'text-')}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {section.title}
      </h3>
      <p className="text-gray-600 mb-4">
        {section.description}
      </p>
      <div className="flex items-center text-blue-600 font-medium">
        <span>Explorer</span>
        <Icons.ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default SectionCard;
