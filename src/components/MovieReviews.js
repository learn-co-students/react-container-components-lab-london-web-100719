import React from 'react';

const MovieReviews = (props) => {

	return (
		<ul className='review-list'>
			{props.reviews.map((review, index) => {

				return <li className='review' key={index}>
					<h3>{review.display_title}</h3>
					<p>{review.summary_short}</p>
					{/* {console.log(review)} */}
				</li>

			})}

		</ul>
	);
}

export default MovieReviews;
