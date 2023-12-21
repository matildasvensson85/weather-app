import React from 'react';
import styled from 'styled-components';

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

// export const CityHeader = ({ cityName, selectedCity, handleSelectCityChange }) => {
export const CityHeader = ({ cityName, handleSelectCityChange }) => {
  // console.log('selected city', selectedCity)
  console.log('cityname', cityName)
  return (
    <HeaderSection>
      <H1>{cityName}</H1>
      <CitySelector onChange={handleSelectCityChange}>
        {/* <CitySelector onChange={handleSelectCityChange}> */}
        {/* <option value="" disabled>Select location</option> */}
        <option selected disabled>Select location</option>
        <option value="London,GB">London</option>
        <option value="New York,US">New York</option>
        <option value="Tokyo,JP">Tokyo</option>
        <option value="Paris,FR">Paris</option>
        <option value="Stockholm,Sweden">Stockholm</option>
      </CitySelector>
    </HeaderSection>
  )
}