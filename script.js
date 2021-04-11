// Write your JavaScript code here!


window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (json) {
            let missionTarget = document.getElementById("missionTarget");

            let i = pickPlanet(json);

            let name = json[i].name;

            let diameter = json[i].diameter;

            let star = json[i].star;

            let distance = json[i].distance;

            let moons = json[i].moons;

            let imageUrl = json[i].image;

            addDestinationInfo(missionTarget, name, diameter, star, distance, moons, imageUrl)
   });


   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
       let pilotName = document.querySelector("input[name=pilotName]");

       let copilotName = document.querySelector("input[name=copilotName]");

       let fuelLevel = document.querySelector("input[name=fuelLevel]");

       let cargoMass = document.querySelector("input[name=cargoMass]");

       let list = document.querySelector("div[id=faultyItems]");

       if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === ''){
           alert("All fields are required!");

           event.preventDefault();

           return;
       }

      formSubmission(form, list, pilotName, copilotName, fuelLevel, cargoMass);


   });
   
});

