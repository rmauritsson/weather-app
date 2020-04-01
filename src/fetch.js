const fetchData = (() => {
  const api = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '4da1db128530972d07e307d26325f8b6';

  const location = document.querySelector('#location-title');
  const temp = document.getElementById('degree');
  const desc = document.getElementById('desc');
  const unit = document.getElementById('change-degree');
  const symbol = document.getElementById('degree-symbol');
  const pressure = document.getElementById('pressure');
  const winds = document.getElementById('winds');
  let defaultStatus;
  let temperature;


  const convertToF = (celsius) => {
    temperature = Math.ceil((celsius / (5 / 9)) + 32);
    defaultStatus = 'F';
    temp.textContent = (`${temperature}`);
    symbol.textContent = ' °F ';
    unit.innerHTML = 'Change to Celsius';
  };

  const convertToC = (fahr) => {
    temperature = Math.ceil((fahr - 32) * (5 / 9));
    defaultStatus = 'C';
    temp.innerHTML = (`${temperature}`);
    symbol.textContent = ' °C ';
    unit.innerHTML = 'Change to Fahrenheit';
  };

  const setDOM = (entry) => {
    console.log(entry);
    defaultStatus = 'C';
    location.textContent = `${entry.name}, ${entry.sys.country}`;
    desc.textContent = `Description: ${entry.weather[0].description}`;
    temperature = Math.ceil(entry.main.temp - 273.15);
    temp.textContent = temperature;
    symbol.textContent = ' °C ';
    pressure.textContent = `Pressure: ${entry.main.pressure} hPa`;
    winds.textContent = `Wind Speeds: ${entry.wind.speed} Km/h`;
    unit.innerHTML = 'Change to Fahrenheit';
    document.querySelector('.location').style.visibility = 'visible';
    document.querySelector('.temperature').style.visibility = 'visible';
  };

  const setIcon = (status) => {
    const icon = `${status.weather[0].icon}`;

    const weatherStatus = document.getElementById('icon');
    weatherStatus.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  const getWeather = async (city) => {
    const response = await fetch(`${api}${city},&APPID=${key}`, { mode: 'cors' });
    const data = await response.json();

    setDOM(data);
    setIcon(data);
  };

  document.getElementById('change-degree').addEventListener('click', () => {
    if (defaultStatus === 'C') {
      convertToF(temperature);
    } else if (defaultStatus === 'F') {
      convertToC(temperature);
    }
  });
  return {
    getWeather,
  };
})();
export default fetchData;
