import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import list from "./List";
const Review = () => {
  const [index, setindex] = useState(0);
  const { name, job, image, text } = list[index];

  const checknumber = (number) => {
    if (number > list.length - 1) {
      return 0;
    }
    if (number < 0) {
      return list.length - 1;
    }
    return number;
  };

  const nextPr = () => {
    setindex((index) => {
      let newindex = index + 1;
      return checknumber(newindex);
    });
  };

  const RandomPro = () => {
    let randomNumbers = Math.floor(Math.random() * list.length);
    if (randomNumbers === index) {
      randomNumbers = index + 1;
    }
    setindex(checknumber(randomNumbers));
  };

  const PrePr = () => {
    setindex((index) => {
      let newindex = index - 1;
      return checknumber(newindex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={nextPr}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={PrePr}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={RandomPro}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
