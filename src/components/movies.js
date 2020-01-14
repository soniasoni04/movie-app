import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return (
      <main className="container m-3">
        <div>
          <p>Showing {this.state.movies.length} movies in the database.</p>
          {this.state.movies.length === 0 ? null : (
            <table className="table table-bordered table-striped">
              <thead>
                <tr key="head">
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map(movie => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    );
  }
}

export default Movies;
