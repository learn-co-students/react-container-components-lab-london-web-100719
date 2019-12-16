import React from 'react';

const MovieReviews = (props) => {
    return (
        // <p>{console.log(props.reviews)}</p>
        <div className = "review-list">
        {props.reviews.map(review => {
            return(
           <div className = "review"> 
           <p>Headline: {review.headline} </p>
           </div> 
            )
        })}
        </div>
    );
}

export default MovieReviews;
