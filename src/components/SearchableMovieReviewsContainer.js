import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

export class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const query = this.state.searchTerm;
    console.log(query);
    fetch(URL + `&query=${query}`)
      .then(resp => resp.json())
      .then(reviews => this.setState({ reviews: reviews.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            onChange={event =>
              this.setState({ searchTerm: event.target.value })
            }
          />
        </form>
        <div className="latest-movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
    
        </div>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
