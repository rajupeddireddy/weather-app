// redux/store.ts
import { createStore } from 'redux';
import cityWeatherReducer from './cityWeatherReducer';

const store = createStore(cityWeatherReducer);

export default store;
