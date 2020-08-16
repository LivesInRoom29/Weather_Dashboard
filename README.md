# Weather Dashboard
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)


HW 6 for the UNH Coding Bootcamp. This weather app will allow the user obtain weather information for any city. It will retrieve data from the OpenWeather API, and display the current weather conditions and a five day forecast on the page.

[Link to Deployed App](https://livesinroom29.github.io/Weather_Dashboard/)

![dashboard_screenshot](https://user-images.githubusercontent.com/61219066/89744430-c4bff080-da7a-11ea-8b91-0d972e2cc7d2.jpg)

## Table of Contents
1. [Description](#description)
2. [Learning Outcomes](#learning-outcomes)
3. [CSS Framework](#css-framework)
4. [Server Side API](#server-side-api)
5. [Third-Party APIs](#third-party-apis)
6. [Other Resources](#other-helpful-resources)
7. [Future Development](#future-development)
8. [Credits](#credits)

## Description
This app, built with jQuery, the Bulma CSS framework and the OpenWeather API, provides the user with a responsive display of current weather conditions and a 5 day forecast for a chosen city.

Upon page load, the weather data for the city that was searched most recently is used to populate the page. If this is the first time using the app or local storage was cleared, the weather for Wells, Maine will show up.

In order to seach for a new city, the user first chooses a country by inputting the first couple of letters and then choosing the correct one. This converts the country name to an ISO 3166 country code, which is required by the API to search by Zip Code in countries other than the United States. Then the user types in their zip code and hits ENTER or clicks the search button.

Searching for a city calls a number of functions:
* One that uses an AJAX request to the API to get current weather data and the latitude and longitude or the given zip code.
  - The current weather data was used to populate the current weather conditions in the app.
  - The latitude and longitude were used to make the call to get the UV index.
* Another uses the latitude and longitude to make another AJAX to the API to get the UV index. 
  - The UV index is displayed in a tag on the page and is used to determine the color of the tag based on scale from the [WHO](https://www.epa.gov/sunsafety/uv-index-scale-0)
* A third call to the API gets the weather forecast information.
  - The response from this call is used to populate the forecast tiles, which are dynamically added to the page by cloning the inner HTML of  a template.
* A button with the name of the city is displayed directly under the search field. This button can be clicked later to more easily get weather for that location.
* The name of the city, the zip code, the country code, the latitude and the longitude are stored in an array of objects in local storage. This data is used to populate the previous search buttons and call the API if those buttons are clicked.


## Learning Outcomes
* Learned to use a template HTML code to dynamically add multiple copies of similar groups of elements.
* Gained experience in utilizing an AJAX call to get data from a third-party API, then using that data to populate elements of the page.
* Learned to use jQuery to check the size of the viewport and add/remove classes based on the size.
* Got more experience in using media queries to apply different CSS styling based on the size of the screen.
* Learned to use a new CSS framework - Bulma.

## User Stories

```
AS A person trying to plan their week,
I WANT to be able to see the current weather and a forecast
SO THAT I can make decisions informed by the weather.

AS A group of friends trying to plan a quick, last-minute trip,
WE WANT to be able to see a weather forecast for different locations
SO THAT we go somewhere where the weather will be favorable or at least bring appropriate clothing.
```

## Built With

### CSS Framework
* [Bulma](https://bulma.io/documentation/)

### Server Side API
* [OpenWeather API](https://openweathermap.org/api)

### Third Party APIs
* [jQuery](https://jquery.com/)
* [jQuery UI](https://jqueryui.com/)
* [MomentJS](https://momentjs.com/)

### Other Helpful Resources
* [TutorialsPoint.com - autocomplete](https://www.tutorialspoint.com/jqueryui/jqueryui_autocomplete.htm)
* [Stack Overflow - window.resize() and window.width()](https://stackoverflow.com/questions/11047514/jquery-add-remove-class-when-window-width-changes)
* [W3Schools.com - window.resize](https://www.w3schools.com/jquery/event_resize.asp)
* [World Health Organization - UV Index Scale](https://www.epa.gov/sunsafety/uv-index-scale-0)
* [Stack Overflow - Find and Remove Object in Array](https://stackoverflow.com/questions/21659888/javascript-find-and-remove-object-in-array-based-on-key-value)

## Future Development
There are a number of features I would like to implement in the future to improve this app:
1. Add a drop down menu for the previous searches on mobile screens.
2. Add a section for the user to see hourly weather information.
3. Improve the styling with some better graphics.

## Credits
* For the code used to add the autocomplete functionality for the country code, I used the jQuery UI framework and the article at [TutorialsPoint.com](https://www.tutorialspoint.com/jqueryui/jqueryui_autocomplete.htm).
* To help figure out how to cause a change in the HTML to occur when the window is resized, [Stack Overflow](https://stackoverflow.com/questions/11047514/jquery-add-remove-class-when-window-width-changes) and [W3Schools.com](https://www.w3schools.com/jquery/event_resize.asp) were very helpful.
* To remove an object from an array if it contains a certain value, I adapted code from the third answer on [Stack OverFlow](https://stackoverflow.com/questions/21659888/javascript-find-and-remove-object-in-array-based-on-key-value)
* Thanks to the UNH Bootcamp instructor, TAs, and tutors for giving us great instruction, resources, and support.

## License

Unlicense
