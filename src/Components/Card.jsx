import React from "react";

const Card = (props) => {
  const imageURl = `https://source.unsplash.com/400x400/?${props.title}`;
  return (
    <div className="card">
      <img src={imageURl} alt="Card" className="image" />
      <div className="description">{props.title}</div>
    </div>
  );
};
export default Card;
