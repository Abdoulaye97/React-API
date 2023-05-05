import React from "react";


function Pagination({ articlesPerPage, totalArticles, currentPage, setCurrentPage })
{
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
      pageNumbers.push(i);
    }

    const handleClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

  return (
      <div>
        {pageNumbers.map((pageNumber) => (
            <button
                key={pageNumber}
                onClick={() => handleClick(pageNumber)}
                disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </button>
        ))}
      </div>
  );
}
export  default Pagination;