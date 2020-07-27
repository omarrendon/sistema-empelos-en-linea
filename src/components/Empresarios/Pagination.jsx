import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate, nextPage, prevPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" onClick={() => prevPage()}>
              Anterior
            </a>
          </li>
          {pageNumbers.map(page => (
            <li className="page-itme" key={page}>
              <a onClick={() => paginate(page)} className="page-link" href="#">
                {page}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" onClick={() => nextPage()} href="#">
              Siguiente
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
