// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.innerHTML = 
    `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
    <img src="${imageUrl}">` + missionTarget.innerHTML;
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
        let pilotName = document.querySelector("input[name=pilotName]");

        let copilotName = document.querySelector("input[name=copilotName]");

        pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;

        copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;

        let cargoMass = document.querySelector("input[name=cargoMass]");

        if (Number(fuelLevel.value) < 10000) {
            list.style.visibility = "visible";

            console.log(list.style.visibility);

            fuelStatus.innerHTML = `Fuel level not high enough for launch`;

            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;

            launchStatus.style.color = "red";

            event.preventDefault();
       }

        if (Number(cargoMass.value) > 10000) {
           list.style.visibility = "visible";

           cargoStatus.innerHTML = `Cargo mass too high for launch`;

           launchStatus.innerHTML = `Shuttle Not Ready for Launch`;

           launchStatus.style.color = "red";

           event.preventDefault();
       } 

       if (Number(fuelLevel.value) >= 10000 && Number(cargoMass.value) <= 10000) {
            list.style.visibility = "hidden";

            fuelStatus.innerHTML = `Fuel level high enough for launch`;

            cargoStatus.innerHTML = `Cargo mass low enough for launch`;

            launchStatus.style.color = "green";

            launchStatus.innerHTML = `Shuttle is ready for launch`;
       }

    event.preventDefault();
    return list;
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json){
            console.log(json);

            let missionTarget = document.getElementById("missionTarget");

            let i = pickPlanet(json);

            let name = json[i].name;

            let diameter = json[i].diameter;

            let star = json[i].star;

            let distance = json[i].distance;

            let moons = json[i].moons;

            let imageUrl = json[i].image;

            addDestinationInfo(missionTarget, name, diameter, star, distance, moons, imageUrl)
        })
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);

    return index;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

