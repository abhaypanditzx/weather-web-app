import { useEffect, useState } from "react";

import ErrorPage from "./ErrorPage";
import ShowDataPage from "./ShowDataPage";

function App() {
  const [wind, setWind] = useState("");
  const [myLat, setMyLat] = useState("");
  const [myTemp, setMyTemp] = useState("");
  const [myLon, setMyLon] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [myHumidity, setMyHumidity] = useState("");
  const [myPressure, setMyPressure] = useState("");
  const [sky, setSky] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");


  const API_key = "7851ff08bc91848f850087dc175290a4";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${API_key}&units=metric`;

  const searchForData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    let currentYear = new Date().getFullYear();
    let currentDate = new Date().getDate();
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDay();

    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setMyLat(latitude);
        setMyLon(longitude);
        setWind(data.wind.speed);
        setMyTemp(data.main.temp);
        setFeelsLike(data.main.feels_like);
        setMyHumidity(data.main.humidity);
        setMyPressure(data.main.pressure);
        setYear(currentYear);
        setDay(dayNames[currentDay]);
        setDate(currentDate);
        setMonth(monthNames[currentMonth]);
        setSky(data.weather[0].main);
        setCountry(data.sys.country);
        setCity(data.name)
       
      });
    } else {
      console.log("Geolocation is not available");
    }
  };
  useEffect(() => {
    searchForData();
  });

  return (
    <>
      {myLat && myLon ? (
        <ShowDataPage
          wind={wind}
          year={year}
          myHumidity={myHumidity}
          myPressure={myPressure}
          country={country}
          myTemp={myTemp}
          feelsLike={feelsLike}
          day={day}
          date={date}
          city={city}
          month={month}
          sky={sky}
        />
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default App;
