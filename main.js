import $ from 'jquery';
import { WEATHER_API_LOCATION, WEATHER_API_KEYS } from './config'; /// look for const and function
let unitOfMeasure = 'F';
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
  <p class="convert-to-next" data-kelvin="${list.main.temp}">${list.main.temp}</p>
  <h3 class="humidity">Humidty: ${list.main.humidity}%</h3>
  <ul class="weather-description">
  <li>${list.weather[0].description}</li>
  <li>${list.main.temp_min} | ${list.main.temp_max}</li>
  </ul>
  </div>`;
}

function convertToCurrentTemp(kelvinTemp) {
	return `haha do the conversion, ${kelvinTemp}`;
}

function changeTemp() {
	$('.convert-to-next').each(function(index) {
		const newTemp = convertToCurrentTemp($(this).attr('data-kelvin'));
		$(this).html(newTemp);
	});
}
// for (let i = 0; i < element.length; i++) {
// 	console.log('hi');
// }
// //converting Temps K to F (original)
// function convertingTempsF(valNumF) {
// 	$('#outputTemperature').html((parseFloat(valNumF) - 273.15) * 1.8) + 32;
// }

// //converting Temps from F to C
// function convertingTempsC(valNumC) {
// 	$('.toggleBtnF').on('click', function(event) {
// 		valNumC = parseFloat(valNumC);
// 		$('#outputTemperature').html(valNumC - 32) / 1.8;
// 	});
// }

// //converting C to F
// function convertingTempsbacktoF(tempF) {
// 	$('.toggleBtnC');
// 	tempF = parseFloat(tempF);
// 	$('#outputTemperature').html(tempF * 1.8) + 32;
// }

$('#unitOfMeasure').on('change', function(event) {
	unitOfMeasure = $(this).val();
	changeTemp();
});

//Display Results
function displaySearchData(data) {
	const [ first, second, third ] = data.list.map((item, index) => renderResults(item));
	$('.forecast').html([ first, second, third ]);
}

setTimeout(() => {
	const input = $('#cityInput');
	getDataFromApi(input.val(), displaySearchData);
}, 250);

$('#searchForm').on('submit', (event) => {
	event.preventDefault();
	const input = $('#cityInput');
	getDataFromApi(input.val(), displaySearchData);
	input.val('');
});
