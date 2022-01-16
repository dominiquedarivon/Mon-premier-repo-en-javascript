


 var temperature1= prompt('Saisissez une température dont vous voulez l\'equivalent en farenheit');
 
  var conversion1 = (temperature1 * 9 / 5)+32;
 document.getElementById('li1').innerHTML = '1 degré Celsius représente' + ((1* 9/ 5) +32) + 'fahreneit' ;

 document.getElementById("li2").innerHTML = 'vous avez choisi '+ temperature1 + '°C, ça représente'+ conversion1 + '°F';

 


 var temperature2= prompt('Saisissez une température dont vous voulez l\'equivalent en Celsius');
 
  var conversion2 = (temperature2 -32) * 5/9;
 document.getElementById('li3').innerHTML = '1 degré fahreneit représente' + ((1-32)*5/9) + 'degré Celsius' ;

 
 document.getElementById('li4').innerHTML = 'vous avez choisi ' + temperature2 + '°F, ça représente' + conversion2 + '°C' ;

 



 


