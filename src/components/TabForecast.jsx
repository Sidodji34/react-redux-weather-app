function TabForecast(props) {
  console.log(props)
  if (!props.forecast) {
    return
  } else {
  const forecast = props.forecast;
 const forecastItems = forecast.map((items, index) => {
    return (
    <HourlyForecast
      key={index}
      date={items.date}
      degrees={items.degrees}
      feelsLike={items.feelsLike}
      time={items.time}
      weatherName={items.weatherName}
      icon={items.icon} />
  )
})
  return (
    <div id="tab_forecast" className="tabs_block">
      <div className="name_town_forecast">{props.cityName}</div>
      <div className="forecast_list">
             {forecastItems}
      </div>
    </div>
  )
  }
}

function HourlyForecast(props) {
  return (
    <div className="forecast_box">
      <ul className="info__forecast_left">
        <li className="info__date">{props.date}</li>
        <li className="degrees_details">Temperature: {props.degrees}</li>
        <li className="feels_like">Feels Like: {props.feelsLike}</li>
      </ul>
      <ul className="info__forecast_right">
        <li className="info__time">{props.time}</li>
        <li className="info__weather">{props.weatherName}</li>
        <li className="icon__weather" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${props.icon}.png)` }}></li>
      </ul>
    </div>)
}

export default TabForecast;