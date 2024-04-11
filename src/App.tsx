import React from 'react';
import { Typography } from '@mui/material';
import {CityInputForm} from './components/CityInputForm/CityInputForm';
import SearchHistory from './components/SearchHistory/SearchHistory'
import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './App.css'

const App: React.FC = () => {
    const handleCitySubmit = (city: string) => {
        console.log('Submitted city:', city);
    };

    return (
        <div className='App'>
            <Typography variant="h3" gutterBottom className='heading'>
                Weather App
            </Typography>
            <CityInputForm onCitySubmit={handleCitySubmit} />
            <SearchHistory/>
            <div className='details-card'>
                <Typography className='copyright'><CopyrightIcon/>Raju Peddireddi</Typography>
                    <div className='icons-card'>
                        <a href="https://www.linkedin.com/in/raju-peddireddi/" target='_blank' rel='noopener noreferrer'>
                            <LinkedInIcon className='footer-icon'/>
                        </a>
                       
                        <a href="https://github.com/rajupeddireddy" target='_blank' rel='noopener noreferrer'>
                            <GitHubIcon className='footer-icon'/>
                        </a>
                        
                        <Typography className='mail'>rajupeddireddy9493@gmail.com</Typography>
                    </div>
            </div>
        </div>
    );
};

export default App;
