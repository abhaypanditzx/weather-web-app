import { useEffect, useState } from "react";
import mydata from "./Components";
import ErrorPage from "./pages/ErrorPage";
import ShowDataPage from "./pages/ShowDataPage";
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
  const [isData, setIsData]= useState(false);
 
  const updateTimeZone = () => {
    let currentYear = new Date().getFullYear();
    let currentDate = new Date().getDate();
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDay();
    setYear(currentYear);
    setDay(mydata.dayNames[currentDay]);
    setDate(currentDate);
    setMonth(mydata.monthNames[currentMonth]);
  };
  const updateLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setMyLat(latitude);
        setMyLon(longitude);
      });
    } else {
      console.log("Geolocation is not available");
    }
  };
  const searchForData = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const { wind, main, weather, sys, name } = await response.json();
        setWind(wind.speed);
        setMyTemp(main.temp);
        setFeelsLike(main.feels_like);
        setMyHumidity(main.humidity);
        setMyPressure(main.pressure);
        setSky(weather[0].main);
        setCountry(sys.country);
        setCity(name);
      } else {
        console.log("API request failed" + response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateTimeZone();
    updateLocation();
    const API_key = "7851ff08bc91848f850087dc175290a4";
    if (myLon && myLat) {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${API_key}&units=metric`;

      searchForData(url);
      setIsData(true)
    } else {
      console.log("Invalid latitude and longitude values.");
      setIsData(false);
    }
  }, [myLat, myLon]);

  return (
    <>
      { isData ? (
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

