import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "OmGGiMi8JeEvLQgtw63tOazvDAIK1SR0";
const BASE_URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}&query=`;

export class SearchableMovieReviewsContainer extends Component {
  state = { searchTerm: "", reviews: [] };

  handleSearchInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(resp => resp.json())
      .then(reviewData => this.setState({ reviews: reviewData.results }));
  };

  renderSearchedReviews = () => {
    return this.state.reviews.map((review, idx) => (
      <MovieReviews review={review} key={idx} />
    ));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <div className="ui four-wide column review-list">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search-input">Search Movie Reviews</label>
            <input
              id="search-input"
              type="text"
              className="ui input"
              onChange={this.handleSearchInputChange}
            />
            <button type="submit" className="ui button">
              Submit
            </button>
          </form>
          {this.state.reviews !== null &&
            this.state.reviews.length > 0 &&
            this.renderSearchedReviews()}
        </div>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
