import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { formatDate, formatWeekday } from 'utils/dateUtils';

const ContentWrapper = styled.div`
`;

const AccordionHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.4s ease;
  margin: 0;
  background-color: ${(props) => (props.show ? '#1F479F' : 'none')};
  &:hover {
    background-color: #8bc5da;
  }
 `;

const DateWrapper = styled.div`
display: flex;
flex-direction: row;
margin: 8px 0 8px 0;
`;

const H2 = styled.h2`
  font-size: 16px;
  margin: 0 4px 0 0;
  font-weight: bold;
  font-family: 'Helvetica', sans-serif;
  color: ${(props) => (props.show ? 'white' : 'none')};
  margin-left: ${(props) => (props.show ? '5px' : '0px')};
`;

const DateText = styled.span`
  font-size: 16px;
  margin-right: 10px;
  font-family: 'Helvetica', sans-serif;
  color: ${(props) => (props.show ? 'white' : 'none')};
`;

const AccordionContent = styled.div`
  padding: 8px 0 8px 0;
  background-color: #1F479F; 
  display: ${(props) => (props.show ? 'flex' : 'none')};
`;
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
`;

export const ForecastItem = ({ item, currentWeather }) => {
  const [showForecast, setShowForecast] = useState(false);

  const toggleForecast = () => {
    setShowForecast(!showForecast);
  };

  const capitalizeFirstLetter = (str) => {
    if (str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <ContentWrapper key={item.dt}>
      <AccordionHeader onClick={toggleForecast} show={showForecast}>
        <DateWrapper>
          <H2 show={showForecast}>{formatWeekday(currentWeather.dt, item.dt)}</H2>
          <DateText show={showForecast}>{formatDate(item.dt)}</DateText>
        </DateWrapper>
        <FontAwesomeIcon
          icon={showForecast ? faChevronUp : faChevronDown}
          style={{ color: showForecast ? 'white' : '#1F479F', fontSize: '14px', marginRight: '5px' }} />
      </AccordionHeader>
      <AccordionContent show={showForecast}>
        <WeatherText>{capitalizeFirstLetter(item.weather[0]?.description)}</WeatherText>
        <WeatherText>, feels like {Math.floor(item.main.feels_like)}</WeatherText>
      </AccordionContent>
      <Line />
    </ContentWrapper>
  );
};
