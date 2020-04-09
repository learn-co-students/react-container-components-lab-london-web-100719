import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "TZAkRaf2GL2l7YsGOAwtZV2TyQ7EFtJu";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>Latest movie reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}