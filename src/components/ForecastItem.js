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
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid black;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.4s ease;
      &:hover {
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
  // const AccordionHeader = styled.button`
  //   cursor: pointer;
  //   background-color: grey;
  //   transition: 0,4s;
  //   border: none;
  //   width: 100%;
  //   max-width: 600px;
  //   height: 30px;
  //   /* margin: 0 0 10px 0; */
  //     :hover {
  //     background-color: #B72C72;
  //     }
  // `
  // const AccordionContent = styled.div`
  //   overflow: hidden;
  //   /* max-height: ${(props) => (props.open ? '100%' : '0')}; */
  //   display: ${(props) => (props.show ? 'flex' : 'none')};
  //   width: 100%;
  // `

  // const Title = styled.p`
  //   margin: 0;
  //   color: white;
  //   font-size: 16px;
  // `

  return (
    <>
      <ForecastContainer key={item.dt}>
        <HeaderContent onClick={toggleForecast}>
          <DateInfo>
            <button type="button">{showForecast ? '▲' : '▼'}</button>
            <H2>{formatWeekday(currentWeather.dt, item.dt)}</H2>
            <Paragraph>{formatDate(item.dt)}</Paragraph>
          </DateInfo>
          <Paragraph>{Math.floor(item.main.temp)} °C</Paragraph>
        </HeaderContent>
        <ForecastInfo show={showForecast}>
          <Paragraph>{capitalizeFirstLetter(item.weather[0]?.description)}</Paragraph>
          <Paragraph>, feels like {Math.floor(item.main.feels_like)}</Paragraph>
        </ForecastInfo>
      </ForecastContainer>

      {/* <AccordionHeader onClick={toggleForecast}>
        <DateInfo>
          <button type="button">{showForecast ? '▲' : '▼'}</button>
          <H2>{formatWeekday(currentWeather.dt, item.dt)}</H2>
          <Paragraph>{formatDate(item.dt)}</Paragraph>
        </DateInfo>
        <Paragraph>{Math.floor(item.main.temp)} °C</Paragraph>
      </AccordionHeader>
      <AccordionContent show={showForecast}>
        <Paragraph>{capitalizeFirstLetter(item.weather[0]?.description)}</Paragraph>
        <Paragraph>, feels like {Math.floor(item.main.feels_like)}</Paragraph>
      </AccordionContent> */}
    </>
  )
}
