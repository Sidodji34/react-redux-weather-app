import { useEffect } from "react";
import Input from "./Input";
import ListTown from "./ListTown";
import TabDetails from "./TabDetails";
import TabForecast from "./TabForecast";
import TabNow from "./TabNow";
import { responseWeather } from "../api";
import { getLastSession, getList } from "../storage";

function Main() {
  // useEffect(() => {
  //   const town = getLastSession();
  //   responseWeather(town)
  //   .then(result => {
  //     setWeather(result[0])
  //     setForecast(result[1])
  //   });
  // }, [])

  // useEffect(() => {
  //   const list = JSON.parse(getList());
  //   setList(list);
  // }, [])

  return (
  <div className="body_weather">
    <div className="content">
        <Input />
        <ListTown />
        <div className="left_bar">
          <div className="tabs_body">
            <TabNow />
            <TabDetails />
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
    </div>
    </div>
  );
};

export default Main;