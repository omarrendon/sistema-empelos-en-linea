import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul className="pagination justify-content-center">
          {pageNumbers.map(page => (
            <li className="page-itme" key={page}>
              <a onClick={() => paginate(page)} className="page-link" href="#">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
