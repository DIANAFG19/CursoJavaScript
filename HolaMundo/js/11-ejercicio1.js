'use strict'

/*
Programa que pida dos números y que nos diga cuál es el mayor, el menor o si son iguales.
PLUS: Si lo que se ingresa no son números o son menores o iguales a cero, vuelva a pedir el número.
*/

var numero1 = parseInt(prompt('Introduce el primer número: ', 0));
var numero2 = parseInt(prompt('Introduce el segundo número: ', 0));

console.log(numero1, numero2);

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
	numero1 = parseInt(prompt('Introduce el primer número: ', 0));
	numero2 = parseInt(prompt('Introduce el segundo número: ', 0));
}


if (numero1 == numero2) {
	alert("Los números son iguales.");
} else if (numero1 > numero2) {
	alert("El número mayor es " + numero1);
	alert("El número menor es " + numero2);
} else if (numero2 > numero1) {
	alert("El número mayor es " + numero2);
	alert("El número menor es " + numero1);
} else {
	alert("Introduce números válidos.");
}
