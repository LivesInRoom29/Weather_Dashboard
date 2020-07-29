$(document).ready(function() {

    const inputEl = $('input#city-search');
    const searchBtn = $('button.search');
    const cityDateEl = $('h2.city-date');
    const weatherIconEl = $('img#weather-icon');

    // Display the current weather, including weather icon, in the city-date heading
    // Display
    function displayCurrentWeather(weatherObject) {
        const currentDate = moment().format('M/D/YYYY');
        const weatherCondition = weatherObject.weather[0].main;
        console.log(weatherCondition);
        cityDateEl.text(`${weatherObject.name} (${currentDate})`);

        const iconURL = getWeatherIcon(weatherObject);
        weatherIconEl.attr('src', iconURL).attr('alt', weatherCondition);
    }

    // This function uses the current weather condition to select for the icons from https://openweathermap.org/weather-conditions
    function getWeatherIcon(weatherObj) {
        const iconURL = 'http://openweathermap.org/img/wn/';
        let fullIconURL = '';
        const hour = moment().format('HH.mm');
        const sunrise = moment.unix(weatherObj.sys.sunrise).format('HH.mm');
        console.log(sunrise);
        const sunset = moment.unix(weatherObj.sys.sunset).format('HH.mm');
        // Current weather conditions
        const weatherCond = weatherObj.weather[0].main;
        console.log(`The weather is ${weatherCond}`);

        switch(weatherCond) {
            case 'Clear':
                console.log("it's clear!!!")
                if (hour > sunrise && hour < sunset) {
                    fullIconURL = `${iconURL}01d.png`;
                } else {
                    fullIconURL = `${iconURL}01n.png`;
                }
                break;
            case 'Clouds':
                switch(weatherObj.weather[0].description) {
                    case 'few clouds':
                        // If it's daylight, use day time icons (end with d), otherwise, use night icons (end in n)
                        if (hour > sunrise && hour < sunset) {
                            fullIconURL = `${iconURL}02d.png`;
                        } else {
                            fullIconURL = `${iconURL}02n.png`;
                        }
                        break;
                    case 'scattered clouds':
                        // Day and Night icons are the same
                        fullIconURL = `${iconURL}03d.png`;
                        break;
                    case 'broken clouds':
                    case 'overcast clouds':
                        // Day and Night icons are the same
                        fullIconURL = `${iconURL}04d.png`;
                        break;
                }
            case 'Drizzle':
                // Day and Night icons are the same
                fullIcon = `${iconURL}09d.png`;
                break;
            case 'Rain':
                console.log(`Type of rain: ${weatherObj.weather[0].description}`)
                switch(weatherObj.weather[0].description) {
                    case 'light intensity shower rain':
                    case 'shower rain':
                    case 'heavy intensity shower rain':
                    case 'ragged shower rain':
                        // Day and Night icons are the same
                        fullIcon = `${iconURL}09d.png`;
                        break;
                    case 'freezing rain':
                        // Day and Night icons are the same
                        fullIconURL = `${iconURL}13d.png`;
                        break;
                    case 'light rain':
                    case 'moderate rain':
                    case 'heavy intensity rain':
                    case 'extreme rain':
                        // All other forms of rain (light rain, moderate rain, etc)
                        if (hour > sunrise && hour < sunset) {
                            fullIconURL = `${iconURL}10d.png`;
                        } else {
                            fullIconURL = `${iconURL}10n.png`;
                        }
                        break;
                }
            case 'Thunderstorm':
                // Day and Night icons are the same
                fullIconURL = `${iconURL}11d.png`;
                break;
            case 'Snow':
                // Day and Night icons are the same
                fullIconURL = `${iconURL}13d.png`;
                break;
            case 'Mist':
            case 'Smoke':
            case 'Haze':
            case 'Dust':
            case 'Fog':
            case 'Sand':
            case 'Ash':
            case 'Squall':
            case 'Tornado':
                fullIconURL = `${iconURL}50d.png`;
                break;
            default:
                console.log(`Some other weather form - ${weatherObj.weather[0].description}`);
                // Default to few clouds
                if (hour > sunrise && hour < sunset) {
                    fullIconURL = `${iconURL}02d.png`;
                } else {
                    fullIconURL = `${iconURL}02n.png`;
                }
                break;
        };
        console.log(fullIconURL);
        return fullIconURL;
    };

    searchBtn.on("click", function() {
        event.preventDefault();
        const zipcode = inputEl.val()

        $.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=e21d1a963abbd9effdb612578581c76c`)
        .then(function(response) {

            console.log(response);
            console.log(response.name);
            console.log(response.sys.sunrise);
            const sunset = moment.unix(response.sys.sunset).format('HH.mm');
            console.log(`Sunset is at ${sunset}`);

            displayCurrentWeather(response)
        });
    });

});