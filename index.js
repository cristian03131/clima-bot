require('dotenv').config();

const city = process.argv[2] || "Buenos Aires";
const apiKey = process.env.WEATHER_API_KEY;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

async function getWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ciudad no encontrada");

    const data = await response.json();
    console.log(`🌡️ Clima en ${data.name}:`);
    console.log(`Temperatura: ${data.main.temp}°C`);
    console.log(`Estado: ${data.weather[0].description}`);
    console.log(`Humedad: ${data.main.humidity}%`);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getWeather();
