function TabDetails(props) {
  return (
    <div id="tab_details" className="tabs_block">
      <div className="name_town_details">{props.cityName}</div>
      <ul className="info_town">
        <li className="degrees_details">Temperature: {props.degrees}</li>
        <li className="feels_like">Feels like: {props.feelsLike}</li>
        <li className="weather_details">Weather: {props.weatherName}</li>
        <li className="sunrise_details">Sunrise: {props.sunrise}</li>
        <li className="sunset_details">Sunset: {props.sunset}</li>
      </ul>
    </div>
  );
}

export default TabDetails;