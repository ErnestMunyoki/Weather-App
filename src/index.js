const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

searchButton.addEventListener("click", () => {
  const city = searchInput.value;
  if (city) {
    getWeather(city);
  }
});

async function getWeather(city) {
  try {
    // Step 1: Get coordinates
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      alert("City not found");
      return;
    }

    const { latitude, longitude, name } = geoData.results[0];

    // Step 2: Get weather data
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m,precipitation`);
    const weatherData = await weatherRes.json();

    const current = weatherData.current_weather;
    const currentIndex = weatherData.hourly.time.findIndex(t => t === current.time);
    const humidity = weatherData.hourly.relative_humidity_2m[currentIndex];
    const rain = weatherData.hourly.precipitation[currentIndex];
    const wind = current.windspeed;

    // Update UI
    document.querySelector(".city").textContent = name;
    document.querySelector(".temp").textContent = `${current.temperature}°C`;
    document.querySelector(".humidity").textContent = `${humidity}%`;
    document.querySelector(".wind").textContent = `${wind} km/h`;
    document.querySelector(".rain").textContent = `${rain} mm`;
    document.querySelector(".weather-icon").src = "./assets/cloud.png"; // Optional: make dynamic

  } catch (err) {
    console.error(err);
    alert("Error getting weather data.");
  }
}
