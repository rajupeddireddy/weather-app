import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { connect, useDispatch } from 'react-redux';
import { clearAll } from "../../redux/cityWeatherActions";
import './SearchHistory.css'

import { CityWeather } from "../CityInputForm/CityInputForm";

interface SearchHistory {
    citiesWeather: CityWeather[];
}


const SearchHistory: React.FC<SearchHistory> =  ({ citiesWeather })=> {
    const dispatch = useDispatch()

    return (
        <Box className='sh-container'>
            {citiesWeather.length > 0 && <Typography variant="h5" align="left">Weather Search History</Typography>}
            {citiesWeather.map(city => 
                <div className='history'>
                    <Typography variant="body1"><span>{`${city.city}`}</span></Typography>
                    <Typography variant="body1">Temperature: <span >{`${(city.weatherData.main.temp - 273.15).toFixed(1)}°C`}</span></Typography>
                    <Typography variant="body1">Weather: <span>{city.weatherData.weather[0].description}</span></Typography>

            </div>
            ) 
        }
                
        {citiesWeather.length > 0 && <Button
          onClick={() => dispatch(clearAll())}
         variant="outlined" color="error" size='small' sx={{marginTop:'20px', alignSelf:'flex-end', textTransform:'none'}} >Clear All</Button>}
        </Box>
        
    );
};

const mapStateToProps = (state: any) => ({
    citiesWeather: state,
  });

export default connect(mapStateToProps)(SearchHistory);