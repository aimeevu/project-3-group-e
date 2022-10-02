const MASS_SHOOTING_URL = "/api/v1.0/massshooting";
const POLICE_SHOOTING_URL = "/gun_violenceDB/fatalPoliceShootings";
const ACCIDENTAL_DEATH_URL = "/api/v1.0/accidentaldeath";

let massShootingData;
let policeShootingData;
let accidentalDeathData;

function fetchMassShooting() {
    fetch(MASS_SHOOTING_URL)
        .then((response) => response.json())
        .then((data) => {
            massShootingData = data;
            console.log(massShootingData);
        });
}
function fetchPoliceShooting() {
    fetch(POLICE_SHOOTING_URL)
        .then((response) => response.json())
        .then((data) => {
            policeShootingData = data;
            console.log(policeShootingData);
        });
}
function fetchAccidentalDeath() {
    fetch(ACCIDENTAL_DEATH_URL)
        .then((response) => response.json())
        .then((data) => {
            accidentalDeathData = data;
            console.log(accidentalDeathData);
        });
}