import searchImg from '../images/search.svg';
import { responseWeather } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { inputAction, clearInputAction } from '../store/actions/inputActions';
import { addWeatherInfo, addForecastInfo } from '../store/actions/weatherActions';

function Input() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.input.value)

  function changeValue(e) {
    dispatch(inputAction(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault();
    responseWeather(value)
      .then(result => {
        dispatch(addWeatherInfo(result[0]))
        dispatch(addForecastInfo(result[1]))
      });
    dispatch(clearInputAction(value))
  }

  return (
    <form className="input" action="#tab_now" onSubmit={handleSubmit}>
      <input
        className='search_town'
        type="text"
        placeholder="Enter a town..."
        value={value}
        onChange={changeValue}
      />
      <button
        type="submit" className="button_search"
        style={{ backgroundImage: `url(${searchImg})` }}
        onClick={handleSubmit}></button>
    </form>
  )
}

export default Input;