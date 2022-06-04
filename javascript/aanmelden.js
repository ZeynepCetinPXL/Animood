document.getElementById("inlog__aanmeldknop").addEventListener('click', checkGebruiker);

let naamGebruiker = "";
let validatie = false;

let gebruikersArray = [
    {
        gebruikersnaam: "sander.vanoppen1@animood.be",
        voornaam: "Sander",
        naam: "Vanoppen",
        wachtwoord: "animood"
    },
    {
        gebruikersnaam: "hanne.baree@animood.be",
        voornaam: "Hanne",
        naam: "Barée",
        wachtwoord: "animood"
    },
    {
        gebruikersnaam: "noa.benitez@animood.be",
        voornaam: "Nóa",
        naam: "Benitez",
        wachtwoord: "animood"
    },
    {
        gebruikersnaam: "robbe.eyckmans@animood.be",
        voornaam: "Robbe",
        naam: "Eyckmans",
        wachtwoord: "animood"
    },
    {
        gebruikersnaam: "zeynep.çetin@animood.be",
        voornaam: "Zeynep",
        naam: "Çetin",
        wachtwoord: "animood"
    }
];

//inloggen
function verwijderValuesInputfields() {
    let gebruikersnaamInput = document.getElementById("gebruikersnaam");
    let wachtwoordInput = document.getElementById("wachtwoord");
    gebruikersnaamInput.value = "";
    wachtwoordInput.value = "";
}

function checkGebruiker () {
    let gebruikersnaam = document.getElementById("gebruikersnaam").value;
    let wachtwoord = document.getElementById("wachtwoord").value;

    for (let i = 0; i < gebruikersArray.length; i++) {
        if (gebruikersnaam === gebruikersArray[i].gebruikersnaam && wachtwoord === gebruikersArray[i].wachtwoord) {
            naamGebruiker = gebruikersArray[i].voornaam + " " + gebruikersArray[i].naam;
            localStorage.setItem("naam", naamGebruiker);
            validatie = true;
            break;
        }
    }

    if (validatie === false) {
        alert("De gegevens zijn incorrect. Probeer opnieuw.");
    } else {
        verwijderValuesInputfields();
        document.getElementById("navbar__name").innerHTML = localStorage.naam;
    }
}


//registreren
document.getElementById("inlog__registreerknop").addEventListener('click', welkomnieuwegebruiker);

function welkomnieuwegebruiker() {
    let gebruikersnaamregi = document.getElementById("gebruikersnaamregistratie").value;
    let wachtwoordregi = document.getElementById("wachtwoordregistratie").value;
    let wachtwoordregi2 = document.getElementById("wachtwoordregistratie2").value;


    if (gebruikersnaamregi === "" && wachtwoordregi === "" && wachtwoordregi2 === "") {
        alert("Vul uw gegevens in.");
    } else if (gebruikersnaamregi === "") {
        alert("Vul uw gebruikersnaam in.");
    } else if (wachtwoordregi === "") {
        alert("Vul uw wachtwoord in.");
    } else if (wachtwoordregi2 === "") {
    alert("Vul uw wachtwoord nogmaals in.");
} else if (wachtwoordregi2 !== wachtwoordregi) {
        alert("wachtwoord1 is niet gelijk aan wachtwoord2");
    }
    else {
        alert("Welkom, " + gebruikersnaamregi + "!");
    }
}