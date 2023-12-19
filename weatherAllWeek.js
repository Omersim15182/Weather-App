
const apiKeyAllWeek="a10540913c3748439b4132120231512";
const  apiUrlAllWeek="https://api.weatherapi.com/v1/forecast.json?&days=7&q=";
const retrievedData = localStorage.getItem('shareData');

function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}

window.onload = timedRefresh(5000);
console.log(retrievedData);


async function checkWeather(retrievedData){
    const respose = await fetch(apiUrlAllWeek + retrievedData +`&key=${apiKeyAllWeek}`);
    var dataAllWeek = await respose.json();

    console.log(dataAllWeek);

    // document.querySelector(".city").innerHTML = dataAllWeek.name;
    // document.querySelector(".temp").innerHTML = dataAllWeek.main.temp;
    // document.querySelector(".humidity").innerHTML = dataAllWeek.main.humidity;
    // document.querySelector(".wind").innerHTML = dataAllWeek.wind.speed;

}

checkWeather(retrievedData);


