import 'whatwg-fetch';
import fillInResult from './fill-in-result';

const form = document.querySelector('.search-prompt');
const searchButton = document.querySelector('.search');
const results = document.querySelector('.results');
const resetButton = document.querySelector('.reset');

searchButton.addEventListener('click', () => {
  if (form.value === '') {
    return;
  }
  fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${form.value}&days=5&units=I&key=ee70dbb4c92e416ab321865b456f5fda`)
  .then(res => res.json()
  ).then((data) => {
    form.value = '';
    results.innerHTML = '';
    fillInResult(results, data);
  });
});

resetButton.addEventListener('click', () => {
  results.innerHTML = '<h3 class="empty-text">Search a location to get its 5-day weather forecast.</h3>';
});

window.addEventListener("unhandledrejection", function(err, promise) {
  form.value = '';
  alert(`We couldn't find that city. Please search by city name followed by state or country code. ex) Lexington, KY or London, GB`);
});
