import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";
import apiKey from "../helpers/apiKey";

// const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${apiKey}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  };

  getMovies = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(resp => this.setState({ reviews: resp.results }));
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
