import React from "react";

const MovieReviews = props => {
  const displayReviews = () => {
    return props.reviews.map(review => {
      return (
        <div className="review">
          <h1>{review.display_title}</h1>
          <p>{review.summary_short}</p>
        </div>
      );
    });
  };

  return <div className="review-list">{displayReviews()}</div>;
};

export default MovieReviews;
