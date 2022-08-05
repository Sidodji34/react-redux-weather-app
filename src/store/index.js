import { legacy_createStore as createStore, combineReducers} from 'redux'
import { weatherReducer } from './reducer/weatherReducer';
import { inputReducer } from './reducer/inputReducer';
import { listTownReducer } from './reducer/listTownReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


export const rootReducer = combineReducers({
    input: inputReducer,
    weather: weatherReducer,
    listTowns: listTownReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const myPersistReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(myPersistReducer, composeWithDevTools());

export const persistor = persistStore(store);