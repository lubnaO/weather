//Variables
let SearchBox = document.querySelector('.search-box');
let now = new Date();
let theDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let theMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let MainCity = "Saudi Arabia";

SearchBox.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        MainCity = SearchBox.value;
    }
     Result();
  });

//fetch API
 async function Result(){
    let fetchUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${MainCity}&units=metric&appid=068f7c8ce1de639e1eee77b1be009e33`)
    let resData = await fetchUrl.json();
    showResult(resData)
}

Result();
//display data
function showResult(weather){
  let cityName = document.querySelector('.location .city');
  cityName.innerHTML = `${weather.name}, ${weather.sys.country}`;
 
  let date = now.getDate();
  let day = theDays[now.getDay()];
  let Month = theMonths[now.getMonth()]
  let year = now.getFullYear();
  let theDateDesc = document.querySelector('.location .date');
  theDateDesc.innerHTML = `${day}, ${date} ${Month}`;

  let temprature = document.querySelector('.weather-details .temprature');
  temprature.innerHTML = `${Math.round(weather.main.temp)}<span>C</span>`;

  let state = document.querySelector('.weather-details .wheather-state');
  state.innerHTML = `${weather.weather[0].main}`;

  let HighLowTempurature = document.querySelector('.weather-details .high-low-tempureature');
  HighLowTempurature.innerHTML = `${Math.round(weather.main.temp_max)}C / ${Math.round(weather.main.temp_min)}C`
}
window.addEventListener('load', function(){
    document.querySelector('.loader').style.display = 'none';
})

// let inputTest = document.getElementById("test");
// let paragrapth = document.getElementById("test-paragrapth");

// inputTest.onkeypress = function(){
//   paragrapth.innerHTML = inputTest.value;
// }



