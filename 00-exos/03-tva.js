

var prixHt =  prompt ('Quel est le prix hors taxe ?');

let prixTTC = prixHt * 1.20;
document.getElementById('p1').innerHTML = 'le prix de votre objet hors taxe est de' + prixHt + '€. Avec la TVA de 20%, le prix sera ' + prixTTC+ '€';

