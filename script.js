/*-------------------------------API-------------------------*/

const api = {
    key: process.env.API,
    base: "https://api.openweathermap.org/data/2.5/weather?", 
}


const date = moment();
document.getElementById("date").innerHTML = date.format("Mo MMM YYYY dddd, h:mm:ss");

    
    const Input = document.getElementById('input');
 
    Input.addEventListener('keypress', (event) => {

    if(event.keyCode == 13) {
        getWeather(Input.value);  
        document.querySelector('.main-weather').style.display = "block"; 
    }
});




function getWeather(city) {
    fetch(`${api.base}q=${city}&appid=${api.key}&units=metric`)   
    
    .then(details => {
        return details.json();  

    }).then(showWeather);
}


function showWeather(details){  


    let city = document.getElementById('city');
    city.innerHTML = `${details.name}, ${details.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(details.main.temp)}&deg;C`; 

    let minMax = document.getElementById('min-max');
    minMax.innerHTML = `${Math.round(details.main.temp_min)}&deg;C (Min) and ${Math.round(details.main.temp_max)}&deg;C (Max) `; 

    let weatherType = document.getElementById('weather-type');
    weatherType.innerHTML = `${details.weather[0].main}`;
}
