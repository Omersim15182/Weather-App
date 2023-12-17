const apiKeyAllWeek="a10540913c3748439b4132120231512";
const  apiUrlAllWeek="https://api.weatherapi.com/v1/forecast.json?&days=7&q=";

import { city } from "../../Omer Projects/Weather App/weather";
var cityNew=city;
console.log(cityNew);
// async function checkWeather(city){
//     const respose = await fetch(apiUrlAllWeek + city +`&key=${apiKeyAllWeek}`);
//     var dataAllWeek = await respose.json();

//     console.log(dataAllWeek);

//     // document.querySelector(".city").innerHTML=data.name;
//     // document.querySelector(".temp").innerHTML=data.main.temp;
//     // document.querySelector(".humidity").innerHTML=data.main.humidity;
//     // document.querySelector(".wind").innerHTML=data.wind.speed;
    
    

// }
