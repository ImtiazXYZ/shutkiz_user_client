import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // Helper function to create an array of page numbers
  const pages = [...Array(totalPages).keys()].map(n => n + 1);
  const displayPages = [];

  pages.forEach((page, index) => {
    if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
      displayPages.push(page);
    } else if (displayPages[displayPages.length - 1] !== '...') {
      displayPages.push('...');
    }
  });

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      {/* Previous Button */}
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {displayPages.map((page, index) => (
        <button 
          key={index} 
          onClick={() => typeof page === 'number' && onPageChange(page)} 
          className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          disabled={page === '...'} // Disable clicking on ellipses
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
