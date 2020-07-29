$(document).ready(function() {

    const inputEl = $('input#city-search');
    const searchBtn = $('button.search');
    const cityDateEl = $('h2.city-date');
    const weatherIconEl = $('img#weather-icon');
    const hour = moment().format('HH.mm');

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

        const index = weatherIconArray.findIndex(x => x.weather === weatherCond);
        console.log (`index is ${index}`);
        console.log(Object.keys(weatherIconArray[index]).length);

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
        console.log(fullIconURL);
        return fullIconURL;
    };

    // Where details is an array of objects, description is the weather description we are looking for.
    function findImgFromDetails(details, weatherDescription, weatherObj) {
        let img = ''
        const sunrise = moment.unix(weatherObj.sys.sunrise).format('HH.mm');
        const sunset = moment.unix(weatherObj.sys.sunset).format('HH.mm');
        console.log(details);
        details.forEach(function(object) {
            console.log(object)
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
        console.log(img)
        return img;
    }

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

    // Event listener
    searchBtn.on("click", function() {
        event.preventDefault();
        const zipcode = inputEl.val()

        $.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=e21d1a963abbd9effdb612578581c76c`)
        .then(function(response) {
            console.log(response.name);
            console.log(response);
            displayCurrentWeather(response);
        });
    });

});