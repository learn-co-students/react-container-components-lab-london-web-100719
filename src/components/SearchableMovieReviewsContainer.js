import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {reviews: [], searchTerm: ""};

    fetchSearchReviews = () => {
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(res => res.json())
        .then(reviews => this.setState({reviews: reviews.results }))
    };

    render() {
        const { reviews, searchTerm } = this.state;
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    this.fetchSearchReviews();
                }}
                >
                    <input value={searchTerm}
                    onChange={e => {
                        this.setState({searchTerm: e.target.value});
                    }}
                    ></input>
                </form>
                <div className="latest-movie-reviews">
                    {reviews ? <MovieReviews reviews={reviews} /> : "Loading Reviews"}
                </div>
            </div>
        )
    }
}