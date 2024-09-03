import "../styles/components/Forecast.scss";
import HourlyForecastWidget from "./HourlyForecastWidget";
import DailyForecastWidget from "./DailyForecastWidget";
import HorizontallyScrollable from "./HorizontallyScrollable";

const Forecast = ({ title, type, data }) => {

  return (
    <div className="Forecast">
      <div className="forecast-container">
        <h3>{title}</h3>
        <HorizontallyScrollable className="widget-container" > 
          {data.map((singelData) => (
            <div key={singelData.date || singelData.day}>
              {type === "hourly" ? (
                <HourlyForecastWidget data={singelData}/>
              ) : (
                <DailyForecastWidget data={singelData}/>
              )}
            </div>
          ))}
        </HorizontallyScrollable>
      </div>
    </div>
  );
};

export default Forecast;
