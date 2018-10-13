import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  let pages = _.range(1, pagesCount + 1);
  if (pagesCount === 1) return null;
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
