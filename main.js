// import $ from 'jquery';
// import { WEATHER_API_LOCATION } from './config'; /// look for const and function
// import weatherApiService from './services';
// import allofthedefault, { getTemperatures } from './services';
// import { WEATHER_API_LOCATION } from './config';

// console.log(allofthedefault, getTemperatures);

const WEATHER_API_LOCATION =
	'https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=21dc8127c4113d0d36a388170c2d653a';
//Get data from API
function getDataFromApi(searchTerm, callback) {
	const settings = {
		url: WEATHER_API_LOCATION,
		data: {
			q: `{searchTerm} in:city`
		},
		dataType: 'json',
		type: 'GET',
		success: callback
	};
	$.ajax(settings);
}

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
  <li>${list.temp_min}</li>
  <li>${list.temp_max}</li>
  </ul>`;
}

//Display Results
function displaySearchData(data) {
	const results = data.list.map((item, index) => renderResults(item));
	$('.forecast').html(results);
}

function watchSubmit() {
	$('.#searchForm').submit((event) => {
		event.preventDefault();
		const cityInput = $(event.currentTarget).find('#cityInput');
		const citySearch = cityInput.val();
		cityInput.val('');
		getDataFromApi(citySearch, displaySearchData);
	});
}
