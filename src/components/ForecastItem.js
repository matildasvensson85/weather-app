import React, { useState } from 'react';
import styled from 'styled-components';

import { formatDate, formatWeekday } from 'utils/dateUtils';

export const ForecastItem = ({ item, currentWeather }) => {
  function capitalizeFirstLetter(str) {
    if (str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const [showForecast, setShowForecast] = useState(false);

  const toggleForecast = () => {
    setShowForecast(!showForecast);
  };

  const ForecastContainer = styled.div`
    // ... your styles
  `

  const ForecastInfo = styled.div`
      margin-top: 25px;
      display: ${(props) => (props.show ? 'flex' : 'none')};
  `

  const HeaderContent = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 1px solid black;
      cursor: pointer;
      transition: 0,4s;
      width: 100%;
      /* height: 50px; */
      :hover {
        background-color: #B72C72;
      } 
  `

  const DateInfo = styled.div`
      display: flex;
      flex-direction: row;
      /* align-items: center; */
      align-items: baseline;
      /* margin-top: 30px; */
  `

  const H2 = styled.h2`
      font-size: 20px;
      margin: 0 10px 0 0;
  `;

  const Paragraph = styled.p`
      margin: 0 0 12px 0;
  `

  return (
    <ForecastContainer key={item.dt}>
      <HeaderContent onClick={toggleForecast}>
        <DateInfo>
          <button type="button">{showForecast ? '▲' : '▼'}</button>
          <H2>{formatWeekday(currentWeather.dt, item.dt)}</H2>
          <Paragraph>{formatDate(item.dt)}</Paragraph>
        </DateInfo>
        <Paragraph>{Math.floor(item.main.temp)} °C</Paragraph>
        {/* <button type="button">{showForecast ? '▲' : '▼'}</button> */}
      </HeaderContent>
      <ForecastInfo show={showForecast}>
        <Paragraph>{capitalizeFirstLetter(item.weather[0]?.description)}</Paragraph>
        <Paragraph>, feels like {Math.floor(item.main.feels_like)}</Paragraph>
      </ForecastInfo>
    </ForecastContainer>
  )
}
