import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addCityWeather } from '../../redux/cityWeatherActions';
import './CityInputForm.css'

interface CityInputFormProps {
    onCitySubmit: (city: string) => void;
}

export interface CityWeather {
    city: string;
    weatherData: any;
}

export const CityInputForm: React.FC<CityInputFormProps> = ({ onCitySubmit }) => {
    const [city, setCity] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [weatherData, setWeatherData] = useState<any | null>(null);
    const dispatch = useDispatch()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
        .then(response => response.json())
        .then(data => {
            if(data.cod === '404' || city === ''){
                setError(data.message)
                return
            }
            onCitySubmit(city);
            setError(null);
            setWeatherData(data);
            dispatch(addCityWeather({ city, weatherData: data }));
        })
        .catch(error => {
            setError(error.message);
        });
    };

    return (
        <form onSubmit={handleSubmit} className='form-element'>
            <Grid container spacing={2} className='input-container'>
                <Grid item xs={8}>
                    <TextField
                        label="Enter City Name"
                        variant="outlined"
                        fullWidth
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button type="submit" variant="contained" color="primary" size='small' className='button'>
                        Get Weather
                    </Button>
                </Grid>
            </Grid>
            {error && <Typography variant="body1" color="error" className='erro-msg'>{error}, Retry</Typography>}
            {
              !error &&  !weatherData && (
                    <img src='https://ik.imagekit.io/e5kg8mysj/20945178.jpg?updatedAt=1712818185374' className='image'/>
                )
            }
            {(!error && weatherData) && (
                <div className='result'>
                    <Typography variant="body1" >Current Temperature: <span >{`${(weatherData.main.temp - 273.15).toFixed(1)}°C`}</span></Typography>
                    <Typography variant="body1" >Current Weather: <span >{weatherData.weather[0].description}</span></Typography>
            
                </div>
            )}
        </form>
    );
};

