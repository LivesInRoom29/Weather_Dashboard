const hour = moment().format('HH.mm');

// $(document).ready(function() {

const inputEl = $('input#city-search');
const searchBtn = $('button.search');
const cityDateEl = $('h2.city-date');
const weatherIconEl = $('img#weather-icon');
const tempEl = $('p.temp');
const humidityEl = $('p.humidity');
const windEl = $('p.wind');
const uvIndexPar = $('p.uv-index');
const uvIndexSpan = $('span#uvindex');
const previousSearchesEl = $('#previous-searches');

// array to be used to store info that will be saved in local storage
let historyData = [];

// Gets info from local storage and stores it in the historyData variable if there is any available.
function getHistory() {
    historyData = JSON.parse(localStorage.getItem('pastCitiesKEY')) || [{ Name: "", Zip: "", Latitude: "", Longitude: "" }];
};

// For each search, adds a button that can be used to bring back up the search.
function addSearchButtons() {
    previousSearchesEl.empty();

    historyData.forEach(function (city) {
        const newButton = $("<a>").text(city.Name).addClass('panel-block prev-search-btn');
        previousSearchesEl.prepend(newButton);
    });
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
function kToF(kelvin) {
    return (((kelvin - 273.15) * 1.8) + 32);
};

// Calls the API again to get the UV Index, then displays the index with the proper color background
function getUVIndex(latitude, longitude) {
    $.get(`https://api.openweathermap.org/data/2.5/uvi?lat=${latitude}&lon=${longitude}&appid=e21d1a963abbd9effdb612578581c76c`)
        .then(function (uvResponse) {
            const uvIndex = uvResponse.value;
            const uvIndexClass = getUVindexColor(uvIndex);
            uvIndexSpan.text(uvIndex).attr('class', `tag ${uvIndexClass}`);
        });
}

// Uses the uv index to select the correct class to make the background color correspond to the the scale from the WHO (https://www.epa.gov/sunsafety/uv-index-scale-0)
function getUVindexColor(uvIndex) {
    let newClass = ''
    console.log(uvIndex);

    if (uvIndex < 2.5) {
        newClass = 'uvlow';
    } else if (uvIndex >= 2.5 && uvIndex < 5.5) {
        newClass = 'uvmoderate';
    } else if (uvIndex >= 5.5 && uvIndex < 7.5) {
        newClass = 'uvhigh';
    } else if (uvIndex >= 7.5 && uvIndex < 10.5) {
        newClass = 'uvVeryhigh';
    } else {
        newClass = 'uvextreme';
    }

    console.log(`uv index is ${uvIndex}`);
    console.log(`new class is ${newClass}`);
    return newClass;
};

// Stores city history info in local storage
function saveCity(name, zipcode, latitude, longitude) {
    const newObj = { Name: name, Zip: zipcode, Latitude: latitude, Longitude: longitude };

    // If the name in the first history object is blank, set the historyData to the new object; otherwise, ad the new object to the array
    if (!historyData[0].Name) {
        historyData = [newObj];
    } else {
        // Need to check if the city is in the array already
        const cityInHistory = cityInMem(newObj.Name, historyData);  // Returns true if the city is already in the historyData array
        console.log(cityInHistory);
        if (cityInHistory) {
            removeObj(historyData, "Name", newObj.Name);
            console.log('new history data: ', historyData);
        }

        historyData.push(newObj);
    }

    console.log(historyData);
    addSearchButtons();
    localStorage.setItem('pastCitiesKEY', JSON.stringify(historyData));
};

// To check to see if the city exists in memory (an array of objects) already; if it is, return true, else return false.
function cityInMem(city, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].Name === city) {
            return true;
        }
    }
    // Can't break out of a forEach loop??
    // array.forEach(function (cityObject) {
    //     if (cityObject.Name === city) {
    //         console.log('city is in history');
    //         return true;
    //     }
    // });
    return false;
}

// Function to remove an object from an array if a certain value exists in the object
// Adpated from 3rd answer on https://stackoverflow.com/questions/21659888/javascript-find-and-remove-object-in-array-based-on-key-value
function removeObj (array, key, value) {
    array.forEach(function(object, index) {
        if (object[key] === value) {
            array.splice(index, 1);
        }
    })
}


getHistory();
addSearchButtons();

// Event listener
searchBtn.on("click", function () {
    event.preventDefault();
    const zipcode = inputEl.val()

    $.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=e21d1a963abbd9effdb612578581c76c`)
        .then(function (response) {
            const cityName = response.name;
            console.log(cityName);
            console.log(response);
            const latitude = response.coord.lat;
            const longitude = response.coord.lon;
            displayCurrentWeather(response);
            getUVIndex(latitude, longitude);
            addSearchButtons();
            console.log(`Lat is ${response.coord.lat}, long is ${response.coord.lon}`)
            // Need to save data to local storage, create buttons for past searches
            // Store API call.
            saveCity(cityName, zipcode, latitude, longitude);
        });
});



// });