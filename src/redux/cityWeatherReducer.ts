import { CityWeather } from "../components/CityInputForm/CityInputForm";

const initialState: CityWeather[] = [];

const cityWeatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_CITY_WEATHER':
      return [...state, action.payload];
    case 'CLEAR_ALL':
      return []
    default:
      return state;
  }
};

export default cityWeatherReducer;