'use strict'

var pelicula = function(nombre){
	return "La película es: " + nombre;
}

function sumame(numero1, numero2, sumaYMuestra, sumaPorDos) {
	var sumar = numero1 + numero2;
	sumaYMuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
}

//console.log(sumame(4, 5));

sumame(
	5, 
	7, 
	function(dato){
		console.log("La suma es ", dato);
	},
	function(dato){
		console.log("La suma por dos es ", (dato * 2));
	}
);

// FUNCIONES FLECHA
sumame(
	12,
	70, 
	(dato) => {
		console.log("La suma es ", dato);
	},
	(dato) => {
		console.log("La suma por dos es ", (dato * 2));
	}
);
