import React from "react";
import airIcon from "./assets/icons8-cloud-100.png";
import img from "./assets/Premium_Vector___Glassmorphism_cool_weather-removebg-preview (1).png";
import windIcon from "./assets/icons8-air-100.png";
import feelsIcon from "./assets/icons8-partly-cloudy-day-100.png";
import humidityIcon from "./assets/icons8-humidity-100.png";
import pressureIcon from "./assets/icons8-atmospheric-pressure-100.png";
function ShowDataPage(props) {
  const {
    wind,
    year,
    myHumidity,
    myPressure,
    myTemp,
    feelsLike,
    day,
    date,
    month,
    city,
    country,
    sky,
  } = props;
  return (
    <div
      className={` from-[#030e20] bg-gradient-to-tr to-[#101d32] bg-cover bg-no-repeat flex flex-col items-center h-full w-full`}
    >
      <div className="flex flex-col p-5 w-full h-fit text-white">
        <div className="text-lg capitalize text-white">{`${day}, ${date} ${month} ${year}`}</div>
        <div className="text-sm capitalize text-gray-300">
          {city} ,<span className="p-1 text-gray-300">{country}</span>{" "}
        </div>
      </div>
      <div className="w-full h-fit flex relative items-center space-x-[3rem] max-lg:space-x-2 p-5 justify-center text-white">
        <img className="w-[11rem] max-lg:w-[7rem]" src={img} />
        <div>
          <div className="text-[5rem] max-lg:text-[3rem] capitalize w-[10rem]  text-white">
            {myTemp + "°"}
          </div>
          <div className="text-sm capitalize  text-center   w-[10rem]  text-gray-300 -mt-3 -ml-[1rem]">
            {sky}
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[30rem] max-[426px]:w-[19rem] max-md:top-[4rem] max-lg:w-[30rem] max-[321px]:w-[19rem]  max-sm:w-[100%] flex relative max-[321px]:top-8  max-lg:top-[2rem] top-[-2rem] flex-col items-center  rounded-md ">
        <ul className="text-white w-full  h-full justify-around items-center max-lg:flex-col text-sm  flex  max-[426px]:flex-col flex-row   ">
          <li className="w-[15rem] max-[480px]:w-[24rem] h-[15rem] max-[426px]:w-[19rem] max-lg:w-[30rem] relative rounded-full max-[769px]:relative overflow-hidden flex-col max-[769px]:flex-row  max-[321px]:w-[18rem] max-[769px]:h-[6rem]  bg-[#213363] max-[769px]:rounded-[25px] justify-around items-center flex space-x-0 max-[769px]:space-x-2">
            <div className="flex items-center absolute top-5 max-sm:relative max-lg:top-0 max-lg:relative p-2 h-fit max-[769px]:h-full  space-x-2">
              <img className="max-[426px]:h-[2.3rem] h-[2rem]" src={windIcon} />
              <div className="text-[1rem]"> wind </div>
            </div>
            <span className="absolute max-md:relative max-md:top-0 max-md:left-0 max-md:translate-y-0 max-lg:top-0 max-lg:left-0  max-lg:translate-y-0 max-lg:translate-x-0  max-md:translate-x-0 top-[50%] max-sm:left-0 max-sm:top-0 left-[50%] translate-y-[-50%] max-sm:translate-x-0 max-sm:translate-y-0 translate-x-[-50%] text-[2.5rem] max-lg:relative max-sm:text-[1.6rem]">
              {wind + "km/h"}
            </span>
          </li>

          <li className="w-[15rem] max-[480px]:w-[24rem] h-[15rem] max-[426px]:w-[19rem] max-lg:w-[30rem] relative rounded-full max-[769px]:relative overflow-hidden flex-col max-[769px]:flex-row  max-[321px]:w-[18rem] max-[769px]:h-[6rem]  bg-[#213363] max-[769px]:rounded-[25px] justify-around items-center flex space-x-0 max-[769px]:space-x-2">
            <div className="flex items-center absolute top-5 max-sm:relative max-lg:top-0 max-lg:relative p-2 h-fit max-[769px]:h-full  space-x-2">
              <img
                className="max-[426px]:h-[2.3rem] h-[2rem]"
                src={feelsIcon}
              />
              <div className="text-[1rem]"> feels like </div>
            </div>
            <span className="absolute max-md:relative max-md:top-0 max-md:left-0 max-md:translate-y-0 max-lg:top-0 max-lg:left-0  max-lg:translate-y-0 max-lg:translate-x-0  max-md:translate-x-0 top-[50%] max-sm:left-0 max-sm:top-0 left-[50%] translate-y-[-50%] max-sm:translate-x-0 max-sm:translate-y-0 translate-x-[-50%] text-[2.5rem] max-lg:relative max-sm:text-[1.6rem]">
              {feelsLike}
            </span>
          </li>

          <li className="w-[15rem] max-[480px]:w-[24rem] h-[15rem] max-[426px]:w-[19rem] max-lg:w-[30rem] relative rounded-full max-[769px]:relative overflow-hidden flex-col max-[769px]:flex-row  max-[321px]:w-[18rem] max-[769px]:h-[6rem]  bg-[#213363] max-[769px]:rounded-[25px] justify-around items-center flex space-x-0 max-[769px]:space-x-2">
            <div className="flex items-center absolute top-5 max-sm:relative max-lg:top-0 max-lg:relative p-2 h-fit max-[769px]:h-full  space-x-2">
              <img
                className="max-[426px]:h-[2.3rem] h-[2rem]"
                src={humidityIcon}
              />
              <div className="text-[1rem]">humidity</div>
            </div>
            <span className="absolute max-md:relative max-md:top-0 max-md:left-0 max-md:translate-y-0 max-lg:top-0 max-lg:left-0  max-lg:translate-y-0 max-lg:translate-x-0  max-md:translate-x-0 top-[50%] max-sm:left-0 max-sm:top-0 left-[50%] translate-y-[-50%] max-sm:translate-x-0 max-sm:translate-y-0 translate-x-[-50%] text-[2.5rem] max-lg:relative max-sm:text-[1.6rem]">
              {myHumidity + "%"}
            </span>
          </li>

          <li className="w-[15rem] max-[480px]:w-[24rem] h-[15rem] max-[426px]:w-[19rem] max-lg:w-[30rem] relative rounded-full max-[769px]:relative overflow-hidden flex-col max-[769px]:flex-row  max-[321px]:w-[18rem] max-[769px]:h-[6rem]  bg-[#213363] max-[769px]:rounded-[25px] justify-around items-center flex space-x-0 max-[769px]:space-x-2">
            <div className="flex items-center absolute top-5 max-sm:relative max-lg:top-0 max-lg:relative p-2 h-fit max-[769px]:h-full  space-x-2">
              <img
                className="max-[426px]:h-[2.3rem] h-[2rem]"
                src={pressureIcon}
              />
              <div className="text-[1rem]">pressure</div>
            </div>
            <span className="absolute max-md:relative max-md:top-0 max-md:left-0 max-md:translate-y-0 max-lg:top-0 max-lg:left-0  max-lg:translate-y-0 max-lg:translate-x-0  max-md:translate-x-0 top-[50%] max-sm:left-0 max-sm:top-0 left-[50%] translate-y-[-50%] max-sm:translate-x-0 max-sm:translate-y-0 translate-x-[-50%] text-[2.5rem] max-lg:relative max-sm:text-[1.6rem]">
              {myPressure + "mb"}
            </span>
          </li>
        </ul>
      </div>
      <div className="h-[10rem] bg-gradient-to-b  from-[#99999900] to-black   w-full"></div>
    </div>
  );
}

export default ShowDataPage;
