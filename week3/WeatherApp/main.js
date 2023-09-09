const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=srinagar";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3b385c1a4dmsh1b21ed9aaa71340p174110jsn9c45bb2b414e",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((response) => {
    document.getElementById('cloud_pct.innerHTML') = response.cloud_pct;
    temp = response.temp;
    feels_like = response.feels_like;
    humidity = response.humidity;
    min_temp = response.min_temp;
    max_temp = response.max_temp;
    wind_speed = response.wind_speed;
    wind_degrees = response.wind_degrees;
    sunrise = response.sunrise;
    sunset = response.sunset;
  })
  .catch((err) => console.log(err));
