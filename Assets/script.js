$(document).ready(function() {

    const inputEl = $('input#city-search');
    const searchBtn = $('button.search');
    const cityDateEl = $('h2.city-date');
    const weatherIconEl = $('img#weather-icon');
    const hour = moment().format('HH.mm');
    const tempEl = $('p.temp');
    const humidityEl = $('p.humidity');
    const windEl = $('p.wind');
    const uvIndexPar = $('p.uv-index');
    const uvIndexSpan = $('span#uvindex');

    // Array containing weather details and corresponding icons from OpenWeather API
    const weatherIconArray = [
        {weather:'Clear', imgD:'01d.png', imgN:'01n.png'},
        {weather:'Clouds', details:[
            {description:'few clouds', imgD:'02d.png', imgN:'02n.png'},
            {description:'scattered clouds', imgD:'03d.png', imgN:'03n.png'},
            {description:'broken clouds', imgD:'04d.png', imgN:'04n.png'},
            {description:'overcast clouds', imgD:'04d.png', imgN:'04n.png'}
            ]
        },
        {weather:'Drizzle', imgD:'09d.png', imgN:'09n.png'},
        {weather:'Rain', details:[
            {
                descriptions:['light intensity shower rain', 'shower rain', 'heavy intensity shower rain', 'ragged shower rain'],
                imgD:'09d.png',
                imgN:'09n.png'
            },
            {description:'freezing rain', imgD:'13d.png', imgN:'13n.png'},
            {
                descriptions:['light rain', 'moderate rain', 'heavy intensity rain', 'extreme rain'],
                imgD:'10d.png',
                imgN:'10n.png'
            }
            ]
        },
        {weather:'Thunderstorm', imgD:'11d.png', imgN:'11n.png'},
        {weather:'Snow', imgD:'13d.png', imgN:'13n.png'},
        {weather:['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado'], imgD:'50d.png', imgN:'50n.png'},
    ];

    function getWeatherIcon(weatherObj) {
        const iconURL = 'http://openweathermap.org/img/wn/';
        let fullIconURL = '';
        const sunrise = moment.unix(weatherObj.sys.sunrise).format('HH.mm');
        const sunset = moment.unix(weatherObj.sys.sunset).format('HH.mm');
        // Current weather conditions
        const weatherCond = weatherObj.weather[0].main;

        // Get the index of the array where the oject in the array contains the weather condition as a value
        const index = weatherIconArray.findIndex(x => x.weather === weatherCond);

        // If the object has weather, imgD and imgN
        if (Object.keys(weatherIconArray[index]).length === 3) {
            // If it's between surise and sunset, use the daytime icon (imgD), otherwise use the nighttime icond (imgN)
            if (hour > sunrise && hour < sunset) {
                fullIconURL = iconURL + weatherIconArray[index].imgD;
            } else {
                fullIconURL = iconURL + weatherIconArray[index].imgN;
            }
        } else {
            const detailsArray = weatherIconArray[index].details;
            const weatherDescr= weatherObj.weather[0].description;
            const imgIcon = findImgFromDetails(detailsArray, weatherDescr, weatherObj);
            fullIconURL = iconURL + imgIcon;
        }
        return fullIconURL;
    };

    // Details is an array of objects, weatherDescription is the weather description (ex. 'few clouds' or 'moderate rain') we are looking for.
    function findImgFromDetails(details, weatherDescription, weatherObj) {
        let img = ''
        const sunrise = moment.unix(weatherObj.sys.sunrise).format('HH.mm');
        const sunset = moment.unix(weatherObj.sys.sunset).format('HH.mm');
        details.forEach(function(object) {
            // If the key 'description' is in the object, there is only one description - just get the img name
            if ('description' in object) {
                if (object.description === weatherDescription) {
                    // If it's between surise and sunset, use the daytime icon (imgD), otherwise use the nighttime icond (imgN)
                    if (hour > sunrise && hour < sunset) {
                        img = object.imgD;
                    } else {
                        img = object.imgN;
                    }
                }
            // Otherwise, there are multiple descriptions
            } else {
                const descriptionsArray = object.descriptions;
                descriptionsArray.forEach(function(description) {
                    if (description === weatherDescription) {
                        // If it's between surise and sunset, use the daytime icon (imgD), otherwise use the nighttime icond (imgN)
                        if (hour > sunrise && hour < sunset) {
                            img = object.imgD;
                        } else {
                            img = object.imgN;
                        }
                    }
                });
            }
        });
        return img;
    }

    // Display the current weather, including weather icon, in the city-date heading.
    // Displays temp, humidty, wind speed.
    function displayCurrentWeather(weatherObject) {
        const currentDate = moment().format('M/D/YYYY');
        // weatherCond is an object inside the weatherObject that contains the temp and humidity
        const weatherCondition = weatherObject.weather[0].main;
        console.log(weatherCondition);
        // To display the name of the location and the date
        cityDateEl.text(`${weatherObject.name} (${currentDate})`);
        // To display the correct icon that correspnds to weather condition.
        const iconURL = getWeatherIcon(weatherObject);
        weatherIconEl.attr('src', iconURL).attr('alt', weatherCondition);

        // Uses function to convert Kelvin to Fahrenheit and rounds to 1 decimal place; displays result in temp <p>
        const tempInF = (kToF(weatherObject.main.temp)).toFixed(1);
        tempEl.html(`Temperature: ${tempInF} &#8457;`);

        // Gets the humidity from the API object and displays it in the humidyt <p>
        humidityEl.text(`Humdity: ${weatherObject.main.humidity}%`);

        // Converts wind speed from the weather API from meters per second to miles per hour and displays it in wind <p>
        const windSpeed = (weatherObject.wind.speed * 2.2369).toFixed(1);
        windEl.text(`Wind: ${windSpeed} MPH`)

        //
    };

    // Converts temperture in Kelvin to Fahrenheit
    function kToF (kelvin) {
        return(((kelvin - 273.15) * 1.8) + 32);
    };

    function getUVIndex(latitude, longitude) {
        $.get(`https://api.openweathermap.org/data/2.5/uvi?lat=${latitude}&lon=${longitude}&appid=e21d1a963abbd9effdb612578581c76c`)
            .then(function(uvResponse) {
                const uvIndex = uvResponse.value;
                console.log(uvIndex);
                const uvIndexColor = getUVindexColor(uvIndex);
                uvIndexPar.prepend(`UV Index: `);
                uvIndexSpan.text(uvIndex);
            });
    }

    // Uses the uv index to select the correct class to make the background color correspond to the the scale from the WHO (https://www.epa.gov/sunsafety/uv-index-scale-0)
    function getUVindexColor(uvIndex) {
        // switch(uvIndex):
        //     case
    };



    // Event listener
    searchBtn.on("click", function() {
        event.preventDefault();
        const zipcode = inputEl.val()

        $.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=e21d1a963abbd9effdb612578581c76c`)
            .then(function(response) {
                console.log(response.name);
                console.log(response);
                const latitude = response.coord.lat;
                const longitude = response.coord.lon;
                displayCurrentWeather(response);
                getUVIndex(latitude, longitude);

                console.log(`Lat is ${response.coord.lat}, long is ${response.coord.lon}`)
            });
    });



});