function formatTime(date) {
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();
  let amPm = hours >= 12 ? "PM" : "AM";

  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours % 12 || 12;

  return hours + ":" + minutes + " " + amPm;
}

let currentTime = new Date();
let formattedTime = formatTime(currentTime);
let appTime = document.querySelector("#current-time");
appTime.innerHTML = formattedTime;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[currentTime.getDay()];

let appDay = document.querySelector("#current-day");
appDay.innerHTML = currentDay;

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function searchCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "c3650d7d0ad3c75tcafd67c27c4o8bd0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayTemperature);
}

let citySearch = document.querySelector("#city-search-form");
citySearch.addEventListener("submit", searchCity);
