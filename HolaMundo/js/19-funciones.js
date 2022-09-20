'use strict'

// FUNCIONES

// Definición de la función.
function calculadoraPrueba () {
	// Conjunto de instrucciones a ejecutar.
	console.log("Hola, soy la calculadora.");
	//return "Hola, soy la calculadora.";
}
// Invocar a la función.
calculadoraPrueba();
calculadoraPrueba();
//console.log(calculadora());

function calculadora (numero1, numero2) {
	console.log("Suma: " + (numero1 + numero2));
	console.log("Resta: " + (numero1 - numero2));
	console.log("Multiplicación: " + (numero1 * numero2));
	console.log("División: " + (numero1 / numero2));
	console.log("**************************************");

	//return "Soy la calculadora.";
}

calculadora(12, 6);

for (var i = 1; i <= 10; i++) {
	calculadora(i, 7);
}