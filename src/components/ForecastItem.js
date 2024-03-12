import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { formatDate, formatWeekday } from 'utils/dateUtils';

const ContentWrapper = styled.div`

`

const AccordionHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: column; */
  /* border-bottom: 1px solid black; */
  cursor: pointer;
  width: 100%;
  transition: background-color 0.4s ease;
  margin: 0;
  /* background-color: ${(props) => (props.showForecast ? 'red' : 'green')}; */
  &:hover {
    background-color: #B72C72;
  }
 `

const DateWrapper = styled.div`
display: flex;
flex-direction: row;
/* align-items: baseline; */
/* margin-bottom: 8px;
margin-top: 8px; */
margin: 8px 0 8px 0;
`
const H2 = styled.h2`
  font-size: 16px;
  margin: 0 4px 0 0;
  font-weight: bold;
  color: #1F479F; 
  font-family: 'Helvetica', sans-serif;
`;

const DateText = styled.span`
  font-size: 16px;
  margin-right: 10px;
  color: #1F479F; 
  font-family: 'Helvetica', sans-serif;
`;
// const DateInfo = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: baseline;
// `

const AccordionContent = styled.div`
  padding: 8px 0 8px 0;
  /* border: 1px solid red; */
  background-color: #1F479F; 
  /* font-color: 'red'; */
  display: ${(props) => (props.show ? 'flex' : 'none')};
`
const WeatherText = styled.span`
  font-size: 16px;
  margin-left: 5px;
  color: #E8E8E8; 
  font-family: 'Helvetica', sans-serif;
`;

const Line = styled.div`
  height: 1px;
  background-color: #1F479F; 
  width: 100%;
`

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

  return (
    <ContentWrapper key={item.dt}>
      <AccordionHeader onClick={toggleForecast}>
        {/* <DateInfo> */}
        <DateWrapper>
          <H2>{formatWeekday(currentWeather.dt, item.dt)}</H2>
          <DateText>{formatDate(item.dt)}</DateText>
        </DateWrapper>
        {showForecast
          ? <FontAwesomeIcon icon={faChevronUp} style={{ color: '#1F479F', fontSize: '14px' }} />
          : <FontAwesomeIcon icon={faChevronDown} style={{ color: '#1F479F', fontSize: '14px' }} />}
        {/* <Line /> */}
        {/* </DateInfo> */}
        {/* <Paragraph>{Math.floor(item.main.temp)} °C</Paragraph> */}
      </AccordionHeader>

      <AccordionContent show={showForecast}>
        <WeatherText>{capitalizeFirstLetter(item.weather[0]?.description)}</WeatherText>
        <WeatherText>, feels like {Math.floor(item.main.feels_like)}</WeatherText>
      </AccordionContent>
      <Line />
    </ContentWrapper>
  )
}
