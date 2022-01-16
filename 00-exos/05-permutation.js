var nombre1 = 5;
var nombre2 = 3;

document.querySelector('#p1').innerHTML = 'Au départ, ma variable nombre1 contient la valeur ' + nombre1;

document.querySelector('#p2').innerHTML = 'Au départ, ma variable nombre2 contient la valeur ' + nombre2;

var tmp; //j'initialise une variable temporaire

tmp = nombre1;
// tmp = 5

nombre1 = nombre2 // nombre1 est maintenant égal à 3(nombre2)

nombre2 = tmp;

console.log('nombre1 est égal à ', nombre1);
console.log('nombre2 est égal à ', nombre2);

document.querySelector('#p3').innerHTML = 'A la fin, ma variable nombre1 contient la valeur ' + nombre1;

document.querySelector('#p4').innerHTML = 'A la fin, ma variable nombre2 contient la valeur ' + nombre2;

