function onGeoOk(position) {
//const lat = position.coords.latitude;
//const lng = position.coords.longitude;
//console.log("You live it", lat, lng);
console.log(position);
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);