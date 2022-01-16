let age = Number (prompt ('Quel est votre âge?'));

let phrase = 'Bonjour j\'ai' + age + ' ans.';
console.log(phrase);
// ici on a concatene nos deux variables => la variable phrase et la variable âge

document.getElementById('p1').innerHTML = phrase;


