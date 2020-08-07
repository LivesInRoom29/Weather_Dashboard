const hour = moment().format('HH.mm');

$(document).ready(function() {
    // Variables for DOM elements
    const zipInputEl = $('input#city-search');
    const countryInputEl = $('input#country-autocomplete');
    const searchBtn = $('button.search');
    const cityDateEl = $('h2.city-date');
    const weatherIconEl = $('img#weather-icon');
    const tempEl = $('p.temp');
    const humidityEl = $('p.humidity');
    const windEl = $('p.wind');
    const uvIndexSpan = $('span#uvindex');
    const previousSearchesEl = $('#previous-searches');
    const forecastContainerEl = $('div.forecast-container');

    // array to be used to store info that will be saved in local storage
    let historyData = [];

    // Gets info from local storage and stores it in the historyData variable if there is any available.
    function getHistory() {
        historyData = JSON.parse(localStorage.getItem('pastCitiesKEY')) || [{ Name: "", Zip: "", Country: "", Latitude: "", Longitude: "" }];
    };

    // For each search, adds a button that can be used to bring back up the search.
    function addSearchButtons() {
        previousSearchesEl.empty();

        // Use the first 6 cities in the array to populate the search buttons
        historyData.slice(0,6).forEach(function (city) {
            const newButton = $("<a>").text(city.Name).addClass('panel-block prev-search-btn').attr('data-zip', city.Zip).attr('data-country', city.Country);
            previousSearchesEl.append(newButton);
        });
    }

    // To display the most recent search when the page is reloaded. If no past search history exists, diplay data for Wells, ME
    function displayLastSearch() {
        let zipcode = historyData[0].Zip;
        let countrycode = historyData[0].Country;
        // If the last item in the array contains a Zip that is not blank (if there is at least one past search saved)
        if (!zipcode) {
            zipcode = '04090';
            countrycode = 'us';
        }
        //Use the zipcode to make the API call and send the response and zip code to the useWeatherData func
        getCurrentAndForecast(zipcode, countrycode);
    }

    // Display the current weather, including weather icon, in the city-date heading.
    // Displays temp, humidty, wind speed.
    function displayCurrentWeather(weatherObject) {
        const currentDate = moment().format('M/D/YYYY');
        // weatherCond is an object inside the weatherObject that contains the temp and humidity
        const weatherCondition = weatherObject.weather[0].main;
        // To display the name of the location and the date
        cityDateEl.text(`${weatherObject.name} (${currentDate})`);
        // To display the correct icon that correspnds to weather condition.
        const iconURL = `http://openweathermap.org/img/wn/${weatherObject.weather[0].icon}.png`
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

        return newClass;
    };

    // Stores city history info in local storage
    function saveCity(name, zipcode, countrycode, latitude, longitude) {
        console.log(`Country is: ${countrycode}.`)
        const newObj = { Name: name, Zip: zipcode, Country: countrycode, Latitude: latitude, Longitude: longitude };

        // If the name in the first history object is blank, set the historyData to the new object; otherwise, ad the new object to the array
        if (!historyData[0].Name) {
            historyData = [newObj];
        } else {
            // Need to check if the city is in the array already
            const cityInHistory = cityInMem(newObj.Name, historyData);  // Returns true if the city is already in the historyData array
            // If it is in the array, remove it
            if (cityInHistory) {
                removeObj(historyData, "Name", newObj.Name);
            }
            // Add the object for the search into the beginning of the array
            historyData.unshift(newObj);
        }
        // Update the search buttons and the local storage.
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
        return false;
    };

    // Function to remove an object from an array if a certain value exists in the object
    // Adpated from 3rd answer on https://stackoverflow.com/questions/21659888/javascript-find-and-remove-object-in-array-based-on-key-value
    function removeObj (array, key, value) {
        array.forEach(function(object, index) {
            if (object[key] === value) {
                array.splice(index, 1);
            }
        })
    }

    // Takes the response from calling the OpenWeather API and uses it to display current weather, get and diplay the UV index, save the new city in local storage and add a search button for the city
    function useWeatherData(response, zipcode, countrycode) {
        console.log(`UseWeather cc: ${countrycode}`)
        const cityName = response.name;
        const latitude = response.coord.lat;
        const longitude = response.coord.lon;
        displayCurrentWeather(response);
        getUVIndex(latitude, longitude);
        // To save data to local storage
        saveCity(cityName, zipcode, countrycode, latitude, longitude);
    }

    // Uses data from the API forecast call to clone the forecast tile
    function getForecast(forecastAPIcall) {
        const fiveDays = forecastAPIcall.daily;
        // Inside the template that will be cloned
        const $dayBlock = $(document.getElementById("template-forecast-block").innerHTML);
        const $fragContainer = $(document.createDocumentFragment());
        // Clear the forecast container
        forecastContainerEl.empty();
        // Gets data from the API response and fills 5 clones of the HTML template for the 5 day forecast
        for(let i = 1; i < 6; i++) {
            // Starts at one day ahead, and continues through the next 4 days
            const daily = fiveDays[i];
            const date = moment.unix(daily.dt).format('l');
            const iconURL = `http://openweathermap.org/img/wn/${daily.weather[0].icon}.png`;
            const description = daily.weather[0].description;
            // Converts temp from Kelvin to Fahrenheit
            const temp = (kToF(daily.temp.day)).toFixed(2);
            const humidity = daily.humidity;
            // Clones the dayBlock and finds the elements within it to change the text and attributes
            const $clone = $dayBlock.clone();
            $clone.find('h4.date').text(date);
            $clone.find('img#forecast-icon').attr('src', iconURL).attr('alt', description);
            $clone.find('p.forecast-temp').html(`Temp: ${temp} &#8457;`);
            $clone.find('p.forecast-humidity').text(`Humidity: ${humidity}%`);
            // Append the clone to the frag container and then append that to the forecast container
            $fragContainer.append($clone);
            forecastContainerEl.append($fragContainer);
        }
    };

    function getCurrentAndForecast(zipcode, countrycode) {
        $.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countrycode}&appid=e21d1a963abbd9effdb612578581c76c`)
            .then(function (response) {
                useWeatherData(response, zipcode, countrycode);
                const latitude = response.coord.lat;
                const longitude = response.coord.lon;
                $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&appid=e21d1a963abbd9effdb612578581c76c`)
                    .then(function(forecastResponse) {
                        getForecast(forecastResponse);
                    });
            });
    }

    // On page load, get history data and store it in the variable historyData, then display info for last search and add search buttons for previous searches
    getHistory();
    displayLastSearch();
    addSearchButtons();

    // For the autocomplete of country codes; source: https://www.tutorialspoint.com/jqueryui/jqueryui_autocomplete.htm
    $(function() {
        $( "#country-autocomplete" ).autocomplete({
           source: countryCodes,
           minlength: 2
        });
     });

    // Event listener for the blue Search Button
    searchBtn.on("click", function () {
        event.preventDefault();
        const zipcode = zipInputEl.val();
        const countrycode = countryInputEl.val();
        console.log(countrycode);
        //Use the zipcode to make the API call and send the response and zip code to the useWeatherData func
        getCurrentAndForecast(zipcode, countrycode);
        // Clear input field
        zipInputEl.val('');
    });

    // Event listener for PREVIOUS SEARCH buttons
    previousSearchesEl.on("click", "a", function() {
        const thisBtn = $(this);
        const thisZip = thisBtn.attr('data-zip');
        const thisCountry = thisBtn.attr('data-country');
        //Use the zipcode to call the API and use the response in the useWeatherData function
        getCurrentAndForecast(thisZip, thisCountry);
    });
});