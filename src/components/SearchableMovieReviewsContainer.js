import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "TZAkRaf2GL2l7YsGOAwtZV2TyQ7EFtJu";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  render() {
    return (
      <div className="searchable-movie-reviews">
        Placeholder for latest movie reviews
      </div>
    );
  }
}
