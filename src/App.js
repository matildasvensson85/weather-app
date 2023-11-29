import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { CityHeader } from 'components/CityHeader'
import { WeatherHeader } from 'components/WeatherHeader'
import { WeatherInfo } from 'components/WeatherInfo'
import { ForecastItem } from './components/ForecastItem'

const API_KEY = '4b089f476bd9961f1c727a0625472b1f'

export const App = () => {
  const [currentWeather, setCurrentWeather] = useState()
  console.log('currentWeather', currentWeather)
  const [weatherForecast, setWeatherForecast] = useState()
  console.log('weatherForecast', weatherForecast)

  const fetchCurrentWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCurrentWeather(data))
      .catch((err) => console.error(err));
  }

  const fetchWeatherForecast = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setWeatherForecast(data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchCurrentWeather();
  }, [])

  useEffect(() => {
    fetchWeatherForecast();
  }, []);
  const dailyNoonForecasts = weatherForecast?.list?.filter((item) => item.dt_txt.includes('12:00'));

  const [selectedCity, setSelectedCity] = useState('');

  const handleSelectCityChange = (event) => {
    const value = event.target.value;
    setSelectedCity(value);
    console.log('Selected city: ', value);
  }

  const PageContainer = styled.div`
    background-color: #F7D5DF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 20px 20px 20px;
    min-height: 100vh;
    border: 1px solid blue;
  `

  const MainContent = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: white;
    border-radius: 30px;
    padding: 50px;
    border: 1px solid red;
  `

  return (
    <PageContainer>
      <MainContent>
        {currentWeather && currentWeather.weather && currentWeather.weather[0] && (
          <>
            <CityHeader
              cityName={currentWeather.name}
              selectedCity={selectedCity}
              handleSelectCityChange={handleSelectCityChange} />
            <WeatherHeader currentWeather={currentWeather} />
            <WeatherInfo currentWeather={currentWeather} />
          </>
        )}
        {dailyNoonForecasts?.length ? (
          dailyNoonForecasts.map((item) => (
            <ForecastItem key={item.dt} item={item} currentWeather={currentWeather} />
          ))
        ) : (
          <p>No forecast available</p>
        )}
      </MainContent>
    </PageContainer>
  );
};