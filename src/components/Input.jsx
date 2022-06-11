import { useState, useContext } from 'react';
import searchImg from '../images/search.svg';
import WeatherContext from "../context";

const URL = {
    apiKey: '35cb3bc18d86d923883a89ca2a503caf',
    server: 'http://api.openweathermap.org/data/2.5/weather',
}

function Input() {
    const [value, setValue] = useState('');
    const {weather, setWeather} = useContext(WeatherContext)
    console.log(value)

    function handleSubmit(e) {
        e.preventDefault();
        responseWeather(value)
    }

    async function responseWeather(cityName) {
        try {
          const url = `${URL.server}?q=${cityName}&appid=${URL.apiKey}`;
          const response = await fetch(url);
          const result =  await response.json()
           setWeather({
            cityName: result.name,
            icon: result.weather[0].icon,
            degrees: (Math.round(result.main.temp) - 273),
            feelsLike: result.main.feels_like,
            weather: result.weather[0].main,
            sunrise: result.sys.sunrise,
            sunset: result.sys.sunset,
        });
        console.log(weather)
          console.log(result)
        } catch (error) {
          console.log(error);
        }
      }
    
    return(
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