import Input from './Input';
import ListTown from './ListTown';
import TabDetails from './TabDetails';
import TabForecast from './TabForecast';
import TabNow from './TabNow';
import { Link, Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <div className="body_weather">
      <div className="content">
        <Input />
        <ListTown />
        <div className="left_bar">
          <div className="tabs_body">
            <Routes>
              <Route path="/" element={<TabNow />} />
              <Route path="tab_now" element={<TabNow />} />
              <Route path="tab_details" element={<TabDetails />} />
              <Route path="tab_forecast" element={<TabForecast />} />
            </Routes>
          </div>
        </div>
        <div className="tabs">
          <div className="tabs_items">
            <Link to="/tab_now" className="tabs_item" id="now">Now</Link>
            <Link to="/tab_details" className="tabs_item" id="details">Details</Link>
            <Link to="/tab_forecast" className="tabs_item" id="forecast">Forecast</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;