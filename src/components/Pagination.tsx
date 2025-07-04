import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PaginationProps {
  prevPath?: string;
  prevLabel?: string;
  nextPath?: string;
  nextLabel?: string;
}

const Pagination: React.FC<PaginationProps> = ({ prevPath, prevLabel, nextPath, nextLabel }) => {
  return (
    <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
      {prevPath ? (
        <Link
          to={prevPath}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span className="font-medium">{prevLabel}</span>
        </Link>
      ) : (
        <div />
      )}
      
      {nextPath ? (
        <Link
          to={nextPath}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <span className="font-medium">{nextLabel}</span>
          <ChevronRight className="h-5 w-5 ml-1" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Pagination;
