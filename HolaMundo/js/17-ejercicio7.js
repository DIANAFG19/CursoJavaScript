'use strict'

/*
Generar las tablas de multiplicar del número introducido en pantalla.
*/

var numero = parseInt(prompt("Ingresa un número: ", 1));

for (var i = 1; i <= 10; i++){
	document.write("<h1>" + numero + " x " + i + " = " + (numero * i) + "</h1>")
}
