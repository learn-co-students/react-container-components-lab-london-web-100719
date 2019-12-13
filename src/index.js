import React from "react";
import ReactDOM from "react-dom";

import LatestMovieReviewsContainer from "./components/LatestMovieReviewsContainer";
import SearchableMovieReviewsContainer from "./components/SearchableMovieReviewsContainer";

ReactDOM.render(
  <div className="ui grid container app">
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById("root")
);
