const apiKey = "384306b3c1f86a61ef266986f8dfec4f";
const input = document.querySelector('input');
const searchbtn = document.querySelector('button')
const weathericon = document.querySelector('.weather-icon');
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
    const response = await fetch(apiURL + city +`&appid=${apiKey}`);
    if(response.status === 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else{
    var data = await response.json();
    console.log(data);
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C ";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    if(data.weather[0].main == "Clouds"){
 weathericon.src = "image/cloud.png";
    }
     else if(data.weather[0].main == "Rain"){
 weathericon.src = "image/rain.png";
    }
     else if(data.weather[0].main == "Snow"){
 weathericon.src = "image/snow.png";
    }
     else if(data.weather[0].main == "Sun"){
 weathericon.src = "image/sun.png";
    }
     else if(data.weather[0].main == "Mist"){
 weathericon.src = "image/mist.png";
    }
    else if(data.weather[0].main == "Thunderstorm"){
 weathericon.src = "image/thunderstorm.png";
    }
      else if(data.weather[0].main == "Haze"){
 weathericon.src = "image/haze.png";
    }
      else if(data.weather[0].main == "Wind"){
 weathericon.src = "image/wind.png";
    }
    document.querySelector('.weather').style.display = "block";
     document.querySelector('.error').style.display = "none";
     input.innerHTML = "";
}
}
searchbtn.addEventListener('click',()=>{
checkWeather(input.value)
})

