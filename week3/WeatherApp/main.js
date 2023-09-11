const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3b385c1a4dmsh1b21ed9aaa71340p174110jsn9c45bb2b414e",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

function getWeather(cityName) {
  document.getElementById("cityName").innerHTML = cityName;
  // console.log(cityName);
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + cityName;

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      timestamp = response.sunrise;
      timestamp = timeProvider(timestamp);

      sunrise.innerHTML = timestamp;
      timestamp = response.sunset;
      timestamp = timeProvider(timestamp);
      sunset.innerHTML = timestamp;
    })
    .catch((err) => console.log(err));
}

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  // e.preventDefault();
  getWeather(city.value);
  // console.log(city.value);
  return false;
});

getWeather("Srinagar");

function timeProvider(code){
  const realTime = new Date(code * 1000);

  const hours = realTime.getHours().toString().padStart(2, '0');
  const minutes = realTime.getMinutes().toString().padStart(2, '0');
  const seconds = realTime.getSeconds().toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;
  // console.log(timeString);
  return timeString;

}
