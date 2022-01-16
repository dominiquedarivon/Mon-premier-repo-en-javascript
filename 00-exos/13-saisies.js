
// saisissez un chiffre entre 50 et 100 

var i = 0 /* ici c 'est la valeur initiale qui va nous permettre de rentrer dans la boucle*/

while (i < 50 || i > 100){ /*  tous kes nombres qui ne sont PAS compris entre 50 et 100*/

     var i = Number (prompt('Saisissez un chiffre entre 50 et 100'))

}

document.getElementById('p1').innerHTML= " Le nombre récupéré est le "+i;

