import _ from "lodash";

export function Paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const newMoviesArray = _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
  //   console.log("newMoviesArray: ", newMoviesArray);
  return newMoviesArray;
}
