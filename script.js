const apiKey = "ba8cdbfd09c2a67e08f8091ce7274d58";
const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const icon = document.getElementById("icon");
searchBtn.addEventListener("click", async function () {

    const city = cityInput.value.trim();
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    if (data.cod != 200) {
        alert(data.message);
        return;
    }
    cityName.innerText = data.name;
temp.innerText = Math.round(data.main.temp) + "°C";
weather.innerText = data.weather[0].main;
humidity.innerText = "Humidity : " + data.main.humidity + "%";
wind.innerText = "Wind : " + data.wind.speed + " km/h";
icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
});