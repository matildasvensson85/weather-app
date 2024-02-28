
export function formatTime(timestamp) {
  return new Date(timestamp * 1000).toLocaleTimeString([], {
    timeStyle: 'short'
  });
}

export function formatDate(timestamp) {
  // const formattedDateOptions = {
  //   day: 'numeric',
  //   month: 'short'
  // };
  // return new Date(timestamp * 1000).toLocaleDateString(
  //   'en-US',
  //   formattedDateOptions
  // );
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });

  return `${day} ${month}`;
}

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
