import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export class SearchableMovieReviewsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: [],
			searchTerm: ''
		};
	}

	handleSubmit = (event) => {

		event.preventDefault()
		// console.log(this.state.searchTerm)
		fetch(URL + '&query=' + this.state.searchTerm)
			.then(res => res.json())
			.then(data => this.setState({
				reviews: data.results
			}))

	}

	handleChange = (event) => {

		this.setState({
			searchTerm: event.target.value
		})

	}
	
	render() {
		return (
			<div className='searchable-movie-reviews'>
				<form onSubmit={event => this.handleSubmit(event)}>
					<input
						type='text'
						value={this.state.searchTerm}
						onChange={event => this.handleChange(event)}
					/>
				</form>

				< MovieReviews reviews={this.state.reviews}/>

			</div>
		);
	}
}

export default SearchableMovieReviewsContainer;
