import '../styles/components/Main.scss'
import { useContext } from 'react'
import  WeatherContext  from '../context/weather.context'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
// import { getDailyForecast, getHourlyForecast } from '../api' //this is 2 functions
import Loader from './Loader'


const Main = () => {

const { loading ,currentWeather,hourlyForecast,dailyForecast} = useContext(WeatherContext)

  return (
    <div className="Main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather data={currentWeather}/>
          {/*  if want to use function must call it within () parenthesis*/}
          <Forecast
            type="hourly"
            title="Hourly Forecast"
            data={hourlyForecast}
          />
          <Forecast
            type="daily"
            title="21 Daily Forecast"
            data={dailyForecast}
          />
        </>
      )}
    </div>
  );
}

export default Main
