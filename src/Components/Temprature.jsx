import React, { useEffect, useState } from "react";
import stromIcon from "../assets/storm.png";
import mistIcon from "../assets/mist.png";
import rainIcon from "../assets/rain.png";
import defaultIcon from "../assets/default.png";
function Temprature(props) {
  const { myTemp, sky, img } = props;
  const [weatherIcon, setWeatherIcon] = useState(img);
  const handelOnChangeIcon = () => {
    if (sky === "Thunderstorm") {
      setWeatherIcon(stromIcon);
    } else if (sky === "Mist") {
      setWeatherIcon(mistIcon);
    } else if (sky === "Rain") {
      setWeatherIcon(rainIcon);
    } else {
      setWeatherIcon(defaultIcon);
    }
  };
  useEffect(() => {
    handelOnChangeIcon();
  });
  return (
    <div className="w-full sm-[150px] max-xs:h-[110px] sm:space-x-10 h-fit py-2 my-4 flex backdrop-blur-lg bg-black/50 relative items-center  justify-center text-white">
<div className="max-xs:text-[1.5rem] lg:text-[2.8rem] capitalize  text-white">
          {myTemp + "°"}
        </div>
      <div className="text-sm capitalize text-center flex  items-center space-x-2 w-auto text-gray-300 ">
      <img
        className="sm:w-[4rem] max-xs:w-[1.4rem] max-lg:w-[3rem]"
        src={weatherIcon}
        alt="Weather icon"
      />
      <p className=" max-xs:text-[13px] tracking-wider">{sky}</p>
    </div>
        {/* <div className="">AQI</div> */}
      

    </div>
  );
}

export default Temprature;
