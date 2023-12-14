import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { CityHeader } from 'components/CityHeader'
import { WeatherHeader } from 'components/WeatherHeader'
import { WeatherInfo } from 'components/WeatherInfo'
// import { ForecastItem } from './components/ForecastItem'

const API_KEY = '4b089f476bd9961f1c727a0625472b1f'
const cities = ['Stockholm,SE', 'London,GB', 'New York,US', 'Tokyo,JP', 'Paris,FR']

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

export const App = () => {
  // const [currentWeather, setCurrentWeather] = useState()
  // console.log('currentWeather', currentWeather)
  // const [weatherForecast, setWeatherForecast] = useState()
  // console.log('weatherForecast', weatherForecast)
  // // const [londonWeather, setLondonWeather] = useState()
  // // const [londonForecast, setLondonForecast] = useState()
  // const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState({});
  console.log(weatherData[1]?.currentWeather)
  console.log(weatherData[2]?.weatherForecast)
  console.log('weatherdata', weatherData)
  const [currentCity, setCurrentCity] = useState('Stockholm');

  // const getWeather = (city) => {
  //   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
  //     .then((res) => res.json())
  //     // .then((data) => setCurrentWeather(data))
  //     // .then((data) => setWeatherData(data))
  //     .then((data) => {
  //       setWeatherData((prevData) => ({
  //       // setWeatherData(() => ({
  //         ...prevData,
  //         [city]: {
  //           currentWeather: data
  //         }
  //       }))
  //     })
  //     .catch((err) => console.error(err))
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`
  //   )
  //     .then((res) => res.json())
  //     // .then((data) => setWeatherForecast(data))
  //     // .then((data) => setWeatherData(data))
  //     .then((data) => {
  //       setWeatherData((prevData) => ({
  //       // setWeatherData(() => ({
  //         ...prevData,
  //         [city]: {
  //           weatherForecast: data
  //         }
  //       }))
  //     })
  //     .catch((err) => console.error(err))
  // }
  const getWeather = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then((res) => res.json())
      // .then((data) => setCurrentWeather(data))
      // .then((data) => setWeatherData(data))
      .then((data) => {
        setWeatherData((prevData) => ({
        // setWeatherData(() => ({
          ...prevData,
          [city]: {
            currentWeather: data
          }
        }))
      })
      .catch((err) => console.error(err))
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`
    )
      .then((res) => res.json())
      // .then((data) => setWeatherForecast(data))
      // .then((data) => setWeatherData(data))
      .then((data) => {
        console.log(data)
        setWeatherData((prevData) => ({
        // setWeatherData(() => ({
          ...prevData,
          [city]: {
            weatherForecast: data
          }
        }))
      })
      .catch((err) => console.error(err))
  }

  // const fetchStockholmWeather = () => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=${API_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setCurrentWeather(data))
  //     .catch((err) => console.error(err));
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=${API_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setWeatherForecast(data))
  //     .catch((err) => console.error(err));
  // }

  // const fetchParisWeather = () => {
  //   fetch (
  //     `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&APPID=${API_KEY}`
  //   )
  //   .then((res) => res.json())
  //   .then((data) => setParistWeather(data))
  //   .catch((err) => console.error(err));
  //   fetch (
  //     `https://api.openweathermap.org/data/2.5/forecast?q=Paris&units=metric&APPID=${API_KEY}`
  //   )
  //   .then((res) => res.json())
  //   .then((data) => setParistForecast(data))
  //   .catch((err) => console.error(err));
  // }

  useEffect(() => {
    // fetchStockholmWeather();
    cities.forEach((city) => getWeather(city));
  }, [])

  // useEffect(() => {
  //   setSelectedCity('Stockholm')
  // }, [])

  // const dailyNoonForecasts =
  // weatherForecast?.list?.filter((item) => item.dt_txt.includes('12:00'));

  const handleSelectCityChange = (event) => {
    const value = event.target.value;
    setCurrentCity(value);
    console.log('Selected city: ', value);
  }

  return (
    <PageContainer>
      <MainContent>
        {/* {currentWeather && currentWeather.weather && currentWeather.weather[0] && ( */}
        {weatherData[currentCity]?.currentWeather && (
          <>
            <CityHeader
              cityName={weatherData[currentCity].currentWeather.name}
              selectedCity={currentCity}
              handleSelectCityChange={handleSelectCityChange} />
            <WeatherHeader currentWeather={weatherData[currentCity].currentWeather} />
            <WeatherInfo currentWeather={weatherData[currentCity].currentWeather} />
          </>
        )}
        {/* {dailyNoonForecasts?.length ? (
          dailyNoonForecasts.map((item) => (
            <ForecastItem
              key={item.dt}
              item={item}
              currentWeather={weatherData[currentCity]?.currentWeather} />
          ))
        ) : (
          <p>No forecast available</p>
        )} */}
      </MainContent>
    </PageContainer>
  );
};