import WeatherIcon from "./WeatherIcon";
import { useContext } from "react";
import WeatherContext from "../context/weather.context";
const DailyForecastWidget = ({ data }) => {
  const {
    day,
    icon,
    summary,
    temperature_max,
    temperature_min,
    precipitation,
  } = data;


  const {units} = useContext(WeatherContext)

  //date format now
  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
 
  };

  //weather json data format
  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day)),
  };

  weather_date.day = weather_date.day === now_date.day ? "Today" : weather_date.day;

  return (
    <div className="widget">
      <div className="day">{weather_date.day}</div>
      <div className="time">{weather_date.time}</div>
      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <div className="temperature">
          <div className="temperature_max">
            {Math.round(temperature_max)} {units.temperature}
          </div>
          <div className="temperature_min">
            {Math.round(temperature_min)} {units.temperature}
          </div>
        </div>
      </div>
      <div className="precipitation">
        {Math.round(precipitation.total)} {units.precipitation}
      </div>
   
    </div>
  );
}

export default DailyForecastWidget
