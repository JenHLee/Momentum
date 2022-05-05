const API_KEY = "5cb9f996e681a6327baa22d71efa58fe";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("You live it", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        const weather = document.querySelector("#weather span:first-child"); 
        const city = document.querySelector("#weather span:last-child"); 
        let temp = Math.round(data.main.temp);
        weather.innerText = `${data.weather[0].main} | ${temp}⁣C°`;
        city.innerText = `${data.name}`;
});
}
//lat: 51.0492672 lng: -114.0785152
//https://api.openweathermap.org/data/2.5/weather?lat=51.0492672&lon=-114.0785152&appid=5cb9f996e681a6327baa22d71efa58fe

function onGeoError() {
    alert("Can't find you. No weather for you.");
}
//local host http://127.0.0.1:5500/index.html
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

