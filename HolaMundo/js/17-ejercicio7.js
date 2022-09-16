'use strict'

/*
Generar las tablas de multiplicar del número introducido en pantalla.
*/

// DE UN SOLO NÚMERO.
var numero = parseInt(prompt("Ingresa un número: ", 1));

document.write("<h1>Tabla del " + numero + "</h1>")
for (var i = 1; i <= 10; i++){
	document.write(numero + " x " + i + " = " + (numero * i) + "<br>")
}

// TODAS LAS TABLAS.
for (var j = 1; j <= 10; j++){
	document.write("<h1>Tabla del " + j + "</h1>")
	for (var i = 1; i <= 10; i++){
		document.write(j + " x " + i + " = " + (j * i) + "<br>")
	}
}