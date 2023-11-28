// components/ForecastItem.js
import React from 'react';
import styled from 'styled-components';

import { formatTime, formatDate, formatWeekday } from 'utils/dateUtils';

const ForecastContainer = styled.div`
  // ... your styles
`;

const ForecastInfo = styled.div`
    display: flex;
    margin-top: 25px;
    /* justify-content: space-between; */
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    align-items: baseline;
    border-bottom: 1px solid black;
    /* margin-bottom: 3px ; */
`;

const DateInfo = styled.div`
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    align-items: baseline;
    /* margin-top: 30px; */
`;

const H2 = styled.h2`
    font-size: 20px;
    margin: 0 10px 0 0;
`;

const Paragraph = styled.p`
    margin: 0 0 12px 0;
`;

export const ForecastItem = ({ item, currentWeather }) => {
  return (
    <ForecastContainer key={item.dt}>
      <HeaderContent>
        <DateInfo>
          <H2>{formatWeekday(currentWeather.dt, item.dt)}</H2>
          <Paragraph>{formatDate(item.dt)}</Paragraph>
        </DateInfo>
        <p>{Math.floor(item.main.temp)} °C</p>
      </HeaderContent>
      <ForecastInfo>
        <Paragraph>{capitalizeFirstLetter(item.weather[0]?.description)}</Paragraph>
        <Paragraph>, feels like {Math.floor(item.main.feels_like)}</Paragraph>
      </ForecastInfo>
    </ForecastContainer>
  )
}
