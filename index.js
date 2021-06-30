
let button = document.querySelector("#button");
let buttonArret = document.querySelector("#button-arret")
let pointsP1 = document.querySelector("#pointsP1");
let pointsP2 = document.querySelector("#pointsP2");
let pointsGlobalP1 = document.querySelector('#pointsGlobalP1');
let pointsGlobalP2 = document.querySelector('#pointsGlobalP2');
let votre = document.querySelector('#votre-dé');
let nouvellePartie = document.querySelector('#buttonNouvellePartie');
let immagine = document.querySelector("#immagine");

function genererNombreEntier() {
        return Math.floor(Math.random() * 6 + 1) 
};

  function desBlock(nombreAleatoire) {
        if (nombreAleatoire == 1) {
            nombreAleatoire = immagine.innerHTML = "<img style=\"height:200px; width:200px \" src=\"/images/dé 1.png\">";
         }else if (nombreAleatoire == 2) {
             nombreAleatoire = immagine.innerHTML = "<img style=\"height:200px; width:200px \" src=\"/images/dé 2.png\">";
         } else if (nombreAleatoire == 3) {
             nombreAleatoire = immagine.innerHTML = "<img style=\"height:200px; width:200px \" src=\"/images/dé 3.png\">";
         } else if (nombreAleatoire == 4) {
             nombreAleatoire = immagine.innerHTML = "<img style=\"height:200px; width:200px \" src=\"/images/dé 4.png\">";
         } else if (nombreAleatoire == 5) {
             nombreAleatoire = immagine.innerHTML = "<img style=\"height:200px; width:200px \" src=\"/images/dé 5.png\">";
         } else if (nombreAleatoire == 6) {
             nombreAleatoire = immagine.innerHTML = "<img style=\"height:200px; width:200px \" src=\"/images/dé 6.png\">";
         } 
}

let nombreAleatoire;
let resultatsP1 = true;
let resultatsP1deux = 0;
let resultatGlobalP1 = 0;
let resultatsP2 = 0 ;
let resultatGlobalP2 = 0;


buttonArret.addEventListener("click", () => {
    if (resultatsP1) {
        pointsGlobalP1.style.display = "block";
        resultatGlobalP1 += resultatsP1deux
        pointsGlobalP1.textContent =  resultatGlobalP1;
        resultatsP1deux = 0;
        if (resultatGlobalP1 >= 100) {
            pointsGlobalP1.textContent = "felicitation vous avez gagné"
        } else{
            resultatsP1 = false;
        }
    } else {
        pointsGlobalP2.style.display = "block";
        resultatGlobalP2 += resultatsP2
        pointsGlobalP2.textContent =  resultatGlobalP2;
        resultatsP2 = 0;
        if (resultatGlobalP2 >= 100){
            pointsGlobalP2.textContent = "felicitation vous avez gagné"
        } else {
        resultatsP1 = true;
    }
}})

button.addEventListener("click" , () => {
    if (resultatsP1) {
            nombreAleatoire = genererNombreEntier();
                    desBlock(nombreAleatoire);
                if (nombreAleatoire == 1) {
                    pointsGlobalP1.textContent = "Game Over"
                    pointsP1.textContent = "0";
                    resultatsP1deux = 0;
                    resultatGlobalP1 = 0;
                    resultatsP1 = false;
                } else {
                        resultatsP1deux = resultatsP1deux + nombreAleatoire
                        pointsP1.style.display = "block"
                        pointsP1.textContent =  resultatsP1deux ;   
        }} else {
            nombreAleatoire = genererNombreEntier();
                    desBlock(nombreAleatoire);
                if (nombreAleatoire == 1) {
                    pointsGlobalP2.textContent = "Game Over";
                    pointsP2.textContent = "0";
                    pointsP2 = 0;
                    resultatGlobalP2 = 0;
                    resultatsP1 = true;
                } else {
                        resultatsP2 = resultatsP2 + nombreAleatoire;
                        pointsP2.style.display = "block"
                        pointsP2.textContent =  resultatsP2 ; 
                    
                };;        
            }});
    
nouvellePartie.addEventListener("click" , () => {
    resultatGlobalP1 = 0;
    resultatGlobalP2 = 0;
    resultatsP1deux = 0;
    resultatsP2 = 0;
    pointsP2.textContent = "0";
    pointsP1.textContent = "0";
    pointsGlobalP1.textContent = "0";
    pointsGlobalP2.textContent = "0";
    resultatsP1 = true;
});

