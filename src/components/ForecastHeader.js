import React from 'react';
import styled from 'styled-components';

import { formatDate, formatWeekday } from 'utils/dateUtils';

const HeaderContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: baseline;
border-bottom: 1px solid black;
cursor: pointer;
transition: 0,4s;
width: 100%;
:hover {
  background-color: #B72C72;
} 
`

const DateInfo = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
`

const H2 = styled.h2`
font-size: 20px;
margin: 0 10px 0 0;
`;

const Paragraph = styled.p`
margin: 0 0 12px 0;
`

export const ForecastHeader = ({ item, currentWeather }) => {
  return (
    <HeaderContent key={item.dt}>
      <DateInfo>
        <button type="button">▲</button>
        <H2>{formatWeekday(currentWeather.dt, item.dt)}</H2>
        <Paragraph>{formatDate(item.dt)}</Paragraph>
      </DateInfo>
      <Paragraph>{Math.floor(item.main.temp)} °C</Paragraph>
    </HeaderContent>
  )
}