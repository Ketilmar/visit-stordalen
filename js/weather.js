
let weatherData = ""
const weatherToday = document.querySelector("#weather-today");



// fetches weather data from yr API. Here you can select different values and days to show
async function fetchWeather() {
    let response = await fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.950526&lon=5.684238")
    console.log(response);

    let responseJson = await response.json();
    console.log(responseJson.properties.timeseries[0]);

    responseJson.properties.timeseries.forEach(element => {
        console.log(element.data.instant.details.wind_speed);
    });

    console.log(responseJson.properties.timeseries[0].data.instant.details.wind_speed);
    weatherData = responseJson.properties.timeseries[0].data.next_1_hours.summary.symbol_code
    
    addWeather()
}


 // creates an p>img nodes with weather icon from yr.no
function addWeather() {
    
    const pEl = document.createElement("img");
    pEl.src = "ico/weather_ico/" + weatherData + ".png";
    console.log(pEl);

    weatherToday.append(pEl)
}




// document.getElementById("weather-btn").addEventListener("click", (e) => {
//     fetchWeather()
    
// })