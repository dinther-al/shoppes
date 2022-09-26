import React, { useState } from "react";
import "../css/FormRating.css";
import RatingIcon from "../../assets/font/Star-large";

export default function FormRating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };

  const onMouseLeave = () => {
    setHoverRating(0);
  };

  const onSaveRating = (index) => {
    setRating(index);
  };

  return (
    <div className="FormRating">
      <div className="Rating-icons__wrap">
        {[1, 2, 3, 4, 5].map((index, key) => {
          return (
            <div key={key}>
              <RatingIcon
                key={key}
                index={index}
                rating={rating}
                hoverRating={hoverRating}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onSaveRating={onSaveRating}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
