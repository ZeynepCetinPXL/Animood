document.getElementById("productdetails__toevoegenwinkelwagen").addEventListener('click', toevoegenProductAanWinkelmandje);

function toevoegenProductAanWinkelmandje() {
    let afmeting = document.getElementById("productdetails__afmeting");
    let afmetingValue = afmeting.options[afmeting.selectedIndex].value;
    localStorage.setItem("afmeting", afmetingValue);

    let kleur = document.getElementById("productdetails__kleur");
    let kleurValue = kleur.options[kleur.selectedIndex].value;
    localStorage.setItem("kleur", kleurValue);

    let materiaal = document.getElementById("productdetails__materiaal");
    let materiaalValue = materiaal.options[materiaal.selectedIndex].value;
    localStorage.setItem("materiaal", materiaalValue);

    let prijs = "€ 69.99";
    localStorage.setItem("prijs", prijs);

    //test
    // alert("Dit is de afmeting " + localStorage.getItem("afmeting"));
    // alert("Dit is de kleur " + localStorage.getItem("kleur"));
    // alert("Dit is het materiaal " + localStorage.getItem("materiaal"));
    // alert("DIt is de prijs van het product " + localStorage.getItem("prijs"));
}
