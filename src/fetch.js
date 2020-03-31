import display from './display';

const fetchData = (() => {
  const api = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '4da1db128530972d07e307d26325f8b6';

  const location = document.querySelector('#location-title');
  const temp = document.getElementById('degree');
  const desc = document.getElementById('desc');

  const setDOM = (entry) => {
    console.log(entry);

    console.log(location);
    location.textContent = `${entry.name}`;
  };

  const getWeather = async (city) => {
    const response = await fetch(`${api}${city},&APPID=${key}`, { mode: 'cors' });
    const data = await response.json();

    setDOM(data);
  };

  return {
    getWeather,
  };
})();
export default fetchData;
