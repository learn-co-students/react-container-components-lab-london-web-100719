import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    state = { reviews: [] };

    fetchMovieReviews = () => {
        fetch(URL)
        .then(res => res.json())
        .then(reviews => this.setState({ reviews: reviews.results }));
    };

    componentDidMount() {
        this.fetchMovieReviews();
    }

    render() {
        const { reviews } = this.state;
        return (
            <div className="latest-movie-reviews">
                {reviews ? <MovieReviews reviews={reviews} /> : "Loading Reviews"}
            </div>
        );
    }


}