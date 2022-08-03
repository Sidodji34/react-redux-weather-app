import { legacy_createStore as createStore, combineReducers} from 'redux'
import { weatherReducer } from './reducer/weatherReducer';
import { inputReducer } from './reducer/inputReducer';
import { listTownReducer } from './reducer/listTownReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


export const rootReducer = combineReducers({
    input: inputReducer,
    weather: weatherReducer,
    listTowns: listTownReducer,
});


export const store = createStore(rootReducer, composeWithDevTools());