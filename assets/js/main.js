document.addEventListener('DOMContentLoaded', function() {
    formationPremier();
  });

function competencePremier() {
    document.getElementById("formationContent").style.display = "none";
    document.getElementById("experienceContent").style.display = "none";
    document.getElementById("competenceContent").style.display = "block";
}

function experiencePremier() {
    document.getElementById("formationContent").style.display = "none";
    document.getElementById("experienceContent").style.display = "block";
    document.getElementById("competenceContent").style.display = "none";
}

function formationPremier() {
    document.getElementById("formationContent").style.display = "block";
    document.getElementById("experienceContent").style.display = "none";
    document.getElementById("competenceContent").style.display = "none";
}

/*document.getElementById("competenceContent").style.zIndex = "1";
    document.getElementById("experienceContent").style.zIndex = "2";
    document.getElementById("formationContent").style.zIndex = "3";*/