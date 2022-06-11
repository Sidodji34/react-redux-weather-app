import likeImg from '../images/like.svg'

function TabNow(props) {
  let iconWeather = props.icon;
  
  if (iconWeather) {
   iconWeather = <div className="icon" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${props.icon}.png)` }}></div>
  } else {
    iconWeather = <img className="icon" src="#" alt="." />
  }
   
  return (
    <div id="tab_now" className="tabs_block">
      <div className="degrees">{props.degrees}°</div>
      <div className="icon">{iconWeather}</div>
      <div className="name_town_now">{props.cityName}</div>
      <button className="add_like" style={{ backgroundImage: `url(${likeImg})` }}></button>
    </div>
  );
}

export default TabNow;