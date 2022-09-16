'use strict'

/*
Mostrar si un número es par o impar.
1. Solicitar número.
2. Validar si es un número válido, si no lo es, pedirlo de nuevo.
*/

var numero = parseInt(prompt("Introduce un número: ", 0));

while (isNaN(numero)){
	numero = parseInt(prompt("Introduce un número: ", 0));
}

if (numero % 2 == 0){
	alert("Es un número par.");
} else {
	alert("Es un número impar.");
}


