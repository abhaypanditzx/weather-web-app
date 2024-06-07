import { createContext, useState } from "react";
const UserContext = createContext();

export const ContextProvider = ({ children }) => {
    //  states
    const [myLon, setMyLon] = useState("");
    const [myLat, setMyLat] = useState("");
    const [wind, setWind] = useState("");
    const [myTemp, setMyTemp] = useState("");
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
    const [isData, setIsData] = useState(false);

    return (
        <UserContext.Provider 
        value={{ myLat, myLon, isData, wind, year, myHumidity,
         myPressure, country, myTemp, feelsLike, day, date, city,
          month, sky, setYear, setDay, setDate, setMonth, setSky ,
          setMyHumidity,setMyPressure,setCountry,setCity,
          setIsData,setFeelsLike,setMyLat,setMyLon,setWind,setMyTemp}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContext;