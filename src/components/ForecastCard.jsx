import React from "react";

function ForecastCard(props) {
  return (
    <div className="flex justify-around text-center items-center">
      <div className="mx-5">
        <p>{props.description}</p>
        <img className="mx-auto" src={props.icon} alt="icon" />
        <p>{props.temp}&deg;C</p>
        <h1>{props.date}</h1>
      </div>
    </div>
  );
}

export default ForecastCard;
