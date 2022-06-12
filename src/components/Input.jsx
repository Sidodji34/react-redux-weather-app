import { useState } from 'react';
import searchImg from '../images/search.svg';
//import WeatherContext from "../context";
import { responseWeather } from '../api';
//import {useContext} from 'react'

function Input() {
  const [value, setValue] = useState('');
  //const {weather, setWeather} = useContext(WeatherContext)
  console.log(value)

  function handleSubmit(e) {
    e.preventDefault();
    responseWeather(value)
  }

  return (
    <form className="input" action="#tab_now">
      <input
        className='search_town'
        type="text"
        placeholder="Enter a town..."
        onChange={(e) => setValue(e.target.value)}
        onSubmit={handleSubmit} />
      <button
        type="submit" className="button_search"
        style={{ backgroundImage: `url(${searchImg})` }}
        onClick={handleSubmit}></button>
    </form>
  )
}

export default Input;