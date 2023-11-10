import React from "react";

function DatePlace(props) {

  const {
    year,
    day,
    date,
    month,
    city,
    country
  } = props;
  return (
    <div className="flex self-start flex-col sm:ml-3 sm:mt-3 w-fit p-1 h-fit text-white">
      <div className="text-lg capitalize text-white">
        {`${day}, ${date} ${month} ${year}`}
      </div>
      <div className="text-sm capitalize text-gray-300">
        {city},<span className="p-1 text-gray-300">{country}</span>{" "}
      </div>
    </div>
  );
}

export default DatePlace;
