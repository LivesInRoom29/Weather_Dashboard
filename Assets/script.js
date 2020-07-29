$(document).ready(function() {
    const inputEl = $('input#city-search');
    const searchBtn = $('button.search');
    const cityDateEl = $('h2.city-date');

    // function getWeatherIcon(weather) {
    //     const hour = moment().hour();
    //     const sunrise = moment.unix(weather.)
    //     if (weather === 'clear sky') {
    //         if (hour > 5 && hour < )
    //     }
    // }

    function displayCurrentWeather(weatherObject) {
        const currentDate = moment().format('M/D/YYYY')
        cityDateEl.text(`${weatherObject.name} (${currentDate})`)
    }

    searchBtn.on("click", function() {
        event.preventDefault();
        const zipcode = inputEl.val()

        $.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=e21d1a963abbd9effdb612578581c76c`)
        .then(function(response) {

            console.log(response)
            console.log(response.name);
            displayCurrentWeather(response)
        });
    })
});