// Format a timestamp into a short time string
export function formatTime(timestamp) {
  return new Date(timestamp * 1000).toLocaleTimeString([], {
    timeStyle: 'short'
  });
}

// Format a timestamp into a formatted date string.
export function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  return `${day} ${month}`;
}

// Determine the weekday based on the provided timestamps.
// If the forecast is for tomorrow, return 'Tomorrow', otherwise return the full weekday name.
export function formatWeekday(currentTimestamp, forecastTimestamp) {
  const tomorrowTimestamp = currentTimestamp + 86400;
  const tomorrowDate = new Date(tomorrowTimestamp * 1000);
  const forecastDateObject = new Date(forecastTimestamp * 1000);

  if (
    forecastDateObject.getDate() === tomorrowDate.getDate()
    && forecastDateObject.getMonth() === tomorrowDate.getMonth()
    && forecastDateObject.getFullYear() === tomorrowDate.getFullYear()
  ) {
    return 'Tomorrow';
  } else {
    return new Date(forecastTimestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'long'
    });
  }
}
