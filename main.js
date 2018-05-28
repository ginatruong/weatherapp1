import $ from "jquery";
import { WEATHER_API_LOCATION, WEATHER_API_KEYS } from "./config"; /// look for const and function

console.clear();
console.log("--------- Application Rebundled ---------");
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
    dataType: "json",
    type: "GET",
    success: callback
  });
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
  $(".forecast").html(results);
}

$("#searchForm").submit(event => {
  event.preventDefault();
  const input = $("#cityInput");
  getDataFromApi(input.val(), displaySearchData);
  input.val("");
});
