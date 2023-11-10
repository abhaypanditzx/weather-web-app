import React from "react";

import humidityIcon from "../assets/humidity.png";
import feelsLikeIcon from "../assets/feelsLike.png";
import windIcon from "../assets/windIcon.png";
import pressureIcon from "../assets/pressure-.png";
function Display(props) {
  const { wind, myHumidity, myPressure, feelsLike } = props;
  return (
    <ul className="flex  min-h-full  min-w-full justify-center max-xs:mt-[-10px]  sm:justify-center items-center sm:space-x-10  max-sm:space-y-3 sm:space-y-0 sm:flex-row flex-col">
      <li className=" card-shadow items-center md:w-[200px]  max-xs:h-[70px] max-sm:w-[310px] max-xs:w-[290px]  rounded-xl   justify-around overflow-hidden  sm:rounded-xl min-h-[50px] sm:h-[150px] sm:w-[150px] backdrop-blur-xl max-sm:bg-[#213363] flex sm:flex-col flex-row">
        <div className="flex items-center  sm:w-full p-5  justify-center  space-x-3">
          <img
            className="sm:w-[25px] max-sm:w-6 max-xs:w-8"
            src={windIcon}
            alt={windIcon}
          />
          <div className="sm:text-[1rem] text-gray-300">{"wind"}</div>
        </div>
        <div className="sm:text-[1.5rem] md:text-[1.7rem]  max-xs:text-[22px]  text-gray-100">
          {wind + "km/h"}
        </div>
      </li>

      <li className=" card-shadow items-center md:w-[200px]  max-xs:h-[70px] max-sm:w-[310px] max-xs:w-[290px]  rounded-xl   justify-around overflow-hidden  sm:rounded-xl min-h-[50px] sm:h-[150px] sm:w-[150px] backdrop-blur-xl max-sm:bg-[#213363] flex sm:flex-col flex-row">
        <div className="flex items-center  sm:w-full p-5  justify-center  space-x-3">
          <img
            className="sm:w-[25px] max-sm:w-6 max-xs:w-8"
            src={feelsLikeIcon}
            alt={feelsLikeIcon}
          />
          <div className="sm:text-[1rem] text-gray-300">{"feels like"}</div>
        </div>
        <div className="sm:text-[1.5rem] md:text-[1.7rem]  max-xs:text-[22px]  text-gray-100">
          {feelsLike}
        </div>
      </li>

      <li className=" card-shadow items-center md:w-[200px]  max-xs:h-[70px] max-sm:w-[310px] max-xs:w-[290px]  rounded-xl   justify-around overflow-hidden  sm:rounded-xl min-h-[50px] sm:h-[150px] sm:w-[150px] backdrop-blur-xl max-sm:bg-[#213363] flex sm:flex-col flex-row">
        <div className="flex items-center  sm:w-full p-5  justify-center  space-x-3">
          <img
            className="sm:w-[25px] max-sm:w-6 max-xs:w-8"
            src={humidityIcon}
            alt={humidityIcon}
          />
          <div className="sm:text-[1rem] text-gray-300">{"humidity"}</div>
        </div>
        <div className="sm:text-[1.5rem] md:text-[1.7rem]  max-xs:text-[22px]  text-gray-100">
          {myHumidity + "%"}
        </div>
      </li>

      <li className=" card-shadow items-center md:w-[200px]  max-xs:h-[70px] max-sm:w-[310px] max-xs:w-[290px]  rounded-xl   justify-around overflow-hidden  sm:rounded-xl min-h-[50px] sm:h-[150px] sm:w-[150px] backdrop-blur-xl max-sm:bg-[#213363] flex sm:flex-col flex-row">
        <div className="flex items-center  sm:w-full p-5  justify-center  space-x-3">
          <img
            className="sm:w-[25px] max-sm:w-6 max-xs:w-8"
            src={pressureIcon}
            alt={pressureIcon}
          />
          <div className="sm:text-[1rem] text-gray-300">{"pressure"}</div>
        </div>
        <div className="sm:text-[1.5rem] md:text-[1.7rem]  max-xs:text-[22px]  text-gray-100">
          {myPressure + "mb"}
        </div>
      </li>
    </ul>
  );
}

export default Display;
