import React from 'react';
import { format } from 'date-fns';
import { useContext } from 'react';
import WeatherContext from './context'

export function FormatData(result) {

const {weather, setWeather} = useContext(WeatherContext)

    setWeather({
        cityName: result.name,
        icon: result.weather[0].icon,
        degrees: (Math.round(result.main.temp) - 273),
        feelsLike: (Math.round(result.main.feels_like) - 273),
        weather: result.weather[0].main,
        sunrise: format(new Date(result.sys.sunrise * 1000), 'HH:mm'),
        sunset: format(new Date(result.sys.sunset * 1000), 'HH:mm'),
    })
    //console.log(`ValidData ${validData.sunset} ${validData.sunrise}`);
}
