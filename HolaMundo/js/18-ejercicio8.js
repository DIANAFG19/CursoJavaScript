'use strict'

/*
CALCULADORA
- Pida dos números por pantalla.
- Si metemos uno mal, vuelva a pedir el número.
- Mostrar en el cuerpo de la página, en una alerta y en consola, el resultado de:
	sumar, restar, multiplicar y dividir esos dos números.
*/

var numero1 = parseInt(prompt("Ingrese el primer número: ", 1));
var numero2 = parseInt(prompt("Ingrese el segundo número: ", 1));

while (isNaN(numero1) || numero1 < 0) {
	numero1 = parseInt(prompt("Ingrese el primer número: ", 1));
}

while (isNaN(numero2) || numero2 < 0) {
	numero2 = parseInt(prompt("Ingrese el segundo número: ", 1));
}

var resultado = "La suma de " + numero1 + " + " + numero2 + " es igual a: " + (numero1 + numero2) + "<br/>" + 
				"La resta de " + numero1 + " - " + numero2 + " es igual a: " + (numero1 - numero2) + "<br/>" + 
				"La multiplicacion de " + numero1 + " * " + numero2 + " es igual a: " + (numero1 * numero2) + "<br/>" + 
				"La division de " + numero1 + " / " + numero2 + " es igual a: " + (numero1 / numero2);

document.write(resultado);
resultado = "La suma de " + numero1 + " + " + numero2 + " es igual a: " + (numero1 + numero2) + "\n" + 
				"La resta de " + numero1 + " - " + numero2 + " es igual a: " + (numero1 - numero2) + "\n" + 
				"La multiplicacion de " + numero1 + " * " + numero2 + " es igual a: " + (numero1 * numero2) + "\n" + 
				"La division de " + numero1 + " / " + numero2 + " es igual a: " + (numero1 / numero2);
alert(resultado);
console.log(resultado);

