const defaultState = {};

export function weatherReducer(state = defaultState, action) {
  switch (action.type) {

    case 'ADD_WEATHER_INFO':
      return { ...state, ...action.payload }

    case 'ADD_FORECAST_INFO':
      return { ...state, forecast: action.payload }

    default:
      return state;
  }
}