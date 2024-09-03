// import currentWeather from "./current-weather.json";
// import hourlyForecast from "./hourly-forecast.json";
// import dailyForecast from "./daily-forecast.json";

// const getCurrentWeather = () => {
//   return currentWeather.current;
// };

// const getHourlyForecast = () => {
//   return hourlyForecast.hourly.data;
// };

// const getDailyForecast = () => {
//   return dailyForecast.daily.data;
// };

// export { getCurrentWeather, getHourlyForecast, getDailyForecast };
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

const getWeatherData = async (endpoint, place_id, measurementSystem) => {
  const options = {
    method: "GET",
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id,
      language: "en",
      units: measurementSystem,
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getWeatherData };

const SearchPlaces = async (text) => {
  // this is asyn fucntion in arrow method

  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
    params: {
      text,
      language: "en",
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { SearchPlaces };

//if error accurs it will show error on console..thats mean api is expired go make new acc and dont forget to subscribe first before u copy n paste :)
//it wont work if u not subs first :')
//only can call 20 times api :'D for basic plans huhu
