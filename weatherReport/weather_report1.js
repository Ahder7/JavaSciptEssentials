function showWeatherDetails(event) {
    event.preventDefault();

    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = 'b21f2af195f671c539e9e158c5275006'; // Ensure this API key is correct
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Location not found. Please check the latitude and longitude values and try again.');
                } else {
                    throw new Error('Failed to fetch weather data. Please try again.');
                }
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                     <p>Temperature: ${data.main.temp} &#8451;</p>
                                     <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>${error.message}</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);
