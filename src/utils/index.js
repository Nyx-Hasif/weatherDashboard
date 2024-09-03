 const DEFAULT_PLACE = {
  name: "Kelantan",
  place_id: "kelantan",
  adm_area1: "Kelantan",
  adm_area2: null,
  country: "Malaysia",
  lat: "5.33333N",
  lon: "102.0E",
  timezone: "Asia/Kuala_Lumpur",
  type: "administrative_area",
};

export { DEFAULT_PLACE }

const MEASUREMENT_UNIT = {
  AUTO: "auto",
  METRIC: "metric",
  US: "us",
  UK: "uk",
  CA: "ca"
};

export {MEASUREMENT_UNIT}

 const UNITS = {
  metric: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "m/s",
    visibility: "km",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  us: {
    temperature: "°F",
    precipitation: "in/h",
    wind_speed: "mph",
    visibility: "mi",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  uk: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "mph",
    visibility: "mi",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  ca: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "km/h",
    visibility: "km",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
};

export {UNITS}