import { formatData, formatForecast } from "./FormatData";

const URL = {
  apiKey: '35cb3bc18d86d923883a89ca2a503caf',
  server: 'http://api.openweathermap.org/data/2.5/weather',
  forecast: 'https://api.openweathermap.org/data/2.5/onecall',
  lat: '',
  lon: '',
}

export async function responseWeather(cityName) {
  try {
    const url = `${URL.server}?q=${cityName}&appid=${URL.apiKey}`;
    const response = await fetch(url);
    const result = await response.json()
    URL.lat = result.coord.lat
    URL.lon = result.coord.lon
    console.log(result)
    console.log(`URL: ${URL.lat} ${URL.lon}`);
    responseForecast(URL.lat, URL.lon)
    const validData = formatData(result)
   return validData;
  } catch (error) {
    console.log(error);
  }
}

export async function responseForecast(lat, lon) {
  try {
    const url = `${URL.forecast}?lat=${URL.lat}&lon=${URL.lon}&exclude={hourly}&appid=${URL.apiKey}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result)
    const validForecast = formatForecast(result)
  } catch (error) {
    console.log(error);
  };
}
