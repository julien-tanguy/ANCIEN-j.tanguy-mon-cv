function competencePremier() {
    document.getElementById("competenceContent").style.zIndex = "3";
    document.getElementById("experienceContent").style.zIndex = "2";
    document.getElementById("formationContent").style.zIndex = "1";
}

function experiencePremier() {
    document.getElementById("competenceContent").style.zIndex = "2";
    document.getElementById("experienceContent").style.zIndex = "3";
    document.getElementById("formationContent").style.zIndex = "1";
}

function formationPremier() {
    document.getElementById("competenceContent").style.zIndex = "1";
    document.getElementById("experienceContent").style.zIndex = "2";
    document.getElementById("formationContent").style.zIndex = "3";
}