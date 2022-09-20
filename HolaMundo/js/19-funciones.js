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

function calculadora (numero1, numero2, mostrar = false) {
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
}

calculadora(12, 6);
calculadora(20, 5, true);

/*for (var i = 1; i <= 10; i++) {
	calculadora(i, 7);
}*/

