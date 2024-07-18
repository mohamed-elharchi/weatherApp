let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");



//function to fetch weather details from api and display then
let getWeather = () => {
    let cityValue = cityRef.value
    if (cityValue.length == 0){
        result.innerHTML = `<h3 class="msg">
        Please enter a city name
        </h3>`
    }
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        let urlClock = `https://api.ipgeolocation.io/astronomy?apiKey=${keyy}&location=${cityValue}`;
        cityRef.value = "";
        fetch(urlClock)
        .then((res) => res.json())
        .then(function(data) {
            console.log(data)
            console.log(data.current_time)
            result.innerHTML += `
            <div class="time-container">
                <div>
                    <h4 class="titleT">time in city  <i class="fa-solid fa-clock"></i></h4>
                    <h4 class="tempT">${data.current_time}</h4>
                </div>
                <div>
                    <h4 class="titleT">Date  <i class="fa-solid fa-calendar-days"></i></h4>
                    <h4 class="tempT">${data.date}</h4>
                </div>
            </div>
            
            <div class="temp-container">
                <div>
                    <h4 class="title">Sunrise</h4>
                    <h4 class="temp">${data.sunrise}</h4>
                </div>
                <div>
                    <h4 class="title">Sunset</h4>
                    <h4 class="temp">${data.sunset}</h4>
                </div>
            </div>

            <div class="time-container">
                <div>
                    <h4 class="titleT">Solar noon  <i class="fa-solid fa-sun" style="color: #ffae00;"></i></h4>
                    <h4 class="tempT">${data.solar_noon}</h4>
                </div>
            </div>

            <div class="time-container">
                <div >
                    <h4 class="titleT">Moonrisey  <i class="fa-solid fa-moon"></i></h4>
                    <h4 class="tempT">${data.moonrise}</h4>
                </div>
                <div>
                    <h4 class="titleT">moonset  <i class="fa-solid fa-moon"></i></h4>
                    <h4 class="tempT">${data.moonset}</h4>
                </div>
            </div>
            `
        })

        // cityRef.value = "";
        fetch(url)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML = `
            <h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <h4 class="desc">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} &#176;</h1>
            <div class="temp-container">
                <div>
                    <h4 class="title">Min</h4>
                    <h4 class="temp">${data.main.temp_min}</h4>
                </div>
                <div>
                    <h4 class="title">Max</h4>
                    <h4 class="temp">${data.main.temp_max}</h4>
                </div>
            </div>
            `;
                })
        .catch(()=>{
            result.innerHTML = `
                                    <h3 class="msg">City not found</h3>
                                `
        })
    }
};

window.addEventListener("load", getWeather);
searchBtn.addEventListener("click", getWeather);

// let getClock = () => {
//     let urlClock = `https://api.ipgeolocation.io/astronomy?apiKey=${key}&location=nador`;
//             fetch(urlClock)
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data)
//             })
//         }
// window.addEventListener("load", getClock)

