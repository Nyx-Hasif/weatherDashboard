import { createContext, useState, useEffect } from "react";
import { DEFAULT_PLACE, MEASUREMENT_UNIT, UNITS } from "../utils";
import { getWeatherData } from "../api";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  //make loading effect
  const [loading, setLoading] = useState(true);

  // make current real-time from api
  const [currentWeather, setCurrentWeather] = useState({});

  // make hourly forecast from api
  const [hourlyForecast, setHourlyForecast] = useState([]);

  // make daily forecast from api
  const [dailyForecast, setDailyForecast] = useState([]);

  // make measurement system from api
  const [measurementSystem, setMeasurementSystem] = useState(
    MEASUREMENT_UNIT.AUTO
  );

  //make UNITS from api
  const [units, setUnits] = useState({});

  //to get api data should use useEffect
  useEffect(() => {
    const _getWeatherData = async () => {
      setLoading(true);

      const cw = await getWeatherData(
        "current",
        place.place_id,
        measurementSystem //default auto
      );
      // console.log(UNITS[(cw.units)])
      setUnits(UNITS[cw.units]);

      if (cw) {
        setCurrentWeather(cw.current);
      } else {
        console.error("tak dapat data api weather melalui integrasi api"); // to check whether the api has reach limit or not bcoz using free basic plan
      }

      const hf = await getWeatherData(
        "hourly",
        place.place_id,
        measurementSystem //default auto
      );

      if (hf) {
        setHourlyForecast(hf.hourly.data);
      } else {
        console.error("tak dapat data api weather melalui integrasi api"); // if this code shows up it means the api has reach limit in console
      }

      const df = await getWeatherData(
        "daily",
        place.place_id,
        measurementSystem //default auto
      );

      if (df) {
        setDailyForecast(df.daily.data);
      } else {
        console.error("tak dapat data api weather melalui integrasi api"); //go  make new acc to get new api
      }

      setLoading(false);
    };

    _getWeatherData();
  }, [place, measurementSystem]);

  return (
    <WeatherContext.Provider
      value={{
        place,
        setPlace,
        loading,
        currentWeather,
        hourlyForecast,
        dailyForecast,
        measurementSystem,
        setMeasurementSystem,
        units,

      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
export default WeatherContext;
