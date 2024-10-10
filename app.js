// selecting elements

const cityInput = document.getElementById("city");
const btn = document.getElementById("btn");
const cityNameElement = document.getElementById("City-Name");
const temperatureElement = document.getElementById("temperature");
const statusElement = document.getElementById("status");
const minMaxTempElement = document.getElementById("min-max-temp");
const humidityElement = document.getElementById("humidity");
const windElement = document.getElementById("wind-speed");
const pressureElement = document.getElementById("pressure");
const seaLevelElement = document.getElementById("sea-level");
const visibilityElement = document.getElementById("visibility");
const feelsLikeElement = document.getElementById("feels-like");
const cloudsElement = document.getElementById("clouds");
const grLevelElements = document.getElementById("gr-level");

// eventListener to get weather data
btn.addEventListener("click", getWeatherData);

// eventListener for Enter press
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeatherData();
  }
});

// function to get wheather data

function getWeatherData() {
  const city = cityInput.value.trim();
  if (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4bf993f310895cde2b15674a5465119d`
    )
      .then((response) => response.json())
      .then((data) => {
        cityNameElement.textContent = data.name;
        temperatureElement.textContent = `${data.main.temp}°c`;
        statusElement.textContent = data.weather[0].description;
        minMaxTempElement.textContent = `${data.main.temp_min}- ${data.main.temp_max}°c`;
        humidityElement.textContent = `${data.main.humidity}%`;
        windElement.textContent = `${data.wind.speed}m/s`;
        pressureElement.textContent = `${data.main.pressure}hPa`;
        seaLevelElement.textContent = `${data.main.sea_level}m`;
        visibilityElement.textContent = `${data.visibility}m`;
        feelsLikeElement.textContent = `${data.main.feels_like}°c`;
        cloudsElement.textContent = `${data.clouds.all}%`;
        grLevelElements.textContent = `${data.main.grnd_level}m`;
      })
      .catch((error) => console.error(error));
  } else {
    alert("Please enter City name");
  }
  cityInput.value = "";
}
