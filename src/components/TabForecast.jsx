import { useSelector } from 'react-redux';

function TabForecast() {
  const cityName = useSelector(state => state.weather.cityName);
  const forecast = useSelector(state => state.weather.forecast);

  return (
    <div id="tab_forecast" className="tabs_block">
      <div className="name_town_forecast">{cityName}</div>
      <div className="forecast_list">
        { forecast ? forecast.map((items, index) => {
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
          : <div></div>
        }
      </div>
    </div>
  )
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