import { useState, useContext } from 'react';
import searchImg from '../images/search.svg';
import WeatherContext from '../context/ContextWeather';
import ForecastContext from '../context/ForecastContext';
import { responseWeather } from '../api';
import { saveLastSession } from '../storage';

function Input() {
  const [value, setValue] = useState('');
  const { setWeather } = useContext(WeatherContext);
  const { setForecast } = useContext(ForecastContext);

  function HandleSubmit(e) {
    e.preventDefault();
    saveLastSession(value);
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