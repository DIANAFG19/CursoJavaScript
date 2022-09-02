'use strict'

// CONDICIONAL IF
var edad1 = 35;
var edad2 = 12;

if(edad1 > edad2){
	console.log("Edad1 es mayor que Edad2.")
} else {
	console.log("Edad2 es mayor que Edad1.")
}

var edad = 35;
var nombre = "Jesús";

if (edad >= 18) {
	console.log(nombre + " tiene " + edad + " años, es mayor de edad.");
	if (edad <= 33) {
		console.log("Todavía eres Millenial.");
	} else if (edad >= 70) {
		console.log("Eres anciano.");
	} else {
		console.log("Ya no eres Millenial.");
	}
} else {
	console.log(nombre + " tiene " + edad + " años, es menor de edad.")
}


