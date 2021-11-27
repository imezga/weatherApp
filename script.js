function weather(city) {
    fetch(
        'http://api.weatherapi.com/v1/current.json?key=559e0373a90b43788be230246212611&q=' +
            city +
            '&aqi=no'
    )
        .then((response) => response.json())
        .then((data) => displayWeather(data));
    function displayWeather(data) {
        const name = data.location.name;
        const temp = data.current.temp_c;
        const description = data.current.condition.text;
        const wind = data.current.wind_kph;
        document.querySelector('.city').innerText = name;
        document.querySelector('.temp').innerText = temp + ' °C';
        document.querySelector('.description').innerText = description;
        document.querySelector('.wind').innerText = 'Wind speed: ' + wind + ' km/h';
        document.querySelector('.search-bar').value = '';
    }
}

document.querySelector('.search button').addEventListener('click', function () {
    let searchValue = document.querySelector('.search-bar').value;
    weather(searchValue);
});

document.querySelector('.search-bar').addEventListener('keyup', function (event) {
    let searchValue = document.querySelector('.search-bar').value;
    if (event.key == 'Enter') {
        weather(searchValue);
    }
});
