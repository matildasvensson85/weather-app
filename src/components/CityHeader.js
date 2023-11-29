import React from 'react';
import styled from 'styled-components';

export const CityHeader = ({ cityName, selectedCity, handleSelectCityChange }) => {
  const HeaderSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  `

  const H1 = styled.h1`
    font-size: 30px;
    margin: 0;
  `

  const CitySelector = styled.select`
    border: 1px solid #1D47B2;
    background-color: transparent;
    height: 40px;
    color: black;
    font-size: 16px;
  `

  return (
    <HeaderSection>
      <H1>{cityName}</H1>
      <CitySelector value={selectedCity} onChange={handleSelectCityChange}>
        <option value="" disabled>Select location</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </CitySelector>
    </HeaderSection>
  )
}