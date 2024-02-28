import React from 'react';
import styled from 'styled-components';

import { formatDate, formatTime } from 'utils/dateUtils';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 24px;
`

const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 6px;
`

const WeatherWrapper = styled.div`
  margin-top: 16px;
`

const SunriseWrapper = styled.div`
  margin-top: 6px;
  display: flex;
`

const H2 = styled.h2`
  font-size: 16px;
  margin: 0 4px 0 0;
  font-weight: bold;
  color: #1F479F; 
  font-family: 'Helvetica', sans-serif;
`

const DateText = styled.span`
  font-size: 16px;
  margin-right: 10px;
  color: #1F479F; 
  font-family: 'Helvetica', sans-serif;
`;

const WeatherText = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: #1F479F; 
  font-family: 'Helvetica', sans-serif;
  margin-top: 0px;
  margin-bottom: 0px;
`

const SunriseText = styled.p`
  font-size: 18px;
  font-style: italic;
  color: #1F479F; 
  font-family: 'Helvetica', sans-serif;
  margin-top: 5px;
  margin-bottom: 10px;
`

const Line = styled.div`
  height: 1px;
  background-color: #1F479F; 
  width: 100%;

`;

export const TodayOverview = ({ currentWeather }) => {
  return (
    <ContentWrapper>
      <DateWrapper>
        <H2>Today</H2>
        <DateText>{formatDate(currentWeather.dt)}</DateText>
      </DateWrapper>
      <Line />
      <WeatherWrapper>
        <WeatherText>{Math.floor(currentWeather.main.temp)}°C</WeatherText>
        <WeatherText>{currentWeather.weather[0].main}</WeatherText>
        <WeatherText>Feels like {Math.floor(currentWeather.main.feels_like)}°C</WeatherText>
      </WeatherWrapper>
      <SunriseWrapper>
        <SunriseText>Sunrise: {formatTime(currentWeather.sys.sunrise)}</SunriseText>
        <SunriseText>&nbsp;| Sunset: {formatTime(currentWeather.sys.sunset)}</SunriseText>
      </SunriseWrapper>
    </ContentWrapper>
  );
}
