

// Personal API Key for OpenWeatherMap API
const appId = '*****************************';
let zipCode = '37209';
let unit = 'imperial';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather`

const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const date = document.querySelector('.date');
const icon = document.querySelector('.icon-pic');
const weatherDesc = document.querySelector('.weather-description');
const weatherCard = document.querySelector('.weather-card');
let tempColor = { hotTemp: "hot-color", warmTemp: "warm-color", coolTemp: "cool-color", coldTemp: "cold-color"};
let colorTemp = '';

const getNewDate = () => {
    const date = new Date();
    return date.toDateString();
};

const changeColor = (temp) => {
    let tempInt = parseInt(temp);

    //Using the hot temp class
    if(tempInt >= 75){
        return tempColor.hotTemp;
    }
    //Using warm tempetures
    else if (tempInt >= 70) {
        return tempColor.warmTemp;
    } 
    //Using cool temp
    else if(tempInt >= 40) {
        return tempColor.coolTemp;
    }
    else {
        return tempColor.coldTemp;
    }
};

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */
function updateData() {
    zipCode = document.getElementById('zipCode').value;
    console.log(zipCode);
    getWeather(`${weatherUrl}?zip=${zipCode}&units=${unit}&appid=${appId}`).then(response => {
        console.log(response);
        city.textContent = `${response.name}`;
        temp.textContent = `${response.main.temp}`;
        const weather = response.weather[0];
        weatherDesc.textContent = weather.description;
        icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.icon}.png`);
        date.textContent = getNewDate();
        weatherCard.classList.remove('hidden');
        let myTemp = changeColor(temp.textContent);
        if(colorTemp !== ''){
            weatherCard.classList.replace(colorTemp, myTemp);
        }
        else{
            weatherCard.classList.add(myTemp);
        }
        colorTemp = myTemp;
    });
}

/* Function to GET Web API Data*/
const getWeather = async (url = '', data ={}) => {
    console.log(data);
    const response = await fetch(url);
    return response.json();
}
/* Function to POST data */

/* Function to GET Project Data */


