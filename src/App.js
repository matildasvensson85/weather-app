import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { CityHeader } from 'components/CityHeader';
import { TodayOverview } from 'components/TodayOverview';
import { ForecastItem } from './components/ForecastItem';

const API_KEY = '4b089f476bd9961f1c727a0625472b1f';
const cities = ['Stockholm,Sweden', 'London,GB', 'New York,US', 'Tokyo,JP', 'Paris,FR'];

const PageContainer = styled.div`
  background-image: url('/images/golden-clouds.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 20px 20px;
  min-height: 100vh;
`;

const MainContent = styled.div`
width: 100%;
max-width: 400px;
background-color: #E8E8E8;
border-radius: 30px;
padding: 50px;
`;

export const App = () => {
  const [currentCity, setCurrentCity] = useState('Stockholm,Sweden');
  const [currentWeather, setCurrentWeather] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({});

  const getWeather = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentWeather((prevData) => ({
          ...prevData,
          [city]: {
            data
          }
        }));
      })
      .catch((err) => console.error(err));
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherForecast((prevData) => ({
          ...prevData,
          [city]: {
            data
          }
        }));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    cities.forEach((city) => getWeather(city));
  }, []);

  const dailyNoonForecasts = weatherForecast[currentCity]?.data?.list?.filter((item) => item.dt_txt.includes('12:00'));

  const handleSelectCityChange = (selectedOption) => {
    setCurrentCity(selectedOption.value);
  }

  return (
    <PageContainer>
      <MainContent>
        {currentWeather[currentCity]?.data && (
          <>
            <CityHeader
              cityName={currentWeather[currentCity].data.name}
              selectedCity={currentCity}
              handleSelectCityChange={handleSelectCityChange} />
            <TodayOverview currentWeather={currentWeather[currentCity].data} />
          </>
        )}
        {dailyNoonForecasts?.length ? (
          dailyNoonForecasts.map((item) => (
            <ForecastItem
              key={item.dt}
              item={item}
              currentWeather={weatherForecast[currentCity]?.data} />
          ))
        ) : (
          <p>No forecast available</p>
        )}
      </MainContent>
    </PageContainer>
  );
};