import display from './display';
import fetchData from './fetch';
import './css/style.css';

display.createDom();

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formValue = document.getElementById('inputCity').value;
  fetchData.getWeather(formValue);
});
