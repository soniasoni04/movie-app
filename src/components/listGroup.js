import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    //console.log("genres: ", this.props.genres);
    const { selectedGenre, onGenresSelect } = this.props;

    return (
      <ul className="list-group">
        {this.props.genres.map(genre => (
          <li
            className={
              genre.name === selectedGenre.name
                ? "list-group-item active"
                : "list-group-item"
            }
            key={genre.name}
            onClick={() => onGenresSelect(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
