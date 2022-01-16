
var nb1 = Number(prompt('Saisissez un nombre'));

for (let a = 1; a <= 10; a++) {
    document.getElementById('p1').innerHTML += nb1 + ' X' + a + ' = ' + nb1*a +'<br>';

}


var nb2 = Number(prompt('Saisissez un nombre'));

for (let a = 1; a <= 10; a++) {
    document.getElementById('p2').innerHTML += nb2 + 'X' + a + ' = ' + nb2 * a+ '<br>';

}



//exo 2//

document.getElementById('p3').innerHTML = nb1 + 'X' + nb2 + '=' + nb1 * nb2;






// info mariam//
/* let user1 = Number(prompt('saissisez un chiffre'));

for ( let i = 1; i<=10; i++) {

let resultat = user1 *i;
document.getElementById('p1').innerHTML  += /*user1 + ' X ' + i + 'égal ' + resultat + '<br>'; 

} */

/*
` $ {
    user1 X ${i} = $ {user1 * i}<br> `;}
 */