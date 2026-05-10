require('dotenv').config();

const city = process.argv[2] || "Buenos Aires";
const apiKey = process.env.WEATHER_API_KEY;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

/**
 * Obtiene y muestra el clima actual de la ciudad configurada.
 *
 * La funcion consulta la API de OpenWeatherMap usando la URL construida con la
 * ciudad, la clave de API, unidades metricas y el idioma espanol. Si la
 * respuesta HTTP no es exitosa, lanza un error para indicar que la ciudad no
 * fue encontrada.
 *
 * El manejo de errores se realiza mediante un bloque try/catch: dentro del
 * try se ejecuta la solicitud, se valida la respuesta y se procesan los datos;
 * en el catch se captura cualquier error producido durante la consulta o el
 * procesamiento, y se imprime un mensaje de error por consola.
 *
 * Los datos obtenidos se imprimen en la consola en espanol, incluyendo nombre
 * de la ciudad, temperatura, estado del clima y humedad.
 *
 * @async
 * @function getWeather
 * @returns {Promise<void>} No devuelve datos; escribe el resultado o el error en consola.
 */
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
