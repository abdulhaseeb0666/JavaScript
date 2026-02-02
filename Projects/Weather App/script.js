// lat = 30.19;
// lon = 71.49;
apikey = "f0bb42e8b49d2de5508fadafc08ef870";
city = document.getElementById("input-city");
button = document.getElementById("get-weather-btn");
cityinDocument = document.getElementsByClassName("city");
DateinDocument = document.getElementsByClassName("date");
tempinDocument = document.getElementsByClassName("temp");
conditioninDocument = document.getElementsByClassName("condition");
humidity = document.getElementById("humidity");
wind = document.getElementById("wind");

// Agar Latitude or Longtitude se data lena ho to upar wali line use karen
// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`)

button.addEventListener("click", getWeather);

function getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}`)
    .then(rawData => rawData.json())
    .then(data => {
        console.log(data);
        console.log("Temperature (K):", data.main.temp);
        DegreeCelcius = (data.main.temp - 273.15).toFixed(2);
        cityinDocument[0].innerText = city.value;
        DateinDocument[0].innerText = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
        tempinDocument[0].innerText = DegreeCelcius + "°C";
        conditioninDocument[0].innerText = data.weather[0].main;
        humidity.innerText = data.main.humidity + "%";
        wind.innerText = data.wind.speed + " km/h";
        city.value = "";
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
    });
}