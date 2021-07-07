console.log("Hello!")
    // fetch from https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    //for current weather info

// fetch from https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//for 5 day and other info like uvi
var city = "Houston"
    //global variable
var apiKey = "9f56e2f7b2492ec2652d532b7d889700"
    // same day variables
    // var userInput = $('#submitBtn');

//day variables
var day = $('#day');
var dayCity = $('#dayCity');
var dayIcon = $('#dayIcon');
var dayTemperature = $('#dayTemperature');
var dayCurrent = $('#dayCurrent');
var dayWind = $('#dayWind');
var dayHumid = $('#dayHumid');
var dayUV = $('#dayUV');
var fiveDayWeather = $('.fiveDayWeather');
var fiveDayDate = $('.fiveDayDate');
var fiveDayTemp = $('.fiveDayTemp');
var fiveDayPhoto = $('.fiveDayPhoto');
var fiveDayWind = $('.fiveDayWind');
var fiveDayHumid = $('.fiveDayHumid');

fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.main.temp)
        document.getElementById("text").textContent = data.main.temp + " Fahrenheit"

        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + apiKey + "&units=imperial")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                document.getElementById('dayHumid').textContent = data.current.humidity + " Humidity"
                document.getElementById('dayUV').textContent = data.current.uvi + " UV"
                document.getElementById('dayWind').textContent = data.current.wind_speed + " Wind"
                document.getElementById('dayTemperature').textContent = data.current.temp + " Temperature"

            })


    })