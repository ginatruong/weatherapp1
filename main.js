//Retrieving Data and how/where to render
let weatherAppSearch = 'api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml';

function searchData(searchTerm, callback) {
	const query = {
		url: weatherAppSearch,
		data: {
			q: `${searchTerm} in: main, weather, clouds`
		},
		dataType: 'json',
		type: 'GET',
		success: callback
	};
	$.ajax(query);
}

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

//Callback function
function watchSubmit() {
	searchData(data, renderResults);
}

//$(watchSubmit);
