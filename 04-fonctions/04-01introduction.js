// fonction random : aléatoire

document.getElementById('p1').innerHTML = Math.floor((Math.random()*100) +1); // le plus 1 cela veut dire qu on part pas de zéro .

document.getElementById('p2').innerHTML = Math.floor(Math.random()*11); // Math floor renvoie a un nombre entier 

//*ICI on écrit *11 car nous voulons les nombres de 0 à 10 ce qui équivaut à 11 nombres!

document.getElementById('p3').innerHTML = Math.random(); /* par défaut Math.random ()renvoie un décimal entre 0 et 1 
/ le * 100 = pour dire qu'on veut un chiffre entre 0 et 100

// le Math.floor signifie qu'on veut un chiffre entier

// +1 signifie que l'on ne veut pas le chiffre 0*/

//Fonction personnalisée

function randomX100 (){
    return Math.random() *100;

}

document.querySelector('#p4').innerHTML =  "Le nombre généré est" + randomX100();

// Exemple de fontion personnalisée avec une multiplication
// Entre les parenthèses d'une fnction, on peut déclarer des arguments

function multiplier (nbr1,nbr2){

    return('Multiplions : ' + nbr1 + ' x ' + nbr2 + ' = ' + (nbr1*nbr2));

}

document.querySelector ('#p5').innerHTML = multiplier (20,5);

//FAIRE LA MEME CHOSE AVEC ADDITION :78 et 2/
// SOUSTRACTION :45et 41/ DIVISION 20 ET 5/ MODULO 20 ET 5 / 


//FAIRE LA MEME CHOSE AVEC ADDITION :78 et 2/

function addition (nbr1,nbr2){

    return('Additionnons : ' + nbr1 + ' +' + nbr2 + ' = ' + (nbr1+nbr2));

}

document.querySelector ('#p6').innerHTML = addition (78,2);

// SOUSTRACTION :45et 41/


function soustraire (nbr1,nbr2){

    return('Soustrayons : ' + nbr1 + ' - ' + nbr2 + ' = ' + (nbr1-nbr2));

}

document.querySelector ('#p7').innerHTML = soustraire (45,41);

//DIVISION 20 ET 5/

function diviser (nbr1,nbr2){

    return('Divisons : ' + nbr1 + ' / ' + nbr2 + ' = ' + (nbr1/nbr2));

}

document.querySelector ('#p8').innerHTML = diviser (20,5);

//MODULO 5 ET 20 / 

function modulo (nbr1,nbr2){

    return('Faisons le modulo : ' + nbr1 + ' % ' + nbr2 + ' = ' + (nbr1 % nbr2));

}

document.querySelector ('#p9').innerHTML = modulo(20,5);