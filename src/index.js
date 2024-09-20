import { createMoviesStorage } from "./storage";
import { MOVIES_STORAGE_KEY } from "./constants";
import { createMoviesModel } from "./model";
import { createMoviesView } from "./view";

const initMoviesList = [];
const model = createMoviesModel(initMoviesList);
const view = createMoviesView(".output-wrapper");
const storage = createMoviesStorage(MOVIES_STORAGE_KEY);

storage.read().then((movies) => {
  model.setMovies(movies);
  view.renderMovies(model.getMovies());
});

console.log(storage.read());
