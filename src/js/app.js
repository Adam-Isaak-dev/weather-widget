class Weather {
  constructor() {
    this.current = document.querySelector(".current-conditions")
    this.forecast = document.querySelector(".forecast");
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      console.log(new Date(position.timestamp).toString())
      this.getCurrentWeather(position);
      this.getForecast(position);
    });
  }

  getCurrentWeather(position) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=d6c4ea12f1fe7ecc4dc38642fdeabe8c&units=metric`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      this.current.querySelector(".temp").innerText = `${data.main.temp.toFixed(0)}℃`
      this.current.querySelector(".condition").innerText = `${data.weather[0].description}`
      this.current.querySelector("img").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
  }

  getForecast(position) {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=d6c4ea12f1fe7ecc4dc38642fdeabe8c&units=metric&`)
    .then(response => response.json())
    .then((data) => {
      this.sortForecast(data);      
    });
  }

  sortForecast(data) {
    let currentDay = new Date();
      currentDay = currentDay.toString();
      currentDay = parseInt(currentDay.substr(8,2));
      const days = [[], [], [], [], []];
      const highs = [[], [], [], [], []];
      const lows = [[], [], [], [], []];

      for (const item of data.list) {
        const forecastDay = parseInt(item.dt_txt.substr(8, 2));
        if(forecastDay > currentDay) {
          days[forecastDay - currentDay - 1].push(item);
          highs[forecastDay - currentDay - 1].push(item.main.temp_max);
          lows[forecastDay - currentDay - 1].push(item.main.temp_min);
        }
      }

      highs.forEach(function(array) {array.sort((a, b) =>  b - a);});
      lows.forEach(function(array) {array.sort((a, b) =>  a - b);});

      this.insertForecast(days, highs, lows);
  }

  insertForecast(days, highs, lows) {
    for(let i = 0; i < days.length; i++){
      const day = document.getElementById(`${i}`);
      day.querySelector(".high").innerText = `${highs[i][0].toFixed(0)}℃`;
      day.querySelector(".low").innerText = `${lows[i][0].toFixed(0)}℃`;

      let num = Math.floor(Math.random() * days[i].length)  
      day.querySelector("img").src = `http://openweathermap.org/img/wn/${days[i][num].weather[0].icon}@2x.png`;
      day.querySelector(".description").innerText = `${days[i][num].weather[0].description}`;
    }
  }

}

const weather = new Weather();
weather.getLocation();