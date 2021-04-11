// Write your JavaScript code here!
//const myFetch = require('./scriptHelper.js');

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=dopilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel");
       let cargoMass = document.querySelector("input[name=cargoMass");
       let faultyItems = document.getElementById("faultyItems");
       let fuelStatus = document.getElementById("fuelStatus");
       let launchStatus = document.getElementById("launchStatus");
       if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === ''){
           alert("All fields are rewquired!");
           event.preventDefault();
       }
       pilotName.innerHTML = `${pilotName.value}`;
       copilotName.innerHTML = `${copilotName.value}`;
       if (Number(fuelLevel) < 10000) {
            faultyItems.setAttribute("visibility", "visible");
            fuelStatus.innerHTML = `Fuel level not high enough for launch`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
       }
   })
   
});