import { format } from 'date-fns';

export function formatData(result) {
    const validData = {
        cityName: result.name,
        icon: result.weather[0].icon,
        degrees: (Math.round(result.main.temp) - 273),
        feelsLike: (Math.round(result.main.feels_like) - 273),
        weatherName: result.weather[0].main,
        sunrise: format(new Date(result.sys.sunrise * 1000), 'HH:mm'),
        sunset: format(new Date(result.sys.sunset * 1000), 'HH:mm'),
    }
    console.log(`ValidData ${validData.sunset} ${validData.sunrise}`);
    return validData;
}

export function formatForecast(result) {
    
    const validForecast = [{
        degrees: '',
        feelsLike: '',
        time: '',
        weatherName: '',
        icon: null,
    }]
}