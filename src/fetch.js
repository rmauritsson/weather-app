const fetchData = (() => {
  const api = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '4da1db128530972d07e307d26325f8b6';

  const location = document.getElementById('location-title')

  const getWeather = async (city) => {
    const response = await fetch(`${api}${city},&APPID=${key}`, { mode: 'cors' });
    const data = await response.json();

    location.textContent = data.name;
    
    console.log(data);
  };
  return {
    getWeather,
  };
})();
export default fetchData;
