//Users search for valid city and state
function searchCity() {}

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
function renderResults() {}

//Callback function
function watchSubmit() {
	searchData(data, renderResults);
}

//$(watchSubmit);
