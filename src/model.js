import { v4 as uuidv4 } from "uuid";

export function createMoviesModel(moviesList) {
  return {
    moviesIDs: [],
    movieByID: [],

    setMovies: function (movies) {
      // later try to remove this
      this.moviesIDs = [];
      this.movieByID = {};

      movies.forEach((movie) => {
        this.moviesIDs.push(movie.id);
        this.movieByID[movie.id] = movie;
      });
      //
    },

    getMovies: function () {
      return {
        movieByID: this.movieByID,
        moviesIDs: this.moviesIDs,
      };
    },
  };
}
