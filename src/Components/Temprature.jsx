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
    <div className="w-full  sm:h-[150px] max-xs:h-[110px] sm:space-x-10 h-fit  p-4 my-4 flex backdrop-blur-lg bg-black/90 relative items-center  justify-normal text-white">
<div className="flex w-fit h-fit  absolute left-10 ">
<div className="max-xs:text-[2rem] lg:text-[3rem] capitalize  text-white">
          {myTemp + "°"}
        </div>
      <div className="text-sm  text-center flex  items-center space-x-1 relative left-10 w-auto text-gray-300 ">
      <img
        className="sm:w-[4rem] max-xs:w-[1.4rem] max-lg:w-[3rem]"
        src={weatherIcon}
        alt="Weather icon"
      />
      <p className=" max-xs:text-[13px] tracking-wider">{sky}</p>
    </div>
</div>
        {/* <div className="">AQI</div> */}
      

    </div>
  );
}

export default Temprature;
