import React from "react";
import "../styles/Recherche.css"

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
          <div>
              {pageNumbers.slice(0,8).map((pageNumber) => (
                  <button
                      key={pageNumber}
                      onClick={() => handleClick(pageNumber)}
                      disabled={pageNumber === currentPage}
                  className="bouton-pagi">
                      {pageNumber}
                  </button>
              ))}
          </div>
      </div>
  );
}
export  default Pagination;