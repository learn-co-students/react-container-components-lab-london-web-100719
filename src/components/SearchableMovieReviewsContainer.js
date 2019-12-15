import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

class SearchableMovieReviews extends Component {
  constructor(props) {
    super(props);
    this.searcher = React.createRef();
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  fetchReviews = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(json => this.setState({ reviews: json.results }))
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ searchTerm: this.searcher.current.value });
    this.fetchReviews();
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.searcher} />
        </form>
        <ul>
        <MovieReviews reviews={this.state.reviews}/>
        </ul>
      </React.Fragment>
    );
  }
}

export default SearchableMovieReviews;
