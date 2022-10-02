const MASS_SHOOTING_URL = "/gun_violenceDB/massShootings";
const POLICE_SHOOTING_URL = "/gun_violenceDB/fatalPoliceShootings";
const ACCIDENTAL_DEATH_URL = "/gun_violenceDB/accidentalDeath";

let massShootingData;
let policeShootingData;
let accidentalDeathData;

function fetchMassShootings() {
    fetch(MASS_SHOOTING_URL)
        .then((response) => response.json())
        .then((data) => {
            massShootingData = data;
            console.log(massShootingData);
        });
}
function fetchPoliceShootings() {
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