import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "OmGGiMi8JeEvLQgtw63tOazvDAIK1SR0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

export class LatestMovieReviewsContainer extends Component {
  state = { reviews: [] };
  componentDidMount = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(reviewData =>
        this.setState({ reviews: reviewData.results.slice(0, 10) })
      );
  };

  renderLatestReviews = () => {
    return this.state.reviews.map((review, idx) => (
      <MovieReviews review={review} key={idx} />
    ));
  };

  render() {
    return (
      <div className="latest-movie-reviews">
        <div className="ui four-wide column review-list">
          {this.renderLatestReviews()}
        </div>
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
