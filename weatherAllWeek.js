
const apiKeyAllWeek="a10540913c3748439b4132120231512";
const  apiUrlAllWeek="https://api.weatherapi.com/v1/forecast.json?&days=7&q=";

const header = document.querySelector('.city')
const params = new URLSearchParams(window.location.search);

const cityName = params.get("city");
header.innerHTML = cityName

// checkWeather(cityName);

// async function checkWeather(city){
//     const respose = await fetch(apiUrlAllWeek + city +`&key=${apiKeyAllWeek}`);
//     var dataAllWeek = await respose.json();

//     console.log(dataAllWeek);

//     document.querySelector(".city").innerHTML = dataAllWeek.location.name;
//     document.querySelector(".temp").innerHTML = dataAllWeek.forecast.forecastday.temp;
//     document.querySelector(".humidity").innerHTML = dataAllWeek.main.humidity;
//     document.querySelector(".wind").innerHTML = dataAllWeek.wind.speed;

// }




