import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { count, pageSize, currentPage, onPageChange } = this.props;
    // console.log("current page: ", currentPage);
    const pagesCount = Math.ceil(count / pageSize);
    if (pagesCount === 1) return null;
    //console.log("PagesCount: ", pagesCount);
    const pages = _.range(1, pagesCount + 1);
    //console.log("pages: ", pages);

    return (
      <nav>
        <ul className="pagination">
          {pages.map(page => (
            <li
              key={page}
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
