// API key for weather data
const apiKey = 'YOUR_API_KEY';

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityDisplay = document.getElementById('city-display');
const temperatureDisplay = document.getElementById('temperature-display');
const humidityDisplay = document.getElementById('humidity-display');
const windSpeedDisplay = document.getElementById('wind-speed-display');
const weatherConditionDisplay = document.getElementById('weather-condition-display');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            cityDisplay.textContent = data.name;
            temperatureDisplay.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
            humidityDisplay.textContent = `${data.main.humidity}%`;
            windSpeedDisplay.textContent = `${data.wind.speed} m/s`;
            weatherConditionDisplay.textContent = data.weather[0].description;
        })
        .catch(error => console.error('Error fetching data:', error));
});