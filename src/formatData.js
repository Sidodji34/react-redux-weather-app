import { format } from 'date-fns';

export function formatData(result) {
        const validData = {
            cityName: result.name,
            icon: result.weather[0].icon,
            degrees: `${Math.round(result.main.temp)}°`,
            feelsLike: `${Math.round(result.main.feels_like)}°`,
            weatherName: result.weather[0].main,
            sunrise: format(new Date(result.sys.sunrise * 1000), 'HH:mm'),
            sunset: format(new Date(result.sys.sunset * 1000), 'HH:mm'),
        }
        return validData;
    }


export function formatForecast(result) {
    const forecastArray = []
    for (let i = 0; i < 5; i++) {
        const validForecast = {
            date: format(new Date(result.hourly[i].dt), 'd MMM'),
            degrees: `${(Math.round(result.hourly[i].temp) - 273)}°`,
            feelsLike: `${(Math.round(result.hourly[i].feels_like) - 273)}°`,
            time: format(new Date(result.hourly[i].dt * 1000), 'HH:mm'),
            weatherName: result.hourly[i].weather[0].main,
            icon: result.hourly[i].weather[0].icon,
        }
        forecastArray.push(validForecast);
    }
    return forecastArray;
}