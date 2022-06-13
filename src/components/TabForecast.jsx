function TabForecast() {
  return (
    <div id="tab_forecast" className="tabs_block">
      <div className="name_town_forecast"></div>
      <div className="forecast_list">
        
      </div>
    </div>
  )
}



// function hourlyForecast() {
//   const boxOutput = document.createElement('div');
//   boxOutput.className = 'forecast_box';
//   boxOutput.insertAdjacentHTML('afterbegin', `<p class="info__date">
//   ${getDate()}
//   </p>
//   <ul class="info__forecast">
//       <li class="degrees_details">${TAB_FORECAST.DEGREES.textContent}</li>
//       <li class="feels_like">${TAB_FORECAST.FEELS_LIKE.textContent}</li>
//   </ul>
//   <p class="info__time">${TAB_FORECAST.TIME.textContent}</p>
//       <p class="info__weather">${TAB_FORECAST.WEATHER.textContent}</p>
//       ${TAB_FORECAST.ICON_WEATHER.innerHTML}
//   </div>`)
//   TAB_FORECAST.FORECAST_LIST.append(boxOutput);
// };


export default TabForecast;