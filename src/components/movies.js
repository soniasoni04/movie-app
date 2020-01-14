import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = id => {
    console.log("deleted :", id);
    const movies = this.state.movies.filter(movie => id !== movie._id);
    this.setState({ movies });
  };
  render() {
    const { movies } = this.state;
    return (
      <main className="container m-3">
        <div>
          <p>Showing {movies.length} movies in the database.</p>
          {movies.length === 0 ? null : (
            <table className="table table-bordered table-striped">
              <thead>
                <tr key="head">
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {movies.map(movie => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(movie._id)}
                    >
                      DELETE
                    </button>
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
