# 🌦️ Weather App

A responsive weather app that displays the **current weather conditions** for any city using the [Open-Meteo API](https://open-meteo.com/). Built with **HTML, CSS, and JavaScript**, it shows temperature, humidity, wind speed, and precipitation.

---

## 🚀 Features

- 🌍 Search for any city
- 🌡️ Displays current temperature
- 💧 Shows humidity and rain probability
- 🌬️ Wind speed display
- 📱 Responsive and modern UI
- ⚡ Powered by Open-Meteo (no API key needed)

---

## 🖼️ Preview

![Weather App UI Screenshot](./assets/preview.png)

---

## 📁 Project Structure


---

## ⚙️ How It Works

1. User enters a **city name**
2. The app uses **Open-Meteo Geocoding API** to get the city's coordinates
3. It then fetches **current weather and hourly data** from the Open-Meteo Forecast API
4. DOM is updated to reflect:
   - Temperature
   - Humidity
   - Wind speed
   - Precipitation (rain)

---

## 📦 API Reference

- **Geocoding:**  
  `https://geocoding-api.open-meteo.com/v1/search?name={city}`

- **Forecast:**  
  `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true&hourly=relative_humidity_2m,precipitation&timezone=auto`

---

## 🔧 Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app

✅ No build tools or API keys needed.




🧠 Future Improvements
 Add weather icons based on condition

 Store daily history in localStorage

 Add 7-day forecast chart

 Dark/light theme toggle




👨‍💻 Author
Ernest Munyoki
JavaScript Developer | Open-Meteo Enthusiast




📄 License
This project is open-source and free to use under the MIT License.

yaml
Copy
Edit
