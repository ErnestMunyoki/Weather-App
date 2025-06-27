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
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      alert("City not found");
      return;
    }

    const { latitude, longitude, name } = geoData.results[0];

    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m,precipitation&timezone=auto`);
    const weatherData = await weatherRes.json();

    const current = weatherData.current_weather;
    const hourly = weatherData.hourly;

    const currentHour = current.time.slice(0, 13);

    const currentIndex = hourly.time.findIndex(t => t.startsWith(currentHour));
    const humidity = currentIndex !== -1 ? hourly.relative_humidity_2m[currentIndex] : "--";
    const rain = currentIndex !== -1 ? hourly.precipitation[currentIndex] : "--";

    document.querySelector(".city").textContent = name;
    document.querySelector(".temp").textContent = `${current.temperature}°C`;
    document.querySelector(".humidity").textContent = `${humidity}%`;
    document.querySelector(".wind").textContent = `${current.windspeed} km/h`;
    document.querySelector(".rain").textContent = `${rain} mm`;
    document.querySelector(".weather-icon").src = "./assets/cloud.png"; 

  } catch (err) {
    console.error(err);
    alert("Failed to fetch weather data.");
  }
}

