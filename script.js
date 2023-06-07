// declaring variables
var temp,
  temp_min,
  temp_max,
  feels_like,
  wind_speed,
  main,
  description,
  humidity,
  pressure,
  clouds,
  visibility,
  latitude,
  longitude,
  ground,
  sea;

function getData() {
  var cityname = document.getElementById("city").value;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityname +
    "&appid=5cd467d544c739afd80a6805c21e0ac0";
  document.getElementById("detail-container").style.backgroundImage =
    "url(https://source.unsplash.com/1600x900/?" +
    cityname.replace(/\s/g, "") +
    ")";

  //fetching the API
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      temp = data.main.temp;
      temp_min = data.main.temp_min;
      temp_max = data.main.temp_max;
      feels_like = data.main.feels_like;
      wind_speed = data.wind.speed;
      visibility = data.visibility;
      main = data.weather[0].main;
      description = data.weather[0].description;
      humidity = data.main.humidity;
      pressure = data.main.pressure;
      clouds = data.clouds.all;
      latitude = data.coord.lat;
      longitude = data.coord.lon;
      ground = data.main.grnd_level;
      sea = data.main.sea_level;

      temp = (temp - 273.15).toFixed(1);
      temp_min = (temp_min - 273.15).toFixed(1);
      temp_max = (temp_max - 273.15).toFixed(1);
      feels_like = (feels_like - 273.15).toFixed(1);


      //Filling the center float container
      document.getElementById("cityname").innerText = cityname;
      document.getElementById("temperature").innerText = temp + "°C";
      document.getElementById("feels-like").innerText = feels_like + "°C";
      document.getElementById("main").innerText = main;
      document.getElementById("description").innerText = description;
      document.getElementById("min-max").innerText =
        temp_min + "°C/" + temp_max + "°C";

      //Filling the left float container
      document.getElementById("humidity").innerText =
        "Humidity: " + humidity + "%";
      document.getElementById("pressure").innerText =
        "Pressure: " + pressure + "hPa";
      document.getElementById("clouds").innerText = "Clouds: " + clouds + "%";
      document.getElementById("ground").innerText =
        "Ground level: " + ground + "hPa";
      document.getElementById("sea").innerText = "Sea level: " + sea + "hPa";

      //Filling the right float container
      document.getElementById("wind").innerText =
        "Wind speed: " + wind_speed + "m/s";
      document.getElementById("visibility").innerText =
        "Visibility: " + visibility + "m";
      document.getElementById("card").style.backgroundImage =
        "url(https://source.unsplash.com/1600x900/?" +
        cityname.replace(/\s/g, "") +
        ")";
      document.getElementById("card").innerText = cityname;
      document.getElementById("latitude").innerText = "Latitude: " + latitude;
      document.getElementById("longitude").innerText =
        "Longitude: " + longitude;

      document.getElementById("card").addEventListener("click",()=>
      {window.location.replace("https://en.wikipedia.org/wiki/" + cityname)
})});
}
