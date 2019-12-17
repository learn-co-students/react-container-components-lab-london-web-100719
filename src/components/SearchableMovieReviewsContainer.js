import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";
import apiKey from "../helpers/apiKey";

// const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${apiKey}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  getMovies = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(resp => this.setState({ reviews: resp.results }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getMovies();
  };

  updateSearchTermInput = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Search for Reviews</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type search term"
            onChange={this.updateSearchTermInput}
            value={this.state.searchTerm}
          />
          <button>Search reviews</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
