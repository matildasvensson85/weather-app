import React, { useState, useEffect } from 'react';

// Global variables
const API_KEY = '4b089f476bd9961f1c727a0625472b1f';

export const App = () => {
  const [currentWeather, setCurrentWeather] = useState();
  console.log('currentWeather', currentWeather);
  const [weatherForecast, setWeatherForecast] = useState();
  console.log('weatherForecast', weatherForecast);

  const fetchCurrentWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCurrentWeather(data))
      .catch((err) => console.error(err));
  };

  const fetchWeatherForecast = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setWeatherForecast(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  useEffect(() => {
    fetchWeatherForecast();
  }, []);

  return (
    <>
    </>
  )
};
