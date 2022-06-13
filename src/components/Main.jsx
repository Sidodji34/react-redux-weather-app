import { useState } from "react";
import WeatherContext from "../context";
import Input from "./Input";
import ListTown from "./ListTown";
import TabDetails from "./TabDetails";
import TabForecast from "./TabForecast";
import TabNow from "./TabNow";

function Main() {
  const [weather, setWeather] = useState({
    cityName: '',
    icon: null,
    degrees: '',
    feelsLike: '',
    weatherName: '',
    sunrise: '',
    sunset: '',
    });
  return (
    <div className="content">
      <WeatherContext.Provider value={{weather, setWeather}}>
      <Input />
      <ListTown />
      <div className="left_bar">
        <div className="tabs_body">

          <TabNow
           cityName={weather.cityName}
           icon={weather.icon}
           degrees={weather.degrees}/>

          <TabDetails 
          cityName={weather.cityName}
          degrees={weather.degrees}
          feelsLike={weather.feelsLike}
          weatherName={weather.weatherName}
          sunrise={weather.sunrise}
          sunset={weather.sunset}/>
          
          <TabForecast />
        </div>
      </div>
      <div className="tabs">
        <div className="tabs_items">
          <a href="#tab_now" className="tabs_item" id="now">Now</a>
          <a href="#tab_details" className="tabs_item" id="details">Details</a>
          <a href="#tab_forecast" className="tabs_item" id="forecast">Forecast</a>
        </div>
      </div>
      </WeatherContext.Provider>
    </div>
  );
};

export default Main;