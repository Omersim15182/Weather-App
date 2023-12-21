const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saterday', 'sunday'];

const weatherIconsWeek = [document.querySelector(".sundayIcon"), document.querySelector(".mondayIcon"), document.querySelector(".tuesdayIcon"),
document.querySelector(".wednesdayIcon"), document.querySelector(".thursdayIcon"), document.querySelector(".fridayIcon"),
document.querySelector(".saturdayIcon")];

const apiKeyAllWeek = "a10540913c3748439b4132120231512";
const apiUrlAllWeek = "https://api.weatherapi.com/v1/forecast.json?&days=7&q=";

const header = document.querySelector('.city')
const params = new URLSearchParams(window.location.search);
const cityName = params.get("city");
header.innerHTML = cityName;



checkWeather(cityName);

async function checkWeather(city) {
    const respose = await fetch(apiUrlAllWeek + city + `&key=${apiKeyAllWeek}`);
    var dataAllWeek = await respose.json();

    console.log(dataAllWeek);
    console.log(dataAllWeek.forecast.forecastday[0].day.condition.icon)
    for (let i = 0; i < days.length; i++) {
        var d = new Date(dataAllWeek.forecast.forecastday[i].date);
        let day = d.getDay();


        switch (day) {
            case 0:
                document.querySelector(".tempSunday").innerHTML = dataAllWeek.forecast.forecastday[0].day.avgtemp_c;
                weatherIconsWeek[0].src = `${dataAllWeek.forecast.forecastday[0].day.condition.icon}`
                console.log(dataAllWeek.forecast.forecastday[0].day.avgtemp_c, day)
                break;
            case 1:
                document.querySelector(".tempMonday").innerHTML = dataAllWeek.forecast.forecastday[1].day.avgtemp_c;
                weatherIconsWeek[1].src = `${dataAllWeek.forecast.forecastday[1].day.condition.icon}`
                console.log(dataAllWeek.forecast.forecastday[1].day.avgtemp_c, day)
                console.log(dataAllWeek.forecast.forecastday[1].day.avgtemp_c, day)
                break;

            case 2:
                document.querySelector(".tempTuesday").innerHTML = dataAllWeek.forecast.forecastday[2].day.avgtemp_c;
                weatherIconsWeek[2].src = `${dataAllWeek.forecast.forecastday[2].day.condition.icon}`
                console.log(dataAllWeek.forecast.forecastday[2].day.avgtemp_c, day)
                console.log(dataAllWeek.forecast.forecastday[2].day.avgtemp_c, day)
                break;

            case 3:
                document.querySelector(".tempWensday").innerHTML = dataAllWeek.forecast.forecastday[3].day.avgtemp_c;
                weatherIconsWeek[3].src = `${dataAllWeek.forecast.forecastday[3].day.condition.icon}`
                console.log(dataAllWeek.forecast.forecastday[3].day.avgtemp_c, day)
                console.log(dataAllWeek.forecast.forecastday[3].day.avgtemp_c, day)
                break;

            case 4:

                document.querySelector(".tempThursday").innerHTML = dataAllWeek.forecast.forecastday[4].day.avgtemp_c;
                weatherIconsWeek[4].src = `${dataAllWeek.forecast.forecastday[4].day.condition.icon}`
                console.log(dataAllWeek.forecast.forecastday[4].day.avgtemp_c, day)
                console.log(dataAllWeek.forecast.forecastday[4].day.avgtemp_c, day)
                break;
            case 5:

                document.querySelector(".tempFriday").innerHTML = dataAllWeek.forecast.forecastday[5].day.avgtemp_c;
                weatherIconsWeek[5].src = `${dataAllWeek.forecast.forecastday[5].day.condition.icon}`
                console.log(dataAllWeek.forecast.forecastday[5].day.avgtemp_c, day)
                console.log(dataAllWeek.forecast.forecastday[5].day.avgtemp_c, day)
                break;

            case 6:
                document.querySelector(".tempSaturday").innerHTML = dataAllWeek.forecast.forecastday[6].day.avgtemp_c;
                weatherIconsWeek[6].src = `${dataAllWeek.forecast.forecastday[6].day.condition.icon}`
                console.log(dataAllWeek.forecast.forecastday[6].day.avgtemp_c, day)
                console.log(dataAllWeek.forecast.forecastday[6].day.avgtemp_c, day)
                break;
            default:
                break;
        }

    }



}




