# clima-bot
Mini proyecto en Node.js para practicar consumo de APIs REST. Muestra el clima actual de cualquier ciudad usando OpenWeatherMap

## Instalación

1. Cloná el repo:
```bash
git clone TU_URL_DEL_REPO
cd nombre-del-repo 

2. Instala las dependencias
npm install

3. Crea un archivo .env en la raiz del proyecto con tu API Key:
WEATHER_API_KEY=tu_key_aqui
Podés conseguir una  gratis registrándote en openweathermap.org 

Uso
Ejecuta el bot pasando el nombre de la ciudad como argumento:
node index.js "Buenos Aires"
node index.js "Madrid"
node index.js "Tokyo"

Requisitos
Node.js 18 o superior
cuenta en OpenWeather para obtener la API key

Dependencias
dotenv Para cargar variables de entorno desde el archivo .env