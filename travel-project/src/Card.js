import React from "react";

const Card = (props) => {
  const style = {
    width: "30%",
    height: "200px",
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "5px",
  };
  return (
    <div className="container">
      <div className="card-container">
        <div style={style}></div>
        <div className="content-container">
          <i className="fa-solid fa-location-dot"></i>
          <a href={props.Gmap}>{props.location}</a>
          <h2>{props.title}</h2>
          <h6>{props.date}</h6>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
