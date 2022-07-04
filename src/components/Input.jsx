import { useState, useContext, useEffect } from 'react';
import searchImg from '../images/search.svg';
import WeatherContext from "../context";
import ForecastContext from '../forecastContext';
import { responseWeather } from '../api';

function Input() {
  const [value, setValue] = useState('');
  const { weather, setWeather } = useContext(WeatherContext);
  const { forecast, setForecast } = useContext(ForecastContext);

  function HandleSubmit(e) {
    e.preventDefault();
    responseWeather(value)
    .then(result => {
      setWeather(result[0])
      setForecast(result[1])
    });
    setValue('');
  }

  return (
    <form className="input" action="#tab_now">
      <input
        className='search_town'
        type="text"
        placeholder="Enter a town..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={HandleSubmit} />
      <button
        type="submit" className="button_search"
        style={{ backgroundImage: `url(${searchImg})` }}
        onClick={HandleSubmit}></button>
    </form>
  )
}

export default Input;