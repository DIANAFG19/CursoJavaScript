'use strict'

// PRUEBA CON VAR
var numero = 40;
console.log(numero); //valor 40

if (true) {
	var numero = 50;
	console.log(numero); //valor 50
}

console.log(numero); //valor 50


// PRUEBA CON LET

var texto = "Curso de JS - Diana Flores.";
console.log(texto); //valor "Curso de JS - Diana Flores."

if (true) {
	let texto = "Esta es una prueba de LET.";
	console.log(texto); //valor "Esta es una prueba de LET."
}

console.log(texto); //valor "Curso de JS - Diana Flores."