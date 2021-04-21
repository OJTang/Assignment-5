// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   missionTarget.innerHTML = 
    `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
    <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === '') {
        return "Empty";
    }
    if (isNaN(Number(testInput))) {
        return "Not a Number";
    }
    if (!isNaN(Number(testInput))) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

        list.style.visibility = "hidden";

        let pilotStatus = document.querySelector("li[id=pilotStatus]");

        let copilotStatus = document.querySelector("li[id=copilotStatus]");

        let pilotName = document.querySelector("input[name=pilotName]");

        let copilotName = document.querySelector("input[name=copilotName]");

        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;

        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        let cargoMass = document.querySelector("input[name=cargoMass]");

        if (Number(fuelLevel) < 10000) {
            /*let faultyItems = document.querySelector("div[id=faultyItems]");

            faultyItems.style.visibility = "visible";

            fuelStatus.innerHTML = `Fuel level too low for launch`;

            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;

            launchStatus.style.color = "red";*/
            
            return 1;
            
       }

        if (Number(cargoLevel) > 10000) {
           /*list.style.visibility = "visible";

           cargoStatus.innerHTML = `Cargo mass too heavy for launch`;

           launchStatus.innerHTML = `Shuttle Not Ready for Launch`;

           launchStatus.style.color = "red";*/

           return 2;
       } 

       if (Number(fuelLevel) >= 10000 && Number(cargoLevel) <= 10000) {
            /*list.style.visibility = "hidden";

            fuelStatus.innerHTML = `Fuel level high enough for launch`;

            cargoStatus.innerHTML = `Cargo mass low enough for launch`;

            launchStatus.style.color = "green";

            launchStatus.innerHTML = `Shuttle is ready for launch`;*/
            
            return 3;
       }

    
    return list;
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

