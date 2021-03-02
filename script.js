'use strict';

fetch('http://api.openweathermap.org/data/2.5/weather?q=Krasnoyarsk&appid=e2766189ba49d4f9e8041f1d097fc2e9')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.city-temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.weather-desc').textContent = data.weather[0]['description'];
        document.querySelector('.weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });