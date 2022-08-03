import { useSelector } from 'react-redux';

function TabDetails() {
  const weather = useSelector(state => state.weather);

  return (
    <div id="tab_details" className="tabs_block">
      <div className="name_town_details">{weather.cityName}</div>
      <ul className="info_town">
        <li className="degrees_details">Temperature: {weather.degrees}</li>
        <li className="feels_like">Feels like: {weather.feelsLike}</li>
        <li className="weather_details">Weather: {weather.weatherName}</li>
        <li className="sunrise_details">Sunrise: {weather.sunrise}</li>
        <li className="sunset_details">Sunset: {weather.sunset}</li>
      </ul>
    </div>
  );
}

export default TabDetails;