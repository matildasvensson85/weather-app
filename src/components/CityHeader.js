import React from 'react';
import Select from 'react-select';
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

const citySelector = {
  control: (provided) => ({
    ...provided,
    border: '1px solid #1D47B2',
    backgroundColor: 'transparent',
    height: '40px',
    width: '170px',
    fontSize: '16px'
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '8px 12px'
  })
};

export const CityHeader = ({ cityName, handleSelectCityChange }) => {
  console.log('cityname', cityName)

  const options = [
    { value: 'London,GB', label: 'London' },
    { value: 'New York,US', label: 'New York' },
    { value: 'Tokyo,JP', label: 'Tokyo' },
    { value: 'Paris,FR', label: 'Paris' },
    { value: 'Stockholm,Sweden', label: 'Stockholm' }
  ];

  return (
    <HeaderSection>
      <H1>{cityName}</H1>
      <Select
        options={options}
        isSearchable={false}
        onChange={handleSelectCityChange}
        placeholder="Select location"
        styles={citySelector} />
    </HeaderSection>
  )
}