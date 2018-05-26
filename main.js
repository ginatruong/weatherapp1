import $ from 'jquery';
// import { WEATHER_API_LOCATION } from './config'; /// look for const and function
// import weatherApiService from './services';
import allofthedefault, { getTemperatures } from './services';

console.log(allofthedefault, getTemperatures);
// console.log(getTemperatures());
//Render Results
function renderResults(list) {
	return `
  <h2>${list.main.temp}</h2>
  <h3>${list.main.humidity}</h3>
  <ul>
  <li>${list.weather.main}</li>
  <li>${list.weather.description}</li>
  <li>${list.wind.speed}</li>
  </ul>`;
}

//Display Results
function displaySearchData(data) {
	const results = data.list.map((item, index) => renderResults(item));
	$('.forecast').html(results);
}

//Render Results
function renderResults() {}
