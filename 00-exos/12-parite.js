
 for (let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {/* si le reste de la division est égal à 0 alors mon chiffre/nombre est pair */
        document.getElementById('p1').innerHTML += i + " est pair. "
    }else {
        document.getElementById('p1').innerHTML += i + " est impair. "
    }
} 
 
// Faire le même exercice mais en demandant un nombre entier à l'utilisateur et en affichant les 10 au dessus  avec une for (p2) puis avec une while (p3)


let nbrUser = parseInt (prompt('Saisir un nombre entier'))

let nbMax = (nbrUser + 10);

for(let i = nbrUser; i <= nbMax; i++){

    if(i % 2 === 0) {
        document.getElementById('p2').innerHTML += i + " est pair. ";
    }else {
        document.getElementById('p2').innerHTML += i + " est impair. ";
    }
} 

// pui avec une while (p3)
let nbUser2 = parseInt (prompt('Saisir un nombre entier'));

let nbMax2 = (nbUser2 + 10);

while(nbUser2 <= nbMax2){

    if( nbUser2% 2 === 0) {
        document.getElementById('p3').innerHTML += nbUser2+ " est pair. <br>";
    }else {
        document.getElementById('p3').innerHTML += nbUser2+ " est impair.<br>";
    }
    nbUser2++;
} 