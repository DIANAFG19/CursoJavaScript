'use strict'

// OPERADORES.
var numero1 = 7;
var numero2 = 12;
var suma = numero1 + numero2;
var resta = numero2 - numero1;
var multiplicacion = numero1 * numero2;
var division = numero2 / numero1;
var modulo = numero2 % numero1;

alert("El resultado de la suma es " + suma + "\nEl resultado de la resta es " + resta 
	+ "\nEl resultado de la multiplicación es " + multiplicacion + "\nEl resultado de la división es " + division
	+ "\nEl resultado del módulo es " + modulo);



//TIPOS DE DATOS.
var numero_entero = 44; 
var cadena_texto = "Hola, qué tal";
var numero_decimal = 23.323;
var booleano = true; //false

console.log(numero_entero, cadena_texto, numero_decimal, booleano);



// CONVERSIÓN DE TIPO DE DATOS.
var numero_falso = "33";
console.log(numero_falso + 7);
console.log(Number(numero_falso) + 7);
console.log(parseInt(numero_falso) + 7);
console.log(parseFloat(numero_falso) + 7);

console.log(numero_entero + 4);
console.log(String(numero_entero) + 4);


// PARA SABER EL TIPO DE DATO DE UNA VARIABLE -> TYPEOF
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof booleano);
console.log(typeof numero_decimal);

