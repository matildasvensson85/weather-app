import React from 'react';
import styled from 'styled-components';

import { formatDate } from 'utils/dateUtils';

export const WeatherHeader = ({ currentWeather }) => {
  const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    align-items: baseline;
    /* border-bottom: 1px solid black; */
    /* margin-bottom: 3px ; */
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
  `

  const Paragraph = styled.p`
    /* margin: 0 35px 12px 0; */
   `

  return (
    <HeaderContent>
      <DateInfo>
        <H2>Today</H2>
        <Paragraph>{formatDate(currentWeather.dt)}</Paragraph>
      </DateInfo>
      {/* <DateInfo> */}
      <Paragraph>{Math.floor(currentWeather.main.temp)} °C</Paragraph>
      {/* <button type="button">▼</button> */}
      {/* </DateInfo> */}
    </HeaderContent>
  );
}
