import React from 'react';
// icon
import { WiHumidity } from "react-icons/wi";

function MainCard(props) {
    return (
      <div className="text-white min-w-[100px] md:min-w-[500px] md:w-[500px] md:mx-auto h-auto mt-5  md:h-[auto] p-5 rounded-xl shadow-2xl bg-[rgba(255,255,255,0.1)]  backdrop:blur-[10px] border-2 border-[rgba(255,255,255,0.25)] ">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl  font-semibold tracking-widest capitalize">
            {props.city}
          </h1>
          <p className="text-sm capitalize tracking-widest flex items-center">
            humidity: <WiHumidity />
            {props.humidity}%
          </p>
        </div>

        <div className="flex flex-col items-center mt-1">
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt=""
          />
          <span className="flex items-center text-sm tracking-wider capitalize">
            <p>{props.description}</p>
          </span>
          <h1 className=" text-4xl">{props.temp}&deg;C</h1>
        </div>

        <div className="flex justify-center tracking-wider py-[0.3em] px-[1em] text-center">
          <div className="py-[0.3em] px-[1em] border-r-2 border-r-[rgba(255,255,255,0.25)] ">
            <p>min</p>
            <p>{props.min}&deg;C</p>
          </div>
          <div className="py-[0.3em] px-[1em]">
            <p>max</p>
            <p>{props.max}&deg;C</p>
          </div>
        </div>
      </div>
    );
}

export default MainCard;
