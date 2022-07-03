import { formatData, formatForecast } from "./formatData";

const URL = {
  apiKey: '35cb3bc18d86d923883a89ca2a503caf',
  server: 'http://api.openweathermap.org/data/2.5/weather',
  forecast: 'https://api.openweathermap.org/data/2.5/onecall',
  lat: '',
  lon: '',
}

export async function responseWeather(cityName) {
  try {
    const url = `${URL.server}?q=${cityName}&appid=${URL.apiKey}&units=metric`;
    const response = await fetch(url)
    const result = await response.json()
    const validWeather = formatData(result)
    const validForecast = responseForecast(result.coord.lat, result.coord.lon)
    validForecast.then(data => validWeather.forecast = data)
    return validWeather
  } catch (error) {
    console.log(error);
  } 
}

export async function responseForecast(lat, lon) {
  try {
    const url = `${URL.forecast}?lat=${lat}&lon=${lon}&exclude={hourly}&appid=${URL.apiKey}`;
    const response = await fetch(url);
    const result = await response.json();
    const validForecast = formatForecast(result);
    return validForecast
  } catch (error) {
    console.log(error);
  }
}
