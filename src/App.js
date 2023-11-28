import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { CityHeader } from 'components/CityHeader';
import { WeatherHeader } from 'components/WeatherHeader';
import { WeatherInfo } from 'components/WeatherInfo';
import { ForecastItem } from './components/ForecastItem';
// import { formatTime, formatDate, formatWeekday } from './utils/dateUtils';

const API_KEY = '4b089f476bd9961f1c727a0625472b1f';

export const App = () => {
  const [currentWeather, setCurrentWeather] = useState();
  console.log('currentWeather', currentWeather);
  const [weatherForecast, setWeatherForecast] = useState();
  console.log('weatherForecast', weatherForecast);

  const fetchCurrentWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCurrentWeather(data))
      .catch((err) => console.error(err));
  };

  const fetchWeatherForecast = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setWeatherForecast(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  useEffect(() => {
    fetchWeatherForecast();
  }, []);

  // const formattedDateOptions = {
  //   month: 'short',
  //   day: 'numeric'
  // };

  // function formatTime(timestamp) {
  //   return new Date(timestamp * 1000).toLocaleTimeString([], {
  //     timeStyle: 'short'
  //   });
  // }

  // function formatDate(timestamp) {
  //   return new Date(timestamp * 1000).toLocaleDateString(
  //     'en-US',
  //     formattedDateOptions
  //   );
  // }

  // function formatWeekday(currentTimestamp, forecastTimestamp) {
  //   const tomorrowTimestamp = currentTimestamp + 86400;
  //   const tomorrowDate = new Date(tomorrowTimestamp * 1000);
  //   const forecastDateObject = new Date(forecastTimestamp * 1000);

  //   if (
  //     forecastDateObject.getDate() === tomorrowDate.getDate()
  //     && forecastDateObject.getMonth() === tomorrowDate.getMonth()
  //     && forecastDateObject.getFullYear() === tomorrowDate.getFullYear()
  //   ) {
  //     return 'Tomorrow';
  //   } else {
  //     return new Date(forecastTimestamp * 1000).toLocaleDateString('en-US', {
  //       weekday: 'long'
  //     });
  //   }
  // }

  const dailyNoonForecasts = weatherForecast?.list?.filter((item) => item.dt_txt.includes('12:00'));

  const [selectedCity, setSelectedCity] = useState('');

  const handleSelectCityChange = (event) => {
    const value = event.target.value;
    setSelectedCity(value);
    console.log('Selected city: ', value);
  };

  function capitalizeFirstLetter(str) {
    if (str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const PageContainer = styled.div`
    background-color: #F7D5DF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 20px 20px 20px;
    min-height: 100vh;
    border: 1px solid blue;
  `;

  const MainContent = styled.div`
    /* margin: 50px;
    background-color: #f77df5;
    width: 500px; */
    width: 100%;
    max-width: 400px;
    background-color: white;
    border-radius: 30px;
    padding: 50px;
    border: 1px solid red;
    /* display: flex;
    justify-content: center; */
  `;

  const HeaderSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  `

  const H1 = styled.h1`
    font-size: 30px;
    margin: 0;
    `

  const CitySelector = styled.select`
    border: 1px solid #1D47B2;
    background-color: transparent;
    height: 40px;
    color: black;
    font-size: 16px;
  `

  const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    align-items: baseline;
    border-bottom: 1px solid black;
    /* margin-bottom: 3px ; */
  `

  const DateInfo = styled.div`
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    align-items: baseline;
    /* margin-top: 30px; */
  `

  const CurrentWeatherInfo = styled.div`
    /* width: 50%; */
    display: flex;
    flex-direction: column;
    /* margin: 0; */
    margin-top: 25px;
  `

  const InlineContainer = styled.div`
    /* width: 50%; */
    display: flex;
    /* margin: 0; */
    /* margin-top: 25px; */
  `

  const H2 = styled.h2`
    font-size: 20px;
    margin: 0 10px 0 0;
  `

  const Paragraph = styled.p`
    /* margin: 2px; */
    /* margin-bottom: 1px; */
    /* margin: 0; */
    margin: 0 0 12px 0;
  `

  const ForecastContainer = styled.div`
  `

  const ForecastInfo = styled.div`
    display: flex;
    margin-top: 25px;
    /* justify-content: space-between; */
  `

  return (
    <PageContainer>
      <MainContent>
        {currentWeather && currentWeather.weather && currentWeather.weather[0] && (
          <>
            <CityHeader
              cityName={currentWeather.name}
              selectedCity={selectedCity}
              handleSelectCityChange={handleSelectCityChange}
            />
            <WeatherHeader currentWeather={currentWeather} />
            <WeatherInfo currentWeather={currentWeather} />
            {/* <HeaderSection>
              <H1>{currentWeather.name}</H1>
              <CitySelector
                value={selectedCity}
                onChange={handleSelectCityChange}>
                <option value="" disabled>Select location</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </CitySelector>
            </HeaderSection>

            <HeaderContent>
              <DateInfo>
                <H2>Today</H2>
                <Paragraph>{formatDate(currentWeather.dt)}</Paragraph>
              </DateInfo>
              <p>{Math.floor(currentWeather.main.temp)} °C</p>
            </HeaderContent>
            <CurrentWeatherInfo>
              <InlineContainer>
                <Paragraph>{currentWeather.weather[0].main}</Paragraph>
                <Paragraph>,  feels like {Math.floor(currentWeather.main.feels_like)}</Paragraph>
              </InlineContainer>
              <InlineContainer>
                <Paragraph>Sunrise: {formatTime(currentWeather.sys.sunrise)}</Paragraph>
                <Paragraph>&nbsp;| Sunset: {formatTime(currentWeather.sys.sunset)}</Paragraph>
              </InlineContainer>
            </CurrentWeatherInfo> */}
          </>
        )}

        <div>
          {dailyNoonForecasts?.length ? (
            dailyNoonForecasts.map((item) => (
              <ForecastItem key={item.dt} item={item} currentWeather={currentWeather} />

              // <ForecastContainer key={item.dt}>
              //   <HeaderContent>
              //     <DateInfo>
              //       <H2>{formatWeekday(currentWeather.dt, item.dt)}</H2>
              //       <Paragraph>{formatDate(item.dt)}</Paragraph>
              //     </DateInfo>
              //     <p>{Math.floor(item.main.temp)} °C</p>
              //   </HeaderContent>
              //   <ForecastInfo>
              //     <Paragraph>{capitalizeFirstLetter(item.weather[0]?.description)}</Paragraph>
              //     <Paragraph>, feels like {Math.floor(item.main.feels_like)}</Paragraph>
              //   </ForecastInfo>
              // </ForecastContainer>
            ))
          ) : (
            <p>No forecast available</p>
          )}
        </div>
      </MainContent>
    </PageContainer>
  );
};