'use strict'

var texto = "Hola Mundo, soy una variable global.";
var numero = 12;


function holaMundo(texto) {
	var hola_mundo = "Hola Mundo dentro";
	console.log(texto);
	console.log(numero); 
	console.log(typeof numero);
	console.log(numero.toString()); //Convertir a string.
	console.log(typeof numero.toString()); //Tipo de dato.
}

holaMundo(texto);

// console.log(hola_mundo); Manda error, ya que es local dentro de la función.
