import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "TZAkRaf2GL2l7YsGOAwtZV2TyQ7EFtJu";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  handleSearchInputChange = event =>
    this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search movie reviews:</label>
          <input id="search-input" type="text" onChange={this.handleSearchInputChange} />
          <button type="submit">Submit</button>
        </form>
        <br/>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}