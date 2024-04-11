import { CityWeather } from "../components/CityInputForm/CityInputForm";


export const addCityWeather = (cityWeather: CityWeather) => ({
    type: 'ADD_CITY_WEATHER',
    payload: cityWeather,
  });
  
export const clearAll = () => ({
  type:'CLEAR_ALL'
})