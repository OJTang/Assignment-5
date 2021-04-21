// Write your JavaScript code here!

window.addEventListener("load", function() {
    let document = window.document;

    let pilotStatus = document.querySelector("li[id=pilotStatus]");

    let copilotStatus = document.querySelector("li[id=copilotStatus]");

    let list = document.querySelector("div[id=faultyItems]");

    list.style.visibility = "hidden";

    let form = document.querySelector("form");

    let pilotName = document.querySelector("input[name=pilotName]").value;

    let copilotName = document.querySelector("input[name=copilotName]").value;

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
       console.log(formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass))
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

            let missionTarget = document.getElementById("missionTarget");

            let planet = pickPlanet(listedPlanets);

            let name = planet.name;

            let diameter = planet.diameter;

            let star = planet.star;

            let distance = planet.distance;

            let moons = planet.moons;

            let imageUrl = planet.image;

            addDestinationInfo(missionTarget, name, diameter, star, distance, moons, imageUrl)
   });


    form.addEventListener("submit", function
        (event){
            let document = window.document;

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
            formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
            if (formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) === 1) {
                list.style.visibility = "visible";

                fuelStatus.innerHTML = `Fuel level too low for launch`;

                launchStatus.innerHTML = `Shuttle Not Ready for Launch`;

                launchStatus.style.color = "red";

                event.preventDefault();
            
            return;
            } else if (formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) === 2){
                list.style.visibility = "visible";

                cargoStatus.innerHTML = `Cargo mass too heavy for launch`;

                launchStatus.innerHTML = `Shuttle Not Ready for Launch`;

                launchStatus.style.color = "red";

                event.preventDefault();

           return;
            } else if (formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) === 3) {
                list.style.visibility = "hidden";

                fuelStatus.innerHTML = `Fuel level high enough for launch`;

                cargoStatus.innerHTML = `Cargo mass low enough for launch`;

                launchStatus.style.color = "green";

                launchStatus.innerHTML = `Shuttle is ready for launch`;

                event.preventDefault();
            }
            event.preventDefault();
        }

   });
   
});

