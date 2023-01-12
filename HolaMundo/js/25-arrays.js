'use strict'

var nombres = ["Diana Laura", "Luis Fernando", "José de Jesús", "Víctor Hugo", "Juan Carlos", 52, true];
var lenguajes = new Array("PHP", "JavaScript", "Java", "C#", "Go");

console.log(nombres);
console.log(lenguajes);
console.log(nombres[2]);

console.log(nombres.length); //Muestra la cantidad de datos en el array.

var elemento = parseInt(prompt("¿Qué elemento del array quieres?", 0));
if(elemento >= nombres.length) {
	alert("Introduce un número válido menor a " + (nombres.length - 1));
} else {
	alert("El usuario seleccionado es " + nombres[elemento]);
}

document.write("<h1>Lenguajes de Programación del 2023</h1>");
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++) {
	document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");