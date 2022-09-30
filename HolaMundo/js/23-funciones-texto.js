'use strict'

// TRANSFORMACIÓN DE TEXTOS.
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript,";
var texto2 = "es muy buen curso";

// Convertir a String.
var dato = numero.toString();	
console.log(typeof dato);

// Mayusculas
dato = texto1.toUpperCase(); 
console.log(dato);

// Minusculas
dato = texto1.toLowerCase();
console.log(dato);

// Calcular la longitud
var nombre = "EOPKWEO";
var longitud = nombre.length;
console.log(longitud);

// Concatenar - unir textos.
var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);

textoTotal = texto1.concat(" hola " + texto2);
console.log(textoTotal);


