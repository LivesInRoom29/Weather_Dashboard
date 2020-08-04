
// Array containing weather details and corresponding icons from OpenWeather API
const weatherIconArray = [
    { weather: 'Clear', imgD: '01d.png', imgN: '01n.png' },
    {
        weather: 'Clouds', details: [
            { description: 'few clouds', imgD: '02d.png', imgN: '02n.png' },
            { description: 'scattered clouds', imgD: '03d.png', imgN: '03n.png' },
            { description: 'broken clouds', imgD: '04d.png', imgN: '04n.png' },
            { description: 'overcast clouds', imgD: '04d.png', imgN: '04n.png' }
        ]
    },
    { weather: 'Drizzle', imgD: '09d.png', imgN: '09n.png' },
    {
        weather: 'Rain', details: [
            {
                descriptions: ['light intensity shower rain', 'shower rain', 'heavy intensity shower rain', 'ragged shower rain'],
                imgD: '09d.png',
                imgN: '09n.png'
            },
            { description: 'freezing rain', imgD: '13d.png', imgN: '13n.png' },
            {
                descriptions: ['light rain', 'moderate rain', 'heavy intensity rain', 'extreme rain'],
                imgD: '10d.png',
                imgN: '10n.png'
            }
        ]
    },
    { weather: 'Thunderstorm', imgD: '11d.png', imgN: '11n.png' },
    { weather: 'Snow', imgD: '13d.png', imgN: '13n.png' },
    { weather: ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado'], imgD: '50d.png', imgN: '50n.png' },
];

// This may not work for fog, etc yet (last object)

function getWeatherIcon(weatherObj) {
    const iconURL = `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}`;
}

//     const sunrise = moment.unix(weatherObj.sys.sunrise).format('HH.mm');
//     const sunset = moment.unix(weatherObj.sys.sunset).format('HH.mm');
//     // Current weather conditions
//     const weatherCond = weatherObj.weather[0].main;

//     // Get the index of the array where the oject in the array contains the weather condition as a value
//     const index = weatherIconArray.findIndex(x => x.weather === weatherCond);

//     // If the object has weather, imgD and imgN
//     if (Object.keys(weatherIconArray[index]).length === 3) {
//         // If it's between surise and sunset, use the daytime icon (imgD), otherwise use the nighttime icond (imgN)
//         if (hour > sunrise && hour < sunset) {
//             fullIconURL = iconURL + weatherIconArray[index].imgD;
//         } else {
//             fullIconURL = iconURL + weatherIconArray[index].imgN;
//         }
//     } else {
//         const detailsArray = weatherIconArray[index].details;
//         console.log(detailsArray);
//         const weatherDescr = weatherObj.weather[0].description;
//         console.log(weatherDescr);
//         const imgIcon = findImgFromDetails(detailsArray, weatherDescr, weatherObj);
//         fullIconURL = iconURL + imgIcon;
//     }
//     return fullIconURL;
// };

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