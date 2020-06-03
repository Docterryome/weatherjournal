// Personal API Key for OpenWeatherMap API
const appId = '0e50792790573baca2666d4a9ea1109f';
const zipCode = '38671';
const unit = 'imperial';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=${unit}&appid=${appId}`

const city = document.getElementById('city');
const temp = document.getElementById('temp');

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/
const getWeather = async (url = '', data ={}) => {
    console.log(data);
    const response = await fetch(url);
    return response.json();
}
/* Function to POST data */

/* Function to GET Project Data */
getWeather(weatherUrl).then(response => {
    console.log(response);
    city.textContent = `City: ${response.name}`;
    temp.textContent = `Tempeture: ${response.main.temp}`;
});