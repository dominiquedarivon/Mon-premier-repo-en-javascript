// Le js pour l a page 02-02-type.html
/*
1.STRING
*/
let presentation = "je m'appelle Michaël";
let age = 28;



console.log(typeof presentation, typeof age);
//* la fonction typeof va nous indiquer le type de données contenues dans notre variable
document.querySelector('#p1').innerHTML = 'Type de donnée pour la variable présentation :' + typeof presentation;

document.querySelector('#p2').innerHTML = presentation;

/* 2.NUMBER */

document.querySelector('#p3').innerHTML = 'Type de donnée pour la variable âge: ' + typeof age;

/*3. BOOLEAN*/

let touf = 8 > 4;

document.getElementById('p4').innerHTML =  'Type de donnée pour la variable touf  : '+ typeof touf;


// Mettre = = (2fois =) pour vérifier si un calcul est bon 
let calcul1 = 12 + 25 == 46;
let calcul2 = 3250 * 65 == 211250;
let calcul3 = 58 + 32 == 4;
console.log(calcul1, calcul2, calcul3);

