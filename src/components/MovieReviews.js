import React from 'react';

const MovieReview = props => {
  return (
    <ul className="review-list">
      {props.reviews.map(review => <li className="review">{review.headline}</li>)}
    </ul>
  )
}
 
export default MovieReview;

