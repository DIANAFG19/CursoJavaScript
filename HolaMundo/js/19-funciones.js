'use strict'

// FUNCIONES

// Definición de la función.
function calculadoraPrueba () {
	// Conjunto de instrucciones a ejecutar.
	console.log("Hola, soy la calculadora.");
	//return "Hola, soy la calculadora.";
}
// Invocar a la función.
// calculadoraPrueba();

//console.log(calculadora());

function consola(numero1, numero2) {
	console.log("Suma: " + (numero1 + numero2));
	console.log("Resta: " + (numero1 - numero2));
	console.log("Multiplicación: " + (numero1 * numero2));
	console.log("División: " + (numero1 / numero2));
	console.log("**************************************");
}

function pantalla(numero1, numero2) {
	document.write("Suma: " + (numero1 + numero2) + "<br/>");
	document.write("Resta: " + (numero1 - numero2) + "<br/>");
	document.write("Multiplicación: " + (numero1 * numero2) + "<br/>");
	document.write("División: " + (numero1 / numero2) + "<br/>");
	document.write("**************************************");
}

function calculadora(numero1, numero2, mostrar = false) {
	if (!mostrar) {
		consola(numero1, numero2);
	} else {
		pantalla(numero1, numero2);
	}
	return true;
}

calculadora(12, 6);
calculadora(20, 5, true);

/*function calculadora (numero1, numero2, mostrar = false) {
	if (!mostrar) {
		console.log("Suma: " + (numero1 + numero2));
		console.log("Resta: " + (numero1 - numero2));
		console.log("Multiplicación: " + (numero1 * numero2));
		console.log("División: " + (numero1 / numero2));
		console.log(mostrar);
		console.log("**************************************");
	} else {
		document.write("Suma: " + (numero1 + numero2) + "<br/>");
		document.write("Resta: " + (numero1 - numero2) + "<br/>");
		document.write("Multiplicación: " + (numero1 * numero2) + "<br/>");
		document.write("División: " + (numero1 / numero2) + "<br/>");
		document.write(mostrar + "<br/>");
		document.write("**************************************");
	}
	

	//return "Soy la calculadora.";
}*/


/*for (var i = 1; i <= 10; i++) {
	calculadora(i, 7);
}*/

