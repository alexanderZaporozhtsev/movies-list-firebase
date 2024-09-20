export function createMoviesView(selector) {
  const node = document.querySelector(selector);

  return {
    node,

    renderMovies: function ({ moviesIDs, movieByID }) {
      moviesIDs.forEach((id) => {
        this.addMovie(movieByID[id]);
      });
    },

    addMovie: function (movie) {
      const div = document.createElement("div");
      div.setAttribute("class", "output");

      const divInner = document.createElement("div");
      divInner.setAttribute("class", "output-elements");

      const input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("class", "checkbox");

      const p = document.createElement("p");
      p.setAttribute("class", "movie-to-watch");
      p.innerText = movie.title;

      const button = document.createElement("button");
      button.setAttribute("class", "btn-del");

      divInner.append(input, p, button);
      div.append(divInner);
      this.node.append(div);
    },
  };
}
