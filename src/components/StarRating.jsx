import { assets } from "../assets/assets.js";
import React from "react";

const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            key={index}
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="star"
            className=" inline h-4.5 w-4.5"
          />
        ))}
    </>
  );
};

export default StarRating;
