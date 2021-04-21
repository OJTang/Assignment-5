// Write your JavaScript code here!

window.addEventListener("load", function() {
    let pilotStatus = document.querySelector("li[id=pilotStatus]");

    let copilotStatus = document.querySelector("li[id=copilotStatus]");

    let list = document.querySelector("div[id=faultyItems]");

    list.style.visibility = "hidden";

    let form = document.querySelector("form");

    let pilotName = document.querySelector("input[name=pilotName]");

    let copilotName = document.querySelector("input[name=copilotName]");

    let fuelLevel = document.querySelector("input[name=fuelLevel]");

    let cargoMass = document.querySelector("input[name=cargoMass]");

    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

            let missionTarget = document.getElementById("missionTarget");

            let i = pickPlanet(listedPlanets);

            let name = listedPlanets[i].name;

            let diameter = listedPlanets[i].diameter;

            let star = listedPlanets[i].star;

            let distance = listedPlanets[i].distance;

            let moons = listedPlanets[i].moons;

            let imageUrl = listedPlanets[i].image;

            addDestinationInfo(missionTarget, name, diameter, star, distance, moons, imageUrl)
   });


    form.addEventListener("submit", function
        (event){
            list.style.visibility = "hidden";

            if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === ''){
                alert("All fields are required!");

                event.preventDefault();

           return;
            } else if (validateInput(pilotName.value) === "Is a Number") {
        
            alert("Make sure to enter valid information for each field!");
            
            event.preventDefault();
            return;
        } else if (validateInput(copilotName.value) === "Is a Number") {
            alert("Make sure to enter valid information for each field!");
            
            event.preventDefault();
            return;
        } else if (validateInput(fuelLevel.value) !== "Is a Number") {
            alert("Make sure to enter valid information for each field!");
            
            event.preventDefault();
            return;
        } else if (validateInput(cargoMass.value) === "Not a Number") {
            alert("Make sure to enter valid information for each field!");
            
            event.preventDefault();
            return;
        } else {
            formSubmission(window.document, list, pilotName, copilotName, fuelLevel, cargoMass);
            event.preventDefault();
        }

   });
   
});

