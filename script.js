var searchHistory = [];
var mapsImageElement= document.getElementById ('maps-img');
var formLocation = document.getElementById('form-location');
var address = document.getElementById('address'); 
var city = document.getElementById("city"); 
var state = document.getElementById("state");
var zip = document.getElementById("zip");


//---Code to access ATTOM API with JS---
//var client = new OkHttpClient(); 

fetch(`https://api.gateway.attomdata.com/propertyapi/v1.0.0/
property/detail?address1=4529%20Winona%20Court&address2=
Denver%2C%20CO`, {
  headers: {
      'accept': 'application/json',
      'apikey': 'de1723a201d5d3ee2652844b6fdc5d0c',
    }}
).then(function(response){
  return response.json()
}).then(function(result){
    var lat= result.property[0].location.latitude
    var long= result.property[0].location.longitude
    var mapUrl= `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${lat},${long}&fov=80&pitch=0&key=AIzaSyC9rxG7GfuvB6uFXRVneToo95oy_8UJmfI`
    mapsImageElement.setAttribute("src", mapUrl)
    console.log(result)
})



function confirmSearch(){
    var sAddress = document.getElementById("address");
    var sCity = document.getElementById("city");
    var sState = document.getElementById("state");
    var sZip = document.getElementById("zip");

    //Condition: if search form is left blank
    if( sAddress == "" ||
        sCity == "" ||
        sState == "" ||
        sZip == "")
        return;
console.log(sAddress)
fetch(`https://api.gateway.attomdata.com/propertyapi/v1.0.0/
property/detail?address1=${sAddress.value}&address2=
${sCity.value},${sState.value} ${sZip.value}`, {
  headers: {
      'accept': 'application/json',
      'apikey': 'de1723a201d5d3ee2652844b6fdc5d0c',
    }}
).then(function(response){
  return response.json()
}).then(function(result){
    var lat= result.property[0].location.latitude
    var long= result.property[0].location.longitude
    var mapUrl= `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${lat},${long}&fov=80&pitch=0&key=AIzaSyC9rxG7GfuvB6uFXRVneToo95oy_8UJmfI`
    mapsImageElement.setAttribute("src", mapUrl)
    console.log(result)
})



    //confirms user's input and recieves into array
    searchHistory.push(sAddress + sCity + sState + sZip);

    addToSearchHistory(sAddress, sCity, sState, sZip);
//retrieve local storage (display on list)
}



function addToSearchHistory(sAddress, sCity, sState, sZip){




}
