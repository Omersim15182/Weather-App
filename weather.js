const apiKey="1e5a813a2afbafdcfa4de23fe1badf37";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const respose = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await respose.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp;
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed;
    
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src ="./images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "./images/rain.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "./images/mist";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src = "./images/snow";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "./images/drizzle";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "./images/clear.png";
    }


}

searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

