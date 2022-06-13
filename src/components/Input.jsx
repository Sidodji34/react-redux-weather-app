import { useState } from 'react';
import searchImg from '../images/search.svg';
import WeatherContext from "../context";
import { responseWeather } from '../api';
import {useContext} from 'react'

function Input() {
  const [value, setValue] = useState('');
  const {weather, setWeather} = useContext(WeatherContext);
  const [forecast, setForecast] = useState([{}]);
  console.log(value)

  function HandleSubmit(e) {
    e.preventDefault();
  const result = responseWeather(value)
    result.then(data => setWeather({...data}))
    console.log(weather.weatherName)
  }

  return (
    <form className="input" action="#tab_now">
      <input
        className='search_town'
        type="text"
        placeholder="Enter a town..."
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