import { useContext } from 'react';
import { responseWeather } from '../api';
import ListTownsContext from '../context/ContextListTowns';
import WeatherContext from '../context/ContextWeather';
import ForecastContext from '../context/ForecastContext';
import { saveList } from '../storage';

function ListTown() {
  const { listTowns, setList } = useContext(ListTownsContext);
  const { setWeather } = useContext(WeatherContext);
  const { setForecast } = useContext(ForecastContext);

  const towns = Array.from(listTowns).reverse();
  const listItems = towns.map((item, index) => {
    return (
      <FormFavoriteTown
        key={`${item + index}`}
        favoriteTown={item} />
    )
  })

  function DeliteTown(town) {
     setList(list => {
      const newList = new Set(list);
      newList.delete(town)
      saveList(newList);
      return newList;
     });
  }

  function HandleSearch(town) {
    responseWeather(town)
    .then(result => {
      setWeather(result[0])
      setForecast(result[1])
    });
  }

  function FormFavoriteTown(props) {
    return (
      <li className="town_in_list">
        <div>
          <button className="name__town" onClick={() => HandleSearch(props.favoriteTown)}>{props.favoriteTown}</button>
          <button className="btn__delite" onClick={() => DeliteTown(props.favoriteTown)}>x</button>
        </div>
      </li>
    )
  }

  return (
    <div className="right_bar">
      <div className="add_locations">Added Locations:</div>
      <div className="locations_list">
        <ul className="list">
          {listItems}
        </ul>
      </div>
    </div>
  );
}


export default ListTown;