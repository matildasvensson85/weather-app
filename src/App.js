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

  const formattedDateOptions = {
    // weekday: 'long',
    // year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  function formatTime(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString([], { timeStyle: 'short' });
  }

  function formatDate(timestamp) {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', formattedDateOptions);
  }

  return (
    <>
      {currentWeather && currentWeather.weather && currentWeather.weather[0] && (
        <div>
          <h1>{currentWeather.name}</h1>
          <h2>Today</h2>
          <p>{formatDate(currentWeather.dt)}</p>
          <p>{currentWeather.weather[0].main}</p>
          <p>{Math.floor(currentWeather.main.temp)} °C</p>
          <p>Sunrise: {formatTime(currentWeather.sys.sunrise)}</p>
          <p>Sunset: {formatTime(currentWeather.sys.sunset)}</p>
        </div>
      )}

      <div>
        <h2>Forecast </h2>
        {weatherForecast?.list?.length ? (
          weatherForecast.list
            .filter((item) => item.dt_txt.includes('12:00'))
            .map((item) => (
              <div key={item.dt}>
                <p>{formatDate(item.dt)}</p>
                <p>{Math.floor(item.main.temp)} °C</p>
                {/* <p>{new Date(item.dt_txt)}</p> */}
                <p>{item.weather[0]?.description}</p>
                <p>feels like {Math.floor(item.main.feels_like)}</p>
              </div>
            ))
        ) : (
          <p>No forecast available</p>
        )}
      </div>
    </>
  )
};

