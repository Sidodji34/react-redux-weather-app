import likeImg from '../images/like.svg'
import { useDispatch, useSelector } from 'react-redux';
import { addTown } from '../store/actions/listTownsActions';

function TabNow() {
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather);

  let iconWeather = weather.icon;

  if (iconWeather) {
    iconWeather = <div className="icon" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${weather.icon}.png)` }}></div>
  } else {
    iconWeather = <img className="icon" src="#" alt="." />
  }

  function saveTown() {
    const town = weather.cityName;
    dispatch(addTown(town));
  }
  
  return (
    <div id="tab_now" className="tabs_block">
      <div className="degrees">{weather.degrees}</div>
      <div className="icon">{iconWeather}</div>
      <div className="name_town_now">{weather.cityName}</div>
      <button className="add_like" onClick={saveTown} style={{ backgroundImage: `url(${likeImg})` }}></button>
    </div>
  );
}

export default TabNow;