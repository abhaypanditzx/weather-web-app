import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

function DatePlace() {

  const {
    year,
    day,
    date,
    month,
    city,
    country
  } = useContext(UserContext);
  return (
    <div className="flex self-start flex-col sm:ml-5 sm:mt-8 w-fit p-1 h-fit text-white">
      <div className="max-xs:text-sm sm:text-md  capitalize text-white">
        {`${day}, ${date} ${month} ${year}`}
      </div>
      <div className="max-xs:text-[13px] sm:text-sm capitalize text-gray-300">
        {city},<span className="p-1 text-gray-300">{country}</span>{" "}
      </div>
    </div>
  );
}

export default DatePlace;
