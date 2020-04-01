import fetchData from './fetch';
import './css/style.css';

document.querySelector('.location').style.visibility = 'hidden';
document.querySelector('.temperature').style.visibility = 'hidden';

const clearForm = () => {
  document.querySelector('form').reset();
};
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formValue = document.getElementById('inputCity').value;
  fetchData.getWeather(formValue);
  clearForm();
});
