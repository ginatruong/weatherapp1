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
  </div>
  <div class="main-weather-section">
  <p class="convert-to-next" data-kelvin="${list.main.temp}">${list.main.temp} &#8457</p>
  <h3 class="humidity">Humidty: ${list.main.humidity}%</h3>
  <ul class="weather-description">
  <li>${list.weather[0].description}</li>
  </ul>
  </div>`;
}

function convertToCurrentTemp(kelvinTemp) {
	// return `do the conversion, ${kelvinTemp}`;
	// let results = (kelvinTemp - 273.15) * 1.8 + 32;
	// return results;
	let results = kelvinTemp;
	// let resultF = `$('#unitOfMeasure').val('F')`;
	// // let resultC = `$('[value='C']')`;
	// // console.log(resultF);

	return ((results - 273.15) * 1.8 + 32).toFixed() + '&#8457';
}
// else if (resultC) {
// 	return (results - 273.15).toFixed() + '&#8450';
// } else {
// 	console.log('error');
// }

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

//weather icons
function weatherIcon() {
	if (`${list.weather[0].description}.match(/clouds/gi'`) {
		return $('.img-section').addClass('cloudy-icon');
		// return `<img src="./assets/cloudy.png" alt="cloudy-pic">`;
	} else if (`${list.weather[0].description}.match(/clear-sky/gi'`) {
		return $('.img-section').addClass('sunny');
		// return `<img src="./assets/sunny.png" alt="sunny-pic">`;
	} else if (`${list.weather[0].description}.match(/rain/gi'`) {
		return $('.img-section').addClass('heavy-rain');
		// return `<img src="./assets/rain.png" alt="rainy-pic">`;
	} else if (`${list.weather[0].description}.match(/thunder/gi'`) {
		return $('.img-section').addClass('thunderstorm');
		// return `<img src="./assets/thunderstorm.png" alt="thunderstorm-pic">`;
	} else if (`${list.weather[0].description}.match(/snow/gi'`) {
		return $('.img-section').addClass('snow');
		// return `<img src="./assets/snow.png" alt="snow-pic">`;
	} else if (`${list.weather[0].description}.match(/moon/gi'`) {
		return $('.img-section').addClass('moon-night');
		// return `<img src="./assets/moon.png" alt="moon-pic">`;
	}
}
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
	convertToCurrentTemp();
}, 250);

$('#searchForm').on('submit', (event) => {
	event.preventDefault();
	const input = $('#cityInput');
	getDataFromApi(input.val(), displaySearchData);
	input.val('');
	weatherIcon();
});
