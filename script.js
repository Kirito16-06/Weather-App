function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '191d9b5edccdbc4960381d95a7581612'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weatherTitle').innerText = 'CURRENT WEATHER';
            document.getElementById('time').innerText = new Date().toLocaleTimeString();
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
            document.getElementById('pressure').innerText = `Pressure: ${data.main.pressure} hPa`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}