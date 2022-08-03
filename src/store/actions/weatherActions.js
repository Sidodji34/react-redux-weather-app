const WEATHER = {
  ADD_WEATHER_INFO: 'ADD_WEATHER_INFO',
  ADD_FORECAST_INFO: 'ADD_FORECAST_INFO',
};

export function addWeatherInfo(payload) {
  return {
    type: WEATHER.ADD_WEATHER_INFO,
    payload
  }
}

export function addForecastInfo(payload) {
  return {
    type: WEATHER.ADD_FORECAST_INFO,
    payload
  }
}