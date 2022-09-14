'use strict'

/*
Utilizando un bucle, mostrarla suma y la media de los números introducidos
hasta introducir un número negativo y ahí mostrar el resultado.
*/

var suma = 0;
var contador = 0;

do {
	var numero = parseInt(prompt("Introduce números, hatas que ingreses uno negativo:", 0));
	if (isNaN(numero)) {
		numero = 0;
	} else if (numero >= 0) {
		suma += numero; // es igual a ---> suma = suma + numero;
		contador ++;
	}
	console.log(suma, contador);
} while (numero >= 0)

alert("La duma de todos los números es " + suma);
alert("La media de todos los números es " + (suma / contador));

