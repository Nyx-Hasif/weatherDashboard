// import { getCurrentWeather } from "../api";
import WeatherIcon from "./WeatherIcon";
import WeatherContext from "../context/weather.context";
import '../styles/components/CurrentWeather.scss';
import { useContext } from "react";


const CurrentWeather = ({data}) => {
  // const data = getCurrentWeather();

const {units} = useContext(WeatherContext)

  //destructuring data
  const {
    cloud_cover,
    feels_like,
    humidity,
    icon_num,
    precipitation,
    summary,
    temperature,
    uv_index,
    visibility,
    wind,
  } = data;

  //object in array
   const otherInfofWidgets = [
    {   
        id:0,
        icon:'droplet',
        title:'Precipitation',
        name:'Precipitation',
        value: Math.round(precipitation.total),
        unit: units.precipitation,

    },
    {   
        id:1,
        icon:'wind',
        title:'Wind',
        name:'Wind',
        value: Math.round(wind.speed),
        unit: units.wind_speed,

    },
    {   
        id:2,
        icon:'moisture',
        title:'Humidityd',
        name:'Humidity',
        value: Math.round(humidity),
        unit: units.humidity,

    },
    {   
        id:3,
        icon:'sunglasses',
        title:'UV index',
        name:'UV index',
        value: Math.round(uv_index),
        unit: units.uv_index,

    },
    {id:4,
        icon:'clouds-fill',
        title:'Clouds cover',
        name:'Clouds cover',
        value: Math.round(cloud_cover),
        unit: units.cloud_cover,

    },
    {   
        id:5,
        icon:'eye',
        title:'Visibility',
        name :'Visibility',
        value: Math.round(visibility),
        unit: units.visibility,

    }
    
   ]


  return (
    <div className="CurrentWeather">
      <div className="temperature">
        <div className="weather-icon">
          <WeatherIcon iconNumber={icon_num} summary={summary} />
        </div>
        <div className="value">
          <div className="real">
            {temperature} {units.temperature}
          </div>
          <div className="feels like">
            feel likes {feels_like} {units.temperature}
          </div>
        </div>
        <div className="summary">{summary}</div>
      </div>
      <div className="other-infos">
        {otherInfofWidgets.map(({ icon, id, title, name, value, unit }) => {
          return (
            <div className="widget" key={id}>
              <div className="widget-container">
                <div className="info">
                  <div className="icon">
                    <i className={`bi bi-${icon}`}></i>
                  </div>
                  <div className="value">
                    {value} {unit}
                  </div>
                </div>
                <div className="name">{name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentWeather;
