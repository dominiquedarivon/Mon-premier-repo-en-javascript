

// méthode if ... else if ... else

let jour = prompt('quel jour sommes nous aujourd\'hui?');

console.log(jour);

 if( jour== 'lundi'){
     document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes'+ jour +', demain nous serons mardi';

 } else if (jour== 'mardi'){
    document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes'+ jour + ', demain nous serons mercredi';

 }else if (jour== 'mercredi'){
    document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes'+ jour +', demain nous serons jeudi';

} else if (jour== 'jeudi'){
document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes'+ jour +', demain nous serons vendredi';

}else if (jour== 'vendredi'){ 
document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes'+ jour +', demain nous serons samedi';


}else if (jour== 'samedi'){ 
document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes'+ jour +', demain nous serons dimanche';


} else {

    document.querySelector('#p1').innerHTML = 'ceci n\'est pas un jour de la semaine';
}


let jour2= prompt('quel jour sommes nous aujourd\'hui?');

switch (jour2) { // on switche sur notre variable 
    case 'lundi':
        document.querySelector('#p2').innerHTML = 'Demain nous serons mardi';
         break; /* le mot clé break est obligatoire pour une switch, ça permet de sortir si le cas est vrai*/

    case'mardi':
        document.querySelector('#p2').innerHTML = ' Demain nous serons mercredi';
         break;


    case'mercredi':
        document.querySelector('#p2').innerHTML = 'Demain nous serons jeudi';
         break;


    case 'jeudi':
        document.querySelector('#p2').innerHTML = 'Demain nous serons vendredi'; 
        break;

        
    case 'vendredi':
        document.querySelector('#p2').innerHTML = 'Demain nous serons samedi'; 
        break;

         
    case 'samedi':
        document.querySelector('#p2').innerHTML = 'Demain nous serons dimanche'; break;


         
    case 'Dimanche':
        document.querySelector('#p2').innerHTML = 'Demain nous serons lundi'; break;

    default:

        document.querySelector('#p2').innerHTML = 'Ceci n\'est pas un jour de la semaine'; 
        break;


}

 





