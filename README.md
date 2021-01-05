# weather-widget
## Project Notes
1. create a geolocation object based on the user location.
2. using the users geolocation request the current weather and the next 5 days weather, using the API.
3. Update the screen according to the data. (`insertAdjacentHTML`  using string literal syntax etc.)

## Assignment Notes
### Set-up & Instructions
Build and deploy a weather widget that uses the [navigator geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API) to determine the users location and uses that location to obtain the current weather and a 5 day forecast for their region.

### Submissions & Deadline
Submit a zip file containing all the files necessary to build and run your app. Include the URL of your hosted app in a `README.md` file in the root of of project directory.

* Be sure that your `node_modules` folder is **NOT INCLUDED** in your submission.
* Label your zip file as follows: `firstname-lastname-weather-widget.zip`
* Your submission is due no later than 9:00PM on Tuesday, January 5, 2021.

**Late submissions will no be accepted**

### To get started:
* Create a **PRIVATE** repository for your work on this project
* Sign-up for a free API account at [OpenWeatherMap](https://openweathermap.org/api)
* Download starter HTML and CSS files

### Implementation Notes:
* To complete this project you will need to utilize at least 2 different endpoints of the Open Weather Map API, `Current Weather Data` as well as `5 Day / 3 Hour Forecast`.
* The forecast is provided in 3 hour blocks, which means you will receive 8 different temperature forecasts per day. The `high` that is displayed is the highest temperature forecasted for that day, while the `low` is the lowest temperature forecasted for that day.
* Given we cannot average the condition description and image (it may not be cloudy all day), choose a single time everyday that will be used as the condition for the day.
* Your output should indicate the 'Current Conditions' as today, and the forecast as the next 5 days.
* You will need to use the weather icons provided by the API; you can read more about it here

> #### Tip
> All temperatures are provided in Kelvin by default. You will need to pass a parameter to the endpoint to request a different temperature unit.