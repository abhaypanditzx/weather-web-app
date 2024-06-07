import React, { useContext, useEffect, useState } from "react";
import stromIcon from "../assets/storm.png";
import mistIcon from "../assets/mist.png";
import rainIcon from "../assets/rain.png";
import defaultIcon from "../assets/default.png";
import UserContext from "../utils/UserContext";
function Temprature(props) {
  const { myTemp, sky, img } =  useContext(UserContext);
;
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
    <div className="w-full  sm:h-[150px] max-xs:h-[110px] max-xs:mt-[40px] sm:mt-[-10px] sm:space-x-10 h-fit  p-4 my-4 flex bg-black/0 relative items-center  justify-center text-white">
      <img
        className="sm:w-[180px] max-xs:w-[120px]  max-lg:w-[6rem]"
        src={weatherIcon}
        alt="Weather icon"
      />
      <div className="flex w-fit h-fit jusitfy-center items-start flex-col  ">
        <div className="max-xs:text-[40px] max-lg:text-[3rem] sm:text-[50px] capitalize  text-white">
          {myTemp + "°"}
        </div>

        <p className="sm:text-sm max-xs:text-[15px] ml-1   text-gray-300 ">
          {sky}
        </p>
      </div>
    </div>
  );
}

export default Temprature;
