// Variables Declared

var apikey = "2cbc243e3e11a089609ec70451229a4e";
var apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var cityname = document.querySelector("#cityname");
var temp = document.querySelector("#temp");
var humidity = document.querySelector("#humidity");
var wind = document.querySelector("#wind");
var input = document.querySelector(".start .search .input input ");
var search = document.querySelector(".start .search .icon i");
const img = document.querySelector("img");
var all = document.querySelector(".all");
var error = document.querySelector(".error");

// var click function=
search.addEventListener("click", () => {
  var value = input.value;
  if (value == "") {
    alert("Enter City Name");
  } else {
    checkweather(value);
  }
});

// var api function starts here

async function checkweather(value) {
  const response = await fetch(apiurl + value + `&appid=${apikey}`);
  if (response.status === 404) {
    all.style.display = "none";
    error.style.display = "block";
    error.innerHTML = "Check the City Name";
    error.style.color = "#fff";
    alert("Something Went Wrong");
  } else {
    error.style.display = "none";
    all.style.display = "block";
    var data = await response.json();
    cityname.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "℃";
    temp.style.color = "#fff";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "℃";
    if (data.weather[0].main === "Clouds") {
      img.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      img.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      img.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      img.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      img.src = "images/mist.png";
    }
  }
}
