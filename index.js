let button = document.querySelector("#button");
let buttonArret = document.querySelector("#button-arret");
let pointsP1 = document.querySelector("#pointsP1");
let pointsP2 = document.querySelector("#pointsP2");
let pointsGlobalP1 = document.querySelector("#pointsGlobalP1");
let pointsGlobalP2 = document.querySelector("#pointsGlobalP2");
let votre = document.querySelector("#votre-dé");
let nouvellePartie = document.querySelector("#buttonNouvellePartie");
let immagine = document.querySelector("#immagine");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let globalScoreColor1 = document.querySelector("#globalScoreColor1");
let globalScoreColor2 = document.querySelector("#globalScoreColor2");
let currentScoreColor1 = document.querySelector("#currentScoreColor1");
let currentScoreColor2 = document.querySelector("#currentScoreColor2");

function genererNombreEntier() {
  return Math.floor(Math.random() * 6 + 1);
}

function desBlock(nombreAleatoire) {
  if (nombreAleatoire == 1) {
    nombreAleatoire = immagine.innerHTML =
      '<img style="height:200px; width:200px " src="/images/dé 1.png">';
  } else if (nombreAleatoire == 2) {
    nombreAleatoire = immagine.innerHTML =
      '<img style="height:200px; width:200px " src="/images/dé 2.png">';
  } else if (nombreAleatoire == 3) {
    nombreAleatoire = immagine.innerHTML =
      '<img style="height:200px; width:200px " src="/images/dé 3.png">';
  } else if (nombreAleatoire == 4) {
    nombreAleatoire = immagine.innerHTML =
      '<img style="height:200px; width:200px " src="/images/dé 4.png">';
  } else if (nombreAleatoire == 5) {
    nombreAleatoire = immagine.innerHTML =
      '<img style="height:200px; width:200px " src="/images/dé 5.png">';
  } else if (nombreAleatoire == 6) {
    nombreAleatoire = immagine.innerHTML =
      '<img style="height:200px; width:200px " src="/images/dé 6.png">';
  }
}

let nombreAleatoire;
let resultatsP1 = true;
let resultatsP1deux = 0;
let resultatGlobalP1 = 0;
let resultatsP2 = 0;
let resultatGlobalP2 = 0;

buttonArret.addEventListener("click", () => {
  if (resultatsP1) {
    player2.className = "player1-2";
    currentScoreColor2.style.color = "red";
    globalScoreColor2.style.color = "black";
    player1.className = "playerOff";
    globalScoreColor1.style.color = "rgb(133, 127, 127)";
    currentScoreColor1.style.color = "rgb(247, 130, 130)";
    pointsGlobalP1.style.display = "block";
    resultatGlobalP1 += resultatsP1deux;
    pointsGlobalP1.textContent = resultatGlobalP1;
    resultatsP1deux = 0;
    pointsP1.textContent = "0";
    if (resultatGlobalP1 >= 100) {
      pointsGlobalP1.textContent = "felicitation vous avez gagné";
      win();
    } else {
      resultatsP1 = false;
    }
  } else {
    player1.className = "player1-2";
    currentScoreColor1.style.color = "red";
    globalScoreColor1.style.color = "black";
    player2.className = "playerOff";
    globalScoreColor2.style.color = "rgb(133, 127, 127)";
    currentScoreColor2.style.color = "rgb(247, 130, 130)";
    pointsGlobalP2.style.display = "block";
    resultatGlobalP2 += resultatsP2;
    pointsGlobalP2.textContent = resultatGlobalP2;
    resultatsP2 = 0;
    pointsP2.textContent = "0";
    if (resultatGlobalP2 >= 100) {
      pointsGlobalP2.textContent = "felicitation vous avez gagné";
      win();
    } else {
      resultatsP1 = true;
    }
  }
});

button.addEventListener("click", () => {
  if (resultatsP1) {
    nombreAleatoire = genererNombreEntier();
    desBlock(nombreAleatoire);
    if (nombreAleatoire == 1) {
      pointsGlobalP1.textContent = resultatGlobalP1;
      pointsP1.textContent = "0";
      resultatsP1deux = 0;
      resultatsP1 = false;
    } else {
      player1.className = "player1-2";
      currentScoreColor1.style.color = "red";
      globalScoreColor1.style.color = "black";
      player2.className = "playerOff";
      globalScoreColor2.style.color = "rgb(133, 127, 127)";
      currentScoreColor2.style.color = "rgb(247, 130, 130)";
      resultatsP1deux = resultatsP1deux + nombreAleatoire;
      // pointsP1.style.display = "block"
      pointsP1.textContent = resultatsP1deux;
    }
  } else {
    nombreAleatoire = genererNombreEntier();
    desBlock(nombreAleatoire);
    if (nombreAleatoire == 1) {
      pointsGlobalP2.textContent = resultatGlobalP2;
      pointsP2.textContent = "0";
      resultatsP2 = 0;
      resultatsP1 = true;
    } else {
      player2.className = "player1-2";
      currentScoreColor2.style.color = "red";
      globalScoreColor2.style.color = "black";
      player1.className = "playerOff";
      globalScoreColor1.style.color = "rgb(133, 127, 127)";
      currentScoreColor1.style.color = "rgb(247, 130, 130)";
      resultatsP2 = resultatsP2 + nombreAleatoire;
      // pointsP2.style.display = "block"
      pointsP2.textContent = resultatsP2;
    }
  }
});

nouvellePartie.addEventListener("click", () => {
  win();
});

function win() {
  resultatGlobalP1 = 0;
  resultatGlobalP2 = 0;
  resultatsP1deux = 0;
  resultatsP2 = 0;
  pointsP2.textContent = "0";
  pointsP1.textContent = "0";
  pointsGlobalP1.textContent = "0";
  pointsGlobalP2.textContent = "0";
  resultatsP1 = true;
}
