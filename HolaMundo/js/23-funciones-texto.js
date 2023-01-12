'use strict'

///////////// TRANSFORMACIÓN DE TEXTOS.
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript, curso de Diana Flores, ";
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


///////////// MÉTODOS DE BÚSQUEDA
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

busqueda = texto1.lastIndexOf("curso");
console.log(busqueda);

busqueda = texto1.search("curso");
console.log(busqueda);

busqueda = texto1.search("juan");
console.log(busqueda);

busqueda = texto1.match("curso");
console.log(busqueda);

busqueda = texto1.match(/curso/gi);
console.log(busqueda);

busqueda = texto1.substr(14, 5);
console.log(busqueda);

busqueda = texto1.charAt(44);
console.log(busqueda);

busqueda = texto1.startsWith("Bien");
console.log(busqueda);

busqueda = texto1.endsWith("Flores, ");
console.log(busqueda);

busqueda = texto1.includes("JavaScript");
console.log(busqueda);
