
import React from 'react';

function Rating({ rating }) {
  const roundedRating = Math.round(rating);

  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < roundedRating ? 'star active' : 'star'}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
