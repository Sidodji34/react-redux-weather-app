export const defaultState = {
  value: '',
}

export function inputReducer(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_INPUT_VALUE':
      return { ...state, value: action.payload }
    case 'CLEAR_INPUT': 
      return {...state, value: ''}
    default: 
      return state;
  }
}