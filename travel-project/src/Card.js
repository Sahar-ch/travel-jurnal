import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.image}></img>
      </div>
      <div className="content-container">
        <i className="fa-solid fa-location-dot"></i>
        <a href={props.Gmap}>{props.location}</a>
        <h1>{props.title}</h1>
        <h6>{props.date}</h6>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
