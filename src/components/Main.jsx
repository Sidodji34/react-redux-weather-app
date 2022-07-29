import { useState, useEffect } from "react";
import WeatherContext from "../context/ContextWeather";
import ForecastContext from '../context/ForecastContext';
import ListTownsContext from "../context/ContextListTowns";
import Input from "./Input";
import ListTown from "./ListTown";
import TabDetails from "./TabDetails";
import TabForecast from "./TabForecast";
import TabNow from "./TabNow";
import { responseWeather } from "../api";
import { getLastSession, getList } from "../storage";

function Main() {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [listTowns, setList] = useState(() => new Set());

  useEffect(() => {
    const town = getLastSession();
    responseWeather(town)
    .then(result => {
      setWeather(result[0])
      setForecast(result[1])
    });
  }, [])

  useEffect(() => {
    const list = JSON.parse(getList());
    setList(list)
  }, [])

  return (
    <div className="content">
      <WeatherContext.Provider value={{ weather, setWeather }}>
        <ForecastContext.Provider value={{ forecast, setForecast }}>
          <ListTownsContext.Provider value={{ listTowns, setList }}>
            <Input />
            <ListTown
              favoriteTown={listTowns}
              value={{ listTowns, setList, setForecast, setWeather }} />
            <div className="left_bar">
              <div className="tabs_body">

                <TabNow
                  value={{ setWeather, setList }}
                  cityName={weather.cityName}
                  icon={weather.icon}
                  degrees={weather.degrees} />

                <TabDetails
                  cityName={weather.cityName}
                  degrees={weather.degrees}
                  feelsLike={weather.feelsLike}
                  weatherName={weather.weatherName}
                  sunrise={weather.sunrise}
                  sunset={weather.sunset} />

                <TabForecast
                  cityName={weather.cityName}
                  forecast={forecast} />

              </div>
            </div>
          </ListTownsContext.Provider>
        </ForecastContext.Provider>
      </WeatherContext.Provider>
      <div className="tabs">
        <div className="tabs_items">
          <a href="#tab_now" className="tabs_item" id="now">Now</a>
          <a href="#tab_details" className="tabs_item" id="details">Details</a>
          <a href="#tab_forecast" className="tabs_item" id="forecast">Forecast</a>
        </div>
      </div>
    </div>
  );
};

export default Main;