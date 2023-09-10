const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=srinagar";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3b385c1a4dmsh1b21ed9aaa71340p174110jsn9c45bb2b414e",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city)=>{
  cityName.innerHTML = city
  fetch(url, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
  })
  .catch((err) => console.log(err));
}


submit.addEventListner('click', (e)=>{
  e.preventDefault();
  getWeather(city.value);
});


getWeather("sirnagar");