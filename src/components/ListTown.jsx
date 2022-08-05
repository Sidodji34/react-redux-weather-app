import { responseWeather } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { removeTown } from '../store/actions/listTownsActions';
import { addWeatherInfo, addForecastInfo } from '../store/actions/weatherActions';

function ListTown() {
  const dispatch = useDispatch();
  const listTowns = useSelector(state => state.listTowns.listTowns);

  function deliteTown(town) {
    dispatch(removeTown(town));
  }

  function handleSearch(town) {
    responseWeather(town)
      .then(result => {
        dispatch(addWeatherInfo(result[0]))
        dispatch(addForecastInfo(result[1]))
      });
  }

  function FormFavoriteTown(props) {
    return (
      <li className="town_in_list">
        <div>
          <button className="name__town" onClick={() => handleSearch(props.favoriteTown)}>{props.favoriteTown}</button>
          <button className="btn__delite" onClick={() => deliteTown(props.favoriteTown)}>x</button>
        </div>
      </li>
    )
  }

  return (
    <div className="right_bar">
      <div className="add_locations">Added Locations:</div>
      <div className="locations_list">
        <ul className="list">
          {Array.isArray(listTowns) ? listTowns.map((item, index) => {
            return (
              <FormFavoriteTown
                key={`${item + index}`}
                favoriteTown={item} />
            )
          }).reverse()
            : <li></li>
          }
        </ul>
      </div>
    </div>
  );
}


export default ListTown;