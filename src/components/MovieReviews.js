import React from "react";

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map((review, index) => (
        <div key={index} className="review">
          <header>
            <a className="review-link" href={review.url}>
              {review.headline}
            </a>
            <br />
            <span className="author">{review.byline}</span>
          </header>
          <blockquote>{review.summary_short}</blockquote>
        </div>
      ))}
    </div>
  );
};

export default MovieReviews;
