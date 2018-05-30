import $ from 'jquery';
import { WEATHER_API_LOCATION, WEATHER_API_KEYS } from './config'; /// look for const and function

//Get data from API
function getDataFromApi(searchTerm, callback) {
	$.ajax({
		url: WEATHER_API_LOCATION,
		data: {
			//...WEATHER_API_KEYS
			id: WEATHER_API_KEYS.id,
			APPID: WEATHER_API_KEYS.APPID,
			q: `${searchTerm} in:city`
		},
		dataType: 'json',
		type: 'GET',
		success: callback
	});
}

//Render Results
function renderResults(list) {
	return `
	<br>
  <div class="img-section">	
	<img src="#" alt="">
  </div>
  <div class="main-weather-section">
  <p class="main-temp" id="outputTemperature">${list.main.temp}</p>
  <h3 class="humidity">Humidty: ${list.main.humidity}%</h3>
  <ul class="weather-description">
  <li>${list.weather[0].description}</li>
  <li>${list.weather[0].icon}</li>
  <li>${list.main.temp_min} | ${list.main.temp_max}</li>
  </ul>
  </div>`;
}

//converting Temps
function convertingTempsF(valNumF) {
	valNumF = parseFloat(`${list.main.temp}`);
	$('#outputTemperature').html((valNum - 273.15) * 1.8) + 32;
}

function convertingTempsC(valNumC) {
	valNumC = parseFloat(`${list.main.temp}`);
	$('#outputTemperature').html(valNum - 273.15);
}

//Display Results
function displaySearchData(data) {
	const [ first, second, third ] = data.list.map((item, index) => renderResults(item));
	$('.forecast').html([ first, second, third ]);
}

$('#searchForm').submit((event) => {
	event.preventDefault();
	const input = $('#cityInput');
	getDataFromApi(input.val(), displaySearchData);
	input.val('');
	convertingTemps();
});
