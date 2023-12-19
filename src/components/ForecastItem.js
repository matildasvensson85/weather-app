import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { formatDate, formatWeekday } from 'utils/dateUtils';

const ForecastContainer = styled.div`
// ... your styles
`

const ForecastInfo = styled.div`
  margin-top: 0px;
  display: ${(props) => (props.show ? 'flex' : 'none')};
`

const HeaderContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: 1px solid black; */
  cursor: pointer;
  width: 100%;
  transition: background-color 0.4s ease;
  margin: 0;
  &:hover {
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
  margin: 0 0 0 0;
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
    <ForecastContainer key={item.dt}>
      <HeaderContent onClick={toggleForecast}>
        <DateInfo>
          {showForecast
            ? <FontAwesomeIcon icon={faChevronUp} style={{ marginRight: '5px' }} />
            : <FontAwesomeIcon icon={faChevronDown} style={{ marginRight: '5px' }} />}
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
  )
}
