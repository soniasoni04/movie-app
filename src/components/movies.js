import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import LikedMovie from "./likeMovie";
import Pagination from "./common/pagination";
import { Paginate } from "./common/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 3,
    currentPage: 1
  };

  handleDelete = id => {
    console.log("deleted :", id);
    const movies = this.state.movies.filter(movie => id !== movie._id);
    this.setState({ movies });
  };

  handleLike = likedMovie => {
    const newMovies = this.state.movies.map(movie => {
      if (movie._id === likedMovie._id) movie.like = !movie.like;
      return movie;
    });
    //console.log("updated movies list : ", newMovies);
    this.setState({
      movies: newMovies
    });
  };

  handlePageChange = page => {
    //console.log("page:", page);
    this.setState({ currentPage: page });
  };

  render() {
    const { movies, pageSize, currentPage } = this.state;
    if (movies.length === 0)
      return <p> "there are no movie in the database"</p>;
    const newMoviesList = Paginate(movies, currentPage, pageSize);
    // console.log("newmovies list : ", newMoviesList);
    return (
      <main className="container m-3">
        <div>
          <p>Showing {newMoviesList.length} movies in the database.</p>
          <table className="table table-bordered table-striped">
            <thead>
              <tr key="head">
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {newMoviesList.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <LikedMovie
                      movie={movie}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(movie._id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          count={movies.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </main>
    );
  }
}

export default Movies;
