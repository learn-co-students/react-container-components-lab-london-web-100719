import React from "react";

const MovieReviews = props => {
  const handleImg = () => {
    return (
      !!props.review.multimedia && (
        <img src={props.review.multimedia.src} alt="" />
      )
    );
  };

  return (
    <div className="ui card review">
      {handleImg()}
      <h3>{props.review.display_title}</h3>
      <p>{props.review.summary_short}</p>
    </div>
  );
};

export default MovieReviews;
