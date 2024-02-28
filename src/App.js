import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { CityHeader } from 'components/CityHeader'
import { TodayOverview } from 'components/TodayOverview'
// import { WeatherInfo } from 'components/WeatherInfo'
import { ForecastItem } from './components/ForecastItem'

const API_KEY = '4b089f476bd9961f1c727a0625472b1f'
const cities = ['Stockholm,Sweden', 'London,GB', 'New York,US', 'Tokyo,JP', 'Paris,FR']

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
  const [currentCity, setCurrentCity] = useState('Stockholm,Sweden');
  console.log('current city', currentCity)
  const [currentWeather, setCurrentWeather] = useState({});
  console.log('currentweather', currentWeather[currentCity])
  console.log('harder', currentWeather)
  const [weatherForecast, setWeatherForecast] = useState({});
  console.log('forecast', weatherForecast)

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
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then((res) => res.json())
      // .then((data) => setCurrentWeather(data))
      // .then((data) => setWeatherData(data))
      .then((data) => {
        // console.log('current', currentWeather)
        setCurrentWeather((prevData) => ({
        // setWeatherData(() => ({
          ...prevData,
          [city]: {
            data
            // currentWeather: data
          }
        }))
      })
      .catch((err) => console.error(err))
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`
    )
      .then((res) => res.json())
    // .then((data) => setWeatherForecast(data))
    // .then((data) => setWeatherData(data))

      .then((data) => {
        // console.log('forecast', forecast)

        //   const weatherData = {
        //     city,
        //     currentWeather,
        //     forecast
        //   };
        //   console.log('weatherdata', weatherData)
        //   return weatherData;

        // console.log('new fetch', data.list[0].main.feels_like)
        setWeatherForecast((prevData) => ({
        // setWeatherData(() => ({
          ...prevData,
          [city]: {
            data
            // weatherForecast: data
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
  //     // .then((data) => setCurrentWeather(data))
  //     .then((data) => console.log('stpckholm current', data))
  //     .catch((err) => console.error(err));
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=${API_KEY}`
  //   )
  //     .then((res) => res.json())
  //     // .then((data) => setWeatherForecast(data))
  //     .then((data) => {
  //       console.log('stockholm forecast', data)
  //       console.log('old fetch', data.list[0].main.feels_like)
  //     })
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
  //   setCurrentCity('Stockholm,Sweden')
  //   // setCurrentCity('London,GB')
  // }, [])

  const dailyNoonForecasts = weatherForecast[currentCity]?.data?.list?.filter((item) => item.dt_txt.includes('12:00'))
  console.log('dailynoon', dailyNoonForecasts)

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
            {/* <WeatherInfo currentWeather={currentWeather[currentCity].data} /> */}
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