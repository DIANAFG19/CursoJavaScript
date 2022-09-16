'use strict'

/*
Mostrar todos los números divisores de un número que se introduce en prompt.
*/

var numero = parseInt(prompt("Ingresa un número: ", 1));

for (var i = 1 ; i <= numero; i++){
	if(numero % i == 0) {
		console.log("Divisor: " + i);	
	}
}
