import $ from "jquery";

const myArray = [];

//Retrieving Data and how/where to render
const WEATHER_APP_API_LOCATION =
  "api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml";

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
  $(".forecast").html(results);
}

//Render Results
function renderResults() {}
