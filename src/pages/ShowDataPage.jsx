import React from "react";
import DatePlace from "../Components/DatePlace";
import Display from "../Components/DisplayCards";
import Temprature from "../Components/Temprature";
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
    <div className="from-[#030e20]  bg-gradient-to-tr to-[#101d32] bg-cover bg-no-repeat flex flex-col items-center h-screen w-full">
      <DatePlace 
      day={day} 
      date={date} 
      month={month} 
      city={city}
      country={country}
      year={year} />
      <Temprature myTemp={myTemp} sky={sky} />
      <div className="w-full z-10 h-full   ">
        <Display
          wind={wind}
          myHumidity={myHumidity}
          myPressure={myPressure}
          feelsLike={feelsLike}
        />
      </div>
      <div className="h-[10rem]  z-0 absolute bottom-0 bg-gradient-to-b from-[#99999900] to-black w-full"></div>
    </div>
  );
}

export default ShowDataPage;
