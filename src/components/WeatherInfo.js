import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { formatTime } from 'utils/dateUtils';

const CurrentWeatherInfo = styled.div`
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  /* margin: 0; */
  margin-top: 25px;
`

const InlineContainer = styled.div`
display: flex;
`;

const Paragraph = styled.p`
margin: 0 0 12px 0;
`;

export const WeatherInfo = ({ currentWeather }) => {
  return (
    <CurrentWeatherInfo>
      <InlineContainer>
        <Paragraph>{currentWeather.weather[0].main}</Paragraph>
        <Paragraph>, feels like {Math.floor(currentWeather.main.feels_like)}</Paragraph>
      </InlineContainer>
      <InlineContainer>
        <Paragraph>Sunrise: {formatTime(currentWeather.sys.sunrise)}</Paragraph>
        <Paragraph>&nbsp;| Sunset: {formatTime(currentWeather.sys.sunset)}</Paragraph>
      </InlineContainer>
    </CurrentWeatherInfo>
  )
}