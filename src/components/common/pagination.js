import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  // state = {  }
  render() {
    const { count, pageSize } = this.props;
    const pagesCount = Math.ceil(count / pageSize);
    console.log("PagesCount: ", pagesCount);
    const pages = _.range(1, pagesCount + 1);
    console.log("pages: ", pages);
    return (
      <nav>
        <ul className="pagination">
          {pages.map(page => (
            <li key={page} className="page-item">
              <a className="page-link">{page}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
